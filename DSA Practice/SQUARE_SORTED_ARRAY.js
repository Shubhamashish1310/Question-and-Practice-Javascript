// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortedSquares = function(nums) {
//     let n = nums.length
//     let array =Array()
//     let arr =Array();
   
//    let i =0;
//    let j =n-1;
//    while (j>=i) {
//        if(nums[i]**2>nums[j]**2){
//            array.push(nums[i]**2)//unshift to avoid using reverse
//            i++;

//        }
//        else{
//            array.push(nums[j]**2)//unshift to use in reverse
//            j--
//        }
       
//    }
//   for(let i =array.length-1;i>=0;i--){
//       arr.push(array[i])
//   }
//   return arr

// };

// console.log(sortedSquares([-4,-1,0,3,10]));


//


function sumsq(number){
    let m = number.length
    let array =Array(m);

    let i =0;   
    let j = m-1;

    while(j>=i){
        if(number[i]**2>number[j]**2){
            array[i]=(number[i]**2)
            i++;
        }
        else{
            array[j]=(number[j]**2)
            j--
        }
    }
    return array
}

console.log(sumsq([-4,-1,0,3,10]));