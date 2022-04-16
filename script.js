const btn = document.querySelector(".mybtn");
const jokeInput = document.getElementById("joke");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  setJoke();
});

async function setJoke() {
  let data = await fetch("https://api.chucknorris.io/jokes/random");
  let res = await data.json();
  console.log(res);
  console.log(res.value);
  jokeInput.style.display = "block";
  jokeInput.textContent = res.value;
}
