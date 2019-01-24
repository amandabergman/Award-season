
// Our variables
let url = "https://newsapi.org/v2/everything?language=en&q=%2Bgolden%20AND%20%2Bglobe%20AND%20%2Bawards%20AND%20%2Bbest%20AND%20%2Bred%20AND%20%2Bcarpet%20AND%20%2Bdressed&from=2019-01-01&to=2019-01-23&sortBy=popularity&domains=eonline.com&apiKey=e4c19186bbf64068a1bd60a380a7b0e6 "


// Our main function which handles the news items and adds them to the DOM
let receivedNews = (newsData) => {

  // newsData is the entire response from the API.
  // newsData.articles is an array of objects representing each article.
  // For each article object from the API, we create a new div in HTML.
  newsData.articles.forEach((article) => {

    // Here we create and add html elements to our html file
    document.querySelector(".allNews").innerHTML +=
      `<div class="news">
        <h2>${article.title}</h2>
        <h3>${article.source.name}</h3>
        <p>${article.description}</p>
        <img src="${article.urlToImage}" />
      </div>`

  })
}


// Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
// These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
fetch(url)
  .then(response => response.json())
  .then(receivedNews)
