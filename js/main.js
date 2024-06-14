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
    //responsive condition
    var navSection = document.getElementById("nav"); //navabar 
    var navGroup = document.getElementById("nav-group");
    var btnActive = document.getElementById("btn-menu");
    var responsiveClass = document.getElementById("nav-list");

    if(responsiveClass.className === "navbar"){
        responsiveClass.className += "responsive-menu";
    } else {
        responsiveClass.className = "navbar";
    }

    navSection.classList.toggle("nav-section"); //the class to add
    navGroup.classList.toggle("active");
    btnActive.classList.toggle("btn-active")
    
}

//search section
async function sendRequest(){
    //clear the previous result
    clearResults();

    //delcarations
    var api_key = "api_key=b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i";
    var userInput = document.getElementById("search").value;

    await fetch(`https://api.giphy.com/v1/gifs/search?${api_key}&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=clips_grid_picker`)
    .then(function(data){
        return data.json()
    })
    .then(function(json){
    
    //getting more than a single result
    for (let i = 0; i<30; i++){
        var imgPath = json.data[i].images.fixed_width.url
        var img = document.createElement("img")

        //creating images attributes
        img.setAttribute("src", imgPath)
        document.getElementById("jsSrcResults").appendChild(img)
    
    }
   })  

   //clear result
   function clearResults (){
    document.getElementById("jsSrcResults").innerHTML = '';
   } 
};









