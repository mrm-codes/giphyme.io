//fecthing data b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i
//TODO
/* 
Fetch three types of data:
-WHEN TYPING, it sguggest matching words,
- When clicked search it gives you multiple results
-when clicked on one of the result, it opens a new page displaying the image on the center and the title and buttons in the bottom
*/
//Responsive menu settings
function menuBtn(){
    var menu = document.getElementById("nav-list"); //element to be added the class
    var navSection = document.getElementById("nav"); //navabar section
    menu.classList.toggle("flex-menu"); //the class to add
    navSection.classList.toggle("nav-section"); //the class to add
    
}

//search button

async function sendRequest(){
    var api_key = "api_key=b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i";
    var userInput = document.getElementById("search").value;
    const resultBox = document.querySelector(".keyWordList");
    //const inputBox =document.getElementById("search")

   await fetch(`https://api.giphy.com/v1/gifs/search?${api_key}&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=clips_grid_picker`)
   .then(function(data){
    return data.json()
   })
   .then(function(json){
   
   for (let i = 0; i<30; i++){
    //urlPaths = console.log(json.data[i].images.fixed_width.url) 
    //var keyWordList = [json.data.title]
    //console.log(json.data[i])
    var imgPath = json.data[i].images.fixed_width.url
    var img = document.createElement("img")
    img.setAttribute("src", imgPath)
    document.getElementById("jsSrcResults").appendChild(img)
    //console.log(keyWordList)
    
    }

   })

    
}












