const fs = require('fs');

fs.readFile('./santa.txt',(err,data) =>{
	console.time('funchallenge');
	if(err){
		console.log('errrrrrr')
	}
	const route=data.toString().split('');
	let floor= (route.filter(top=>{return top==="("})).length-(route.filter(top=>{return top===")"})).length
	console.log("last floor is "+floor);
	console.timeEnd('funchallenge');

	floor=0;
	let floor_down=0
	route.forEach((dir, num) => {
		if (dir==="("){
			floor=floor+1;
		}else{
			floor=floor-1;
		}
		if ((floor_down===0)&&(floor<0)){
			floor_down=num+1;
		}
	})
	console.log("first instruction in minus floor is "+floor_down);
})