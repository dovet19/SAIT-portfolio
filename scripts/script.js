// Form Validation Code
function validateForm() {
  // Get the values from the form
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;

  // Check if name is empty
  if (firstName == "") {
    alert("First name must be filled out");
    return false;
  }
  if (lastName == "") {
    alert("Last name must be filled out");
    return false;
  }

  // Check if email is empty or not a valid email address
  if (email == "" || !validateEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;  
}  

 // Function to validate email address format  
function validateEmail(email) {  
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  

    return re.test(String(email).toLowerCase());  
}

// Adding project description when clicked
let project1 = document.getElementById('project1')
let project2 = document.getElementById('project2')
let project3 = document.getElementById('project3')

project1.onclick = function () {
  project1.innerHTML = "Delilah's Doggy Daycare website built with HTML, CSS, and Javascript. Can calculate the booking rates and has a contact form."
  if (!this.classList.contains("text-warning")) {
    this.classList.add("text-warning");
  }
}
project2.onclick = function () {
  project2.innerHTML = "XYZ Inc.'s intranet site with employee profile and timesheet submission. Built using HTML and CSS."
  if (!this.classList.contains("text-danger-emphasis")) {
    this.classList.add("text-danger-emphasis");
  }
}
project3.onclick = function () {
  project3.innerHTML = "Website for Lucy's Laundry built with HTML and CSS."
  if (!this.classList.contains("text-primary-emphasis")) {
    this.classList.add("text-primary-emphasis");
  }
}
