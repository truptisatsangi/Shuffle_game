var highestscore = 0;
let current_score = 0;
function getdata() {
  let url = "https://random-word-api.herokuapp.com/word";
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      play(data);
    });
}
function play(alphabet) {
  let score = 0;
  let s = "";
  alphabet = alphabet.substring(2, alphabet.length - 2);
  console.log("", alphabet, alphabet.length);
  let original = alphabet;
  let l = alphabet.length;
  for (let i = 0; i < l; i++) {
    let temp = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(temp);
    s = s + "  " + temp;
    let index = alphabet.indexOf(temp);
    alphabet = alphabet.substring(0, index) + alphabet.substring(index + 1);
  }
  document.getElementById("words").innerHTML = s;
  document.getElementById("words").style.fontSize = "50px";

  document.getElementById("submit").onclick = function (event) {
    let ans = document.getElementById("ans").value;
    if (ans === original) {
      var audio = new Audio("Winning Sounds.mp3");
      audio.play();
      alert("Hurray!");
      current_score += 10;
      document.getElementById("score").innerHTML = current_score;
    }
    document.getElementById("ans").value = "";
    event.preventDefault();

    getdata();
  };
  document.getElementById("showans").onclick = function (event) {
    document.getElementById("correct").innerHTML = original;
    event.preventDefault();
  };
}

document.getElementById("score").innerHTML = `
              <div class="task">
                  <button class="next" onclick = "score()">Score</button>
              </div>  
          `;

document.getElementById("next").innerHTML = `
              <div class="task">
                  <button class="next" onclick = "getdata()">Next</button>
              </div>  
          `;
getdata();
