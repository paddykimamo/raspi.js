//Script to check time and switch ON/OFF lights
//Run script every 1 minute
var myInt = setInterval(function () {
	var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
	var LED2 = new Gpio(2, 'out'); //use GPIO pin 2,3,4,5,9,14
	var LED3 = new Gpio(3, 'out');
	var LED4 = new Gpio(4, 'out');
	var LED5 = new Gpio(5, 'out');
	var LED9 = new Gpio(9, 'out');
	var LED14 = new Gpio(14, 'out');

	const date = new Date();
	console.log(date);
	let hour = date.getHours();

	//time && action
	switch (hour){
	    case 0:
	    case 1:
	    case 2:
	    case 3:
	    case 4:
	    case 5:
		console.log('Front lights ON, Garden Lights ON');
			LED2.writeSync(1);
			LED14.writeSync(1);
		break; 
	    case 6:
	    case 7:
	    case 8:
	    case 9:
	    case 10:
	    case 11:
	    case 12:
	    case 13:
	    case 14:
	    case 15:
	    case 16:
	    case 17:
	    case 18:
		console.log('Front lights OFF, Garden Lights OFF');
			LED2.writeSync(0);
			LED14.writeSync(0);
		break; 
	    case 19:
	    case 20:
	    case 21:
	    case 22:
	    case 23:
		console.log('Front lights ON, Garden Lights ON');
			LED2.writeSync(1);
			LED14.writeSync(1);
		break;
	    default:
		console.log('Not applicable');
		break;

	}
}, 60000);
