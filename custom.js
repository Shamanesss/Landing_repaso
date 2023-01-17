const btnFooter = document.querySelector('.footer_about_btn');
const ejScript = document.querySelector('.ejScript');
const recuadro = document.getElementById("bucleJava");

btnFooter.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
   
    if( ejScript.classList.contains('activo') ) {
        ejScript.classList.remove('activo');
       btnFooter.classList.remove('activo');
        btnFooter.textContent = 'Find out more';
      
    } else {
        ejScript.classList.add('activo');
        btnFooter.classList.add('activo');
        btnFooter.textContent = 'X Cerrar';
    
    } 
     Script(); 
}


function Script(a, b){

    // let resultado='';
    // for(let i=0;i<100;i++){
    //     resultado += i + "<br>";
    //     console.log(i);
        
    // } recuadro.innerHTML = resultado ;
    // }

     let resultado='';
    var a = parseInt(prompt("Introduce un el primer numero"));
    var b = parseInt(prompt("Introduce un el segundo numero"));
    
   

    let i;
     if (a<=b){
        for(let i=a;i<=b;i++){
            resultado += i+ " ";
            recuadro.innerHTML= resultado;
            
        }
     }else if (a>=b){
         for(let i=a;i>=b;i--){
            resultado += i +" "; 
             recuadro.innerHTML =resultado;
             
         }

    }
}