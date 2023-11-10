const link =document.getElementById("myLink");
link.addEventListener("click", function() {
    alert("Link clicked!");
});


function showAlert(message){
    alert("You click on : " + message);
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

var counterElement = document.getElementById("counter");

 
var counterValue = 0;


function updateCounter() {
    counterElement.innerText = counterValue;
}


function increaseCounter() {
    counterValue++;
    updateCounter();
}


function decreaseCounter() {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
}

  
  function changeImage() {
    document.getElementById("image").src = "./img/image2.avif";
}


function restoreImage() {
    document.getElementById("image").src = "./img/image1.avif";
}