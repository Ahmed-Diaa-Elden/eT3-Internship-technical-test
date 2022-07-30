const productsCards = document.querySelector('.products-cards');
const cards = ["./images/image1.png","./images/image2.png","./images/image3.png","./images/image4.png"]

cards.forEach((e,i) => {
  productsCards.innerHTML += `
  <!--  #${i} card  -->
      <div class="card">
        <div class="card-img">
          <img src=${e} alt="coffee cup">
        </div>
        <p class="card-title">coffee</p>
        <div class="card-rating"><i class="fa-solid fa-star"></i> 4.4 
          <span class="rating-num-1">4</span>
          <span class="rating-num-2">2</span>
          <span class="rating-num-3">9</span>
          <span class="rating-reviews">reviews</span>
        </div>
        <p class="card-location">new cairo, egypt</p>
      </div>
  <!-- end of #${i} card  -->
  `
})