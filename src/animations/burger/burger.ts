import { gsap } from 'gsap';

export const burgerAnimation = (
  isOpen: boolean,
  menuElement: HTMLDivElement
) => {
  if (isOpen) {
    gsap.fromTo(
      menuElement,
      {
        opacity: 0,
        y: -50,
        scale: 0.9,
        rotation: -10,
        backgroundColor: '#fff',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        backgroundColor: '#fff',
        duration: 0.5,
        ease: 'power3.out',
      }
    );
  } else {
    gsap.to(menuElement, {
      opacity: 0,
      y: -50,
      scale: 0.9,
      rotation: 10,
      backgroundColor: 'rgba(0,0,0,0)',
      duration: 0.3,
      ease: 'power3.in',
    });
  }
};
