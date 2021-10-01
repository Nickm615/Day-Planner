currentTime = 16//moment().format("H");
// console.log(currentTime)
var textArea=$(".text-area")
console.log(textArea)
window.setInterval(function () {
    $('#currentDay').html(moment().format('ddd MM/DD/YYYY H:mm:ss'))
}, 1000);

for (i=0; i < textArea.length;  i++){

    if (parseInt(textArea[i].id) < currentTime){
        textArea[i].setAttribute('class','past');
    }
    else if (parseInt(textArea[i].id) === currentTime){
        textArea[i].setAttribute('class','present');
    }
    else if (parseInt(textArea[i].id) > currentTime) {
        textArea[i].setAttribute('class','future')
    }
}