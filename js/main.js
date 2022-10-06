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

// var twoSum = function(nums, target) {

//     //nums 3,2,4 
//     let copyArr = [...nums]
//     const indices = []
//        // our inital loop we are checking through all the arr contents i.e i = 0, arr[i] = 3, etc  then we do a 2nd loop 
//        for (let i = 0; i < nums.length; i++){
//        // on 2nd loop we check to see j = 1, arr[j] = 2 with our copyArr
//            for (let j = i+1; j < copyArr.length; j++){ 
//                //  if any of these check out these push indices to the arr indices
//                 if( nums[i] + nums[j] === target) indices.push(i,j)
//            }}
//       return indices
//     };


// //   twoSum([2,7,11,15], 9)
// //   twoSum([3,2,4], 6)
// // twoSum([3,3], 6)


// // 2. Add Two Numbers - Medium
// // You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// // Example 1:
// // Input: l1 = [2,4,3], l2 = [5,6,4]
// // Output: [7,0,8]
// // Explanation: 342 + 465 = 807.

// // Example 2:
// // Input: l1 = [0], l2 = [0]
// // Output: [0]

// // Example 3:
// // Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// // Output: [8,9,9,9,0,0,0,1]
 
// // Constraints:
// // The number of nodes in each linked list is in the range [1, 100].
// // 0 <= Node.val <= 9
// // It is guaranteed that the list represents a number that does not have leading zeros.


// // const reverseIt = (arr) =>{
// //     const reverse = []
// //     for(let i = 0; i < arr.length; i++){
// //         reverse.unshift(arr[i])
// //     }
// //     console.log(reverse)
// // }


// // reverseIt([2,4,3])



// // var addTwoNumbers = function(l1, l2) {
// //     //given 2  arr in reverse that rep a non neg integer going in  i.e l1 = [2,4,3] => 342 etc
  
// //     // 1. reverse the list to get proper order and join them to make a str, then call Number() on that to turn into an int
// //     // so cant use reverse lol so we neec to make our own
// //     const int1 = Number(l1.reverse().join(""))
// //     const int2 = Number(l2.reverse().join(""))
// //     // let res =  (int1 + int2).toString().split('').reverse()
// //     //now that we have our ints we can sum them and turn the sum into a str. allowing us to split it into an arr and we can revese from there voila 
// // //   return  (int1 + int2).toString().split('').reverse()

// //   console.log((int1 + int2).toString().split('').reverse())
// // };

// // addTwoNumbers([2,4,3], [5,6,4])
// // addTwoNumbers([0], [0])
// // addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])


// // const reverseIt = (arr) =>{
// //     const reverse = []
// //     for(let i = 0; i < arr.length; i++){
// //         reverse.unshift(arr[i])
// //     }
  
// //     return reverse
// // }


// // reverseIt([2,4,3])



// // var addTwoNumbers = function(l1, l2) {
//     //given 2  arr in reverse that rep a non neg integer going in  i.e l1 = [2,4,3] => 342 etc
  
//     // 1. reverse the list to get proper order and join them to make a str, then call Number() on that to turn into an int
//     // so cant use reverse lol so we neec to make our own
//     // let int1 = Number(reverseIt(l1).join(""))
//     // let int2 = Number(reverseIt(l2).join(""))

//     // let int1 = Number(reverseIt(l1).join(''))
//     // let int2 = Number(reverseIt(l2).join(''))
//     // let res =  (int1 + int2).toString().split('').reverse()
//     //now that we have our ints we can sum them and turn the sum into a str. allowing us to split it into an arr and we can revese from there voila 
// //   return  (int1 + int2).toString().split('').reverse()   reverseIt(((int1 + int2).toString().split('')))
// // console.log(
   
// //     reverseIt(((int1 + int2).toString().split('')))
// //     )

// //   console.log((int1 + int2).toString().split('').reverseIt())
// // };

// // addTwoNumbers([2,4,3], [5,6,4])
// // addTwoNumbers([0], [0])
// // addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])

