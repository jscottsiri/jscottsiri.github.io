export function ScrollEffects() {
    const AnimatedElements = document.querySelectorAll('.animate-on-scroll');
    console.log(AnimatedElements);

    const ObserverOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };
    // @ts-ignore
    const ObserverCallback = (entries:IntersectionObserverEntry[], observer:IntersectionObserver) => {
        console.log("all entries", entries);
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("all entry item", entry);
            }
            if (entry.isIntersecting && !entry.target.classList.contains('.scroll-effect')) {
                entry.target.classList.add('scroll-effect');
                console.log(entry.target.id);
            }
        })
    }

    const observer = new IntersectionObserver(ObserverCallback, ObserverOptions)
    AnimatedElements.forEach(element=> observer.observe(element));


}