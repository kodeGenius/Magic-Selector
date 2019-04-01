// function to store user's name
function username() {
	let wname = document.getElementById('usename').value;
	document.getElementById('mi').innerHTML =`Hey ${wname}! Please select your Magic Number`
}

// compare function
function compre2(){
	let randomNumber = Math.floor(Math.random()*8);
	let eightBall = ' ';
	let myNum = document.getElementById('numValue').value;
	
	if(randomNumber == myNum){
		document.getElementById('root').innerHTML = `You have selected the right number. Your number is ${myNum}, while the Magic number is ${randomNumber}. Well Done!!!!!`
	
	}else{
		document.getElementById('root').innerHTML = `You have selected the Wrong number. Your numberis ${myNum}, while the Magic number is ${randomNumber}. Better luck next time!!!`
	}
}	
