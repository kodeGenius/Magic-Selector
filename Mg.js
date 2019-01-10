
function username() {
	let wname = document.getElementById('usename').value;
	document.getElementById('mi').innerHTML =`Hey ${wname}! Please select your Magic Number`
}


function compare2(){
	let randomNumber = Math.floor(Math.random()*8);
	let eightBall = '';
	let myNum = document.getElementById('numValue').value;
	if(randomNumber === myNum){
		console.log("correct number")
	
	}else{
		console.log("Wrong number")
	}
}
console.log(document.getElementById('root').innerHTML = eightBall);	
