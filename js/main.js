// 1. Two Sum---Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

    let held 
    let cops = [...nums] 
    const indices = []

    for (let i = 0; i < nums.length; i++){
       held = cops[0]
     
        if(cops[i] != nums[i] && cops[i] + nums[i] === target){
            console.log(`nums[${i}] + cops[${i}] = ${cops[i] + nums[i]}`)
        }


    }
//   we need to hold our element 
 
// loop nums and check to see if the held elment is not the same of the 

//   const gotcha = nums.filter((num,i)=>{
//       let held = i

//       if(   num + nums[i] === target){
//           console.log(num,nums[i])
//       }
//   })
//   console.log(gotcha)

    //  if(nums.length === 2 && nums[0] + nums[1] === target ){
    //     indices.push(0,1)
    // }

     //  we want to return indices of the arr that are the sum of the target 
     
     // one loop through the arr and store ar[0] to a var and test that against the other indices 
    //  for (let i = 0; i < nums.length; i++){
    //  //we hold this to the actual value bc if hold it to nums[i] our 1st part of the if statment will stop the rest from running 
    //  let holderInt = nums[0]

    // // so this checks arr0 against the arr[i] to see if its not a match so that way we dont get the same numbers 
    // // then we check that heldNum against the other indices to see if they sum up to the target so if they do we push the indexs of both in our rtn arr

     



   
    // if(holderInt != nums[i] && holderInt + nums[i] === target){
    // console.log(nums[i])
    //     indices.push(nums.indexOf(holderInt), nums.indexOf(nums[i]))
    // } 
    // // now if that held number is not the it at the end of that loop change the heldNum to the next index and repeat 
    // else if ( holderInt != nums[i] && holderInt + nums[i] != target){
    // holderInt = nums[i + 1]
    // console.log(holderInt)
    // }

    // }
    // console.log(indices)
    //     // if it and any of the next sums up to the target  push that into a empty arr
        
    };

//  twoSum([2,7,11,15], 9)
 twoSum([3,2,4], 6)
// twoSum([3,3], 6)

//  holderInt != nums[i] &&