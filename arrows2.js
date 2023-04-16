arr = [1,2,3,4,5,6,7,8,9,10]

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
// removing return and using arrows in the function
  function doubles(arr){
    const double = arr.map(ar => ar * 2)
    return double;
  }
// function removed and just using a costant
const dbls = arr => arr.map(ar => ar *2);
  
      

   
// below is the orignal code
    function squareAndFindEven(numbers){
        var squares = numbers.map(function(num){
          return num ** 2;
        });
        var evens = squares.filter(function(square){
          return square % 2 === 0;
        });
        return evens;
      }


//below is original code but still in a function

function squareAndFindE(numbers){
    const squares = numbers.map(num => num ** 2).filter(num => num %  2 === 0)
    return squares;
};

//function has been removed
const squareAndFindEvs = numbers => numbers.map(num => num ** 2).filter(num => num %  2 === 0);
  
