function openFile(callback) {
  setTimeout(() => {
    console.log(`open File......`);
    callback();
  }, 3000);
}

function addSomething() {
  console.log(`Add  File Something......`);
}

function removeSomething() {
  console.log(`remove something File......`);
}

openFile(addSomething);

openFile(removeSomething);
