
$(document).ready(function(){
  $( "#target" ).submit(function( event ) {
    let num = $( "input" ).first().val()
    let arr = [3,5,6,8,11,12,14,15,17,18]
    let bsIndex = binarySearch(arr, num)
    alert(`Index of ${num} in array ${arr} is ${bsIndex}`)
    event.preventDefault();
  });
});

