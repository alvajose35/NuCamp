const listArray = [];
const shoppingList = document.getElementById("shoppingList");
const printBtEl = document.getElementById("printButton");

printBtEl.addEventListener("click", () => window.print());

function getItem() {
	event.preventDefault();
	try {
		const item = document.getElementById("item").value;
		if (item === "") {
			throw new SyntaxError("Form is currently empty");
		}			
		
		if (!listArray.includes(item)) {
			listArray.push(item);
			listArray.sort();
		}
		console.log(listArray);

		removeList();
		makeList();
		
		document.getElementById("myForm").reset();
	} 
	catch (error) {
		console.error(error);				
	}
}

function makeList() {
	for (let ittem of listArray) {
		listItem = document.createElement('li');
		listItem.textContent = ittem;
		listItem.addEventListener("click", removeItem);
		shoppingList.appendChild(listItem);
	}
}

function removeList() {
	while (shoppingList.firstChild){
		shoppingList.removeChild(shoppingList.firstChild);
	}
}

function removeItem(event) {
	try {
		const item = event.currentTarget.textContent;
		let index = listArray.indexOf(item);
		if (index === -1) {
			throw new Error(`The item ${item} was not in the list.`);		
		}
		listArray.splice(index, 1);
		
		console.log(listArray);

		removeList();
		makeList();
	} catch (error) {
		console.error(error);				
	}
	
}

// function printTheScreen() {
// 	window.print();
// }