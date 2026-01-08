export function ToggleLongTiles(){

    let CurrentlySelected: string | undefined = undefined;
    let ProjectView = false;

    function reset_selected() {
        const divs = document.querySelectorAll('.long-tile');
        divs.forEach((div) => {
            div.classList.remove('selected');
        })
    }

    function select_toggle(event: Event) {
        // Remove Selected From Prior Element if there
        // Add Selected To Current Element if there
        reset_selected();
        const clickedElement = event.currentTarget as HTMLDivElement;
        if (clickedElement) {
            clickedElement.classList.toggle('selected');
            CurrentlySelected = clickedElement.id;
            console.log("Currently Selected", CurrentlySelected);
            if (!ProjectView) {
                document.querySelectorAll(".project").forEach((el) => {
                    if (typeof CurrentlySelected == 'string' && el.id == `project-${CurrentlySelected}`) {
                        el.classList.remove('hidden');
                    }
                })    }
            document.querySelectorAll(".standard").forEach((el) => {
                    el.classList.add('hidden');
                })
                ProjectView = true;
            }
        }

    function resetCurrentlySelected() {
        CurrentlySelected = undefined;
        ProjectView = false;
        document.querySelectorAll(".standard").forEach((el) => {
            el.classList.remove('hidden');
        })
        document.querySelectorAll(".project").forEach((el) => {
            el.classList.add('hidden');
        })
        const divs = document.querySelectorAll('.long-tile');
        divs.forEach((div) => {
            div.classList.remove('selected');
        })
    }

    const divs = document.querySelectorAll('.long-tile');
    divs.forEach((div) => {
        div.addEventListener('click', select_toggle);
    })
    const reset = document.querySelectorAll('.reset');
    reset.forEach(reset => {
        reset.addEventListener('click', resetCurrentlySelected)
    })
    const home = document.querySelectorAll('#logo');
    home.forEach(logo => {
        logo.addEventListener('click', resetCurrentlySelected)
    })


}