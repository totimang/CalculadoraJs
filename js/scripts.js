const display = document.querySelector(".display");
const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botones = document.querySelectorAll(".btn");



botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            displayValorAnterior.textContent = "0";
            displayValorActual.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (displayValorActual.textContent.length === 1 || displayValorActual.textContent === "Error!") {
                displayValorActual.textContent = "0";
            } else {
                displayValorActual.textContent = displayValorActual.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                displayValorAnterior.textContent = eval(displayValorActual.textContent);
            } catch {
                displayValorAnterior.textContent = "Error!";
            }
            return;
        }

        if (displayValorActual.textContent === "0" || displayValorActual.textContent === "Error!") {
            displayValorActual.textContent = botonApretado;
        } else {
            displayValorActual.textContent += botonApretado;
        }
    })
})