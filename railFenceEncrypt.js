// --- Rail Fence Cipher by Parrotflakes ---

// This program encrypts messages using the Rail Fence cipher
// Feel free to fiddle with the plaintext and row inputs!

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
  coordX = parseInt(coordX, 10);
  return coordX;
}

function getCoordinateY(coordinatePair) {
  let coordY = coordinatePair.charAt(coordinatePair.length - 1); 
  coordY = parseInt(coordY, 10);
  return coordY;
}

function generateCoordinates(plainText, row) { // Generates coordinates according to number of rows and string length
  coordinates.push([x, y]);
  while (x < plainText.length - 1) {
    if (y == (row - 1)) {
      y = subtractIfMax(row, y, plainText);
    } else {
      x++;
      y++;
      if (x >= plainText.length) {
        break;
      } else {
        coordinates.push([x, y]);
      }
    }
  }
}

function encryptMessage(plainText, row) {
  plainText = plainText.toUpperCase();
  console.log(`Your message: ${plainText}`);
  console.log();
  console.log(`Encrypting with the Rail Fence Cipher...`)
  console.log();
  generateCoordinates(plainText, row);
  let encryptedMessage = [];
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < plainText.length; x++) {
      for (let i = 0; i < coordinates.length; i++) {
        let coordinatePair = coordinates[i].toString();
        coordX = getCoordinateX(coordinatePair);
        coordY = getCoordinateY(coordinatePair);
        if (y == coordY && x == coordX) {
          encryptedMessage.push(plainText.charAt(i));
        }
      }
    }
  }
  encryptedMessage = encryptedMessage.join('');
  console.log(`Encrypted message: ${encryptedMessage}`);
}

encryptMessage('WAFFLENS', 3);