// // Line 62 in solution.js
// //              throw new TypeError(__serialize__(ret) + " is not valid value for the expected return type ListNode");
// //              ^
// // TypeError: ["0"] is not valid value for the expected return type ListNode
// //     Line 62: Char 20 in solution.js (Object.<anonymous>)
// //     Line 16: Char 8 in runner.js (Object.runner)
// //     Line 46: Char 26 in solution.js (Object.<anonymous>)
// //     at Module._compile (node:internal/modules/cjs/loader:1101:14)
// //     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
// //     at Module.load (node:internal/modules/cjs/loader:981:32)
// //     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
// //     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// // //     at node:internal/main/run_main_module:17:47

// // var pum = function(arr) {

// //        // our inital loop we are checking through all the arr contents i.e i = 0, arr[i] = 3, etc  then we do a 2nd loop 
// //        for (let i = 0; i <  arr.length; i++){
// //         // console.log(arr[i])       
// //        // on 2nd loop we check to see j = 1, arr[j] = 2 with our copyArr
// //            for (let j = 0; j <  arr.length; j++){ 
// //              console.log(arr[j])        
// //            }}
      
// //     };

// //     pum([5,1,-10,50.92,4])


// //     The pseudocode is as following:

// // Initialize current node to dummy head of the returning list.
// // Initialize carry to 00.
// // Loop through lists l1l1 and l2l2 until you reach both ends and crarry is 00.
// // Set xx to node l1l1's value. If l1l1 has reached the end of l1l1, set to 00.
// // Set yy to node l2l2's value. If l2l2 has reached the end of l2l2, set to 00.
// // Set sum = x + y + carrysum=x+y+carry.
// // Update carry = sum / 10carry=sum/10.
// // Create a new node with the digit value of (sum \bmod 10)(summod10) and set it to current node's next, then advance current node to next.
// // Advance both l1l1 and l2l2.
// // Return dummy head's next node.
// // Note that we use a dummy head to simplify the code. Without a dummy head, you would have to write extra conditional statements to initialize the head's value.



// // -------------------// 
// //20. Valid Parentheses --- Easy


// // Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

// // Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.
 

// // Example 1:
// // Input: s = "()"
// // Output: true

// // Example 2:
// // Input: s = "()[]{}"
// // Output: true
// // Example 3:

// // Input: s = "(]"
// // Output: false
 

// // Constraints:

// // 1 <= s.length <= 104
// // s consists of parentheses only '()[]{}'.


// //-------------------//

// // var isValid = function(s) {
// //     // 1. we are given a str of chars we need to rtn a boolen  if str is vaid
// //     // 2. prob have to turn into an arr to loop thru or maybe not since its a tring 
// //     // 3. check to see [] {} () are the right pairs and matched  so we have A, B , C
// //     let valid;
  
// //     let a ='(', b ='{', c = '[', i, stor = []
// //     const strArr = s.split('')
// // // so we are looping thru an arr, we check if the  curr strArr[i] is === our predefined vars and then is the the next index [i+1] is === to its closing pair if so we push that pair to stor arr and if its not it wont do push anything unlesss condo is met  
// //   for(i=0; i < strArr.length; i++){
// //     // let held = strArr[0]
// //  if( strArr[i] === a && strArr[i+1] === ')'
// //     ||  strArr[i] === b && strArr[i+1] === '}'
// //     ||  strArr[i] === c && strArr[i+1] === ']'   
// //  ){

// //      stor.push(strArr[i],strArr[i+1])
// //     //  held=strArr[i+2]
     
// //  }
// //   }
// // //   we can then check the lengths of arr's to see if they equal if they do its valid since it push everything utilzing the stack data structure LIFO or more so queue since we are attacking the sront
// //   valid  = (stor.length === strArr.length) ? true : false ;
// //    console.log(valid)
// // // return valid

// // };

// // lol still failed but we got close come back to this.
// var isValid = function(s) {
//     let a ='(', b ='{', c = '[', i, check=[], stack = [], valid
//     const strArr = s.split('')
// //  if( strArr.length === 1) return false
// if( strArr.length === 1) console.log(false)
// else {



