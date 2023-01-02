let form = document.querySelector("#myform")
let mese = document.getElementById("user_input")
form.addEventListener("submit", function(e)
{
    e.preventDefault()
    if(mese.value == "gennaio" || mese.value == "marzo" || mese.value == "maggio"|| mese.value == "luglio" || mese.value == "agosto" || mese.value == "ottobre" || mese.value == "dicembre")
    {
        console.log (`${mese.value} ha 31 giorni`)
    }
    else if(mese.value == "febbraio")
    {
        console.log (`${mese.value} ha 28 giorni`)
    }
    else if(mese.value == "aprile" || mese.value == "giugno" || mese.value == "settembre" || mese.value == "novembre")
    {
        console.log (`${mese.value} ha 30 giorni`)
    }

})