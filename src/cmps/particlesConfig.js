const particlesConfig = {
    background: {
        color: {
            value: "#151515"
        },
    },
    fullScreen: {
        enable: true,
        zIndex: -1
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 80,
                duration: 1,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 180,
            enable: true,
            opacity: 0.5,
            width: 0.5,
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: "none",
            enable: true,
            radius: 2,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1.1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 100,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {
                min: 1,
                max: 2
            },
        },
    },
    detectRetina: true,
}

export default particlesConfig;