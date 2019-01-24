//
// let Variabel = "Amanda"
// console.log(Variabel)
//
// let siffra1=5
// let siffra2=10
//
// console.log(siffra1+siffra2)
//
//
// let showAlert = () => {
//   alert("What?! Don't click me!")
// }
//
// document.querySelector(".myButton").onclick=showAlert
//
// let name = "Amanda"
//
// let hideDIV = () => {
// document.querySelector(".text").classList.toggle("hide");
// document.querySelector(".name").innerHTML=name
// }
//
// document.querySelector(".myButton2").onclick=hideDIV
//
// let nyhet = "hej hej"
// nyhet.toUpperCase()
// document.querySelector(".name").innerHTML=nyhet




// let clickCount = 0
//
// let incrementCount = () => {
//   clickCount += 1
//   document.querySelector(".output").innerHTML=clickCount
// }
//
// document.querySelector(".button3").onclick=incrementCount

//
// let fruits = ["Apple", "Orange", "Lemon", "Kiwi", "Mango", "Banana"]
// fruits.pop(); //tar bort Banana
// fruits.forEach((fruitName) => {
//   console.log(fruitName)
// })


// let newstitle =[
// "Hotet mot handbollens framtid i Stockholm",
// "Jo, placebo funkar – även när man vet att det är fejk",
// "Vilken version av dig umgås dina vänner med i kväll?"]
// newstitle.forEach((newstitleName) => {
//   console.log(newstitleName)
// })
//
// let artiklarDIV = document.querySelector(".artiklar")
// newstitle.forEach((title) => {
//   artiklarDIV.innerHTML +=`<h2>${title}</h2>`
// })


let newsArticles = [{
  title: "Queen for King",
  preamble: "Bohemian Rhapsody",
  text: "qjgeåWHB",
  image:"https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/gg/Bohemian%20Rhapsody.jpg?itok=aXKS1-0O"
},
{
  title: "Green Book",
  preamble: "Hey you",
  text: "ojGHPBIDWAHB",
  image:"https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/gg/Green%20Book.jpg?itok=o6OwfkZz"
},
{
  title: "Glenn Close",
  preamble: "Blah blah blah",
  text: "apjgboshhr",
  image:"https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/close-081214.jpg?itok=W9i89ctw&c=b12457decff083c9c5cc79d50d9a8b29"
}
]

newsArticles.forEach((article) => {
  document.querySelector(".artiklar").innerHTML += `
<div class="artiklar">
  <h3>${article.title}</h3>
  <h4>${article.preamble}</h4>
  <p>${article.text}</p>
  <img src="${article.image}"/>

  </div>
  `
})