//   for(i=0; i < strArr.length; i++){
//       if(  strArr[i] === a 
//         || strArr[i] === b 
//         || strArr[i] === c       
//         ){
//             stack.push(strArr[i])
//       }
//       else {
//           check.push(stack[stack.length-1], strArr[i])
//         // console.log(check)
//           if(  check[0] === a && check[1] ===')'
//             || check[0] === b && check[1] ==='}'
//             || check[0] === c && check[1] ===']'
//           ){ 
//               stack.pop()
//               check = []
//           }
//       }
//   }


//   console.log((stack.length === 0 )? true : false)
// //   return (stack.length === 0 )? true : false
// }
// };



// //  isValid("()[]{}")
// // isValid("()()()")
// // isValid("}")

// // stack e LIFO(Last In First Out) o


// // function sumUp(arr) {
// //     let res = 0;
// //     for(let num of arr) res+=num
// //     console.log(res)
// // }


// // function sumUp(arr) {
    
// //     console.log(arr.reduce((prevVal, curVal)=> prevVal+curVal, 0))
// // }




// // sumUp([1,2,3,5])


// //Data strucs linked list


// // function smth(){
    
// // }

// // class LinkedList {
// //     constructor(){
// //         this.head = null; //First ele in list 
// //         this.tail = null; //last ele in list 
// //     }
// //     append(value){
// //         const newNode = {value: value, next:null};
// //         if(this.tail){
// //             this.tail.next = newNode;
// //         }
// //         this.tail = newNode
// //         if(!this.head){
// //             this.head = newNode
// //         }
// // }
// // toArray() {
// //     const elements = []
// //     let curNode = this.head
// //     while (curNode) {
// //         elements.push(curNode)
// //         curNode = curNode.next
// //     }
// //     return elements
// // } 

// // }

// // const linkedList1 = new LinkedList()
// // linkedList1.append(1)
// // linkedList1.append('q')
// // linkedList1.append('haha')
// // linkedList1.append(true)
// // linkedList1.append(12)

// // console.log(linkedList1.toArray())

// // var inorderTraversal = function(root) {
    
// //     let stack , res = [], curr = root

// //     while(curr !== null || stack.length > 0 ){
      
// //         while(curr != null){
// //             stack.push(curr)
// //             curr = curr.left
// //         }

// //         curr = stack.push(curr)
// //         res.push(curr.val);
// //         // Now we visit the right subtree
// //         curr = curr.right;
// //     }
// //     console.log(res)
    
// // };

// // var inorderTraversal = function(root) {
// //     // Inorder traversal: Left -> Root -> right
    
// //     // Stack is best the sata structure to use when traversing a tree iteratively. As in recusion as well, we make the use of call stack and stack is LIFO
// //     // let stack = [], result = [];
// //     // let curr = root;
    
// //     // // Traverse the tress
// //     // while(curr !== null || stack.length > 0) {
// //     //     // Reach the left most node of the curr subtree
// //     //     while(curr != null) {
// //     //         // Placing pointer of the curr node on the stack before traversing the node's left subtree
// //     //         stack.push(curr);
// //     //         curr = curr.left;
// //     //     }
        
// //     //     // At this point curr is null, so we have reached the end of left subtree, since stack is LIFO, the top element of stack is the left most node in the subtree
// //     //     curr = stack.pop();
// //     //     // Add the left most node to our result array
// //     //     result.push(curr.val);
// //     //     // Now we visit the right subtree
// //     //     curr = curr.right;
// //     // }
// //     // // console.log(res)
// //     // return result;    

// //     return root.val
// // };

// //console.log(inorderTraversal([1,null,2,3]))


// // var singleNumber = function(nums) {

// // // let cnt = 0

// // // for(let i = 0; i < nums.length; i++){
// // //     cnt ^= nums[i]
// // //     console.log(cnt)
    
// // // }

// // let single = 0
// // for(let num of nums){
// //     single ^=num
// // }
// // console.log(single)


// // }


// // singleNumber([2,2,1])



// // Stack  LIFO  
// // like a stack of books first book  on stack was the last one placed in stack so last book in is the first out = LIFIO
// // TAKE THIS EX  STACK = [] ADDING 3 EL TO stack === [1,2,3]  1 would be the first in 3 is the last in the end so that would be thr 1st out 

// // stack can be utiziled as a arr or Stack class  

