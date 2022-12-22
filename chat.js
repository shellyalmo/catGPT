let replies = ["hello","thanks","ok dude","whatever","that's cool","not sure","I don't know","bye"]

const replyRandomAnswer = (repliesArr) => {
    let randomReply = repliesArr[Math.floor(Math.random() * repliesArr.length)]
    return randomReply
}

const clearConversation = () =>{
    location.reload();
}

const chatInputHandler = () => {
    event.preventDefault();
  const chatInput = document.getElementById("user-input");
    let answer = replyRandomAnswer(replies)
    console.log("it works")
    console.log(answer)
    document.getElementById("input-display").innerHTML+= `<br>` + (chatInput.value);
    document.getElementById("input-display").innerHTML+= `<br>` + (answer);
    document.getElementById("chatForm").reset()
  
};
