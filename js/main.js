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

    //nums 3,2,4 
    let copyArr = [...nums]
    const indices = []
       // our inital loop we are checking through all the arr contents i.e i = 0, arr[i] = 3, etc  then we do a 2nd loop 
       for (let i = 0; i < nums.length; i++){
       // on 2nd loop we check to see j = 1, arr[j] = 2 with our copyArr
           for (let j = i+1; j < copyArr.length; j++){ 
               //  if any of these check out these push indices to the arr indices
                if( nums[i] + nums[j] === target) indices.push(i,j)
           }}
      return indices
    };


//   twoSum([2,7,11,15], 9)
//   twoSum([3,2,4], 6)
// twoSum([3,3], 6)




