// Rail Fence Cipher

let coordinates = [];
let x = 0;
let y = 0;

function subtractIfMax(row, y, string) { // Once y reaches it's max, create respective coordinates until y = 0
  for (let b = 0; b < (row - 1); b++) {
    y--;
    x++;
    if (x >= string.length) {
      break;
    } else {
      coordinates.push([x, y]);
    }
  }
  return y;
}

function getCoordinateX(coordinatePair) {
  let coordX = coordinatePair.charAt(0); // coordX = x coordinate
  coordX = parseInt(coordX, 10); // Converts number in string into a manipulable value
  return coordX;
}

function getCoordinateY(coordinatePair) {
  let coordY = coordinatePair.charAt(coordinatePair.length - 1); // coordY = y coordinate
  coordY = parseInt(coordY, 10);
  return coordY;
}

function generateCoordinates(string, row) { // Generates coordinates according to number of rows and string length
  string = string.toUpperCase(); // Makes string all upper case
  coordinates.push([x, y]);
  while (x < string.length - 1) {
    if (y == (row - 1)) {
      y = subtractIfMax(row, y, string);
    } else {
      x++;
      y++;
      if (x >= string.length) {
        break;
      } else {
        coordinates.push([x, y]);
      }
    }
  }
  let coordinatePair = coordinates[0].toString(); // Needs a 'for' statement to generate numbers between 0 and (coordinates.length) 
  let coordX = getCoordinateX(coordinatePair); // Fetches x coordinate of current pair
  let coordY = getCoordinateY(coordinatePair); // Fetches y coordinate
  console.log(coordinates);
}

// Now define the index of (0,0), (1,0), (2,0) etc and print the according character in the string [ EVEN POSSIBLE? ]

generateCoordinates('seagSMUSH', 3);