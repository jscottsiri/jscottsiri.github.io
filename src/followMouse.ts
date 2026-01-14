export function followMouse(targetClass:string){

    let mouseX = 0;
    let mouseY = 0;

    let follow_element = document.getElementById("follow-mouse");


    let targetItems = document.getElementsByClassName(targetClass)
    if (targetItems && targetItems.length > 0 && follow_element) {
        document.addEventListener("mousemove", function(event: MouseEvent){
            mouseX = event.pageX;
            mouseY = event.pageY;
            console.log(mouseX, mouseY);
            follow_element.style.left = mouseX + 'px';
            follow_element.style.top = mouseY + 'px';
        })
        for (const item of targetItems){
            item.addEventListener("mouseenter", function(){})
            item.addEventListener("mouseleave", function(){})
        }
    }
}