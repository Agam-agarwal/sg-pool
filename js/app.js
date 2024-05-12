document.addEventListener('DOMContentLoaded', function() {
  var moveUpElement = document.querySelector('.move-up');
  var moveDownElement = document.querySelector('.move-down');

  // Function to toggle move classes
  function toggleMoveClasses() {
    moveUpElement.classList.toggle('move');
    moveDownElement.classList.toggle('move');
  }

  // Add click event listener to trigger animation
  document.querySelector('.arrow-box').addEventListener('click', function() {
    toggleMoveClasses();
    //window.location.href = "../html/winner.html";
  });


});
