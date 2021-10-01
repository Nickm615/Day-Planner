currentTime =moment().format("H");
var textArea=$(".text-area")

window.setInterval(function () {
    $('#currentDay').html(moment().format('ddd MM/DD/YYYY H:mm:ss'))
}, 1000);
//This loop increments through all text areas and checks for entries saved in local storage based on id
for (i=0; i < textArea.length;  i++){
    var userInput=localStorage.getItem(textArea[i].id);
    if (userInput){
        textArea[i].textContent = userInput;
    }
//Then it compares their id value (9-17) with the current hour to assign the past, present and future classes.
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
//This function sets user entered strings into local storage on a click event.
function saveItem(event) {
   //This targets the previous element in relation to the clicked button, which finds the corresponding text-area
    var previousElement = $(event.target).prev()
    //This saves the value of that text area as a variable and then saves it to local storage using the id value of the element as its key
   var savedText = previousElement.val();
  localStorage.setItem(previousElement.attr('id'), savedText) 
  console.log(previousElement.attr('id'))

}
//This click event triggers the saveItem
$('.saveBtn').click(saveItem);

