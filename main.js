const inputValue = document.getElementById("input");
const guessBtn = document.getElementById("guess");
const numCount = document.querySelector(".noCount");
const guessNo = document.querySelector(".guessNo");
const comment = document.querySelector(".comment");
const reload = document.getElementById("reload");
const randomNum = Math.floor(Math.random() * 15 + 1);
let count = 0;
let interval;
reload.addEventListener("click", function () {
  window.location.reload();
});
guessBtn.addEventListener("click", () => {
  let guessNumber = inputValue.value;
  if (guessNumber < 1 || guessNumber > 15) {
    alert("Choose number Between 1-15");
    return;
  }
  if (guessNumber == randomNum) {
    count++;
    guessNo.innerHTML = randomNum;
    comment.innerHTML = "You guessed the number;)";
    guessBtn.setAttribute("disabled", true);
  }
  if (randomNum > guessNumber) {
    if (randomNum - guessNumber >= 5) {
      comment.innerHTML = "Your Guess is too Low";
      count++;
      interval = setInterval(() => {
        comment.innerHTML = "";
        clearInterval(interval);
      }, 4000);
    } else if (randomNum - guessNumber < 5) {
      comment.innerHTML = "Your Guess is low but Close";
      count++;
      interval = setInterval(() => {
        comment.innerHTML = "";
        clearInterval(interval);
      }, 4000);
    }
  }
  if (randomNum < guessNumber) {
    if (guessNumber - randomNum >= 5) {
      comment.innerHTML = "Your Guess is too High";
      count++;
      interval = setInterval(() => {
        comment.innerHTML = "";
        clearInterval(interval);
      }, 4000);
    } else if (guessNumber - randomNum < 5) {
      comment.innerHTML = "Your Guess is high but Close";
      count++;
      interval = setInterval(() => {
        comment.innerHTML = "";
        clearInterval(interval);
      }, 4000);
    }
  }
  numCount.innerHTML = count;
});
