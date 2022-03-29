/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function setlogin(){
    try{
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        if(user == "mac" && pass == "2022"){
            alert("bienvenido");
        }else{
            alert("usuario incorrecto");
        }
    }catch(error){
        console.log(error)
    }
}
