//using anonymous function:
// a.print odd numbers in an array

(function(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            console.log(arr[i]);
        }
    }
})();

// b.Convert all the strings to title caps in a string array

var output = arr.map((values)=>{
    return values.charAt(0).toUpperCase()+values.slice(1);
});
console.log(output);

// c.Sum of all numbers in an array

(function(){
    var sum = 0;
    for(i=0;i<arr.length;i++){
        sum = sum+i;
    }
    console.log(sum);
})();

// d.Return all the prime numbers in an array

(function(num){
  var output = num.filter((number) => {
 for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
  }
  return true;
  });
 console.log(output);
 })();

// e.Return all the palindromes in an array

const output = function (words) {
 return words.filter(function (word) {
    return word.split("").reverse().join("") === word;
  });
};

console.log(output(["madam","dad","school","bag"]));

// f.Return median of two sorted arrays of the same size.

(function(num1,num2){
    var num = [...num1,...num2];
    var output = num.sort(function(a,b){return a-b});
    var len = Math.floor(output.length/2);
    return median = output.length % 2 === 1 ? output[len] : (output[len-1]+output[len])/2;
    
})(num1,num2);
console.log(median);

// g.Remove duplicates from an array

(function(){
    var output = [...new Set(arr)];
    console.log(output);
})();

// h.Rotate an array by k times

const output = function(nums, k) {

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  return nums;
}(nums,k);
console.log(output);


// Using Arrow functions
//  a.print odd numbers in an array

var output = arr.filter((values)=>values%2===1);
console.log(output)

// b.Convert all the strings to title caps in a string array

var output = arr.map((values)=>{
    return values.charAt(0).toUpperCase()+values.slice(1);
});
console.log(output);

// c.Sum of all numbers in an array

var output=arr.reduce((acc,value)=>acc+value);
console.log(output);

// d.Return all the prime numbers in an array

let output = num.filter((number) => {
 for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
  }
  return true;
  });
 console.log(output);
 
 // e.Return all the palindromes in an array

 var output = (words) => words.filter((word) => word.split("").reverse().join("") === word);
 console.log(output(["friend", "malayalam"]));






