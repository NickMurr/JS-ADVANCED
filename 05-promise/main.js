console.log('Request Data...');
// setTimeout(() => {
//   console.log('Preparing data...');
//
//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   }
//
//   setTimeout(() => {
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000);
// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Preparing data...');
//
//     const backendData = {
//       server: 'awss',
//       port: 2000,
//       status: 'working',
//     };
//     resolve(backendData)
//   }, 2000)
// });
//
//
// p.then((data: any) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ ...data, modified: true })
//     }, 2000);
//   });
// })
//   .then((updatedData) => {
//     console.log(updatedData)
//   })
//   .catch(err => {
//     console.error("Error", err)
//   })
//   .finally(() => console.log('Finally'))
var sleep = function (ms) {
    return new Promise(function (resolve) {
        return setTimeout(function () {
            return resolve(ms);
        }, ms);
    });
};
// sleep(2000).then((data: any) => console.log(`After ${data / 1000} seconds`))
// sleep(3000).then((data: any) => console.log(`After ${data / 1000} seconds`))
Promise.all([sleep(2000), sleep(5000)])
    .then(function (data) {
    console.log('All Promises', data[data.length - 1] / 1000);
});
Promise.race([sleep(2000), sleep(5000)])
    .then(function (data) {
    console.log('Race Promises', data / 1000);
});
