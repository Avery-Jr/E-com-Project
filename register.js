// TODO: When the DOM loads, set up event listeners for the registration form
const form = document.getElementsByClassName("form");
const firstName = document.getElementsById("firstName");
const lastName = document.getElementsById("lastName");
const email= document.getElementsById("email");
const password = document.getElementsById("password");

// TODO: Create a function to handle the registration form submission
form.addEventListener("click", function (e) {
  // 1. Prevent the default form submission
  e.perventDefult();
  // 2. Gather all form data into an object
let name = firstName + + lastName;
console.log(name);
  const user = {
    username : name,
    email: email,
    password: password,
  };
console.log(user)
  // 3. Validate form data (all required fields, email format, etc.)
const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

  // 4. Send the data to your API using fetch() with POST method

  // 5. Handle the response:
  //    - If successful, store user data in localStorage and redirect to home page
  //    - If error, display appropriate error message to user

});
// TODO: Create helper functions for form validation
