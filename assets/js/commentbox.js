const apiEndpoint = "https://xtb5kfhgvc.execute-api.us-east-1.amazonaws.com"; // Replace with your API Gateway URL

// Fetch comments from the API
async function fetchComments() {
  const blogId = document.getElementById("blog-id").value; // Get blogId from hidden input
  try {
    const response = await fetch(`https://3egfs47417.execute-api.us-east-1.amazonaws.com/dev/comments?blogId=1`);
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const comments = await response.json();
    displayComments(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}

function displayComments(comments) {
    const commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = "";
    comments.forEach(comment => {
      const li = document.createElement("li");
      li.textContent = `${comment.name}: ${comment.text}`;
      commentsList.appendChild(li);
    });
  }

// Submit a new comment
async function submitComment() {
  const blogId = document.getElementById("blog-id").value; // Get blogId from hidden input
  const nameInput = document.getElementById("name-input");
  const suggestionInput = document.getElementById("suggestion-input");
  const newComment = suggestionInput.value.trim();

  if (!newComment) {
    alert("Please enter a suggestion before submitting.");
    return;
  }

  try {
    const response = await fetch(`${apiEndpoint}/dev`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        blogId, // Send the current blogId
        name: nameInput.value.trim(), // Replace with user input or session data
        text: newComment
      })
    });

    if (!response.ok) {
      throw new Error("Failed to submit comment");
    }

    suggestionInput.value = "";
    fetchComments(); // Refresh comments
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
}

// Initialize comments on page load
document.addEventListener("DOMContentLoaded", fetchComments);
