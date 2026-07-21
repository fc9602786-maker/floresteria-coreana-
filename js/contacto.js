/*==================================================
        MENU HAMBURGUESA
==================================================*/


const botonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");


if(botonMenu){

    botonMenu.addEventListener("click",()=>{

        menu.classList.toggle("activo");

    });

}



/*==================================================
        BOTÓN SUBIR ARRIBA
==================================================*/


const btnArriba = document.querySelector("#btn-arriba");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){

        btnArriba.style.display="block";

    }else{

        btnArriba.style.display="none";

    }


});



if(btnArriba){


    btnArriba.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}



/*==================================================
        EMAILJS FORMULARIO
==================================================*/


const formulario = document.querySelector("#formulario-contacto");


if(formulario){


formulario.addEventListener("submit",function(e){


    e.preventDefault();



    emailjs.sendForm(

        "TU_SERVICE_ID",

        "TU_TEMPLATE_ID",

        this


    )

    .then(()=>{


        alert(
        "🌸 Gracias por contactar a Sweet Haru. Tu mensaje fue enviado correctamente."
        );


        formulario.reset();



    })

    .catch((error)=>{


        console.log(error);


        alert(
        "❌ Ocurrió un error al enviar el mensaje."
        );


    });



});


}