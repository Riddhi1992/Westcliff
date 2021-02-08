// Adding partners images using JS
var photos = []; // Declare an empty array to store image element
var fileNames = []; // Declare an empty element to store image file names
var imageList = []; // Declare an empty array to store html list that contain an image
var image; // Declare an empty variable to store the assembled image list codes
var openList = "<li class='partner'>"; // Declare available to contain open list tag
var closeList = "</li>"; // Declare a variable to contain close list tag

// Create a loop to create 6 images starting with index of 0
for (var i = 0; i < 6; i++) {
  fileNames.push("partner-" + (i + 1)); // Create image file name and store in the array
  photos.push(
    "<img src='images/partners/" + fileNames[i] + ".png' alt='partner'>"
  ); // Assemble file name into image element and store in an array
  image = openList + photos[i] + closeList; // Assemble image element from array with list elements and store in a variable
  imageList.push(image); // Store (push) the assemble list codes into an array
}
// Display all six image codes stored in the array
document.getElementById("partners").innerHTML = imageList.join("");