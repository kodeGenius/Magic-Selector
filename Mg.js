
function username() {
	let wname = document.getElementById('usename').value;
	document.getElementById('mi').innerHTML =`Hey ${wname}! Please select your Magic Number`
}

function compare2(){
	//let randomNumber = Math.floor(Math.random()*8);
	let eightBall = ' ';
	let myNum = document.getElementById('numValue').value;
	if(myNum === 0){
		alert('0')
	}else if(myNum===1){
		alert('1')
	}else if(myNum===2){
		alert('2')
	}else if(myNum===3){
		alert('3')
	}
	/*switch (myNum) {
  case 0:
  	eightBall = 'It is certain';
  	break;
  case 1:
  	eightBall = 'It is decidedly so';
  	break;
  case 3:
  	alert( 'Cannot predict now' );
  	break;
  case 4:
  	eightBall = 'Do not count on it';
  	break;
  case 5:
  	eightBall = 'My sources say no';
  	break;
  case 6:
  	eightBall = 'Outlook not so good';
  	break;
  case 7:
  	eightBall = 'Signs point to yes';
  	break;
	}

	console.log(eightBall);

	/*console.log(randomNumber);
	if(randomNumber == myNum){
		console.log("correct number")
	
	}else{
		console.log("Wrong number")
	}
	console.log(myNum);
	console.log(randomNumber);*/
}

