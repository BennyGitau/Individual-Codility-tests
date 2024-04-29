/*Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.*/

//function that takes a number and checks if its a palindrome

 function isPalindrome (num){
// reversing the number
    let reversedNum= num.toString().split('').reverse().join('');
// if statement to compare the original num and the reversed num.
    if (num === parseInt(reversedNum)){
        return true;
    }
    return false;
    
 }
//test cases
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(456))
console.log(isPalindrome(2002))