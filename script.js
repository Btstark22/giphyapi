let topics = ["disney"];
const apikey = "NA7vL6oTxh01xHHphhmZIVNjvEOo8gWG";
const newBtn = document.getElementById("new-btn");

//on click run a function that makes a new button
function click() {
    //clear the appendedChildren to overwrite all of them before for loop runs
    let btnDiv = document.getElementById("newbtn");
    btnDiv.innerHTML = "";
    console.log(document.getElementById("input").value);
    topics.push(input.value);
    //add a push statement that puts the users input into the topics array and makes a button
    for (let i = 0; i < topics.length; i++) {
        const btnEl = document.createElement("button");
        btnEl.classList.add("btn");
        //btnEl.getAttribute.add(topics[i].trim().toLowerCase()) google search for this^ to 
        btnEl.innerHTML = topics[i];
        btnDiv.appendChild(btnEl);
        console.log(btnEl);
       
    }
   let buttons = document.getElementsByClassName("btn")
   for (let i = 0; buttons.length; i++) {
       console.log(i)
       console.log(buttons)
       buttons[i].addEventListener("click", make);
   }
}
function make() {
    const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NA7vL6oTxh01xHHphhmZIVNjvEOo8gWG&q=" + topics.value + "&limit=10&offset=0&rating=PG-13&lang=en";
        fetch(queryURL).then(function (response) {
            return response.json()
        })
            .then(function (responseJson) {
                console.log(responseJson);
                for ( let i = 0; i < responseJson.data.length; i++) {
                const newImage = document.createElement("img");
                newImage.setAttribute("src", responseJson.data[i].images.fixed_height.url)
                document.getElementById("giph-div").appendChild(newImage)
                }
            });
        // .then(function (responseJson) {
        //     console.log(responseJson)
        //     //btnEl.setAttribute("data-giphys",responseJson.data);
        //     for ( let i = 0; i < responseJson.data.length; i++) {
        //         const newImage = document.createElement("img");
        //     newImage.setAttribute("src", responseJson.data[i])
        //    document.getElementById("giph-div").appendChild(newImage)
        // }
        // console.log(responseJson);
        // });
}

document.getElementById("addBtn").addEventListener("click", click);
