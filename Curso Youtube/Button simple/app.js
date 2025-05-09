//Vanilla Javascript

//Recuperamos el boton
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {

    //Al hacer click en el boton, tenemos que ejecutar una funcion
    button.addEventListener('click', function () {
        const id = this.getAttribute('data-id')

        //Llamar un servicio para actualizar si me gusta
        //toggleLike(id)

        if (button.classList.contains('liked')) {
            button.classList.remove('liked')
            button.innerText = 'Like'
            console.log("Dislike X");

        }
        else {
            button.classList.add('liked')
            button.innerText = 'Dislike'
            console.log("Like <3");

        }
    })
})

