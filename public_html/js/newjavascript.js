/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

       



function changeImage(){
    var image = document.getElementById('imagenori');
    if(image.src.match("on")){
        image.src="image/imagen2.jpg";
    }else{
        image.src="image/imagen1.jpg";
    }
} 

function changeImage1(){
    var image = document.getElementById('imagenori');
    if(image.src.match("on")){
        image.src="image/imagen1.jpg";
    }else{
        image.src="image/imagen2.jpg";
    }
} 





