document.addEventListener("DOMContentLoaded", function() {
    animateCard("card1", "jiggle", 500);
    animateCard("card2", "jiggle", 700);
    animateCard("card3", "jiggle", 900);
  });
  
  function animateCard(cardId, animationClass, delay) {
    var card = document.getElementById(cardId);
    setTimeout(function() {
      card.classList.add("animated", animationClass);
    }, delay);
  }