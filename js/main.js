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


// 2. Add Two Numbers - Medium
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 
// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


// const reverseIt = (arr) =>{
//     const reverse = []
//     for(let i = 0; i < arr.length; i++){
//         reverse.unshift(arr[i])
//     }
//     console.log(reverse)
// }


// reverseIt([2,4,3])



// var addTwoNumbers = function(l1, l2) {
//     //given 2  arr in reverse that rep a non neg integer going in  i.e l1 = [2,4,3] => 342 etc
  
//     // 1. reverse the list to get proper order and join them to make a str, then call Number() on that to turn into an int
//     // so cant use reverse lol so we neec to make our own
//     const int1 = Number(l1.reverse().join(""))
//     const int2 = Number(l2.reverse().join(""))
//     // let res =  (int1 + int2).toString().split('').reverse()
//     //now that we have our ints we can sum them and turn the sum into a str. allowing us to split it into an arr and we can revese from there voila 
// //   return  (int1 + int2).toString().split('').reverse()

//   console.log((int1 + int2).toString().split('').reverse())
// };

// addTwoNumbers([2,4,3], [5,6,4])
// addTwoNumbers([0], [0])
// addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])


// const reverseIt = (arr) =>{
//     const reverse = []
//     for(let i = 0; i < arr.length; i++){
//         reverse.unshift(arr[i])
//     }
  
//     return reverse
// }


// reverseIt([2,4,3])



// var addTwoNumbers = function(l1, l2) {
    //given 2  arr in reverse that rep a non neg integer going in  i.e l1 = [2,4,3] => 342 etc
  
    // 1. reverse the list to get proper order and join them to make a str, then call Number() on that to turn into an int
    // so cant use reverse lol so we neec to make our own
    // let int1 = Number(reverseIt(l1).join(""))
    // let int2 = Number(reverseIt(l2).join(""))

    // let int1 = Number(reverseIt(l1).join(''))
    // let int2 = Number(reverseIt(l2).join(''))
    // let res =  (int1 + int2).toString().split('').reverse()
    //now that we have our ints we can sum them and turn the sum into a str. allowing us to split it into an arr and we can revese from there voila 
//   return  (int1 + int2).toString().split('').reverse()   reverseIt(((int1 + int2).toString().split('')))
// console.log(
   
//     reverseIt(((int1 + int2).toString().split('')))
//     )

//   console.log((int1 + int2).toString().split('').reverseIt())
// };

// addTwoNumbers([2,4,3], [5,6,4])
// addTwoNumbers([0], [0])
// addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])

// Line 62 in solution.js
//              throw new TypeError(__serialize__(ret) + " is not valid value for the expected return type ListNode");
//              ^
// TypeError: ["0"] is not valid value for the expected return type ListNode
//     Line 62: Char 20 in solution.js (Object.<anonymous>)
//     Line 16: Char 8 in runner.js (Object.runner)
//     Line 46: Char 26 in solution.js (Object.<anonymous>)
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// //     at node:internal/main/run_main_module:17:47

// var pum = function(arr) {

//        // our inital loop we are checking through all the arr contents i.e i = 0, arr[i] = 3, etc  then we do a 2nd loop 
//        for (let i = 0; i <  arr.length; i++){
//         // console.log(arr[i])       
//        // on 2nd loop we check to see j = 1, arr[j] = 2 with our copyArr
//            for (let j = 0; j <  arr.length; j++){ 
//              console.log(arr[j])        
//            }}
      
//     };

//     pum([5,1,-10,50.92,4])


//     The pseudocode is as following:

// Initialize current node to dummy head of the returning list.
// Initialize carry to 00.
// Loop through lists l1l1 and l2l2 until you reach both ends and crarry is 00.
// Set xx to node l1l1's value. If l1l1 has reached the end of l1l1, set to 00.
// Set yy to node l2l2's value. If l2l2 has reached the end of l2l2, set to 00.
// Set sum = x + y + carrysum=x+y+carry.
// Update carry = sum / 10carry=sum/10.
// Create a new node with the digit value of (sum \bmod 10)(summod10) and set it to current node's next, then advance current node to next.
// Advance both l1l1 and l2l2.
// Return dummy head's next node.
// Note that we use a dummy head to simplify the code. Without a dummy head, you would have to write extra conditional statements to initialize the head's value.



// -------------------// 
//20. Valid Parentheses --- Easy


// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


//-------------------//

// var isValid = function(s) {
//     // 1. we are given a str of chars we need to rtn a boolen  if str is vaid
//     // 2. prob have to turn into an arr to loop thru or maybe not since its a tring 
//     // 3. check to see [] {} () are the right pairs and matched  so we have A, B , C
//     let valid;
  
//     let a ='(', b ='{', c = '[', i, stor = []
//     const strArr = s.split('')
// // so we are looping thru an arr, we check if the  curr strArr[i] is === our predefined vars and then is the the next index [i+1] is === to its closing pair if so we push that pair to stor arr and if its not it wont do push anything unlesss condo is met  
//   for(i=0; i < strArr.length; i++){
//     // let held = strArr[0]
//  if( strArr[i] === a && strArr[i+1] === ')'
//     ||  strArr[i] === b && strArr[i+1] === '}'
//     ||  strArr[i] === c && strArr[i+1] === ']'   
//  ){

//      stor.push(strArr[i],strArr[i+1])
//     //  held=strArr[i+2]
     
//  }
//   }
// //   we can then check the lengths of arr's to see if they equal if they do its valid since it push everything utilzing the stack data structure LIFO or more so queue since we are attacking the sront
//   valid  = (stor.length === strArr.length) ? true : false ;
//    console.log(valid)
// // return valid

// };

// lol still failed but we got close come back to this.
var isValid = function(s) {
    let a ='(', b ='{', c = '[', i, check=[], stack = [], valid
    const strArr = s.split('')
//  if( strArr.length === 1) return false
if( strArr.length === 1) console.log(false)
else {



  for(i=0; i < strArr.length; i++){
      if(  strArr[i] === a 
        || strArr[i] === b 
        || strArr[i] === c       
        ){
            stack.push(strArr[i])
      }
      else {
          check.push(stack[stack.length-1], strArr[i])
        // console.log(check)
          if(  check[0] === a && check[1] ===')'
            || check[0] === b && check[1] ==='}'
            || check[0] === c && check[1] ===']'
          ){ 
              stack.pop()
              check = []
          }
      }
  }


  console.log((stack.length === 0 )? true : false)
//   return (stack.length === 0 )? true : false
}
};



 isValid("()[]{}")
isValid("()()()")
isValid("}")

// stack e LIFO(Last In First Out) o