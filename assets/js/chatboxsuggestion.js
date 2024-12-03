const suggestions = ['What is your name?',
  'Where do you study?',
  'What is your CGPA?',
  'Where did you complete your intermediate education?',
  'What was your score in Intermediate?',
  'What is your major?',
  'Which semester are you currently in?',
  'Which project are you currently working on?',
  'What did you use for autonomous navigation in your vehicle project?',
  'What is the focus of your product demand prediction project?',
  'What deep learning models did you use for product demand prediction?',
  'What was the prediction accuracy for your product demand project?',
  'What was your approach to building the real-time e-commerce website?',
  'What is the primary focus of the Comprehensive Health Web project?',
  'How did you handle doctor handwriting recognition in your project?',
  'What is the purpose of the Rental System in the Comprehensive Health Web project?',
  'Which certification courses have you completed related to AWS?',
  'How do you plan to use machine learning in the future?',
  'What were the major learnings from your machine learning Udemy certification?',
  'What did you learn from your NPTL Python course?',
  'What is your experience with AWS Lambda?',
  'What is your experience with AWS DynamoDB?',
  'What did you learn from your VLSI lab work?',
  'How do you plan to enhance your skills in embedded systems?',
  'What leadership roles have you taken during your academic career?',
  'What is your final year project?',
  'How do you plan to improve the navigation of your autonomous vehicle?',
  'Can you explain how LADAR technology is used in your project?',
  'How did you ensure security for your e-commerce website?',
  'What role did deep learning play in your Product Demand Prediction project?',
  'What challenges did you face while building the A* Algorithm Autonomous Navigation Vehicle?',
  'How does the A* algorithm help in autonomous vehicle navigation?',
  'Can you explain the concept of machine learning in cloud computing?',
  'What is the focus of your VLSI project work?',
  'Which tools did you use for processing LADAR data in your autonomous navigation project?',
  'How do you balance academics and extracurricular activities?',
  'What was the most impactful hackathon you participated in?',
  'What impact do you expect from your work on autonomous vehicles?',
  'What was your role in the EPITOME hackathon?',
  'What was the focus of your CBIT hackathon project?',
  'What did you contribute to the Challenge ACI hackathon?',
  'What was the most challenging aspect of participating in hackathons?',
  'What was the most rewarding part of participating in hackathons?',
  'How did you contribute to the Advanced Academic Center?',
  'How does participating in extracurricular activities benefit you as a student?'];

const searchBox = document.getElementById('chat-input');
const suggestionBox = document.getElementById('suggestion-box');

/**
 * Updates the suggestion box with filtered suggestions based on the user's input.
 * 
 * This function reads the current value from the search input box, filters the suggestions 
 * array to include only those items that start with the input value, and displays matching
 * suggestions in the suggestion box. If no input is provided or no matches are found,
 * the suggestion box is hidden. Clicking on a suggestion will populate the search input 
 * with the selected suggestion and hide the suggestion box.
 */
function showSuggestions() {
  const query = searchBox.value.toLowerCase();
  suggestionBox.innerHTML = '';

  if (query) {
    const filteredSuggestions = suggestions.filter(item =>
      item.toLowerCase().startsWith(query)
    );

    if (filteredSuggestions.length > 0) {
      suggestionBox.style.display = 'block';
      filteredSuggestions.forEach(suggestion => {
        const div = document.createElement('div');
        div.textContent = suggestion;
        div.onclick = () => {
          searchBox.value = suggestion;
          suggestionBox.style.display = 'none';
        };
        suggestionBox.appendChild(div);
      });
    } else {
      suggestionBox.style.display = 'none';
    }
  } else {
    suggestionBox.style.display = 'none';
  }
}

// Close suggestion box if clicked outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.chat-input')) {
    suggestionBox.style.display = 'none';
  }
});