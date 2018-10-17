// Rail Fence Cipher

const string = 'What now'.toUpperCase();
const row = 3;
let coordinates = [];
let x = 0;
let y = 0;

function generateCoordinates(string, row) {
  while (x <= string.length && y <= row) {
    coordinates.push([x,y]);
    console.log(coordinates);
    x++; // Always adds to x
    if (y > row && x !== string.length) {
    console.log('ERROR: coordinates have exceeded the row limitation.');
      break;
  } else if (y == row) {
    y--;
    coordinates.push([x,y]);
    x++;
    y--;
    if (y > row && x !== string.length) {
    console.log('ERROR: coordinates have exceeded the row limitation.');
      break;
    } else {
    coordinates.push([x,y]);
    x++;
    y--;
    }
    if (y > row && x !== string.length) {
    console.log('ERROR: coordinates have exceeded the row limitation.');
      break;
    }
  } else {
    y++;
  }
 }
 
  // Now define the index of (0,0), (1,0), (2,0) etc and print the according character in the string
 
}

generateCoordinates(string, row);
