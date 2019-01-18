var celciusValue = document.getElementById('celciusValue');
var farenhiteValue = document.getElementById('farenhiteValue');
var kelvinValue = document.getElementById('kelvinValue');

//values
var span = document.querySelectorAll('.span');
for (let i = 0; i < span.length; i++) {
    span[i].style.visibility = 'hidden';
}




//addEventListenera

celciusValue.addEventListener('input', cel);
farenhiteValue.addEventListener('input', faren);
kelvinValue.addEventListener('input', kel);

//function

function cel() {
    const cValue = parseInt(celciusValue.value);
  	// valid(cValue,celciusValue);
    let fValue = ((cValue * 9) / 5) + 32;
    let kValue = cValue + 273;
    farenhiteValue.value = fValue;
    kelvinValue.value = kValue;
    var span = document.querySelectorAll('.span');
    for (let i = 0; i < span.length; i++) {
        span[i].style.visibility = 'visible';
    }
    if (celciusValue.value == '') {
        farenhiteValue.value = '';
        kelvinValue.value = '';
        for (let i = 0; i < span.length; i++) {
            span[i].style.visibility = 'hidden';
        }
    }

}

function faren() {
    const fValue = parseInt(farenhiteValue.value);
  	// valid(fValue,farenhiteValue);
    let cValue = (5 * (fValue - 32)) / 9;
    let kValue = 273 + ((fValue - 32) / 9);
    celciusValue.value = cValue;
    kelvinValue.value = kValue;
    for (let i = 0; i < span.length; i++) {
        span[i].style.visibility = 'visible';
    }
    if (farenhiteValue.value == '') {
        celciusValue.value = '';
        kelvinValue.value = '';
        for (let i = 0; i < span.length; i++) {
            span[i].style.visibility = 'hidden';
        }
    }

}

function kel() {
    const kValue = parseInt(kelvinValue.value);
    //   valid(kValue,kelvinValue);
    let cValue = kValue - 273;
    let fValue = 273 + ((kValue - 32) / 9);
    farenhiteValue.value = fValue;
    celciusValue.value = cValue;
    for (let i = 0; i < span.length; i++) {
        span[i].style.visibility = 'visible';
    }
    if (kelvinValue.value == '') {
        farenhiteValue.value = '';
        celciusValue.value = '';
        for (let i = 0; i < span.length; i++) {
            span[i].style.visibility = 'hidden';
        }
    }

}

// validation function\

// function valid(val,degree){
//    if (true) {
//    	alert('You should write any number!');
//     	degree.value='';
//     	return false;
//    }
// }