
const boton=document.querySelector("#abrir");
const overlay=document.querySelector(".over-lay");
const popup=document.querySelector(".pop-up");
const botoncerrar=document.querySelector(".btn-cerrar");
const agregar=document.querySelector(".btn-agregar");
var input=document.querySelector("#tarea");

const body=document.querySelector("body");

const boton3=document.querySelector("#abrir-3");
const overlay3=document.querySelector(".over-lay-3");
const popup3=document.querySelector(".pop-up-3");
const botoncerrar3=document.querySelector(".btn-cerrar-3");
const eliminar=document.querySelector('.btn-eliminar')
var input3=document.querySelector("#tarea-removida");

const lista=document.querySelector(".lista");
const mensaje=document.querySelector(".mensaje")
var elementos=lista.children

var a={};
var b=0;
var h='';

var tareasListas= lista.childNodes


if(localStorage.length==0||localStorage.length==1){
    var i=lista.childElementCount-1
    localStorage[0]=i}
    
    else if(localStorage.length!=0){
        var i=lista.childElementCount
        localStorage["0"]=i
    }

    
    boton.addEventListener("click",e=>{
    overlay.classList.add('active');
    popup.classList.add('active');
})

botoncerrar.addEventListener("click",e=>{
    overlay.classList.remove('active');
    popup.classList.remove('active');
    
})
    
botoncerrar3.addEventListener("click",e=>{
    overlay3.classList.remove('active');
        popup3.classList.remove('active');
        
    })
    
    boton3.addEventListener("click",e=>{
        overlay3.classList.add('active');
        popup3.classList.add('active');
    })
    
    
    agregar.addEventListener("click",e=>{
        
        var li = document.createElement("LI");
        var t = document.createTextNode(input.value);
        li.appendChild(t);
        
        if (input.value === '') {
            alert("No puede introducir una tarea vacia");
        } 
        
        else if(elementos.namedItem(input.value)!=null){
            
            if (elementos.namedItem(input.value).id==input.value) {
                alert("Ya existe esa tarea");
            }}
            
            else {
                lista.appendChild(li);
                b++
                lista.lastChild.id=input.value
                lista.lastChild.classList.add("tarea-incompleta")
                tareasListas= lista.childNodes
                     
                overlay.classList.remove('active');
                     popup.classList.remove('active');
                     
                     if(i<localStorage.length+1){
                         i++
                         localStorage.setItem(0,i)
                         localStorage.setItem(i,input.value)
                         input.value=""
                         location.reload();
                        }

                        lista.removeChild(mensaje);
                        
                    }})
                    
                    for(u=1;u<localStorage.length+1;u++){
                        if(localStorage[u]==input.value){
                 alert("Ya existe esa tarea")}}
                 
                 
                 
                 
                 eliminar.addEventListener('click',e=>{
                if (input3.value === '') {
                    alert("No puede introducir una tarea vacia");
                } 
            else if(elementos.namedItem(input3.value)!=null) {
                lista.removeChild(elementos.namedItem(input3.value));
                for(u=1;u<=localStorage.length;u++){
                    
                    if(localStorage[u]==input3.value){
                        localStorage.removeItem(u)
                    }}

                    if(lista.childElementCount==0){
                        var li = document.createElement("P");
                        var t = document.createTextNode("No hay tareas");
                        li.appendChild(t);
                        lista.appendChild(li);
                    }
                    overlay3.classList.remove('active');
                    popup3.classList.remove('active');
                    input3.value = "";
                }
    
    else if(elementos.namedItem(input3.value)==null){
        alert("No se ha encontrado una tarea con ese nombre, ingresela nuevamente tal y como la escribio la primera vez")
    }

    
})

if(localStorage.length>1){
    lista.removeChild(mensaje)
    ;
    
    for(u=1;u<=localStorage.length;u++){
        var li = document.createElement("LI");
        
        if(localStorage[u]!=undefined){
            var t = document.createTextNode(localStorage[u]);
    li.appendChild(t)
    lista.appendChild(li)
    lista.lastChild.id=localStorage[u]}}
    i=lista.childElementCount
    localStorage["0"]=i
}




tareasListas=lista.childNodes
tareasListas.forEach(e=>{
        if(e.toString()!="[object Text]"){
            e.addEventListener("click",y=>{
                e.classList.toggle("done")})}})




function Myfunction(){
    if(localStorage.length==1){}

    else{
    tareasListas.forEach(e=>{
        if(e.toString()!="[object Text]"){
            if(e.classList.contains("done")==true){
                lista.removeChild(e)
            

            for(u=1;u<=localStorage.length;u++){
                if(localStorage[u]==e.innerText){
                    localStorage.removeItem(u)}}
        
}}})}}


setInterval(Myfunction,5000)
