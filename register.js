// TODO: When the DOM loads, set up event listeners for the registration form
const form = document.getElementsByClassName("form");
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email= document.getElementById("email").value;
const password = document.getElementById("password").value;
console.log(firstName)
// TODO: Create a function to handle the registration form submission
async function regForm() {
  // 1. Prevent the default form submission
  e.perventDefult();
  // 2. Gather all form data into an object
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  console.log(user);
  // 3. Validate form data (all required fields, email format, etc.)
  const isValidEmail = () => {
    const validity = email.value.length !== 0 && emailRegExp.test(email.value);
    return validity;
  };

  // 4. Send the data to your API using fetch() with POST method
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(user, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Automatically converted to "username=example&password=password"
        body: JSON.stringify({ title: input.value }),
      });
      regForm();
    } catch (error) {
      console.error(error.message);
    }
  });
  // 5. Handle the response:
  //    - If successful, store user data in localStorage and redirect to home page
  //    - If error, display appropriate error message to user
function alert() {
  if (error == true) {
    alert("Error has been made, check for any invalid inputs.")
  } else {
    return user;
    location.replace(
      "https://congenial-goggles-wr5rx4j6pqvphg667-40645.app.github.dev/"
    );
  }
}

}


// TODO: Create helper functions for form validation