// //  it use 4 methods push,pop, length, and peak  which arr can do all of this 

// const arStack = []

// // or 

// const  Stack = function () {
//     this.count = 0,
//     this.storage = {}

//     // PUSH adds a a value onto the end of stack 

//     this.push = (val)=>{
//         this.storage[this.count] = val
//         this.count++
//     }

//     //POP removes a value of the end of the stack
//     this.pop = () =>{
//         if(this.count === 0) return null;
//         this.count--;
//         let res = this.storage[this.count] 
//         delete this.storage[this.count]
//         return res
//     }
//     //Len rtn size of stack so this just count 
//     this.size = () =>  this.count
//     //Peek this rtns the last val in stack
//     this.peek = (val) => this.storage[this.count-1]
// }

// // let myStack = new Stack()

// // myStack.push(1)
// // myStack.push(2)
// // myStack.push(3)

// // console.log(myStack.storage)
// // console.log(myStack.size())
// // console.log(myStack.count)
// // console.log(myStack.peek())

// // myStack.pop()

// // console.log(myStack.storage)
// // console.log(myStack.peek())



// //Sets agian like  an obj but cant have dublicates can be an arr aswell 


// let mySet = function (){
// //  collection will hold set
//  let collection = []
 
//  //this method will check for pres of an w and rtn T/F
//  this.has = (el) => (collection.indexOf(el) !== -1)

//  // rtn all vals in a set 
//  this.values = () => collection

//  //will check to see if el is already in collection and if not it will add
//  this.add = (el) =>{
//     //  if(this.has(el)){
//     //     return false;
//     //  }
//     //  collection.push(el)
//     //  return true
//     if(!this.has(el)){
//          collection.push(el)
//          return true
//     }
//     return false;
    
//  }
//  // removes an el from set
//  this.remove = (el) =>{
//     if(this.has(el)){
//         index = collection.indexOf(el)
//       collection.splice(index,1)
//       return true
//     }
//     return false
// }
// // rtns the size of the collection 
// this.size = () => collection.length
// // rtns the union of 2 sets
// this.union =(otherSet)=>{
//  let unionSet = new mySet()
//  let firstSet = this.values()
//  let secondSet = otherSet.values()

// firstSet.forEach(e => unionSet.add(e))
// secondSet.forEach(e => unionSet.add(e))

// return unionset
// }

// //rtns the intersection of 2 sets as a new set 
// this.intersection =(otherSet)=>{
//     let intersectionSet = new mySet()
//     let firstSet = this.values()

//     firstSet.forEach(e=>{
//         if(otherSet.has(e)){
//             intersectionSet.add(e)
//         }
//     })

//     return intersectionSet
// }

// //rtns the difference of 2 sets as a new set  fix this for later 
// this.difference =(otherSet)=>{
//     let differenceSet = new Set()
//     let firstSet = this.values()

//     firstSet.forEach(e=>{
//         if(!otherSet.has(e)){
//             differenceSet.add(e)
//         }
//     })
//     return differenceSet
// }


// //test  if the set is a subset of a difference set
// this.subset =(otherSet)=>{
//     let firstSet = this.values() 
//     return firstSet.every(val => otherSet.has(val))
// }



// }
// let setA = new mySet()
// let setB = new mySet()

// setA.add('a')
// setB.add('b')
// setB.add('c')
// setB.add('a')
// setB.add('d')
// console.log(setA.values())


// console.log(setB.values())

// console.log(setA.intersection(setB).values())

// console.log(setA.difference(setB).values())
// console.log(setA.subset(setB))

// let setC = new Set()
// let setD = new Set()

// setC.add('a')
// setD.add('b')
// setD.add('c')
// setD.add('a')
// setD.add('d')
// // DIFF BTWN ES6 Set() and making ur own is the value  it is a SETiterator which you can iterate thru
// console.log(setC.values())


// console.log(setD.values())


// // function  mySet() {

// // } 

// //Queue - FIRST IN FIRST OUT FIFO  like a shoping line first in line first the check out last in line last to check out 

// function Queue () {
//     let collection = []
//     //prints collection to console
//     this.print = () => console.log(collection)

