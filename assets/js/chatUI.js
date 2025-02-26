let selectedChatbot = "AI Assistant";

function generateUniqueId() {
  return 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
}
let Thread_id = generateUniqueId();
function selectChatbot(name) {
  selectedChatbot = name;

  // Set API endpoint
  if (name === "Calculation") {
    fetch_link = "https://7us7agqoy0.execute-api.us-east-1.amazonaws.com/calculator";
  } else if (name === "Companion") {
    fetch_link = "https://7us7agqoy0.execute-api.us-east-1.amazonaws.com/my_info";
  }

  // Reset button styles
  const buttons = document.querySelectorAll(".chatbot-options button");
  buttons.forEach((button) => {
    button.style.backgroundColor = "#34495e"; // Default color (dark blue)
    button.style.color = "white";
    button.style.border = "none";
  });

  // Highlight the selected button
  const selectedButton = [...buttons].find(button => button.textContent.includes(name));
  if (selectedButton) {
    selectedButton.style.backgroundColor = "#f39c12"; // Orange for selection
    selectedButton.style.color = "black";
    selectedButton.style.border = "2px solid #e67e22"; // Add border for better visibility
  }

  alert("Selected: " + name);
}

let uname = "";
let app_name = "";
let fetch_link = "";

function startChat() {
  const username = document.getElementById("username").value.trim();
  const app = document.getElementById("chatbot-dropdown").value.trim();
  if (!username) {
    alert("Please enter your name.");
    return;
  }
  if (app === "none") {
    alert("Please select an application");
    return;
  }
  uname = username;


  document.getElementById("overlay").style.display = "none";
  document.querySelector(".container").classList.remove("hidden");

  // Display user's name at the top right
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

function sendMessage() {
  if (!fetch_link) {
    alert("Please start the chat first.");
    return;
  }

  const inputField = document.getElementById("user-input");
  const message = inputField.value.trim();
  if (!message) return;

  const chatWindow = document.getElementById("chat-window");
  chatWindow.innerHTML += `<div  style="text-align: right; margin: 10px;"><b>You:</b> ${message}</div>`;

  fetch(fetch_link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: message,
      name: String(uname),
      thread_id: String(Thread_id),
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Success:", data);
      setTimeout(() => {
        const botResponse = `<div style="text-align: left; margin: 10px;"><b>${selectedChatbot}:</b> <div style="background:radial-gradient(circle, #3c3b52 30%, #252233 100%); color: rgb(243, 243, 243); padding:25px; border-radius:10px;">${data}</div></div>`;
        chatWindow.innerHTML += botResponse;
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }, 1000);
    });

  inputField.value = "";
}
