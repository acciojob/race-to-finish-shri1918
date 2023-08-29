window.promises = [

	new promise((resolve)=> setTimeOut(()=>resolve('promise 1') Math.random()*4000+1000)),
	new promise((resolve)=> setTimeOut(()=> resolve('promise 2')Math.random ()*4000+1000)),
	new promise((resolve)=> setTimeOut(()=> resolve('promise 3')Math.random ()*4000+1000)),
	new promise((resolve)=> setTimeOut(()=> resolve('promise 4')Math.random ()*4000+1000)),
	new promise((resolve)=> setTimeOut(()=> resolve('promise 5')Math.random ()*4000+1000)),
	
];
Promise.any(promises)
  .then((result) => {
    // Printing the result to the output div
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error('All promises rejected:', error);
  });
// Do not change the code above this
// add your promises to the array `promises`
