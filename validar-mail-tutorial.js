

function validarMail(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return regex.test(email)
}

const email = "sergiecode@gmail.com"
const mailValidado = validarMail(email)
console.log(mailValidado)


