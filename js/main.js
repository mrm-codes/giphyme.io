//fecthing data b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i
//TODO
/* 
Fetch three types of data:
-WHEN TYPING, it sguggest matching words,
- When clicked search it gives you multiple results
-when clicked on one of the result, it opens a new page displaying the image on the center and the title and buttons in the bottom
*/

//search button
async function sendRequest(){
    
    var api_key = "api_key=b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i";
    var userInput = document.getElementById("search").value
    

   await fetch(`https://api.giphy.com/v1/gifs/search?${api_key}&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=clips_grid_picker`)
   .then(function(data){
    return data.json()
   })
   .then(function(json){
    //for each starts here
   
    
   for (let i = 0; i < 25; i++){
    //urlPaths = console.log(json.data[i].images.fixed_width.url) 
    var imgPath = json.data[i].images.fixed_width.url
    var img = document.createElement("img")
    img.setAttribute("src", imgPath)
    document.getElementById("jsSrcResults").appendChild(img)
    }

   })
}










