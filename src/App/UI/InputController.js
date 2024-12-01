import { inputStore } from "../Utils/Store";

export default class InputController {
    constructor() {
        this.inputStore = inputStore;
        this.keyPressed = {};
        this.joystickContainer = document.getElementById('joystick-container');
        this.joystick = document.getElementById('joystick');
        this.joystickInitialized = false;

        // Initialize or destroy joystick based on screen size
        this.checkAndInitializeJoystick();

        // Listen for resize events to handle dynamic changes in device type
        window.addEventListener('resize', this.checkAndInitializeJoystick.bind(this));

        // Initialize listeners for keyboard events
        this.startListening();
    }

    checkAndInitializeJoystick() {
        if ('ontouchstart' in window && window.innerWidth < 980 && !this.joystickInitialized) {
            this.initializeJoystick();
            this.joystickInitialized = true; // Set a flag to avoid reinitialization
        } else if (window.innerWidth >= 980 && this.joystickInitialized) {
            // Clean up if joystick should be disabled on larger screens
            this.destroyJoystick();
            this.joystickInitialized = false;
        }
    }

    initializeJoystick() {
        if (!this.joystickContainer || !this.joystick) {
            console.error('Joystick elements not found!');
            return; // Exit if elements are not found
        }

        this.joystickBasePosition = { x: 50, y: 50 }; // Center of the joystick container
        this.joystickActive = false;

        // Touch event listeners for joystick
        this.joystickContainer.addEventListener('touchstart', this.handleJoystickStart.bind(this), false);
        this.joystickContainer.addEventListener('touchmove', this.handleJoystickMove.bind(this), false);
        this.joystickContainer.addEventListener('touchend', this.handleJoystickEnd.bind(this), false);
    }

    destroyJoystick() {
        // Remove event listeners if joystick is disabled
        this.joystickContainer.removeEventListener('touchstart', this.handleJoystickStart.bind(this), false);
        this.joystickContainer.removeEventListener('touchmove', this.handleJoystickMove.bind(this), false);
        this.joystickContainer.removeEventListener('touchend', this.handleJoystickEnd.bind(this), false);
        this.joystick.style.transform = 'translate(-50%, -50%)'; // Reset joystick position
        this.inputStore.setState({ forward: false, backward: false, left: false, right: false });
    }

    startListening() {
        // Keyboard event listeners
        window.addEventListener("keydown", (event) => this.onKeyDown(event));
        window.addEventListener("keyup", (event) => this.onKeyUp(event));
    }

    onKeyDown(event) {
        if (!this.keyPressed[event.code]) {
            this.updateMovementState(event.code, true);
            this.keyPressed[event.code] = true;
        }
    }

    onKeyUp(event) {
        this.updateMovementState(event.code, false);
        this.keyPressed[event.code] = false;
    }

    updateMovementState(keyCode, isActive) {
        switch (keyCode) {
            case "KeyW":
            case "ArrowUp":
                this.inputStore.setState({ forward: isActive });
                break;
            case "KeyA":
            case "ArrowLeft":
                this.inputStore.setState({ left: isActive });
                break;
            case "KeyS":
            case "ArrowDown":
                this.inputStore.setState({ backward: isActive });
                break;
            case "KeyD":
            case "ArrowRight":
                this.inputStore.setState({ right: isActive });
                break;
        }
    }

    handleJoystickStart(event) {
        this.joystickActive = true;
        this.updateJoystickPosition(event);
    }

    handleJoystickMove(event) {
        if (this.joystickActive) {
            this.updateJoystickPosition(event);
        }
    }

    handleJoystickEnd(event) {
        this.joystickActive = false;
        this.joystick.style.transform = 'translate(-50%, -50%)'; // Reset joystick position
        this.inputStore.setState({ forward: false, backward: false, left: false, right: false });
    }

    updateJoystickPosition(event) {
        const touch = event.touches[0];
        const rect = this.joystickContainer.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        // Calculate joystick position relative to the container
        const dx = x - this.joystickBasePosition.x;
        const dy = y - this.joystickBasePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 50; // Max distance from center in pixels
        const clampedDistance = Math.min(maxDistance, distance);
        const angle = Math.atan2(dy, dx);

        // Set joystick visual position
        const joystickX = clampedDistance * Math.cos(angle);
        const joystickY = clampedDistance * Math.sin(angle);
        this.joystick.style.transform = `translate(${joystickX}px, ${joystickY}px)`;

        // Update movement state based on joystick position
        this.inputStore.setState({
            forward: dy < -10, // Up movement
            backward: dy > 10, // Down movement
            left: dx < -10, // Left movement
            right: dx > 10 // Right movement
        });
    }
}
