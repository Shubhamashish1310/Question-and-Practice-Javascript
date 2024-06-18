var minMovesToSeat = function(seats, students) {
    seats=  seats.sort((a,b)=>a-b) //1,3,5
      students =students.sort((a,b)=>a-b) //2,4,7
      let sum =0
  let i =0
  while(students&&seats){
     let ans = Math.abs(seats[i]-students[i]) // 1
     sum+=ans
     i++;
     
    
    
  
  }
  return sum
  };

  console.log(minMovesToSeat([3,1,5],[2,7,4]));