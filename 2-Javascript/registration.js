class Student {
	constructor (name, email) {
		this.name = name;
		this.email = email;
	}

	getinfo() {
		console.log(`The student ${this.name} email address is ${this.email}.`);
	}
}

class Bootcamp {
	constructor (name, level, students = []) {
		this.name = name;
		this.level = level;
		this.students = students;
	}

	registerStudent(studentToRegister) {
		
		// Validate that student info is not missing before registering
		if (studentToRegister.name === undefined || studentToRegister.email === undefined) {
			console.log(`Invalid name or email.`);
			return false;
		}
		else {

			// Check to see if student is already registered
			if (this.students.find(item => item.email == studentToRegister.email) != undefined) {
				console.log(`The email ${studentToRegister.email} is already registered.`);
				return false;
			}

			// for (let std of this.students){
			// 	if (studentToRegister.email === std.email) {
			// 		console.log(`Email is already registered.`);
			// 		return false;
			// 	}
			// }

			// Register new student
			this.students.push(studentToRegister);
			console.log(`Successfully registered ${studentToRegister.name} in ${this.name} bootcamp.`);
			return true;
		}
	}

	listStudents() {

		// Check to see if list of students is empty
		if (this.students.length === 0) {
			console.log(`No students are registered to the ${this.name} bootcamp.`);
			return false;
		}
		else {
			console.log(`The students registered in ${this.name} are:`);
			for(let stud of this.students) {
				console.log(`Name: ${stud.name}  Email: ${stud.email}`);
			}
			return true;
		}
	}

// BONUS

	getinfo() {
		console.log(`This bootcamp name is "${this.name}" and it's level is "${this.level}".`);
	}

	removeStudent(email) {

		// Check to see if email exists and if so remove student
		for (let x in this.students) {
			if (this.students[x].email === email) {
				console.log(`Successfully removed ${this.students[x].name} with the email ${this.students[x].email}.`);
				this.students.splice(x, 1);
				return true;
			}
		}
		
		// No student with that email found
		console.log(`ERROR: No student with the email ${email} found.`);
	}

	listStudentsTable() {

		// Check to see if list of students is empty
		if (this.students.length === 0) {
			console.log(`No students are registered to the ${this.name} bootcamp.`);
			return false;
		}
		else {
			console.log(`The students registered in ${this.name} are:`);
			console.table(this.students);
			return true;
		}
	}
}

// TEST OF TASK 1 - Student Class
testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

// TEST OF TASK 2 - Bootcamp Class
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}


// TEST OF TASK 3 & 4
const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};

runTest(reactBootcamp, testStudent);

// BONUS TASKs
console.log("\nBONUS TASKS\nI will repopulate the bootcamp with Bugs Bunny, Babs Bunny and 10 more random students.");

 reactBootcamp.registerStudent(testStudent);
 reactBootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));

// I tried using an API to fetch a list of random words to use for new students but we use Node v16.13.2 
// and 'fetch' wasn't implemented until Node v18 so I used the browser and then copy it.

// async function fetchWord() {
// 	const word = await fetch(
// 		"https://random-word-api.herokuapp.com/word?number=20"
// 	).then((response) => response.text());
// 	console.log(word);
// }
// fetchWord();

let jsonArr = ["debased","pizzles","assegaied","stormed","typographed","pinta","bennes","edgers","waterfalls","fearing","morphallaxis","untrusses","poultryman","bethesda","perionychium","computerizes","wartier","refraction","hermes","theodicies"];

// Create 10 random students
for (let i = 0; i < jsonArr.length; i+=2) {
	let newName = jsonArr[i] + " " + jsonArr[i+1];
	let newEmail = jsonArr[i] + "." + jsonArr[i+1] + "@bunny.com";
	reactBootcamp.registerStudent(new Student(newName, newEmail));
}

console.log(`\nPRINT STUDENTS AS A TABLE`);
reactBootcamp.listStudentsTable();

console.log(`\nGET BOOTCAMP INFO`);
reactBootcamp.getinfo();

console.log(`\nGET STUDENT INFO`);
testStudent.getinfo();

console.log(`\nREMOVE STUDENT TEST`);
reactBootcamp.removeStudent("bafgh@bunny.com");
reactBootcamp.removeStudent("babs@bunny.com");

reactBootcamp.listStudentsTable();

