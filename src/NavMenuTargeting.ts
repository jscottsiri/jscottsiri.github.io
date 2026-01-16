export function NavMenuTargeting(onEnterClass:string, onLeaveClass:string, navTargets:{viewElementID:string,navElementID:string}[]) {

    let ViewElements = []
    let NavElements = []

    for (const NavMenuTarget of navTargets) {
        const findView = document.querySelector(`#${NavMenuTarget.viewElementID}`)
        const findNav = document.querySelector(`#${NavMenuTarget.navElementID}`)
        if (findView && findNav) {
            ViewElements.push(findView);
            NavElements.push(findNav);
        }
    }

    const ObserverOptions = {
        root: null,
        rootMargin: "-50% 0px",
        threshold: 0,
    }

    // @ts-ignore
    const ObserverCallback = (entries:IntersectionObserverEntry[], observer:IntersectionObserver) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const index = ViewElements.findIndex((view)=>view.id==entry.target.id);
                if (index != -1) {
                    NavElements[index].classList.add(onEnterClass);
                    NavElements[index].classList.remove(onLeaveClass);
                }

            }
            else {
                const index = ViewElements.findIndex((view)=>view.id==entry.target.id);
                if (index != -1) {
                    if (NavElements[index].classList.contains(onEnterClass)) {
                        NavElements[index].classList.remove(onEnterClass);
                        NavElements[index].classList.add(onLeaveClass);
                    }
                }
            }
        }
    }

    const observer = new IntersectionObserver(ObserverCallback, ObserverOptions);
    ViewElements.forEach(view => observer.observe(view));

}