
var i = 0; //Start point
var image = [];
var time = 5000;

//Images List
images[0]='IMG/productsjpt.jpg';
images[1]='IMG/product (1).jpg';
images[2]='IMG/product (2).jpg';
images[3]='IMG/product (3).jpg';

//way to change img

function changeImg(){
    document.productimg1.src = images[i];
    if (i < images.length - 1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImg()", time);
    }

    window.onload = changeImg;