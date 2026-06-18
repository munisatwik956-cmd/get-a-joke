const loadJoke= async function(){
    try{
        const jokeFetch=await fetch('https://api.chucknorris.io/jokes/random',{
                headers:{
                Accept: "application/json"
            }
        })
        const jokeData=await jokeFetch.json()
        document.getElementById("loading-joke").innerText=jokeData.value
    }catch(err){
        console.log(err)
    }
}

document.getElementById("load-joke-btn").addEventListener("click",loadJoke)
