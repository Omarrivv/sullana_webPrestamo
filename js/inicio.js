const menu = document.querySelector('.hamburguesa'); /*seleccionamos nuestra menu amburguesa : query selector es la clase : loe agregamos un evento */
const navegacion = document.querySelector('.navegacion'); /*seleccionamos nuestra navegacion : va aser con el querySelector que es por la clase : navegacion */
const imagenes = document.querySelectorAll('img'); /*nos devuelve una coleccion de dtos tenemos q iterar para poder mostrarlos */
document.addEventListener('DOMContentLoaded',()=>{ /*DOMContentLoaded :  se dispara cuando el DOM del documento ha sido completamente cargado y analizado*/
    eventos();
    platillos();
}); /*es un escuchador de eventos */
const eventos = () =>{
    menu.addEventListener('click',abrirMenu); /*agregamos el evento del menu : va aser de tipo click , cuando haga click se va a ejecutar la funcion de abrir menu*/
}
const abrirMenu = () =>{
     navegacion.classList.remove('ocultar'); /*a la navegacion . classlist .remove (le vamos a quitar la clase ocultar : con esto si yo le doy click al menu me daran los enlaces )*/
     botonCerrar(); /*aqa llamamos a la funcion cerrar osea cuando esta funcion se ejecute : va a llamar a la funcion de botonCerrar */
}
const botonCerrar = () =>{
    const btnCerrar = document.createElement('p'); /*creamos un btnCerrra y va aser igual a document creat elementy va aser un parrafo */
    const overlay  = document.createElement('div');/* basicamente el overleyes algo q cubre como la pantalla va aser igual a document createlement va ase  un div y el overlay va tener una clase  */
    overlay.classList.add('pantalla-completa'); /*le ponemos la clase pantalla-completa esa clase la crearemos en css  */
    const body = document.querySelector('body'); /*seleccionamos nuestro body  seleccionamos nuetsra clase de bodu¿y */
    if(document.querySelectorAll('.pantalla-completa').length > 0) return; /*una condicion : de q si document . document querySelectorAll : osea q si seleccionamos todos los overlay q el usuario haya generado : */
    /*seleccionamos por clase q seria pantalla completa.length osea q si la longitud de pantalla completa es mayor a 0 quiero q temines la ejecucion del programa y ya no se ejecute lo de abajo  */
    body.appendChild(overlay);
    btnCerrar.textContent = 'x'; /*lo que ase este metodo es agregarle texto al elemento q puse a mi parrafo y le ponemos una x Minuscula */
    btnCerrar.classList.add('btn-cerrar'); /*agregamos nuestro clase de nuestyro estilo de btn-cerrar*/
    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }una maera de hacer
    navegacion.appendChild(btnCerrar);   /*para ingresarle un nuevo hijo y le pasamos el boton cerrar y asi ya se mostraia el x pero al lado de abajp  */
    cerrarMenu(btnCerrar,overlay); /*la mandamos a llamra a la funcio de cerrra menu */
    /*ha cerrar menu le vamos a pasar el overLay como parametro y nuetsra funcion va a recibir un overlay : cuando yo haga click quiero q el overlay se quite */
}
const observer = new IntersectionObserver((entries, observer)=>{ /*va a resivir 2 parametros : el entries va aser la informacion de lo q se tiene q observar y el observer es el observador osea lo q va ir viendo cuando hayga interseccion */
        entries.forEach(entry=>{ /*la informacion la vmaos a ir recorriendo con un for-each recibe un entry la informacion */
            if(entry.isIntersecting){ /*q si hay una interseccion entonces */
                const imagen = entry.target; /*a esa informacion guardada .target */
                imagen.src = imagen.dataset.src; /*cuando hayga una interseccion lo q hayga en el data lo pasara a source y ya se iran mostrando las imagenes mediante q asemos stroll*/
                observer.unobserve(imagen); /*osea q lo deje de visualizar al elemento q tenemos q observar en este caso la imagen ya q la vamos ir observando en el for each */
            }
        }); 
});
/*mientras vayamos asiendo scroll las imagenes se van a ir mostrando */

imagenes.forEach(imagen=>{ /*iterar el parametro q tenemos q es imagen va ir iteranta por tantas imagenes q tengamos */
    observer.observe(imagen); /**/
});
const cerrarMenu = (boton, overlay) =>{ /*va a resivir de parametro un boton  */
    boton.addEventListener('click',()=>{ /*le agregamos el evento en funcion flecha */
        navegacion.classList.add('ocultar'); /*a la naavegacion le vamos poner un claslist agregar la clase ocultar y se va cerrar nuestro menu*/
        overlay.remove(); /*con esto saco la clase y se limpia vuelve a la normalidad sin transparencia ni nadad */
        boton.remove();
    });

    overlay.onclick = function(){  
        overlay.remove(); /*con esta linea de codigo hara q el overlay se limpie */
        navegacion.classList.add('ocultar');  /*aghregamos la clase ocultar y cuando clikamos en el overlay y se limpia los enlaces el menu de navegacion */
        boton.remove();
    }
}

const mostrarNombreUsuario = () => {
    const nombreUsuario = localStorage.getItem('usuario');

    if (nombreUsuario) {
        const mensaje = document.createElement('p');
        mensaje.textContent = `$ Bienvenido a nuestra web ${nombreUsuario}. Espero que sea de tu agrado, sino déjanos un mensaje.`;
        mensaje.classList.add('mensajeBienvenida'); // Agregar una clase al párrafo creado
        document.querySelector('.mostrarNombreUsuario').appendChild(mensaje);
    } else {
        const nombre = prompt('Ingrese su nombre');

        if (nombre) {
            localStorage.setItem('usuario', nombre);

            const mensaje = document.createElement('p');
            mensaje.textContent = `$ Bienvenido a nuestra web ${nombre}. Espero que sea de tu agrado, sino déjanos un mensaje.`;
            mensaje.classList.add('mensajeBienvenida'); // Agregar una clase al párrafo creado
            document.querySelector('.mostrarNombreUsuario').appendChild(mensaje);
        }
    }
};

window.addEventListener('load', mostrarNombreUsuario);



