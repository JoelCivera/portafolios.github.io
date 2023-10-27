

let x = 0
let text = " desarrollador web"

function nameVariation(params) {
    let documento = document.getElementById("variacion")
     if (x < text.length) {
        documento.innerHTML += text.charAt(x++)
        setTimeout(nameVariation, 90)
     }

     documento.style.color='aqua'
     documento.style.borderRight='2px solid white'
     documento.style.paddingRight='5px'
     
}
setTimeout(nameVariation, 1000)


var str = document.getElementById('me')
str.style.color = 'aqua'