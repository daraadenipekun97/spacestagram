
window.addEventListener("load", ()=>{

const loader = document.querySelector(".loader");


var delayInMilliseconds = 3000; //3 seconds

setTimeout(function() {
    getAPOSRequest()
    loader.className +=" hidden";
}, delayInMilliseconds);
    
})


async function getAPOSRequest(){
    let API_KEY = "HwSFSrrNRLPxXZPs4EcfG33eEuXbohTYqwGgIQIq";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2021-09-07`)
    console.log(response)
    if (response.status === 200){
        console.log(new Date().getSeconds())
        let data = await response.json();   
        // if(data.length !== 0){
        //     console.log("no data")
        //     // document.getElementsByTagName("img").classList.add("img-skeleton")
        // }
        // else( console.log(data))
       
        const titletext = document.createElement("h3");
        titletext.classList.add("title")
        document.querySelector(".post").innerHTML += data.map(val =>{
        

            if (Object.keys(val).length !==0){
               return(
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
            } else if(Object.keys(val).length ===0){

                return(
                `<div>
                <img src='' alt="" class="img-skeleton">
            
            
                
              </div>`
              )
            }
        
          
            
        })
        
    }
    
    else{
        console.error("error here");
    }
  
}

// togglelike.addEventListener("click", show )

// function show() {
//     togglelike.classList.toggle("like_click")

//}

function changeStyle(){
    document.querySelector(".like").classList.toggle("like_click");
}