//     // will add or enque el to end of collection with push
//     this.enqueue = (el) => collection.push(el)

//       // will remove or deque first of collection with shift
//       this.dequeue = (el) => collection.shift(el)

//     // will rth the front val in coll w/p removing 
//     this.front= (el) => collection[0]

//     // will rtn len of coll
//     this.size = (el) => collection.length;

//     // will check on coll len and rtns T/F if empty or not 
//     this.isEmpty = (el) => (collection.length === 0)
// }




// //PriorityQuee



// // Hash tables a common way to implent maps and objs takes a key input and runs thru a hash function 


// // hash func

// let hash =(string, max) => {
//     //max is the max # bukets we are storing in our hash
//     let hash = 0;
//     for(let i = 0; i < string.length; i++ ){
//         hash += string.charCodeAt(i)
//     }
//     return hash % max
// }

// let HashTable = function () {
//     let storage = []
//     const storageLimit = 4;

//     this.print = function(){
//         console.log(storage)
//     }

   
//   this.add = function(key, value) {
//     var index = hash(key, storageLimit);
//     if (storage[index] === undefined) {
//       storage[index] = [
//         [key, value]
//       ];
//     } else {
//       var inserted = false;
//       for (var i = 0; i < storage[index].length; i++) {
//         if (storage[index][i][0] === key) {
//           storage[index][i][1] = value;
//           inserted = true;
//         }
//       }
//       if (inserted === false) {
//         storage[index].push([key, value]);
//       }
//     }
//   };
//     this.remove = function(key){
//         let index = hash(key, storageLimit)
//         if(storage[index].length === 1 && storage[index][0][0] === key){
//          delete  storage[index]
//         } else {
//             for(let i = 0; storage[index].length; i++){
//                 if(storage[index][i][0] === key ){
//                     delete storage[index][i]
//                 }
//             }
//         }
//     }

//     this.lookup = function(key){
//         let index = hash(key, storageLimit)
//         if(storage[index] === undefined){
//           return undefined
//         }else {
//             for(let i = 0; storage[index].length; i++){
//                 if(storage[index][i][0] === key ){
//                  return storage[index][i][1]
//                 }
//             }
//         }
//     }
// }
// // console.log(hash('jeffe', 2))
// // let ht = new HashTable()
// // ht.add('beau', 'person')
// // ht.add('fido', 'dog')
// // ht.add('rex', 'dinosuar')
// // ht.add('tux', 'penguin')
// // console.log(ht.lookup('tux'))
// // ht.print()


// // Linked list  simliar to arr but diff
// function LinkedList(){
//     let length = 0;
//     let head = null;

//     let Node = function(element){
//         this.element = element,
//         this.next = null
//     }

//     this.size =()=>{
//      return length
//     }
//     this.head =()=>{
//         return head
//        }

//     this.add = (element) =>{
//         let node = new Node(element)

//         if(head === null){
//             head = node
//         } else{
//           let  currentNode = head
//             while(currentNode.next){
//             currentNode =  currentNode.next

//             }
//             currentNode.next = node 
//         }
//         length++
//     }

//     this.remove = function(element){
//         let currentNode = head
//         let previousNode;
//         if(currentNode.element == element){
//             head = currentNode.next
//         }else {
//             while(currentNode.element !== element){
//                 previousNode = currentNode;
//                 currentNode = currentNode.next
//             }
//             previousNode.next = currentNode.next
//         }
//         length --
//     }

//     this.isEmpty = () =>{
//          return length === 0
//     }

//     this.indexOf = (element) =>{
//         let currentNode = head;
//         let index = -1
//         while(currentNode){
//             index++
//             if(currentNode.element === element){
//                 return index
//             }
//             currentNode = currentNode.next
//         }
//         return -1
//     }

//     this.elementAt = function(index) {
//         var currentNode = head;
//         var count = 0;
//         while (count < index){
//             count ++;
//             currentNode = currentNode.next
//         }
//         return currentNode.element;
//       };
      
      
//       this.addAt = function(index, element){
//         var node = new Node(element);
    
//         var currentNode = head;
//         var previousNode;
//         var currentIndex = 0;
    
