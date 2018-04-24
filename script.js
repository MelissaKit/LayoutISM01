var nextButton = document.querySelector('.next');
var prevButton = document.querySelector('.prev');
var slider = document.querySelector(".group-two .slider");
var elems = slider.children;

nextButton.addEventListener('click', slide);

prevButton.addEventListener('click', slide);

function slide() {
    var tmp=[];

    for(var i=0;i<3;i++)
    {
        tmp.push(slider.removeChild(elems[0]));
        if(i!==2)
            tmp.push(slider.removeChild(elems[1]));
    }
    tmp.push(tmp[2].cloneNode(true));
    slider.appendChild(tmp[5]);
    slider.appendChild(tmp[0]);
    slider.appendChild(tmp[2]);
    slider.appendChild(tmp[3]);
    slider.appendChild(tmp[4]);
}