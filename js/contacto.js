/*==================================================
        MENÚ HAMBURGUESA
==================================================*/

const botonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", () => {

        menu.classList.toggle("activo");

    });

}

/*==================================================
        BOTÓN SUBIR ARRIBA
==================================================*/

const btnArriba = document.querySelector("#btn-arriba");

if (btnArriba) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            btnArriba.style.display = "block";

        } else {

            btnArriba.style.display = "none";

        }

    });

    btnArriba.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/*==================================================
        FORMULARIO EMAILJS
==================================================*/

const formulario = document.querySelector("#formularioPedido");

const modal = document.querySelector("#modalPedido");

const cerrarModal = document.querySelector("#cerrarModal");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(

            "service_8go258t",
            "template_321oyrq",
            this

        )

        .then(() => {

            formulario.reset();

            if (modal) {

                modal.classList.add("mostrar");

            }

        })

        .catch((error) => {

            console.error("Error EmailJS:", error);

            alert(
`❌ No fue posible enviar el pedido.

Revisa la consola (F12) para conocer el error.`
            );

        });

    });

}

/*==================================================
        CERRAR MODAL
==================================================*/

if (cerrarModal) {

    cerrarModal.addEventListener("click", () => {

        modal.classList.remove("mostrar");

    });

}

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("mostrar");

    }

});