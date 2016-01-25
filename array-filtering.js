var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered = numbers.filter(function(n) {
  // filter out all odd numbers
  return n % 2 === 0;
});

console.log(filtered);
