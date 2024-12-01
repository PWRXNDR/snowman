export default class ModalContentProvider {
    constructor() {
        this.modalContents = {
            aboutMe: {
                title: 'About Me',
                description: ` <div style="max-height: 50vh; overflow-y: auto; max-width: 100%;">
                                  <style>
                                /* For Webkit (Chrome, Safari, and Opera) */
                                ::-webkit-scrollbar {
                                  width: 1px;
                                }
                                ::-webkit-scrollbar-track {
                                  background: transparent;
                                }
                                ::-webkit-scrollbar-thumb {
                                  background: rgba(30, 100, 150, 0.2);
                                }
                                ::-webkit-scrollbar-thumb:hover {
                                  background: rgba(30, 100, 200, 0.2);
                                }
                                </style>
                                  <div style="text-align: start;">
                                    <img src="/img/profile_img.jpg" alt="profile img" style="float:left; margin-right: 15px; width: 17vh; height: auto; border-radius: 75px;">
                                    My name is Darin Malikova and I am a dedicated, creative, inspiring project manager, who continuously seeks new challenges and opportunites for growth and contribution.
                                    I would love to share my achievemtns with you. For that just keep on going to the next portal in this small game simulation :)
                                    (P.S. I actually don't have your list of achievemnts, but you can send them to me, and we'll make it done).
                                  </div>
                               </div>
      </div>`,
            },
            projects: {
                title: 'Projects',
                description: `<div style="max-height: 50vh; overflow-y: auto; max-width: 100%; margin: auto;">
                    <style>
                    /* For Webkit (Chrome, Safari, and Opera) */
                    ::-webkit-scrollbar {
                      width: 1px;
                    }
                    ::-webkit-scrollbar-track {
                      background: transparent;
                    }
                    ::-webkit-scrollbar-thumb {
                      background: rgba(30, 100, 150, 0.2);
                    }
                    ::-webkit-scrollbar-thumb:hover {
                      background: rgba(30, 100, 200, 0.2);
                    }
                    </style>
                    <h2 style="text-align: center;">My projects</h2>
                  </div>`,
            },
            certs: {
                title: 'Contributions, Awards, and Certifications',
                description: `
<div style="max-width: 100%; margin: auto; max-height: 50vh; overflow-y: auto;">
    <style>
        /* For Webkit (Chrome, Safari, and Opera) */
        ::-webkit-scrollbar {
            width: 1px;
        }
        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(30, 100, 150, 0.2);
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(30, 100, 200, 0.3);
        }

        .icon-scrolling-wrapper {
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            max-width: 100%;
            margin-bottom: 20px;
        }

        @keyframes slideIcons {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-100%);
            }
        }

        .icon-container {
            display: inline-flex;
            animation: slideIcons 60s linear infinite;
            padding-left: 15px;
            gap: 30px;
            flex-wrap: nowrap;
        }

        .certification-item {
            text-align: center;
        }

        .certification-logo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: block;
            margin: auto;
        }
    </style>
    <div class="icon-scrolling-wrapper">
        <div class="icon-container">
            <div class="certification-item">
                <img src="img/IBM.jpg" alt="IBM" class="certification-logo">
                <span>IBM</span>
            </div>
            <div class="certification-item">
                <img src="img/Google.jpg" alt="Google" class="certification-logo">
                <span>Google</span>
            </div>
            <div class="certification-item">
                <img src="img/UN.png" alt="United Nations" class="certification-logo">
                <span>United Nations</span>
            </div>
            <div class="certification-item">
                <img src="img/red_cross.png" alt="Red Cross" class="certification-logo">
                <span>Red Cross</span>
            </div>
            <div class="certification-item">
                <img src="img/erasmus.jpg" alt="Erasmus+" class="certification-logo">
                <span>Erasmus +</span>
            </div>
            <div class="certification-item">
                <img src="img/StipendiumHungaricum.jpg" alt="SH" class="certification-logo">
                <span>SH Scholarship</span>
            </div>
            <div class="certification-item">
                <img src="img/IBM.jpg" alt="IBM" class="certification-logo">
                <span>IBM</span>
            </div>
            <div class="certification-item">
                <img src="img/Google.jpg" alt="Google" class="certification-logo">
                <span>Google</span>
            </div>
            <div class="certification-item">
                <img src="img/UN.png" alt="United Nations" class="certification-logo">
                <span>United Nations</span>
            </div>
            <div class="certification-item">
                <img src="img/red_cross.png" alt="Red Cross" class="certification-logo">
                <span>Red Cross</span>
            </div>
            <div class="certification-item">
                <img src="img/erasmus.jpg" alt="Erasmus+" class="certification-logo">
                <span>Erasmus+</span>
            </div>
            <div class="certification-item">
                <img src="img/StipendiumHungaricum.jpg" alt="SH" class="certification-logo">
                <span>SH Scholarship</span>
            </div>
            <div class="certification-item">
                <img src="img/IBM.jpg" alt="IBM" class="certification-logo">
                <span>IBM</span>
            </div>
            <div class="certification-item">
                <img src="img/Google.jpg" alt="Google" class="certification-logo">
                <span>Google</span>
            </div>
            <div class="certification-item">
                <img src="img/UN.png" alt="United Nations" class="certification-logo">
                <span>United Nations</span>
            </div>
            <div class="certification-item">
                <img src="img/red_cross.png" alt="Red Cross" class="certification-logo">
                <span>Red Cross</span>
            </div>
            <div class="certification-item">
                <img src="img/erasmus.jpg" alt="Erasmus+" class="certification-logo">
                <span>Erasmus+</span>
            </div>
            <div class="certification-item">
                <img src="img/StipendiumHungaricum.jpg" alt="SH" class="certification-logo">
                <span>SH Scholarship</span>
            </div>
        </div>
    </div>
    <div>
    <h2 style="text-align: center; color: white; margin-top: 20px;">Featured Articles</h2>
</div>
</div>
`,
            },
            SM: {
                title: 'Find Me on Social Media',
                description: `
                <div style="text-align: center; max-width: 100%;">
                    <h3>Connect with me:</h3>
                    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
                        <a href="https://www.instagram.com/darindeneige/" target="_blank" style="text-decoration: none;">
                            <i class="bi bi-instagram" style="font-size: 2em; color: #C13584;"></i>
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" style="text-decoration: none;">
                            <i class="bi bi-tiktok" style="font-size: 2em; color: black;"></i>
                        </a>
                        <a href="https://www.facebook.com/darinmalikova" target="_blank" style="text-decoration: none;">
                            <i class="bi bi-facebook" style="font-size: 2em; color: #4267B2;"></i>
                        </a>
                    </div>
                </div>`
            },
            Contact: {
                title: 'Contact Me',
                description: `
                <div style="text-align: center; max-width: 100%; margin: auto;">
                    <h3>Contact Me</h3>
                    <form style="max-width: 400px; margin: 0 auto; text-align: start;">
                        <div style="margin-bottom: 15px;">
                            <label for="name" style="display: block; font-weight: bold;">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label for="email" style="display: block; font-weight: bold;">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label for="message" style="display: block; font-weight: bold;">Message:</label>
                            <textarea id="message" name="message" rows="5" placeholder="Enter your message" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc;"></textarea>
                        </div>
                        <button type="submit" style="display: block; width: 100%; padding: 10px; background-color: #007bff; color: white; border-radius: 5px; border: none; cursor: pointer;">Submit</button>
                    </form>
                </div>`,
            }
        }
    }

    getModalInfo(portalName) {
        return this.modalContents[portalName];
    }
}
