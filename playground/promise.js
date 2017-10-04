var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('argument should be numbers');
      }
    }, 2000)
  })
};
asyncAdd(5, 8).then((result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  });
var func = (a, b) => {
  return new Promise
}

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() =>{
//     //resolve('hey it woked')
//     reject('sorry man')
//
// },2500);
//
// });
// somePromise.then((yes) => {
//   console.log(yes);
// },
// (no) => {
//   console.log(no);
// });
