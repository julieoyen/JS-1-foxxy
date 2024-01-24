// TRIM

const carName = "       B         M       W         ";

// trim()
// Will remove the spaces for you
// and show you a beautiful string
// expected result = BMW

const trimmedCarName = carName.trim().replace(/[^a-zA-Z0-9]/g, '');

console.log(trimmedCarName)