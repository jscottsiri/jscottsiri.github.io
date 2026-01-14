export function menuToggle(menuID: string, toggleID: string, classNames: string[]) {
    let menuElement = document.getElementById(menuID);
    let toggleElement = document.getElementById(toggleID);

    let menuActive = false;

    function updateMenu(menuElement: HTMLElement) {
            menuActive = !menuActive;
            if (menuActive) {
                menuElement.classList.add("mobile-active");
            }
            else {
                menuElement.classList.remove("mobile-active");
            }
    }

    if (toggleElement && menuElement && menuElement != null) {
        toggleElement.addEventListener("click", ()=>updateMenu(menuElement))
        for (const className of classNames){
            let toggleClassElements = document.getElementsByClassName(className);
            for (const toggleClassElement of toggleClassElements) {
                toggleClassElement.addEventListener("click",()=>updateMenu(menuElement))
            }
        }
    }
}