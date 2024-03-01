const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later'
];

// const sweetMessages = `${messages[0]}, sweetie`;

// const sweetMessages =[];

// for (let i = 0; i < messages.length; i++) {
//     const newMessages = `${messages[i]}, sweetie`;
//     sweetMessages.push(newMessages);
// }

const sweetMessages = messages.map((message) => `${message}, sweetie?`);

console.log(sweetMessages);

// const sweetMessages = [
//     'how are you doing, sweetie?',
//     'what are you up to, sweetie?',
//     'would you like to get a bite later, sweetie?',
// ];
