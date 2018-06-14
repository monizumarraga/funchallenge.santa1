const fs = require('fs');

fs.readFile('./santa.txt',(err,data) =>{
	console.time('funchallenge');
	if(err){
		console.log('errrrrrr')
	}
	const route=data.toString().split('');
	let floor= (route.filter(top=>{return top==="("})).length-(route.filter(top=>{return top===")"})).length
	console.log(floor);
	console.timeEnd('funchallenge');
})