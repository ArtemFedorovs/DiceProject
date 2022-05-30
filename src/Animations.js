export function rerollAnimation (target) {
    let jumpTarget= target.parentNode.parentNode;
    let rotateTarget=target.parentNode.childNodes[2] ;
    let duration = 500;
    function createStep (start){
       
        return function (time){
            var progress = time - start;
            if (progress < duration/2) {     //jumping
                jumpTarget.style.top = (-progress/6) + 'px';
              }
              else{jumpTarget.style.top =Math.min((-(duration-progress)/6),0) + 'px';}

              rotateTarget.style.transform = 'rotate('+Math.min(360*progress/duration, 360)+'deg)'; //rotating
                          
            if (progress < duration) {
                window.requestAnimationFrame(step);
     
        }
    }
}
    let step=createStep(performance.now());
    window.requestAnimationFrame(step); 

}

export function setVisible(target){
    
      target.childNodes.item(0).classList.add('visible');
      target.childNodes.item(1).classList.add('visible');
      target.childNodes.item(3).classList.add('visible');
 
  }
  export function setUnvisible(target){
    
      target.childNodes.item(0).classList.remove('visible');
      target.childNodes.item(1).classList.remove('visible');
      target.childNodes.item(3).classList.remove('visible');

  }


 
 