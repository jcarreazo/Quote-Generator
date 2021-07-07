//Get Quotes Variables
let apiQuotes;
let icontext;
const API='https://api.quotable.io/random';
const loader=document.querySelector("#loader");
const container=document.getElementById("container");
const content=document.getElementById("content");

// Loading Spin
const loadingSpin=()=>{
    loader.hidden=false;
    container.style.display=("none");
}

//Hidde Loader Spin
const hiddeSpin=()=>{
    loader.hidden=true;
    container.style.display=("flex");
}
//Fixing Text size base in the length of the Quote
const textAdjustment=()=>{
    if(apiQuotes.content.length>100){
        document.querySelector(".quote").style.fontSize=("2rem")
    }
        icontext="<i class=\"bx bxs-quote-left\"></i>"
        document.querySelector(".quote").innerHTML=`${icontext}${apiQuotes.content}`
        document.querySelector(".autor").textContent=`${apiQuotes.author}`
}
//Get Quotes via Fetch from the API
async function getQuote(){
    loadingSpin();
    try{
        const response =await fetch(API);
        apiQuotes=await response.json();
        textAdjustment();
        hiddeSpin();
    }catch(err){
        const error = new Error(err);
        console.log(error);
    }
}

//Twitter share
const twitterShare=()=>{
    const twitterURl=`https://twitter.com/intent/tweet?text=${apiQuotes.content} - ${apiQuotes.author}`;
    window.open(twitterURl, '_blank');
}
    document.querySelector("#reload-quote").addEventListener("click",getQuote);
    document.querySelector("#twitter").addEventListener('click',twitterShare);

getQuote();