//         if(index > length){
//             return false;
//         }
    
//         if(index === 0){
//             node.next = currentNode;
//             head = node;
//         } else {
//             while(currentIndex < index){
//                 currentIndex++;
//                 previousNode = currentNode;
//                 currentNode = currentNode.next;
//             }
//             node.next = currentNode;
//             previousNode.next = node;
//         }
//         length++;
//       }
      
//       this.removeAt = function(index) {
//         var currentNode = head;
//         var previousNode;
//         var currentIndex = 0;
//         if (index < 0 || index >= length){
//             return null
//         }
//         if(index === 0){
//             head = currentNode.next;
//         } else {
//             while(currentIndex < index) {
//                 currentIndex ++;
//                 previousNode = currentNode;
//                 currentNode = currentNode.next;
//             }
//             previousNode.next = currentNode.next
//         }
//         length--;
//         return currentNode.element;
//       }
    
// }

// var conga = new LinkedList();
// conga.add('Kitten');
// conga.add('Puppy');
// conga.add('Dog');
// conga.add('Cat');
// conga.add('Fish');
// console.log(conga.size());
// console.log(conga.removeAt(3));
// console.log(conga.elementAt(3));
// console.log(conga.indexOf('Puppy'));
// console.log(conga.size());
// console.log(conga.size());





// /* Trie Data Structure */

// let Node = function() {
// 	this.keys = new Map();
// 	this.end = false;
// 	this.setEnd = function() {
// 		this.end = true;
// 	};
// 	this.isEnd = function() {
// 		return this.end;
// 	};
// };

// let Trie = function() {

// 	this.root = new Node();

// 	this.add = function(input, node = this.root) {
// 		if (input.length == 0) {
// 			node.setEnd();
// 			return;
// 		} else if (!node.keys.has(input[0])) {
// 			node.keys.set(input[0], new Node());
// 			return this.add(input.substr(1), node.keys.get(input[0]));
// 		} else {
// 			return this.add(input.substr(1), node.keys.get(input[0]));
// 		};
// 	};

// 	this.isWord = function(word) {
// 		let node = this.root;
// 		while (word.length > 1) {
// 			if (!node.keys.has(word[0])) {
// 				return false;
// 			} else {
// 				node = node.keys.get(word[0]);
// 				word = word.substr(1);
// 			};
// 		};
// 		return (node.keys.has(word) && node.keys.get(word).isEnd()) ? 
//       true : false;
// 	};

// 	this.print = function() {
// 		let words = new Array();
// 		let search = function(node, string) {
// 			if (node.keys.size != 0) {
// 				for (let letter of node.keys.keys()) {
// 					search(node.keys.get(letter), string.concat(letter));
// 				};
// 				if (node.isEnd()) {
// 					words.push(string);
// 				};
// 			} else {
// 				string.length > 0 ? words.push(string) : undefined;
// 				return;
// 			};
// 		};
// 		search(this.root, new String());
// 		return words.length > 0 ? words : mo;
// 	};

// };

// myTrie = new Trie()
// myTrie.add('ball'); 
// myTrie.add('bat'); 
// myTrie.add('doll'); 
// myTrie.add('dork'); 
// myTrie.add('do'); 
// myTrie.add('dorm')
// myTrie.add('send')
// myTrie.add('sense')
// console.log(myTrie.isWord('doll'))
// console.log(myTrie.isWord('dor'))
// console.log(myTrie.isWord('dorf'))
// console.log(myTrie.print())





// /* Heaps */

// // left child: i * 2
// // right child: i * 2 + 1
// // parent: i / 2

// let MinHeap = function() {
	
// 	let heap = [null];
	
// 	this.insert = function(num) {
// 		heap.push(num);
// 		if (heap.length > 2) {
// 			let idx = heap.length - 1;
// 			while (heap[idx] < heap[Math.floor(idx/2)]) {
// 				if (idx >= 1) {
// 					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
// 					if (Math.floor(idx/2) > 1) {
// 						idx = Math.floor(idx/2);
// 					} else {
// 						break;
// 					};
// 				};
// 			};
// 		};
// 	};
	
