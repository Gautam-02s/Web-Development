// // const memebtn=document.querySelector('gen-meme-btn')
// // const memeimg=document.querySelector(".meme-generator img")
// // const memetitle=document.querySelector(".meme-genrator .meme-title")

// // const updateDetails=(url,title)=>{
// //     memeimg.setAttribute("src",url);
// //     memetitle.innerHTML=title;

// // }
// // const generatememe=()=>{
// //     fetch("https://meme-api.com/gimme/wholesomememes").then(
// //         (Response)=>Response.json()).then(data=>{
// //             updateDetails(data.url,data.title)
// //         });
// // }
// // memebtn.addEventListener("click",generatememe);
// // const memebtn = document.querySelector('.gen-meme-btn');
// // const memeimg = document.querySelector('.meme-generator img');
// // // const memetitle = document.querySelector('.meme-generator .meme-title');
// // const memetitle = document.querySelector(".meme-generator .meme-title");



// // const updateDetails = (url, title) => {
// //     memeimg.setAttribute("src", url);
// //     memetitle.innerHTML = title;
// // };

// const generatememe = () => {
//     // fetch('https://meme-api.com/gimme/wholesomememes')
//     //     .then((response) => response.json())
//     //     .then((data) => {
//     //         updateDetails(data.url, data.title);
//     //     });

//     fetch("https://meme-api.com/gimme/wholesomememes")
//     .then(response => response.json())
//     .then(data => {
//         updateDetails(data.url, data.title);
//     });

// };

//memebtn.addEventListener('click', generatememe);

// function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// const container = document.getElementById("container");
//     const randomColor = getRandomColor();
//     container.style.backgroundColor = randomColor;




async function generateMeme() {
    const memeContainer = document.getElementById("meme-image");
    const generateButton = document.getElementById("generate-button");

    generateButton.disabled = true;

    try {
        const response = await fetch("https://meme-api.com/gimme");
        const memeData = await response.json();

        if (response.ok) {
            
            if (memeData && memeData.url) {
                memeContainer.src = memeData.url;
            } else {
                console.error("Invalid response from API:", memeData);
            }
        } else {
            console.error("Failed to fetch meme:", memeData.error.message);
        }
    } catch (error) {
        console.error("Error fetching meme:", error);
    } finally {
        generateButton.disabled = false;
    }
    
}