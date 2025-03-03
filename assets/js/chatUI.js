let selectedChatbot = "AI Assistant";
let Thread_id = generateUniqueId();
let uname = "";
let app_name = "";
let fetch_link = "";

function generateUniqueId() {
  return 'id-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
}

function selectChatbot(name) {
  selectedChatbot = name;

  // Set API endpoint
  if (name === "Calculation") {
    fetch_link = "https://7us7agqoy0.execute-api.us-east-1.amazonaws.com/calculator";
  } else if (name === "Companion") {
    fetch_link = "https://7us7agqoy0.execute-api.us-east-1.amazonaws.com/my_info";
  } else if (name === "programing_Assistant") {
    fetch_link = "https://7us7agqoy0.execute-api.us-east-1.amazonaws.com/coding_assistance";
  }

  // Reset button styles
  const buttons = document.querySelectorAll(".chatbot-options button");
  buttons.forEach((button) => {
    button.style.backgroundColor = "#34495e"; // Default color
    button.style.color = "white";
    button.style.border = "none";
  });

  // Highlight the selected button
  const selectedButton = [...buttons].find(button => 
    button.textContent.trim().toLowerCase() === name.toLowerCase()
  );
  console.log("Selected Butten:", selectedButton);

  if (selectedButton) {
    selectedButton.style.backgroundColor = "#f39c12"; // Orange highlight
    selectedButton.style.color = "black";
    selectedButton.style.border = "2px solid #e67e22";
  }
}


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
  sendMessageToLambda(uname);

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

  if (selectedChatbot === "Calculation" || selectedChatbot === "Companion") {
    calculator_myinfo(message);
  } else if (selectedChatbot === "programing_Assistant") {
    programming_Bot(message);
  }
}

function calculator_myinfo(message) {
  fetch(fetch_link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: message,
      name: uname,
      thread_id: Thread_id,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      setTimeout(() => {
        const chatWindow = document.getElementById("chat-window");
        const botResponse = `<div style="text-align: left; margin: 10px;">
          <b>${selectedChatbot}:</b> 
          <div style="background: radial-gradient(circle, #3c3b52 30%, #252233 100%);
                      color: rgb(243, 243, 243); padding:25px; border-radius:10px;">
            ${data}
          </div>
        </div>`;
        chatWindow.innerHTML += botResponse;
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }, 1000);
    })
    .catch(error => console.error("Fetch error:", error));

  document.getElementById("user-input").value = "";
}

let initial_input = "None";
let update = "None";
let documentation = "None";

function programming_Bot(message) {
  const chatWindow = document.getElementById("chat-window");
  const inputField = document.getElementById("user-input");

  if (initial_input === "None") {
    initial_input = message;
    session="if you are ok with the problem statement Enter ok/yes/y. enter your request to change the problem statement";
    fetchResponse(initial_input, "None", "None",session);
  } 
  else if (!["yes", "y", "ok"].includes(update.toLowerCase())) {
    update = message;
    if(["yes", "y", "ok"].includes(update.toLowerCase())) session="if you want to proceed with the documentation Enter ok/yes/y. enter \"stop\" to start fresh";
    else session="if you are ok with the problem statement Enter ok/yes/y. enter your request to change the problem statement";
    fetchResponse(initial_input, update, "None",session);
  }else{

    documentation = ["yes", "y", "ok"].includes(message.toLowerCase()) ? "ok" : "stop";
    session="done with your response, thank you!!"
    if(documentation === "stop") {
      chatWindow.innerHTML += `<div style="text-align: left; margin: 10px;">
      <b>${selectedChatbot}:</b>
      <div style="background: radial-gradient(circle, #3c3b52 30%, #252233 100%);
                  color: rgb(243, 243, 243); padding:25px; border-radius:10px;">
        ${session} 
      </div>
    </div>`;
    chatWindow.scrollTop = chatWindow.scrollHeight;
    }else fetchResponse(initial_input, update, documentation,session);


    if (documentation !== "ok") resetChat();
  }

}

function fetchResponse(initial_input, update, documentation,session) {
  const inputField = document.getElementById("user-input");
  fetch(fetch_link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      thread_id: Thread_id,
      initial_input: initial_input,
      update: update,
      documentation: documentation,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      setTimeout(() => {
        const chatWindow = document.getElementById("chat-window");
        chatWindow.innerHTML += `<div style="text-align: left; margin: 10px;">
          <b>${selectedChatbot}:</b>
          <div style="background: radial-gradient(circle, #3c3b52 30%, #252233 100%);
                      color: rgb(243, 243, 243); padding:25px; border-radius:10px;">
            ${data} 
          </div>
        </div>`;
        chatWindow.innerHTML += `<div style="text-align: left; margin: 10px;">
          <b>${selectedChatbot}:</b>
          <div style="background: radial-gradient(circle, #3c3b52 30%, #252233 100%);
                      color: rgb(243, 243, 243); padding:25px; border-radius:10px;">
            ${session} 
          </div>
        </div>`;
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }, 1000);
    })
    .catch(error => console.error("Fetch error:", error));
    inputField.value = "";
}

function resetChat() {
  initial_input = "None";
  update = "None";
  documentation = "None";
  Thread_id = generateUniqueId();
}

function sendMessageToLambda(msg) {
  const url = "https://249ca2wwuf.execute-api.us-east-1.amazonaws.com/dev/";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", // Lambda expects form-urlencoded data
    },
    body: `chatbot1=${encodeURIComponent(msg)}&type=chatbot`, // URL-encoded body
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("name saved");
    })
    .catch((error) => {
      console.error("Fetch error:", error); // Log fetch errors
    });
}
