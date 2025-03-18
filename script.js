

const space=document.querySelector(".space");

// select the button
const button=document.querySelector(".moodcalculate");



// function to store thw tasks in localstorage
function saveemojis(){
    const emojismood = [...document.querySelectorAll(".moods")].map(mood => mood.innerHTML);
    localStorage.setItem('moodemoji', JSON.stringify(emojismood));
    
}

function loademojis(){
    const emojismood = JSON.parse(localStorage.getItem('moodemoji')) || [];
    emojismood.forEach(moodHTML => {
        const p = document.createElement("p");
        p.classList.add("moods");
        p.innerHTML = moodHTML; 
        space.appendChild(p);
    });
    

    
}
// Load saved moods on page load
document.addEventListener("DOMContentLoaded", loademojis);


// addeventlistner for the button and display the moods of user with the date
button.addEventListener('click', () => {
    // Get the selected mood
    const mood = document.getElementById("mood").value;

   
    // console.log( mood);
    // create a p tag 
    const p=document.createElement("p");
    p.classList.add("moods")
    // this is a object of emojis to show the emojis in the result
    const moodEmojis = {
        happy: "😊",
        sad: "😔",
        angry: "😤",
        calm: "😌"
    };
    // store the mood value into the p tag with the date  and display this
    p.innerHTML=`<strong>${new Date().toLocaleDateString()}</strong> : ${mood}  ${moodEmojis[mood]}`;
     

    space.appendChild(p);
    // save to local storage
    saveemojis();

});