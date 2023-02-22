const ratingState = document.querySelector("#rating-container");
const thankyouState = document.querySelector("#thankyou-container");
const submitButton = document.querySelector("#submit");
const rateValues = document.querySelectorAll(".num");
const ratingResult = document.querySelector(".results");

let rating;

const setRating = () => {
  rateValues.forEach((num) => {
    num.addEventListener("click", () => {
      rating = num.dataset.rating;
      console.log(`You rated ${rating}`);
    });
  });
};
setRating();

const submitRating = () => {
  submitButton.addEventListener("click", () => {
    thankyouState.style.display = "block";
    ratingState.style.display = "none";
    if (rating) {
      ratingResult.textContent = `You selected ${rating} out of 5`;
    }
    if(!rating){
        ratingResult.textContent = "You did not rate us!"
    }
  });
};
submitRating();
