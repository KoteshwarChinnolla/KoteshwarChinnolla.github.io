const apiEndpoint = "https://xtb5kfhgvc.execute-api.us-east-1.amazonaws.com"; // Replace with your API Gateway URL

// Fetch comments from the API
async function fetchComments() {
  const blogId = document.getElementById("blog-id").value; // Get blogId from hidden input
  try {
    const response = await fetch(`https://3egfs47417.execute-api.us-east-1.amazonaws.com/dev/comments?blogId=${blogId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = await response.json();
    console.log('Parsed Response Data:', data[0]);
    console.log('Parsed Response Data:', data[1]);
    console.log('Parsed Response Data:', data.length);
    const comments = data; // Parse the body field if it's a string
    displayComments(comments);
    } catch (error) {
    console.error("Error fetching comments:", error);
  }
}

function displayComments(comments) {
    const commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = "";
    for(let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${comment.name}</span>
        <p>${comment.text}</p>
      `;

      commentsList.appendChild(li);
    }
  }

// Submit a new comment
async function submitComment() {
  const blogId = document.getElementById("blog-id").value; // Get blogId from hidden input
  const nameInput = document.getElementById("name-input");
  const suggestionInput = document.getElementById("suggestion-input");
  const newComment = suggestionInput.value.trim();
  console.log(newComment);
  console.log(nameInput.value.trim());
  if (!newComment) {
      alert("Please enter a suggestion before submitting.");
      return;
  }

  const c=newComment+'&'+nameInput.value.trim()+'&'+blogId;
  console.log(c);

  try {
      const response = await fetch(`https://3egfs47417.execute-api.us-east-1.amazonaws.com/dev/comments/`, {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `blog_id=${blogId}&name=${nameInput.value.trim()}&text=${newComment}`
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
