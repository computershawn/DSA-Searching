// 1. How many searches
// $(document).ready(function(){
//   $( "#target" ).submit(function( event ) {
//     let num = $( "input" ).first().val()
//     let arr = [3,5,6,8,11,12,14,15,17,18]
//     let bsIndex = binarySearch(arr, num)
//     alert(`Index of ${num} in array ${arr} is ${bsIndex}`)
//     event.preventDefault();
//   });
// });

// 2. Adding a jQuery UI
    // 1. Linear Search
// $(document).ready(function(){
//   $( "#target" ).submit(function( event ) {
//     let num = $( "input" ).first().val()
//     let arr = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]
//     function linearSearch(arr, value) {
//       for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === parseInt(value)) {
//           return i + 1
//         }
//       }
//       return -1;
//     }
//     let bsIndex = linearSearch(arr, num)
//     alert(`Index of ${num} in array ${arr} is ${bsIndex}`)
//     event.preventDefault();
//   });
// });

// 2. Linear Search
// let steps = 0;

// $(document).ready(function(){
//   $( "#target" ).submit(function( event ) {
//     let num = $( "input" ).first().val()
//     // let arr = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]
//     let arr = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13]
//     arr = arr.sort((a,b) => {
//       return a > b ? 1 : a < b ? -1 : 0
//     }).slice();

//     let bsIndex = binarySearch3000(arr, parseInt(num))
//     alert(`${steps}`)
//     event.preventDefault();
//   });
// });

// const binarySearch3000 = (array, value, start, end) => {
//   var start = !start ? 0 : start;
//   var end = !end ? array.length - 1 : end;

//   if (start > end) {
//       return -1
//   }

//   const index = Math.floor((start + end) / 2)
//   const item = array[index]

//   steps++;
//   if (item == value) {
//       return index;
//   }
//   else if (item < value) {
//       return binarySearch3000(array, value, index + 1, end);
//   }
//   else if (item > value) {
//       return binarySearch3000(array, value, start, index - 1);
//   }
// };

// 3. 

//4. 
// Preorder
// Root - Left - Right

// In Order
// Left - Root - Right

// Post-Order
// Left - Right - Root
                  35
              25      89
            15  27  79    91
          14  19        90
        
          14 - 19 - 15 - 27 - 25 - 79 - 90 - 91 - 89 - 35