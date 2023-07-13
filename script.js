let cards = document.querySelectorAll(".card");
let front_view = document.querySelectorAll(".front-view");
let back_view = document.querySelectorAll(".back-view");
let backview_img = document.querySelectorAll(".back-view img");

let flippedCards = [];
let matchedCards = [];

//on flipping each card, we flip the card and can see the back-view of the card
cards.forEach(card=>{
  // generating and assigning a random order value for each card
  let randomOrder =   Math.floor(Math.random() * cards.length);
  card.style.order = randomOrder;
  //click event on each card
    card.addEventListener("click",()=>{
        const frontView = card.querySelector(".front-view");
        const backView = card.querySelector(".back-view");
        if(!card.classList.contains("matched") && flippedCards.length<2){
            //flip the card
            frontView.style.transform = "rotate(180deg),translateX(-10px),translateY(-5px)";
            backView.style.zIndex = "1";
            
        }
        flippedCards.push(card);
        //pushing 2 flipped cards to flippedCards array
        if(flippedCards.length===2){
           const [card1,card2] = flippedCards;
           const img1 = card1.querySelector(".back-view img");
           const img2 = card2.querySelector(".back-view img");
           
           //checking for a match
           if(img1.getAttribute("src")==img2.getAttribute("src")){
            card1.classList.add("matched");
            card2.classList.add("matched");
            matchedCards.push(card1,card1);
            console.log("yyy");
            flippedCards = [];
           }
           // Check if all cards are matched
          if (matchedCards.length === cards.length) {
            // Game over
            alert("Congratulations! You've matched all the cards.");
          }
           else{
            //go back to normal state as they were pre-flip
            setTimeout(()=>{
            if (!card1.classList.contains("matched") && !card2.classList.contains("matched")) {
              //resets the zIndex property to its default value by setting it to an empty string (""). This step ensures that the back view is no longer displayed on top of the front view.
              card1.querySelector(".back-view").style.zIndex = "";
              //removes the transformation that was applied earlier, bringing the front view back to its original position and appearance.
              card1.querySelector(".front-view").style.transform = "none";
              card2.querySelector(".back-view").style.zIndex = "";
              //removes the transformation that was applied earlier, bringing the front view back to its original position and appearance.
              card2.querySelector(".front-view").style.transform = "none";
            }
            
            flippedCards = [];
            },1000)
           

           }
        
        }
        })   
    })


  



