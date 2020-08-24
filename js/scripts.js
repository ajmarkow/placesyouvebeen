// Business Logic for DestinationBook
function DestinationBook() {
  this.destinations = [];
}

// Prototype: Add Destination Method
DestinationBook.prototype.addDestination = function (destination) {
  this.destinations.push(destination);
};

// Business Logic for Destination
function Destination(locationName, landMarks, dateVisited, rating, notes) {
  this.locationName = locationName;
  this.landMarks = landMarks;
  this.dateVisited = dateVisited;
  this.rating = rating;
  this.notes = notes;
}

// Prototype: Show Properties
Destination.prototype.showProperties = function () {
  return (
    "Location: " +
    this.locationName +
    ", Landmarks: " +
    this.landMarks +
    ", Date visited:  " +
    this.dateVisited +
    ", Rating: " +
    this.rating +
    ", Notes " +
    this.notes
  );
};

// User Interface Logic
