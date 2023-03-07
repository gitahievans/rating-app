document.addEventListener("DOMContentLoaded", () => {
const ratingState = document.querySelector("#rating-container");
const thankyouState = document.querySelector("#thankyou-container");
const submitButton = document.querySelector("#submit");
const rateValues = document.querySelectorAll(".num");
const ratingResult = document.querySelector(".results");

window.addEventListener('load', function () {
  thankyouState.style.display = "none";
  ratingState.style.display = "block";
})

let rating = null;

// function to disable or enable the button depending on whether the rating is clicked or not
const toggleSubmitButton = () => {
  submitButton.disabled = !rating;
}
// call function initially to disable the button since no rating
toggleSubmitButton();

const setRating = () => {
  rateValues.forEach((num) => {
    num.addEventListener("click", () => {
      rating = num.dataset.rating;
      console.log(`You rated ${rating}`);
      // call function to after rating has been updated to enable the submit button
      toggleSubmitButton();
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
  });
};
submitRating();
});