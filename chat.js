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
  let answer = replyRandomAnswer(replies);
  console.log("it works");
  console.log(answer);
  document.getElementById("input-display").innerHTML +=
    `<br>` + chatInput.value;
  document.getElementById("input-display").innerHTML += `<br>` + answer;
  document.getElementById("chatForm").reset();
};
