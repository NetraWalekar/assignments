/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function anagram(str1,str2){
  let newString1 = str1.split('').sort().join();
  let newString2 = str2.split('').sort().join();
  console.log(newString1)
  console.log(newString2)
  newString1==newString2 ? console.log('true') : console.log('false')
  }
anagram('rust','tusr')