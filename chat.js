const clearConversation = () => {
  location.reload();
};

const chatInputHandler = () => {
  event.preventDefault();
  const chatInput = document.getElementById("user-input");

  document.getElementById("input-display").innerHTML += `<div >
          <div>
            <p id="input-display">
              <img class="avatar" src="./assets/user_avatar.png" /> ${
                chatInput.value
              }
            </p>
          </div>
          <div>
            <img class="avatar" src="./assets/catGPT_icon.png" />
            <img class="catResponse" src="https://cataas.com/cat?${performance.now()}" alt=""/>
          </div>
        </div>`;
  setTimeout(() => chatInput?.scrollIntoView(), 500)
  document.getElementById("chatForm").reset();
};
