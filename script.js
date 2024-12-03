
//const body = document.body
//const div = document.createElement("div")
//const strong = document.createElement//("strong")
//strong.innerText = "Hello World 2"
//div.append(strong)
//body.append(div)

//div.innerHTML = "<strong>Hello world</strong>"
//body.append(div)

  //const div = document.querySelector("div")
 // console.log(div.textContent)
 // console.log(div.innerText)

 const body = document.body
 const div = document.querySelector("div")
 const spanHi = document.querySelector("#hi")
 const spanBye = document.querySelector("#bye")
 spanBye.remove()
 div.append(spanBye)

 console.log(spanHi.getAttribute("id"))

