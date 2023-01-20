const input = document.querySelectorAll('.input');
const error = document.querySelectorAll(".error");
const success = document.querySelector('.success')
const btnForm = document.querySelector('#sendForm')

const colorBtnForm = btnForm.style.backgroundColor
const colorSuccess = success.style.color

input.forEach(function (element, index) {
    element.addEventListener('click', () => {
        element.addEventListener('input', () => {
            if (element.value == '') {
                error[index].innerHTML = '*Campo Obrigatório*'
                verifica()
            } else {
                error[index].innerHTML = ''
                verifica()
            }
        })
    })
})

verifica = () => {
    let newArray = new Array()

    for (i = 0; i < input.length; i++) {
        if (input[i].value != '') {
            newArray.push(input[i].value)
        }
    }

    if (newArray.length != input.length) {
        success.innerHTML = 'Todos os campos deverão estar preenchidos';
        success.style.color = '#E73550';
        btnForm.style.backgroundColor = "#afafaf";
        btnForm.setAttribute("disabled", "");
    } else {
        success.innerHTML = 'Sucesso';
        success.style.color = "#0F7B0F";
        btnForm.style.backgroundColor = "afafaf";
        btnForm.removeAttribute("disabled")
        btnForm.style.backgroundColor = colorBtnForm;
    };

}