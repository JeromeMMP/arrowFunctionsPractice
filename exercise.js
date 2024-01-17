function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //es2015 refactor

  const double = (arr)=>(arr.map((v)=>(v*2)));

  // second exercise 

  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  // replacing functions with arrowfunctions

  const squareAndFindEvens = (numbers) =>  (numbers.map(num => num**2).filter(n => n % 2 === 0));

