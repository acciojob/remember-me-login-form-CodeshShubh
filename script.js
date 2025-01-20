let btn1 = document.getElementById("submit");
let existingUserBtn = document.getElementById("existing");

// Add event listener to the submit button
btn1.addEventListener("click", storeInput);

// Function to handle form submission
function storeInput(e) {
  e.preventDefault(); // Prevent default form submission

  // Get user inputs
  let userName = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let checkbox = document.getElementById("checkbox").checked;

  // Validate inputs
  if (!userName || !password) {
    alert("Please fill in both username and password.");
    return;
  }

  // If checkbox is checked, store credentials in localStorage
  if (checkbox) {
    localStorage.setItem("username", userName);
    localStorage.setItem("password", password);
    alert(`Logged in as ${userName}`);
  } else {
    // If checkbox is not checked, clear the stored credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    alert("Stored credentials removed.");
  }

  // Check if there are saved details and show the existing user button
  toggleExistingUserButton();
}

// Function to toggle the "Login as existing user" button
function toggleExistingUserButton() {
  let savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    existingUserBtn.style.display = "block"; // Show the button
  } else {
    existingUserBtn.style.display = "none"; // Hide the button
  }
}

// Add event listener to the existing user button
existingUserBtn.addEventListener("click", loginAsExistingUser);

// Function to handle existing user login
function loginAsExistingUser() {
  let savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
}

// Check on page load if there are saved details
toggleExistingUserButton();
