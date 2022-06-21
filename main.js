let pics = [
    "cat1.jpeg",
    "cat3.jpeg",
    "cat4.jpeg",
    "zaz.jpeg",
    "luli.jpeg"

];

let btn = document.querySelector("button");
let img = document.querySelector("img");
let counter = 1

btn.addEventListener("click",function (){
   if (counter === 5){
       counter = 0;
   }
img.src = pics[counter]
    counter = counter + 1;
});