// 	this.remove = function() {
// 		let smallest = heap[1];
// 		if (heap.length > 2) {
// 			heap[1] = heap[heap.length - 1];
// 			heap.splice(heap.length - 1);
// 			if (heap.length == 3) {
// 				if (heap[1] > heap[2]) {
// 					[heap[1], heap[2]] = [heap[2], heap[1]];
// 				};
// 				return smallest;
// 			};
// 			let i = 1;
// 			let left = 2 * i;
// 			let right = 2 * i + 1;
// 			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
// 				if (heap[left] < heap[right]) {
// 					[heap[i], heap[left]] = [heap[left], heap[i]];
// 					i = 2 * i
// 				} else {
// 					[heap[i], heap[right]] = [heap[right], heap[i]];
// 					i = 2 * i + 1;
// 				};
// 				left = 2 * i;
// 				right = 2 * i + 1;
// 				if (heap[left] == undefined || heap[right] == undefined) {
// 					break;
// 				};
// 			};
// 		} else if (heap.length == 2) {
// 			heap.splice(1, 1);
// 		} else {
// 			return null;
// 		};
// 		return smallest;
// 	};
  
// 	this.sort = function() {
// 		let result = new Array();
// 		while (heap.length > 1) {
// 			result.push(this.remove());
// 		};
// 		return result;
// 	};

// };

// let MaxHeap = function() {
	
// 	let heap = [null];
	
// 	this.print = () => heap;

// 	this.insert = function(num) {
// 		heap.push(num);
// 		if (heap.length > 2) {
// 			let idx = heap.length - 1;
// 			while (heap[idx] > heap[Math.floor(idx/2)]) {
// 				if (idx >= 1) {
// 					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
// 					if (Math.floor(idx/2) > 1) {
// 						idx = Math.floor(idx/2);
// 					} else {
// 						break;
// 					};
// 				};
// 			};
// 		};
// 	};
	
// 	this.remove = function() {
// 		let smallest = heap[1];
// 		if (heap.length > 2) {
// 			heap[1] = heap[heap.length - 1];
// 			heap.splice(heap.length - 1);
// 			if (heap.length == 3) {
// 				if (heap[1] < heap[2]) {
// 					[heap[1], heap[2]] = [heap[2], heap[1]];
// 				};
// 				return smallest;
// 			};
// 			let i = 1;
// 			let left = 2 * i;
// 			let right = 2 * i + 1;
// 			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
// 				if (heap[left] > heap[right]) {
// 					[heap[i], heap[left]] = [heap[left], heap[i]];
// 					i = 2 * i
// 				} else {
// 					[heap[i], heap[right]] = [heap[right], heap[i]];
// 					i = 2 * i + 1;
// 				};
// 				left = 2 * i;
// 				right = 2 * i + 1;
// 				if (heap[left] == undefined || heap[right] == undefined) {
// 					break;
// 				};
// 			};
// 		} else if (heap.length == 2) {
// 			heap.splice(1, 1);
// 		} else {
// 			return null;
// 		};
// 		return smallest;
// 	};

// };


// * Definition for singly-linked list.
// * function ListNode(val, next) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.next = (next===undefined ? null : next)
// * }
// */
// /**
// * @param {ListNode} head
// * @return {ListNode}
// */
// var reverseList = function(head) {


//     let prev = null;
//     let curr = head;
//     let next = null;

//     // while(curr!= null) {
//     //     nextTemp = curr.next; // As I explained earlier, I save the next pointer in the temp variable.
//     //     curr.next = prev;  // Then I reverse the pointer of the current node to its previous node.
//     //     prev = curr;  //  The previous node becomes the node we are currently at.
//     //     curr = nextTemp;  // And the current nodes becomes the next node we saved earlier. And we keep iterating.
//     // }
//     // return prev// At the end, our previous node will be the head node of the new list. 

//     while(curr != null){
//         next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//     }
//     return prev
// im tight 
// };
var reverseList = function(head) {
    let curr = head;
    let prev = null 
    while(curr){
        let holdNxt = curr.next
       curr.next = prev
        prev = curr
        curr = holdNxt
        

    }
    return prev
  };
console.log(reverseList([1,2,3,4,5,6,7]))


