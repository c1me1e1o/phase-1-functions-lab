// Code your solution in this file!
 

function distanceFromHqInBlocks(street) {
//returns the number of blocks given a value

let hq = 42;

return Math.abs(street - hq);

}
  
function distanceFromHqInFeet(street) {
  
let feetPerBlock = 264;
  
let distanceInBlocks = distanceFromHqInBlocks(street);
  
return distanceInBlocks * feetPerBlock;

}

function distanceTravelledInFeet(startBlock, endBlock) {

let feetPerBlock = 264;
    
return Math.abs(startBlock - endBlock) * feetPerBlock;

}

function calculatesFarePrice(start, destination) {

let distance = distanceTravelledInFeet(start, destination);

let farePrice = 0;

if (distance <= 400) {
    farePrice = 0;
  } else if (distance <= 2000) {
    farePrice = (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    farePrice = 25;
  } else {
    farePrice = 'cannot travel that far';
  }
    return farePrice;
}
