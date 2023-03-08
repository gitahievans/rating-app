import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const ratingState = document.querySelector("#rating-container");
  const thankyouState = document.querySelector("#thankyou-container");
  const submitButton = document.querySelector("#submit");
  const rateValues = document.querySelectorAll(".num");
  const ratingResult = document.querySelector(".results");
  const pleaseNote = document.querySelector(".mini section p")
  const thankNote = document.querySelector(".thankyou section p");
  const logo = document.querySelector(".logo");

  window.addEventListener("load", function () {
    thankyouState.style.display = "none";
    ratingState.style.display = "block";
    gsap.from(rateValues, { duration: 2, opacity: 0, y: 150, stagger: .5 });
    gsap.from(submitButton, { duration: 7, opacity: 0})
    gsap.from(pleaseNote, {duration: 2, opacity: 0, x: 150})

    gsap.from(logo, {duration: 3, xPercent: -50, rotateX:360, delay: 3})
    gsap.from(logo, { duration: 3, xPercent: 50, ease: "bounce.out" });
  });
  

  let rating = null;

  // function to disable or enable the button depending on whether the rating is clicked or not
  const toggleSubmitButton = () => {
    submitButton.disabled = !rating;
  };
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
       gsap.from(thankNote, { duration: 2, opacity: 0, y: 150 });
       gsap.from(".top img", { duration: 3, opacity: 0, y: -150, rotateX: 360, ease: "easeInEaseOut", delay: 2.5});
       gsap.from(".results", { duration: 3, z: 150, opacity: 0})
       gsap.from(".thankyou section h1", { duration: 2, rotateY: 360, x: 350, opacity: 0, ease: "easeOut"})
    });
  };
  submitRating();
});
