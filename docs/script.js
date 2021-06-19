
const boton=document.querySelector("#abrir");
const overlay=document.querySelector(".over-lay");
const popup=document.querySelector(".pop-up");
const botoncerrar=document.querySelector(".btn-cerrar");
const agregar=document.querySelector(".btn-agregar");
var input=document.querySelector("#tarea");
const fragmento=document.createDocumentFragment();


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
var contadora=0

var array=[]
var array2=[]


if(localStorage.length==0){
    contadora=0}

else(contadora=localStorage["0"])

class List{
    constructor(){

    }

    mostrarPopUp(){
        overlay.classList.toggle('active');
        popup.classList.toggle('active');
    }

    mostrarPopUp3(){
        overlay3.classList.toggle('active');
        popup3.classList.toggle('active');
    }

    agregar(x){
        const elemento= document.createElement('LI');
        const texto=document.createTextNode(x);
        elemento.appendChild(texto);
        fragmento.appendChild(elemento);
        lista.firstElementChild.textContent="";
        lista.appendChild(fragmento);
        array.push(lista.lastChild)
        contadora++
        localStorage.setItem(contadora,input.value);
        overlay.classList.toggle('active');
        popup.classList.toggle('active');
        localStorage.setItem("0",contadora)
    }

        creados(){
            if(localStorage.length!=0){
            if(lista.children[0].innerText=="No hay Tareas"){
                lista.children[0].innerText=""
            }}

            for(var u=1;u<=contadora;u++){
                if(u!="length"&&u!="clear"&&u!="getItem"&&u!="key"&&u!="removeItem"&&u!="setItem"){4
                    if(localStorage[u]!=undefined){
                const elemento= document.createElement('LI');
                const texto=document.createTextNode(localStorage[u.toString()]);
                elemento.appendChild(texto);
                fragmento.appendChild(elemento);
                lista.appendChild(fragmento)
                }}}

        }
    
        mostrarCasilla(){
            for(var u=1;u<lista.childElementCount;u++){
                if(lista.children[u].classList.contains("done")==false){
                const elemento= document.createElement('DIV');
                fragmento.appendChild(elemento);
                lista.children[u].appendChild(fragmento)
                };
            boton3.innerText="Confirmar"}
        }

        seleccionar(x){
            if(x!=null){
                x.innerText="X" 
                x.addEventListener("dblclick",e=>{x.innerText=""})
                array=[]
                for(u=1;u<elementos.length;u++){
                    array.push(elementos[u])}
                }
        }

        borrar(){
            array2=array.filter(e=>e.firstElementChild.innerText=="X");
            for(u=0;u<=contadora;u++){
            array2.forEach(e=>{if(e==lista.children[u]){lista.removeChild(lista.children[u]);}})
            
            }
           
            for(u=0;u<=contadora;u++){
                array.forEach(e=>{
                if(e.textContent==localStorage[(u).toString()]+"X"){
                console.log(localStorage[u.toString()])
                            localStorage.removeItem(u.toString())}})}  
                        
            
        }
    
        completa(x){
            x.classList.add("done")
        }

        eliminarCompletas(){
            array2=array.filter(e=>e.classList.contains("done"));
            
           
            for(u=0;u<=contadora;u++){
                array2.forEach(e=>{
                if(e.textContent==localStorage[(u).toString()]){
                            localStorage.removeItem(u.toString())}})}
                

           
        }
    }
    
    

var f=1
const Lista= new List

boton.addEventListener('click',e=>Lista.mostrarPopUp());
agregar.addEventListener('click',e=>{Lista.agregar(input.value); input.value=""})

botoncerrar.addEventListener('click',e=>{overlay.classList.toggle('active');popup.classList.toggle('active')});


if(Number(contadora)!=1){boton3.addEventListener("click",e=>{
    array.forEach(i=>i.addEventListener('click',e=>i.classList.remove("done")))

    for(u=0;u<contadora;u++){
    if(boton3.innerText=="Eliminar"){
        Lista.mostrarCasilla();
        alert("Para seleccionar, haga Click en la casilla, para deseleccionar haga doble click en la misma casilla")}
    
    else if(boton3.innerText=="Confirmar"){
        boton3.addEventListener("click",e=>{Lista.borrar();window.location.reload()
        } )}
        
    

else{boton3.addEventListener("click",e=>alert("Agregue tareas antes"))};
    }})}



window.addEventListener("load",e=>{Lista.creados();

    for(u=1;u<elementos.length;u++){
        array.push(elementos[u])}

    array.forEach(i=>i.addEventListener('click',function completadas(e){
        Lista.completa(i);
        setInterval(Lista.eliminarCompletas(),10000);
    }))
    
    for(u=1;u<elementos.length;u++){
        array.push(elementos[u])};
    
        array.forEach(t=>t.addEventListener('click',r=>Lista.seleccionar(t.firstElementChild)))
})







