import type { ISourceOptions } from 'tsparticles-engine';

export const particlesOptions: ISourceOptions = {
  style: {
    position: `absolute`,
    height: `900px`,
    top: `125px`,
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: `repulse`,
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: `#988BC7`,
    },
    links: {
      color: `#483C67`,
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: `none`,
      enable: true,
      outModes: {
        default: `bounce`,
      },
      random: true,
      speed: 4,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 30,
      },
      value: 2,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: `square`,
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
