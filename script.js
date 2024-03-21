const question = document.querySelector(".question");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");
const gif = document.querySelector(".gif");

yesbtn.addEventListener("click", () => {
    question.innerHTML = "Yeee you are so kind🤩💖";
    gif.src="https://media4.giphy.com/media/QXvUuIO0ALjr7VWlZh/giphy.gif"    
})

nobtn.addEventListener("mouseover",()=> {
    const nobtnRect = nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - nobtnRect.width;
    const maxY = window.innerHeight - nobtnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    nobtn.style.left = randomX + "px";
    nobtn.style.top = randomY + "px";

})