let topics = [];
const apikey = "NA7vL6oTxh01xHHphhmZIVNjvEOo8gWG";

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
        btnEl.classList.add("old-btn");
        btnEl.innerHTML = topics[i];
        btnDiv.appendChild(btnEl);
        console.log(btnEl);
        btnEl.addEventListener("click", function () {
            document.getElementById("giph-div").innerHTML = "";
            const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NA7vL6oTxh01xHHphhmZIVNjvEOo8gWG&q=" + topics[i] + "&limit=10&offset=0&rating=PG-13&lang=en";
            fetch(queryURL).then(function (response) {
                return response.json()
            })
                .then(function (responseJson) {
                    console.log(responseJson);
                    for (let i = 0; i < responseJson.data.length; i++) {
                        let newImage = document.createElement("img");
                        newImage.setAttribute("src", responseJson.data[i].images.fixed_height.url)
                        newImage.setAttribute("class", "gif")
                        newImage.setAttribute("data-alt", responseJson.data[i].images.fixed_height_still.url);
                        const newImageDiv = document.createElement("div");
                        newImageDiv.append(newImage);
                        const rating = document.createElement("h3");
                        rating.textContent = "Rating: " + responseJson.data[i].rating;
                        newImageDiv.append(rating);
                        newImageDiv.className = "col-md-4";
                        document.getElementById("giph-div").prepend(newImageDiv);
                    }
                    document.querySelectorAll(".gif").forEach(function (img) {
                        img.addEventListener("click", function (e) {
                        const hodor = this.getAttribute("src");
                        this.setAttribute("src", this.getAttribute("data-alt"))
                        this.setAttribute("data-alt", hodor);
                        })
                    })
                });
        })

    }
}

document.getElementById("addBtn").addEventListener("click", click);
