
import gsap from "gsap";

// This function will contain the GSAP timeline and accept the `setOverlayHidden` callback to handle hiding the overlay
export const homeAnimations = (setOverlayHidden, comp) => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      onComplete: () => setOverlayHidden(true), // Hide overlay after animation
    });

    // Step 1: Animate the black background for 1 second
    tl.from("#overlay", {
      backgroundColor: "black", // Ensure background is black
      duration: 0.3, // Duration of 0.5 seconds
    })

    // Step 2: Animate each letter up into the black background
    .from("#overlay-text", {
      yPercent: 100, // Start from below the viewport
      opacity: 0, // Start invisible
      duration: 0.5, // Duration of the animation for each letter
      stagger: 0.1, // Stagger the letter animations by 0.1s
      ease: "power3.out", // Ease for smooth motion
      delay: 1
    })

    // Step 3: Animate the letters out of the black space (upwards) and fade them out
    .to("#overlay-text", {
      yPercent: -100, // Move upwards, out of the viewport
      opacity: 0, // Fade out the letters
      duration: 0.5, // Duration of the exit animation
      stagger: 0.1, // Stagger the letters again for a smooth sequence
      ease: "power3.inOut", // Smooth easing in and out
      delay: 0.5, // Hold the letters in place for a moment before animating out
    })

    // Step 4: Animate the black background upwards to reveal the main content
    .to("#overlay", {
      yPercent: -100, // Move the black background up
      duration: 0.3, // Duration of the background reveal
      ease: "power1.inOut", // Smooth ease for the reveal
    })

    // Step 5: Animate the main content of the home page
    .from("#name", {
      opacity: 0,
      duration: 0.5,
    })
    .from("#hi-my-name-is", {
      opacity: 0,
      duration: 0.5
    })
    .from("#title-1", {
      opacity: 0,
      duration: 0.5
    })
    .from("#title-2", {
      opacity: 0,
      duration: 0.5
    })

    // Step 6: Button appears last from opacity 0
    .from("#view-projects-btn", {
      opacity: 0,
      x: -100,
      duration: 0.5,
      ease: "power2.out"
    });

  }, comp);
  
  return () => ctx.revert(); // Clean up the animation context on component unmount
};
