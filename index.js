const oneStar = document.getElementById("one-star");
const twoStar = document.getElementById("two-star");
const threeStar = document.getElementById("three-star");
const fourStar = document.getElementById("four-star");
const fiveStar = document.getElementById("five-star");
const submitBtn = document.getElementById("submit-button");
let numberChoice = 0;

oneStar.addEventListener("click", ()=>{
    oneStar.style.backgroundColor = "hsl(25, 97%, 53%)";
    oneStar.style.color = "white";
    twoStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    twoStar.style.color = "hsl(217, 12%, 63%)";
    threeStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    threeStar.style.color = "hsl(217, 12%, 63%)";
    fourStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    fourStar.style.color = "hsl(217, 12%, 63%)";
    fiveStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    fiveStar.style.color = "hsl(217, 12%, 63%)";
    numberChoice = 1;
})

twoStar.addEventListener("click", ()=>{
    oneStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    oneStar.style.color = "hsl(217, 12%, 63%)";
    twoStar.style.backgroundColor = "hsl(25, 97%, 53%)";
    twoStar.style.color = "white";
    threeStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    threeStar.style.color = "hsl(217, 12%, 63%)";
    fourStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    fourStar.style.color = "hsl(217, 12%, 63%)";
    fiveStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    fiveStar.style.color = "hsl(217, 12%, 63%)";
    numberChoice = 2;
})

threeStar.addEventListener("click", ()=>{
    oneStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    oneStar.style.color = "hsl(217, 12%, 63%)";
    twoStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    twoStar.style.color = "hsl(217, 12%, 63%)";
    threeStar.style.backgroundColor = "hsl(25, 97%, 53%)";
    threeStar.style.color = "white";
    fourStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    fourStar.style.color = "hsl(217, 12%, 63%)";
    fiveStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    fiveStar.style.color = "hsl(217, 12%, 63%)";
    numberChoice = 3;
})

fourStar.addEventListener("click", ()=>{
    oneStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    oneStar.style.color = "hsl(217, 12%, 63%)";
    twoStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    twoStar.style.color = "hsl(217, 12%, 63%)";
    threeStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    threeStar.style.color = "hsl(217, 12%, 63%)";
    fourStar.style.backgroundColor = "hsl(25, 97%, 53%)";
    fourStar.style.color = "white";
    fiveStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    fiveStar.style.color = "hsl(217, 12%, 63%)";
    numberChoice = 4;
})

fiveStar.addEventListener("click", ()=>{
    oneStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    oneStar.style.color = "hsl(217, 12%, 63%)";
    twoStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    twoStar.style.color = "hsl(217, 12%, 63%)";
    threeStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    threeStar.style.color = "hsl(217, 12%, 63%)";
    fourStar.style.backgroundColor = "hsl(213, 19%, 18%)";
    fourStar.style.color = "hsl(217, 12%, 63%)";
    fiveStar.style.backgroundColor = "hsl(25, 97%, 53%)";
    fiveStar.style.color = "white";
    numberChoice = 5;
})

submitBtn.addEventListener("click", ()=>{
    if(numberChoice === 0){
        document.getElementById("error-choosing").style.display = "block";
    }
    else{
        document.getElementById("container").style.display = "none";
        document.getElementById("thank-you").style.display = "block";
        document.getElementById("star-result").textContent = `You selected ${numberChoice} out of 5`
    }
})