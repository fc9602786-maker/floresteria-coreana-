//=========================================
//      PÉTALOS DE SAKURA
//=========================================

const contenedorPetalos = document.querySelector(".petalos");

// Si la página no tiene el contenedor, no hace nada
if (contenedorPetalos) {

    function crearPetalo() {

        const petalo = document.createElement("span");

        petalo.innerHTML = "🌸";

        petalo.style.left = Math.random() * 100 + "vw";

        petalo.style.animationDuration =
            (6 + Math.random() * 6) + "s";

        petalo.style.fontSize =
            (15 + Math.random() * 18) + "px";

        petalo.style.opacity =
            (0.4 + Math.random() * 0.6);

        petalo.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        contenedorPetalos.appendChild(petalo);

        setTimeout(() => {

            petalo.remove();

        },12000);

    }

    setInterval(crearPetalo,350);

}