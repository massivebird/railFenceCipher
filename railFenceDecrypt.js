// --- Rail Fence Cipher by Parrotflakes ---

// This program decrpyts messages encrypted with the Rail Fence cipher
// The key to being able to decrypt someone's message is knowing the # of rows

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
    let coordX = parseInt(coordinatePair.charAt(0), 10);
    return coordX;
}

function getCoordinateY(coordinatePair) {
    let coordY = parseInt(coordinatePair.charAt(coordinatePair.length - 1), 10);
    return coordY;
}

function fillDecryptedArray(decryptedMessage, string) { // Fills array so indexes work properly when splicing
    for (let v = 0; v < string.length; v++) {
        decryptedMessage.push('zzz');
    }
    return decryptedMessage;
}

function generateCoordinates(string, row) { // Generates coordinates according to number of rows and string length
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
}

function decryptMessage(cipherText, row) {
    let decryptedMessage = [];
    cipherText = cipherText.toUpperCase();
    console.log(`Encrypted message: ${cipherText}\n`)
    generateCoordinates(cipherText, row);
    decryptedMessage = fillDecryptedArray(decryptedMessage, cipherText);
    let c = 0;
    for (let y = 0; y < row; y++) {
        for (let x = 0; x < cipherText.length; x++) {
            for (let i = 0; i < coordinates.length; i++) {
                let coordinatePair = coordinates[i].toString();
                coordX = getCoordinateX(coordinatePair);
                coordY = getCoordinateY(coordinatePair);
                if (y == coordY && x == coordX) {
                    decryptedMessage.splice(i, 1, cipherText.charAt(c)) // Inserts characters as coords are matched, simultaneously removes placeholders
                    c++;
                }
            }
        }
    }
    decryptedMessage = decryptedMessage.join('');
    console.log(`Decrypting message...\n\nDecrypted message: ${decryptedMessage}`);
}

decryptMessage('WLAFESFN', 3);