        // This function will be triggered when the button is clicked
        function greetUser() {
            // Get the value from the input field
            const name = document.getElementById("nameInput").value;
        
            // Check if the name is empty or not
            if (name) {
                // If name is entered, display a greeting message
                document.getElementById("greetingMessage").textContent = "Hello, " + name + "! Welcome to the Greeting Page!";
            } else {
                // If no name is entered, prompt the user
                document.getElementById("greetingMessage").textContent = "Please enter your name.";
            }
        }