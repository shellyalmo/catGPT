let replies = [
  "meow",
  "מיאו",
  "meooow",
  "meow-meow",
  "meow!!!",
  "meow?"
];

const replyRandomAnswer = (repliesArr) => {
  let randomReply = repliesArr[Math.floor(Math.random() * repliesArr.length)];
  return randomReply;
};

const clearConversation = () => {
  location.reload();
};

const respondAsCat = () => {
  fetch("https://cataas.com/cat")
    .then((Response) => Response.blob())
    .then((catBlob) => {
      document
        .getElementById("cat-response")
        ?.setAttribute("src", URL.createObjectURL(catBlob));
    });
};

const chatInputHandler = () => {
  event.preventDefault();
  const chatInput = document.getElementById("user-input");
  // let answer = replyRandomAnswer(replies);
  console.log("it works");
  // console.log(answer);
  document.getElementById("input-display").innerHTML += `<div >
          <div>
            <p id="input-display">
              <img class="userAvatar" src="./assets/user_avatar.png" /> ${chatInput.value}
            </p>
          </div>
          <div class="cat-response">
            <img src="./assets/catGPT_icon.png" />
            <img class="catImageResponse" src="https://cataas.com/cat" alt="" />
          </div>
        </div>`
  // document.getElementById("input-display").innerHTML += `<br>` + answer;

  document.getElementById("chatForm").reset();
};
