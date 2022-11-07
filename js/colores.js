const a = document.querySelector("#a")
const s = document.querySelector("#s")
const d = document.querySelector("#d")
const b = document.querySelector("#b")

a.style.backgroundColor="blue"
a.style.width="200px"
a.style.height="200px"

s.style.backgroundColor="brown"
s.style.width="200px"
s.style.height="200px"

d.style.backgroundColor="purple"
d.style.width="200px"
d.style.height="200px"

b.style.backgroundColor="pink"
b.style.width="200px"
b.style.height="200px"

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        a.style.backgroundColor="red"
        a.style.width="200px"
        a.style.height="200px"
    } else if (event.key === 's') {
        s.style.backgroundColor="green"
        s.style.width="200px"
        s.style.height="200px"
    }else if (event.key === 'd') {
        d.style.backgroundColor="yellow"
        d.style.width="200px"
        d.style.height="200px"
        }
    })