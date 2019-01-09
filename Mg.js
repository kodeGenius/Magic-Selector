
function username() {
	let wname = document.getElementById('usename').value;
	document.getElementById('mi').innerHTML =`Hey ${wname}! Please select your Magic Number`
}


function compare2(){
	let randomNumber = Math.floor(Math.random()*8);
	let eightBall = '';
	let myNum = document.getElementById('numValue').value;
	if(randomNumber === myNum){
		switch (randomNumber) {
  case 0:
  	eightBall = 'It is certain';
  	break;
  case 1:
  	eightBall = 'It is decidedly so';
  	break;
  case 3:
  	eightBall = 'Cannot predict now';
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
	
	}else{
		
	}
}
console.log(document.getElementById('root').innerHTML = eightBall);	
