
// Our variables
let url = "https://newsapi.org/v2/everything?language=en&q=%2Bgolden%20AND%20%2Bglobe%20AND%20%2Bwinner%20AND%20-red%20AND%20-carpet%20AND%20-nominees%20AND%20-neil%20AND%20-backstage%20AND%20-gaga&from=2019-01-01&to=2019-01-23&sortBy=popularity&domains=theguardian.com,thisisinsider.com,hollywoodreporer.com&apiKey=e4c19186bbf64068a1bd60a380a7b0e6"


// Our main function which handles the news items and adds them to the DOM
let receivedNews = (newsData) => {

  // newsData is the entire response from the API.
  // newsData.articles is an array of objects representing each article.
  // For each article object from the API, we create a new div in HTML.
  newsData.articles.forEach((article) => {

    // Here we create and add html elements to our html file
    document.querySelector(".winners").innerHTML +=
      `<div class="articleleft">
      <h3>${article.title}</h3>
      <h4>${article.author}</h4>
      <h5>${moment(article.publishedAt).format('MMMM Do YYYY, h:mm a')}</h5>
      <p><a href="${article.url}"> Full article</a></p>
      <div class="bredvid">
      <img src="${article.urlToImage}"/>
      <p>${article.description}</p>
      </div>
      </div>
      <div class="divider"></div>`
  })
}



// Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
// These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
fetch(url)
  .then(response => response.json())
  .then(receivedNews)





  let urlfornominees = "https://newsapi.org/v2/everything?language=en&q=%2Boscars%20AND%20%2Bnominees%20AND%20%2Bawards%20AND%20-trump%20AND%20-stream%20AND%20-worst%20AND%20-gobe%20AND%20-bafta%20AND%20-golden%20AND%20-ellen%20AND%20-today%20AND%20-1990&from=2019-01-01&to=2019-01-23&sortBy=popularity&pageSize=5&domains=huffingtonpost.com,usatoday.com,thisisinsider.com,eonline.com&apiKey=e4c19186bbf64068a1bd60a380a7b0e6"


  // Our main function which handles the news items and adds them to the DOM
  let receivednomineesNews = (newsData) => {

    // newsData is the entire response from the API.
    // newsData.articles is an array of objects representing each article.
    // For each article object from the API, we create a new div in HTML.
    newsData.articles.forEach((article) => {

      // Here we create and add html elements to our html file
      document.querySelector(".nominees").innerHTML +=
        `<div class="articleright">
        <h3>${article.title}</h3>
        <h4>${article.author}</h4>
        <h5>${moment(article.publishedAt).format('MMMM Do YYYY, h:mm a')}</h5>
        <p><a href="${article.url}"> Full article</a></p>
        <div class="bredvid">
        <img src="${article.urlToImage}"/>
        <p>${article.description}</p>
        </div>
        </div>
        <div class="divider"></div>`
    })
  }



  // Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
  // These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
  fetch(urlfornominees)
    .then(response => response.json())
    .then(receivednomineesNews)



    //Slideshow
    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
