class Student {
	constructor (name, email) {
		this.name = name;
		this.email = email;
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

			for (let std of this.students){
				if (studentToRegister.email === std.email) {
					console.log(`Email is already registered.`);
					return false;
				}
			}
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
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};

runTest(reactBootcamp, testStudent);