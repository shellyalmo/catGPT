const clearConversation = () => {
  location.reload();
};

const chatInputHandler = () => {
  event.preventDefault();
  const chatInput = document.getElementById("user-input");

  console.log("it works");

  document.getElementById("input-display").innerHTML += `<div >
          <div>
            <p id="input-display">
              <img class="userAvatar" src="./assets/user_avatar.png" /> ${chatInput.value}
            </p>
          </div>
          <div class="cat-response">
            <img src="./assets/catGPT_icon.png" />
            <img class="catImageResponse" src="https://cataas.com/cat?${performance.now()}" alt="" width="120px"/>
          </div>
        </div>`;

  document.getElementById("chatForm").reset();
};
