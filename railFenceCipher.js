// Rail Fence Cipher

let coordinates = [];
let x = 0;
let y = 0;

function subtractIfMax(row, y) { // Once y reaches it's max, create respective coordinates until y = 0
  for (let b = 0; b < (row - 1); b++) {
    y--;
    x++;
    coordinates.push([x, y]);
  }
  return y;
}

function generateCoordinates(string, row) { // Generates coordinates according to number of rows and string length
  string = string.toUpperCase(); // Makes string all upper case
  coordinates.push([x, y]);
  while (x <= string.length - 1 && y <= row) {
    if (y == (row - 1)) {
      y = subtractIfMax(row, y);
    } else {
      x++;
      y++;
      coordinates.push([x, y]);
    }
  }
}

// Now define the index of (0,0), (1,0), (2,0) etc and print the according character in the string [ EVEN POSSIBLE? ]

generateCoordinates('Hello there', 4);

console.log(coordinates); // Logs coordinates for debug purposes