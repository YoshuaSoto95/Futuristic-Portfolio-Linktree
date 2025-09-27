import React, { useEffect, useMemo, useState } from "react";
// FIX: 'initParticlesEngine', 'Container', and 'ISourceOptions' are not exported from 'react-tsparticles'. The package has been updated to '@tsparticles/react' and types are now imported from '@tsparticles/engine'.
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
// FIX: The 'tsparticles-slim' package can cause type conflicts with '@tsparticles/react'. Using the correctly scoped '@tsparticles/slim' package resolves the type mismatch for the engine instance.
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground: React.FC = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        // console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#14f195", // --secondary color
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                // FIX: The error "Property 'loaded' does not exist" indicates that the installed version of the library expects the 'particlesLoaded' prop instead.
                particlesLoaded={particlesLoaded}
                options={options}
                style={{ position: 'fixed', zIndex: -1, top: 0, left: 0 }}
            />
        );
    }

    return <></>;
};

export default ParticlesBackground;