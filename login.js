// TODO: When the DOM loads, set up event listeners for the login form
const form = document.getElementsByClassName("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

// TODO: Create a function to handle the login form submission
async function logFrom(){
  // 1. Prevent the default form submission
  e.perventDefult();

  // 2. Gather email and password data
  const user = {
    email: email,
    password: password,
  };
  console.log(user);

  // 3. Send the data to your API using fetch() with POST method
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
      logForm();
    } catch (error) {
      console.error(error.message);
    }
  });

  // 4. Handle the response:
  //    - If successful, store user data in localStorage and redirect to home page
  //    - If error, display appropriate error message to user\
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
};