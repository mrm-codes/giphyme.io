//fecthing data b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i
//TODO
/* 
Fetch three types of data:
-
- 
-when clicked on one of the result, it opens a new page displaying the image on the center and the title and buttons in the bottom
- nav is inline style, correct to flex-column
//work with 320px screen
//close button not working
//FORM NOT WORKING 

*/

function closeBtn(){
    const signForm = document.getElementById("sign-form");
    const logForm = document.getElementById("log-form");
    
    signForm.classList.remove("visible-form");
    logForm.classList.remove("visible-form");
    
} 


//Login button
function logBtn(){
  const signForm = document.getElementById("sign-form");
  const logForm = document.getElementById("log-form");
  const signHeader = document.getElementById("h2-sign");
  const logHeader = document.getElementById("h2-log");

    //activeness
    signForm.classList.toggle("visible-form");
    if (signForm.classList.contains ("visible-form")){
        //signHeader.classList.add("active-form");
    }
   
   
}

//switchness
function switchToLog(){
    const signForm = document.getElementById("sign-form");
    const logForm = document.getElementById("log-form");
    const signHeader = document.getElementById("h2-sign");
    const logHeader = document.getElementById("h2-log");

    signHeader.classList.remove("active-form");
    logHeader.classList.add("active-form");
    
    //form switcher
    if (signForm.classList.contains("visible-form")){
        signForm.classList.remove("visible-form");
        logForm.classList.add("visible-form");
        
    }     

}

function switchToSign(){
    const signForm = document.getElementById("sign-form");
    const logForm = document.getElementById("log-form");
    const signHeader = document.getElementById("h2-sign");
    const logHeader = document.getElementById("h2-log");

    logHeader.classList.remove("active-form");
    signHeader.classList.add("active-form");

    if (logForm.classList.contains("visible-form")){
        logForm.classList.remove("visible-form");
        signForm.classList.add("visible-form");
}
}

// close button


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









