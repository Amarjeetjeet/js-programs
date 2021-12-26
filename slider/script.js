let flag = 0;

function controller(x){
    flag = flag + x;
    slideShow(flag);
}
slideShow(flag);
function slideShow(num){
    let slides = document.getElementsByClassName("slide");
    console.log(slides);
    if(num == slides.length){
        num  = 0;
        flag = 0 ;
    }
    if(num<0){
        flag = slides.length -1;
        num = flag;
        
    }
    for(let y of slides){
        y.style.display = "none";
    }
    slides[num].style.display = "block";
    console.log(slides[num]);
}