export function hoverTilt(id:string,max_x_tilt:number,max_y_tilt:number){
    function getMagnitudes(mouseX:number, mouseY:number, tiltRect:DOMRect){
        deltaX = eleX - mouseX;
        deltaY = eleY - mouseY;
        magnitudeX = deltaX/(tiltRect.width/2);
        magnitudeY = deltaY/(tiltRect.height/2);
        console.log(magnitudeX, magnitudeY);
        return {magnitudeX, magnitudeY};
    }
    let mouseX = 0;
    let mouseY = 0;
    let eleX = 0;
    let eleY = 0;
    let deltaX = 0;
    let deltaY = 0;
    let magnitudeX = 0;
    let magnitudeY = 0;
    const tilt_target = document.getElementById(id)
    if (tilt_target){
        const rect = tilt_target.getBoundingClientRect();
        eleX = rect.left + rect.width / 2;
        eleY = rect.top + rect.height / 2;
        tilt_target.addEventListener('mouseenter', function(){
            tilt_target.classList.add('mouse-hovered')
            console.log("Hovered")
        })
        tilt_target.addEventListener('mouseleave', function(){
            tilt_target.classList.remove('mouse-hovered')
            console.log("Not Hovered")
        })
        document.addEventListener("mousemove", function(event: MouseEvent){
            mouseX = event.clientX;
            mouseY = event.clientY;
            if (tilt_target.classList.contains('mouse-hovered')){
                getMagnitudes(mouseX, mouseY, tilt_target.getBoundingClientRect());
                console.log("Rotate Y", max_x_tilt*magnitudeX)
                tilt_target.style = `transform: rotate(45deg) rotateY(${max_x_tilt*magnitudeX}deg) rotateX(${max_y_tilt*magnitudeY}deg);`;
            }
            else {
                magnitudeX=0;
                magnitudeY=0;
            }

        })
    }
}