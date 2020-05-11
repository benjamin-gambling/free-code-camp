function convertToRoman(num) {
 var decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100 , 400, 500, 900, 1000]
 var roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
 var romanized = ""

/* 
1. The decimal and roman arrays were made, i was a bit stuck on where to start as i hadnt noticed the pattern with roman numerals, searching around i relaised that including the numbers before major numbers would save a lot of code which helped me wrap my head around the next process. 
2. We for loop through the array of decimals from right to left, to do it the other way we would need to create the array high numbers down.   
3. We continue to loop through using while loop until the current index [i] will fit into the num.
Example :- 

36 = (num)
X  :After 40 (>36) the next number in the array is 10 so the roman numeral equivlant is added to the empty romanized string 
28 :the decimal[i] (10) is then subtracted from the original number 
XX :the while loop then starts again and the same thing happens the number is between 10 & 40 so X is added to romanized
18 :10 is taken away once again and then once more and then once more again.
XXX
8  :now that num is below 10 & 9 the next number is 5 so he roman numerical equvilent is pushed and 5 is taken away
XXXV
3  :now its under 4 it will take 1 off each time and push 1 to the roman numerial string
XXXVI
2
XXXVII
1
XXXVIII
0 :this is done until 0 when it stops and returns the final string
*/

for(let i = decimal.length - 1; i >= 0; i--) {
   while(decimal[i] <= num) {
     romanized += roman[i];
     num -= decimal[i];
   }
 }
return romanized;
}

console.log(convertToRoman(58));

