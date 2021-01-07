//const color1 = [0, 15, 15]
//const color2 = [21, 19, 20]

const color1 = [41, 96, 97]
const color2 = [97, 44, 41]

const selectors = document.querySelectorAll('body, .paneltext, nav:hover')

window.addEventListener('load', setBgColor)
window.addEventListener('scroll', setBgColor)

function setBgColor() {
    let offset = (window.scrollY || window.pageYOffset)
    let fact = offset / (document.body.clientHeight - window.innerHeight)
  
    console.log(fact);
    
    r = color1[0] + (color2[0] - color1[0]) * fact
    g = color1[1] + (color2[1] - color1[1]) * fact
    b = color1[2] + (color2[2] - color1[2]) * fact
    
    selectors.forEach(element => {
        element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    });
    //selectors[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`   
}