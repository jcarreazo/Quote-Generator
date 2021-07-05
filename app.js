//Get Quotes
let apiQuotes;
let icontext;
const API='https://api.quotable.io/random';
//Get Quotes via Fetch from the API
async function getQuote(){
    try{
        const response =await fetch(API);
        apiQuotes=await response.json();
        console.log(apiQuotes)
        icontext="<i class=\"bx bxs-quote-left\"></i>"
        document.querySelector(".quote").innerHTML=`${icontext}${apiQuotes.content}`
        document.querySelector(".autor").textContent=`${apiQuotes.author}`
    }catch(err){
        const error = new Error(err);
        console.log(error);
    }
}

getQuote();


