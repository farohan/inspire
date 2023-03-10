//Welcome to app.js!

//Quotes Section

const quote = document.querySelector('#quote');
const quoter = document.querySelector('#quoter');

const quoteCategories = ['age', 'alone', 'anger', 'art', 'business', 'change', 
    'courage', 'dreams', 'education', 'equality', 'experience', 
    'failure', 'family', 'faith', 'fear', 'freedom', 'god', 
    'happiness', 'hope', 'inspirational', 'intelligence', 
    'knowledge', 'leadership', 'money', 'success', 'learning'];

let randomQuoteCategory = quoteCategories[Math.floor(Math.random() * quoteCategories.length)];

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + randomQuoteCategory,
    headers: { 'X-Api-Key': 'lADrXDhx/+1Lr4lvwW0xVA==BCdFzqo0r4kgRry1'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        quote.innerHTML = `"${result[0].quote}"`;
        quoter.innerHTML = `- ${result[0].author}`;
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
