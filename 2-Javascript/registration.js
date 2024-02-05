class Student {
	constructor (name, email) {
		this.name = name;
		this.email = email;
	}

	getinfo() {
		console.log(`The student ${this.name} email is ${this.email}`);
	}
}

class Bootcamp {
	constructor (name, level, students = []) {
		this.name = name;
		this.level = level;
		this.students = students;
	}

	registerStudent(studentToRegister) {
		// console.log(studentToRegister.name);
		// console.log(studentToRegister.email);

		if (studentToRegister.name === undefined || studentToRegister.email === undefined) {
		// console.log("Inside first IF");
			console.log(`Invalid name or email`);
			return false;
		}
		else {
		// console.log("Inside first else");


			if (this.students.find(item => item.email == studentToRegister.email) != undefined) {
				console.log(`Email is already registered. (find method)`);
				return false;
			}
			// for (let std of this.students){
			// 	if (studentToRegister.email === std.email) {
			// 		console.log(`Email is already registered.`);
			// 		return false;
			// 	}
			// }
			this.students.push(studentToRegister);
			console.log(`Successfully registered ${studentToRegister.name} in ${this.name} bootcamp.`);
			return true;
		}
	}

	listStudents() {
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

	getinfo() {
		console.log(`This bootcamp name is "${this.name}" and it's level is "${this.level}".`);
	}

	removeStudent(email) {
		// for (let student of this.students) {
		// 	console.log(email);
		// 	if (student.email === email) {
		// 		console.log("here");
		// 		let index =  this.students
		// 		// this.students.splice(i, 1);
		// 		console.log(`Successfully removed ${student.name} with the email ${student.email}.`);
		// 		return true;
		// 	}
		// }

		for (let x in this.students) {
			if (this.students[x].email === email) {
				console.log(`Successfully removed ${this.students[x].name} with the email ${this.students[x].email}.`);
				this.students.splice(x, 1);
				return true;
			}
		}


		// if (this.students.email.includes(email))
		
		console.log(`ERROR: No student with the email ${email} found.`);
	}

	listStudentsTable() {
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

//TEST OF TASK 1 - Testing Student Class
testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

//TEST OF TASK 2  - Testing Bootcamp Class
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

//TEST OF TASK 3
// const runTest = (bootcamp, student) => {
//     const attemptOne = bootcamp.registerStudent(student);
//     const attemptTwo = bootcamp.registerStudent(student);
//     const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
//     if ( attemptOne && !attemptTwo && !attemptThree) {
//         console.log("TASK 3: PASS");
//     }
// };

//TEST OF TASK 4
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
    // bootcamp.students = [];
    // if (!bootcamp.listStudents()) {
    //     console.log("TASK 4: PASS 2/2");
    // }
};

runTest(reactBootcamp, testStudent);

console.log("BONUS TASKS");
reactBootcamp.getinfo();
reactBootcamp.listStudentsTable();
//test remove student
reactBootcamp.removeStudent("bafgh@bunny.com");
reactBootcamp.removeStudent("babs@bunny.com");

reactBootcamp.listStudents();
testStudent.getinfo();

// TRY TO USE AN API TO FETCH A BUNCH OF RANDOM WORDS TO USE AS NEW STUDENTS BUT 
// APPARENTLY NUCAMP HAD US INSTALLED NODE V16.13.2 AND IT IS NOT UNTIL NODE V18 
// THAT FETCH WAS ADDED

// async function fetchWord() {
// 	const word = await fetch(
// 		"https://random-word-api.herokuapp.com/word?number=20"
// 	).then((response) => response.text());
// 	console.log(word);
// }
// fetchWord();

let jsonArr = ["debased","pizzles","assegaied","stormed","typographed","pinta","bennes","edgers","waterfalls","fearing","morphallaxis","untrusses","poultryman","bethesda","perionychium","computerizes","wartier","refraction","hermes","theodicies"];
console.log(jsonArr.length);
for (let i = 0; i < jsonArr.length; i+=2) {
	
	let newName = jsonArr[i] + " " + jsonArr[i+1];
	let newEmail = jsonArr[i] + "." + jsonArr[i+1] + "@bunny.com";

	console.log(newName);
	console.log(newEmail);

	reactBootcamp.registerStudent(new Student(newName, newEmail));

}

reactBootcamp.listStudentsTable();

