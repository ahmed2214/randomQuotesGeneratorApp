let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let quoteIddiv = document.querySelector(".quote-id");
let quotedisplayDiv = document.querySelector(".quote-display");
let  autostatusDiv = document.querySelector(".auto-status");
let intervalId;

async function getQuotes(){
 const response = await fetch("quotes.json");
 const data = await response.json();
 return data;
}
  
async function generateQuotes(){
    const quotes = await getQuotes() ;
    const quote = quotes[Math.floor(Math.random() *  quotes.length )];
    quotedisplayDiv.innerHTML = quote.text ;
    quoteIddiv.innerHTML = quote.id ;
}
generateBtn.onclick = generateQuotes;

async function autoGenerateQuotes (){
    intervalId = setInterval(generateQuotes, 5000);
    autostatusDiv.innerHTML ="Auto : On" ;
}

autoBtn.onclick = autoGenerateQuotes;
async function stopGenerateQuotes (){
    clearInterval(intervalId);
    autostatusDiv.innerHTML ="" ;
}
stopBtn.onclick = stopGenerateQuotes;