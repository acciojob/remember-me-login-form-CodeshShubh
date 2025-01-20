//your JS code here. If required.


let btn1 = document.getElementById('submit');

btn1.addEventListener('click', StoreInput);

function StoreInput(e){

    e.preventDefault()
let userName = document.getElementById('username').value.trim();
let password = document.getElementById('password').value.trim();
let checkbox = document.getElementById('checkbox').checked;
	if (!userName || !password) {
    alert("Please fill in both username and password.");
    return;
  }
	if(checkbox){
    localStorage.setItem("username", userName);
    localStorage.setItem("password", password);
    alert(`Logged in as ${userName}`);
    }else{
        localStorage.removeItem("username");
    localStorage.removeItem("password");
    alert("Stored credentials removed.");
    }
    toggleExistingUserButton();

    
}


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