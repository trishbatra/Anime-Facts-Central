let heading  =  document.getElementById("a")
let body  =  document.getElementById("myBody")
heading.setAttribute("class", "head")
let t = document.getElementById("t")
let ul  =  document.getElementById("b")
let a = JSON.parse(localStorage.getItem("facts"))
heading.innerHTML = `Facts for ${a.animeName} are below`
for (let i = 0; i < a.facts.length; i++) {
    let theLi  = document.createElement("li")
    theLi.innerHTML = a.facts[i]
    t.innerHTML = `Facts for ${a.animeName} `
    ul.append(theLi)
}