
//openMe image
function openMe(img){
    var imgContainer = document.getElementById("img-container");
    var imgClicked = document.getElementById("clicked-img");
    imgContainer.style.display = "block";
    imgClicked.src = img.src;
}

//close image
function closeImg(){
    document.getElementById("img-container").style.display = "none";
}

//FORMS 
//Close button
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

//switch forms button
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


//navigation menu settings for 320px screen-size
function menuBtn(){
    //responsive condition
    var navSection = document.getElementById("nav"); //nav
    var navGroup = document.getElementById("nav-group"); 
    var btnActive = document.getElementById("btn-menu");
    var responsiveClass = document.getElementById("nav-list");

    if(responsiveClass.className === "navbar"){
        responsiveClass.className += " flex-menu";
    } else {
        responsiveClass.className = "navbar";
    }

    navSection.classList.toggle("nav-section"); //the class to add
    navGroup.classList.toggle("active");
    btnActive.classList.toggle("btn-active")  
}

//SEARCH SECTION
async function sendRequest(){
    //clear the previous result
    clearResults();

    //delcarations
    var _api_key = "api_key=b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i";
    var _userInput = document.getElementById("search").value;

    await fetch(`https://api.giphy.com/v1/gifs/search?${_api_key}&q=${_userInput}&limit=25&offset=0&rating=g&lang=en&bundle=clips_grid_picker`)
    .then(function(data){
        return data.json()
    })
    .then(function(json){
    
    //getting more than a single result
    for (let i = 0; i<30; i++){
        var imgPath = json.data[i].images.fixed_width.url
        var img = document.createElement("img")

        //creating images attributes
        img.setAttribute("src", imgPath);
        img.setAttribute("onclick", "openMe(this)");
        document.getElementById("jsSrcResults").appendChild(img); 
    }
   }) 

   //clear result
   function clearResults (){
    document.getElementById("jsSrcResults").innerHTML = '';
   } 
};

//ABOUT SECTION
function showHide(){
    clearResults(); // clear search results
    const about = document.getElementById("about");
    about.classList.toggle("show"); //show content

    function clearResults (){
    document.getElementById("jsSrcResults").innerHTML = '';
   } 
}






