currentTime = moment().format("H");
var textArea=$(".text-area")
// console.log(textArea)
window.setInterval(function () {
    $('#currentDay').html(moment().format('ddd MM/DD/YYYY H:mm:ss'))
}, 1000);
//
for (i=0; i < textArea.length;  i++){

    if (parseInt(textArea[i].id) < currentTime){
        // console.log(textArea[i])
        textArea[i].setAttribute('class','past');
    }
    else if (parseInt(textArea[i].id) === currentTime){
        textArea[i].setAttribute('class','present');
    }
    else if (parseInt(textArea[i].id) > currentTime) {
        textArea[i].setAttribute('class','future')
    }
}
function saveItem(event) {
   
    var previousElement = $(event.target).prev()
   var savedText = previousElement.val();
//   localStorage.setItem('') 
  console.log(previousElement)

}
$('.saveBtn').click(saveItem);

