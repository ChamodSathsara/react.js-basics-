function bath() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shower = true;

      if (shower) {
        console.log(`finish the bath`);
        resolve("finish the bath");
      } else {
        reject("non finish the bath");
      }
    }, 2000);
  });
}

function doHomeworl() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let book = true;

      if (book) {
        console.log(`finish the homework`);
        resolve("finish the homework");
      } else {
        reject("non finish the homework");
      }
    }, 3000);
  });
}

function play() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bat = true;

      if (bat) {
        console.log(`i going to play `);
        resolve(`i going to play`);
      } else {
        reject("i not going to play");
      }
    }, 1000);
  });
}

async function allDone() {
  try {
    await bath();
    await doHomeworl();
    await play();
  } catch (error) {
    console.log(error);
  }
}

allDone();
