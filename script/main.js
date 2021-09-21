
window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");


    var delayInMilliseconds = 1000; //1 seconds

    setTimeout(function () {
        loader.className += " hidden";
    }, delayInMilliseconds);
    getAPOSRequest()

})


async function getAPOSRequest() {
    let API_KEY = "HwSFSrrNRLPxXZPs4EcfG33eEuXbohTYqwGgIQIq";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2021-09-07`)
    console.log(response)
    if (response.status === 200) {
        let data = await response.json();


        document.querySelector(".post").innerHTML += data.map(val =>


            `<div>
                <img src='${val.url}' alt="" class="banner-image">
            <div class="post-content">
                    <div class="title"> <b>Title:</b>${val.title}</div>
                    <div class="desc"><b>Description:</b> ${val.explanation}</div>
                    <div class="date"><b>Date:</b> ${val.date}</div>
    
                <div class="reaction">
                    <span class="material-icons like" onClick = "changeStyle()">favorite</span> 
                    <span class="material-icons">question_answer</span> 
                </div>
            </div> 
                
              </div>`






        )

    }

    else {
        console.error("error here");
    }

}



function changeStyle() {
    const allhearts = document.querySelectorAll(".like");
    let i;
    for (i = 0; i < allhearts.length; i++) {
        allhearts[i].classList.toggle("like_click");
    }
}
