/*Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:

Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/


function solution(s){
    const words = s.split(' ')
//initialize an empty object to keep track of repeated words.
 let notRepeatedWords={};

 //check if word is repeated and filter it
 const results = words.filter((word)=> {
    if(!notRepeatedWords[word]){
        notRepeatedWords[word]= true
        return true
    }
    return false;
 });

 return results.join(' ')

}
//test cases
console.log(solution('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
console.log(solution('none one two four two four eight'))
console.log(solution('benny carol carol carol benny jane clare simon james'))