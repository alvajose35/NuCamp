class Book {
	constructor(title, author, avialable = true){
		this.title = title;
		this.author = author;
		this.avialable = avialable;
	}
}

const library = {

	books: [],

	addBook(title, author) {
		let buch = new Book (title, author);
		this.books.push(buch);
		console.log(`Successfully added "${buch.title}" by ${buch.author} to the library! There are now ${this.books.length} books in the DB.`);
	},

	checkOutBook(title) {
		try {
			let found = false;
			for (let libro of this.books) {
				if (libro.title === title && libro.avialable) {
					found = true;
					libro.avialable = false;
					console.log(`Successfully checked out "${libro.title}" from the DB.`);
					break;
				}
				// else {
				// 	console.log("Book not found in the DB.");
				// }
			}
			if(!found){
				throw new Error(`The book: ${title} was not found or is already checked out.`);
			}
		}
		catch (err) {
			console.error(err.message);
		}
	},

	getAvailableBooks() {
		let avBooks = [];
		for (let buchen of this.books){
			if (buchen.avialable) {
				avBooks.push(buchen);
			}
		}
		// console.log(`There are currently ${avBooks.length} avialable books.\nThe avialable books are: ${JSON.stringify(avBooks, null, 2)}`);
		console.log(`There are currently ${avBooks.length} avialable books. The avialable books are:`);
		console.table(avBooks);
	},

	getAllBooks() {
		console.log(`There are currently ${this.books.length} total books. The books are:`);
		console.table(this.books);
	}
}

let newBooks = 
	`[
		{"title": "El best JavaScript", "author": "Narcin Javejo"},
		{"title": "El Libro de JavaScript", "author": "Juan Caballo"},
		{"title": "JavaScript and Its Uses", "author": "John Wayne"}
	]`;

// let newBooks2 = `[{"title": "El best JavaScript", "author": "Narcin Javejo"},{"title": "El Libro de JavaScript", "author": "Juan Caballo"},{"title": "JavaScript and Its Uses", "author": "John Wayne"}]`;


function receiveBooks(jsonString) {
	let jsonObj = JSON.parse(jsonString);
	for (let eachJsObj of jsonObj) {
		library.addBook(eachJsObj.title, eachJsObj.author);
	}
}

// Tests
console.log(`There are currently ${library.books.length} books in the library's database.`);
library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
receiveBooks(newBooks);
// console.log(library.books);
library.checkOutBook("Eloquent JavaScript");
library.checkOutBook("Grokking the Coding Interview");
library.getAvailableBooks();
library.getAllBooks();
