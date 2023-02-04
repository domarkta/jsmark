let but = document.querySelector(".julia_button")
function showAge() {
    let age = prompt()
    if (age >= 14 && age <= 99) {
        alert("находится")
        // but.style.background = 'green'
    } else {
        alert('не находится')
      // but.style.background = 'purple'     
    }
    
}
but.addEventListener("click",showAge)

