function bath() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`finish the bath`);
      resolve("finish the bath");
    }, 2000);
  });
}

function doHomeworl() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`fini9sh my homework`);
      resolve(`finish my homework`);
    }, 3000);
  });
}

function play() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`i going to play `);
      resolve(`i going to play`);
    }, 1000);
  });
}

bath()
  .then((result) => {
    console.log(result);
    return doHomeworl();
  })
  .then((result) => {
    console.log(result);
    return play();
  })
  .then((result) => {
    console.log(result);
    console.log(`All Done`);
  });
