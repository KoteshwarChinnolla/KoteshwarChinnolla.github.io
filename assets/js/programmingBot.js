let selectedChatbot = "AI Assistant";
let Thread_id = generateUniqueId();
let uname = "";
let initial_input = "None";
let update = "None";
let documentation = "None";

function generateUniqueId() {
    return 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
}

function selectChatbot(name) {
    selectedChatbot = name;
    alert("Selected: " + name);
}

function startChat() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Please enter your name.");
        return;
    }
    uname = username;

    document.getElementById("overlay").style.display = "none";
    document.querySelector(".container").classList.remove("hidden");

    let userNameDisplay = document.createElement("div");
    userNameDisplay.textContent = username;
    userNameDisplay.style.position = "absolute";
    userNameDisplay.style.top = "10px";
    userNameDisplay.style.right = "10px";
    userNameDisplay.style.background = "#2c3e50";
    userNameDisplay.style.color = "white";
    userNameDisplay.style.padding = "10px";
    userNameDisplay.style.borderRadius = "5px";
    userNameDisplay.style.fontSize = "14px";
    document.body.appendChild(userNameDisplay);
}

function sendMessage(event) {
  if (event) event.preventDefault(); // Prevents page refresh if inside a form

  const inputField = document.getElementById("user-input");
  const message = inputField.value.trim();
  if (!message) return;

  const chatWindow = document.getElementById("chat-window");
  chatWindow.innerHTML += `<div style="text-align: right; margin: 10px;"><b>You:</b> ${message}</div>`;

  if (initial_input === "None") {
      initial_input = message;
      fetchResponse(initial_input, "None", "None", chatWindow);
      askForCode(chatWindow);
  } else if (update === "None") {
      if (["yes", "y", "ok"].includes(message.toLowerCase())) {
          update = "ok";
          fetchResponse(initial_input, update, "None", chatWindow);
      } else {
          update = message;
          fetchResponse(initial_input, update, "None", chatWindow);
          askForCode(chatWindow);
      }
  } 
  else if (documentation === "None") {
      if (["yes", "y", "ok"].includes(message.toLowerCase())) {
          documentation = "ok";
          fetchResponse(initial_input, update, documentation, chatWindow);
      } else {
          resetChat();
      }
  }

  inputField.value = "";
}


function fetchResponse(initial_input, update, documentation, chatWindow) {
    fetch("https://7us7agqoy0.execute-api.us-east-1.amazonaws.com/coding_assistance", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            thread_id: String(Thread_id),
            initial_input: initial_input,
            update: update,
            documentation: documentation,
        }),
    })
    .then((response) => response.text())
    .then((data) => {
        setTimeout(() => {
            chatWindow.innerHTML += `<div style="text-align: left; margin: 10px;"><b>${selectedChatbot}:</b> <div style="background:radial-gradient(circle, #3c3b52 30%, #252233 100%); color: rgb(243, 243, 243); padding:25px; border-radius:10px;">${data}</div></div>`;
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);
    })
}

function askForDocumentation(chatWindow) {
    const botResponse = `<div style="text-align: left; margin: 10px;"><b>${selectedChatbot}:</b> <div style="background:radial-gradient(circle, #3c3b52 30%, #252233 100%); color: rgb(243, 243, 243); padding:25px; border-radius:10px;"><p>Do you want to generate documentation? Enter Yes/yes/y/ok to proceed, or anything else to start fresh.</p></div></div>`;
    chatWindow.innerHTML += botResponse;
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function askForCode(chatWindow) {
  const botResponse = `<div style="text-align: left; margin: 10px;"><b>${selectedChatbot}:</b> <div style="background:radial-gradient(circle, #3c3b52 30%, #252233 100%); color: rgb(243, 243, 243); padding:25px; border-radius:10px;"><p>Do you want to generate documentation? Enter Yes/yes/y/ok to proceed, or anything else to start fresh.</p></div></div>`;
  chatWindow.innerHTML += botResponse;
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function resetChat() {
    initial_input = "None";
    update = "None";
    documentation = "None";
    Thread_id = generateUniqueId();
}
