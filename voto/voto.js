let form = document.querySelector("#myform")
let voto = document.getElementById("user_input")
form.addEventListener("submit", function(e)
{
    e.preventDefault()
    if(voto.value < 6)
    {
         console.log(`insufficiente voto: ${voto.value}`)
    }
    else if(voto.value == 6 || voto.value <= 6.9)
    {
         console.log(`sufficiente voto: ${voto.value}`)
    }
    else if(voto.value == 7 || voto.value <= 7.9)
    {
         console.log(`discreto voto: ${voto.value}`)
    }
    else if(voto.value >= 8)
    {
         console.log(`ottimo voto: ${voto.value}`)
    }

})