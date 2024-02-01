// Task 1: Validate Username - Check if the username is at least 5 characters long. If the username is not valid, throw an error with a message.
function validateUsername(username) {
	if (username.length < 5) {
		throw new Error("Too short: Username should be at least 5 characters in length");
	}
}
  
// Task 2: Validate Password - Check if the password is at least 8 characters long and contains at least one number. If the password is not valid, throw an error with a message.
function validatePassword(password) {
	if (password.length < 8) {
		throw new Error("Password must be at least 8 characters long");
	}
	let hasNum = false;
	for (let char of password) {
		if (!isNaN(Number(char))) {
			hasNum = true;
		}
	}
	if (!hasNum) {
		throw new Error("Password must contain at least one number");
	}
}

// Task 3: Validate Email - Check if the email contains an '@' symbol. If the email is not valid, throw an error with a message.
function validateEmail(email) {
	if (!email.includes("@") || !email.includes(".")) {
		throw new Error("Not a valid email");
	}
}

// Task 4: Validate User - Use the above validation functions to validate the user's username, password, and email. If any validation fails, log the error and return false. Otherwise, return true.
function validateUser(user) {
	try{
		validateUsername(user.username);
		validatePassword(user.password);
		validateEmail(user.email);
		return true;
	}
	catch(err) {
		// console.log(err);
		// console.log(err.name);
		// console.log(err.message);
		// console.log(err.stack);
		console.error(err.message);
		return false;
	}
	// finally {
	// 	return true;
	// }
  }
  
  
  
  
  
  
  
  
  
  //----------------------------- TESTS --------------------------------------------
  // Do not modify the below code -- this is test code that will help you determine if you completed each task correctly. Be sure to open the console to see the test messages.
  
  //test function
  function testValidation() {
	function runTest(description, testFunc, expectError = false) {
	  try {
		const result = testFunc();
		if (expectError) {
		  console.error(`${description} failed. Expected an error but did not receive one.`);
		} else if (result) {
		  console.log(`${description} passed.`);
		} else {
		  console.error(`${description} failed.`);
		}
	  } catch (e) {
		if (expectError) {
		  console.log(`${description} passed. Received an expected error.`);
		} else {
		  console.error(`${description} threw an unexpected error:`, e.message);
		}
	  }
	}
	
	//test case data - these are objects!
	const user1 = {username: "john", password: "Password1", email: "john@example.com"}; //should fail (username)
	const user2 = {username: "janedoe", password: "Password", email: "jane@example.com"}; //should fail (password missing number)
	const user3 = {username: "juliadoe", password: "Pword1", email: "julia@example.com"}; //should fail (password too short)
	const user4 = {username: "jamaldoe", password: "Password1", email: "jamal.example.com"}; //should fail (email)
	
	//tests
	runTest("Username validation - short username", () => validateUsername(user1.username), true); // Expects an error
	runTest("Password validation - missing number", () => validatePassword(user2.password), true); // Expects an error
	runTest("Password validation - too short", () => validatePassword(user3.password), true); // Expects an error
	runTest("Email validation - missing @ symbol", () => validateEmail(user4.email), true); // Expects an error
	runTest("User validation", () => {
	  return !validateUser(user1) && // short username, expects an error
		!validateUser(user2) && // missing number in password, expects an error
		!validateUser(user3) && // password too short, expects an error
		!validateUser(user4);   // missing @ in email, expects an error
	});
  }
  
  console.clear();
  testValidation();