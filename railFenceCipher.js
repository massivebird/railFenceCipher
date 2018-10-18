// Rail Fence Cipher

let coordinates = [];
let x = 0;
let y = 0;

function generateCoordinates(string, row) { // Generates coordinates according to number of rows and string length
  string = string.toUpperCase(); // Makes string all upper case
  while (x <= string.length && y <= row) {
    coordinates.push([x, y]);
    x++; // Always adds to x
    if (y > row && x !== string.length) {
      console.log('ERROR: coordinates have exceeded the row limitation.');
      break;
    } else if (y == row) {
      y--;
      coordinates.push([x, y]);
      x++;
      y--; // Loop immediately logs this new coordinate pair
      if (y > row && x !== string.length) { // AFTER LINE 15, check if y is out of bounds
        console.log('ERROR: coordinates have exceeded the row limitation.');
        break;
      } else {
        coordinates.push([x, y]);
        x++;
        y--;
      }
    } else {
      y++;
    }
  }
}

// Now define the index of (0,0), (1,0), (2,0) etc and print the according character in the string
// If row !== 3, everything breaks


generateCoordinates('Hi there', 3);

console.log(coordinates); // Logs coordinates for debug purposes