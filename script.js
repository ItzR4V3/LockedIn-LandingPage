
window.addEventListener("load", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

document.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis();
  
    lenis.on("scroll", ScrollTrigger.update);
  
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  
    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);

    const stickySection = document.querySelector(".sticky");
    const stickyHeader = document.querySelector(".sticky-header");
    const cards = document.querySelectorAll(".card");
    const stickyHeight = window.innerHeight * 5;

    
      ScrollTrigger.create({
        trigger: stickySection,
        start: "top top",
        end: `+=${stickyHeight}px`,
        pin: true,
        pinSpacing: true,

        onUpdate: (self) => {
            const progress = self.progress;
            const maxTranslate = stickyHeader.offsetWidth - window.innerWidth;
            const translateX = -progress * maxTranslate;
        
            gsap.set(stickyHeader, { x: translateX });


            cards.forEach((card, index) => {
                const delay = index * 0.1125;
                const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));
            
                if (cardProgress > 0) {
                    const cardStartX = 25;
                    const cardEndX = -650;
                    const yPos = transforms[index][0];
                    const rotations = transforms[index][1];
            
                    
                    
                } else {
                    gsap.set(card, { opacity: 0 });
                }
            });
        }


    });


  });


  
