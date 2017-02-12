// function getTempCallback(location, callback) {
//   callback(undefined, 78);//For success
//   callback('City is not found');//For Error
// }
//
// getTempCallback('Israel', function(err, temp){
//   if(err) {
//     console.log('error', err);
//   }
//   else{
//     console.log('success', temp)
//
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Israel').then(function(temp) {
//   console.log('promise success', temp);//For Success
// },
// function(err) {
//   console.log('promise error', err);//For Error
// })


/*

//Promise example!!!
function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }
    else{
      reject('Not a number');
    }
  });
}

//Success case
addPromise(3, 5).then(function(sum) {
  console.log('success', sum);
},
function(err){
  console.log('error', err);
});

//Error case
addPromise('Ofir', 9).then(function(sum) {
  console.log('This should not show up');
}, function(err) {
  console.log('This should appear', err);
});
*/
