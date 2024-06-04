//fecthing data b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i

//https://api.giphy.com/v1/gifs/search?api_key=b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i//
//&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
/*
function sendRequest(){
    var userInput = document.getElementById("search").nodeValue
    console.log(userInput)
    
    var api_key = "api_key=b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i";
    var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?&
    q=${userInput}&rating=g&api_key=${userInput}`

    fetch(giphyApiUrl).then(function(data){
        return data.json()
    })

const gf = fetch("https://api.giphy.com/v1/gifs/search?api_key=b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=clips_grid_picker");
console.log(gf);
} */

//Declarations

//data 


async function sendRequest(){
    
    var api_key = "api_key=b1zeTzlumEtPbUNcVYzQjeUi93hPyk1i";
    var userInput = document.getElementById("search").value
    

   await fetch(`https://api.giphy.com/v1/gifs/search?${api_key}&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=clips_grid_picker`)
   .then(function(data){
    return data.json()
   })
   .then(function(json){
    console.log(json.data[5].images.fixed_width.url)
    var imgPath = json.data[5].images.fixed_width.url
    var img = document.createElement("img")
    img.setAttribute("src", imgPath)
    document.getElementById("jsSrcResults").appendChild(img)

   })
}










