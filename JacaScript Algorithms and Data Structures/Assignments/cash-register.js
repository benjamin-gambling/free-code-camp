/* 1. Create an array of objects with bill or coin and their value */
var currency = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];

function checkCashRegister(price, cash, cid) {

/* 2. create the output that is required with the status + change */
  var output = { status: null, change:[]};
  var change = cash - price;
  
/* 3. Tramsform the CID in to a drawer object */
  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

/* 4. Handle the conditions of exact change and insufficent funds */
  if(register.total === change){
    output.status = "CLOSED";
    output.change = cid;
    return output;
  };
  if(register.total < change){
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  };

/* 5. Loop through the currency array and update the change and values while there is still money of each type in the drawer and while the denomination is larger than the change remaining. */
  var changeArr = currency.reduce(function(acc, curr) {
    var sum = 0;
    while(register[curr.name] > 0 && change >= curr.val) {

/* 6. Add this denomination to the accumulator of changeArr if any of this type was used. After the loop, changeArr is a 2D array of the change due, sorted from highest to lowest denomination. */
      change -= curr.val;
      register[curr.name] -= curr.val;
      sum += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (sum > 0){
      acc.push([curr.name, sum]);
    }
    return acc
  }, []);

/* 7. If there are no elements in changeArr or you still owe change, return the output object with a status of INSUFFICIENT_FUNDS. Finally you can give the correct change. Return the output object with a status of OPEN and change_arr as the value of change. */
if(changeArr.length < 1|| change > 0) {
  output.status = "INSUFFICIENT_FUNDS";
  return output;
}
output.status = "OPEN";
  output.change = changeArr;
  return output;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
