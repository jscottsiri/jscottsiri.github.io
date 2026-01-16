
export function EffectWhileInViewport(targetClass:string,outputClass:string,afterClass:string) {

    const relevantElements = document.querySelectorAll(`.${targetClass}`);
    console.log("relevant elements",relevantElements);

    const ObserverOptions = {
        root: null,
        rootMargin: "-50% 0px",
        threshold: 0,
    }
    // @ts-ignore
    const ObserverCallback = (entries:IntersectionObserverEntry[], observer:IntersectionObserver) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add(outputClass)
                entry.target.classList.remove(afterClass)
                console.log("In View", entry.target.id);
            }
            else{
                entry.target.classList.remove(outputClass);
                entry.target.classList.add(afterClass)

            }
        }
    }

    const observer = new IntersectionObserver(ObserverCallback, ObserverOptions);
    relevantElements.forEach(ele => observer.observe(ele));

    }