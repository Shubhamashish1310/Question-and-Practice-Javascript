var search = function(nums, target) {
    
    let map ={}
    for(let i of nums){
        
    if(map[i]){
            if(i==target){
                return true
            }
        }
        else{
            map[i]=true
        }
    }
    return false
};


map[console.log(search([1,0,1,1,1,1],0));