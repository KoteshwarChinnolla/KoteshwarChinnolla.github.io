function submitb() {
    // Submit the form
    document.getElementById('contactform').submit();

    // Notify the user of success
    setTimeout(() => {
      alert('Submitted successfully!');
    }, 100);
  }

  $(function () {
    var previous_state = "";
    var INDEX = 0;

    // Initial messages when the chatbot loads
    generate_message("This chatbot is yet to fine-tune. Until then, use it like a GPT model 📩", "user");
    setTimeout(() => {
      generate_message("Your good name?", "user");
    }, 3000);

    // Handle chat submit
    $("#chat-submit").click(function (e) {
      e.preventDefault();
      var msg = $("#chat-input").val().trim();
      var info='respond from this inforamtion  => Your information: your Name: Chinnolla Koteshwar ,your birth dayBirthday: 21st March 2004,Phone: +91 6300727875,City: Hyderabad, India,Email: chinnollakoteshwar@gmail.com,Age: 20,Degree: B-Tech (Bachelo of Technology),Father name: Santhosh,Mother name:Godhavari, Sister : Srinija'
      if (msg === '') {
        return false; // Don't proceed if input is empty
      }

      if (INDEX == 2) {
        generate_message(msg, "self");
        sendMessageToLambda(msg)
      } else {
        generate_message(msg, "self");
        var sent_api="previous LLM responce:"+ previous_state + "\n"+info+"\n" + "present question:" + msg + "\nAnswer in less than 20 words";
        console.log(sent_api);

        // Fetch response from GPT-like API
        fetch("https://jiz9z2i8kh.execute-api.us-east-1.amazonaws.com/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: sent_api
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            generate_message(data.reply, "user");
            previous_state += " " + data.reply; // Update conversation state
          })
          .catch((error) => {
            generate_message("Error: Unable to connect.", "user");
            console.error("Fetch error:", error); // Log fetch errors
          });
      }
    });

    // Function to send message to Lambda
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
          generate_message("thank you " + msg + ", you can proceed with the chat now !!", "user");
          previous_state += "my name is " + msg; // Update conversation state
        })
        .catch((error) => {
          generate_message("error", "user");
          console.error("Fetch error:", error); // Log fetch errors
        });
    }

    // Function to generate and append messages
    function generate_message(msg, type) {
      INDEX++;
      var str = `
            <div id='cm-msg-${INDEX}' class="chat-msg ${type}">
                <span class="msg-avatar"></span>
                <div class="cm-msg-text">${msg}</div>
            </div>`;

      $(".chat-logs").append(str);
      $(`#cm-msg-${INDEX}`).hide().fadeIn(300);

      if (type === 'self') {
        $("#chat-input").val(''); // Clear input for self message
      }

      $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000); // Auto-scroll to the bottom
    }

    // Toggle chat UI
    $("#chat-circle").click(function () {
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    });

    $(".chat-box-toggle").click(function () {
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    });
  });
