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

let moscow = new Destination(
  "Eastern Europe",
  "The Kremlin",
  "2006",
  "3",
  "Very cold"
);
let frankfurt = new Destination(
  "Western Europe",
  "Airport",
  "2006",
  "5",
  "Lufthansa flies here."
);
let paris = new Destination(
  "Western Europe",
  "Notre Dame",
  "2011",
  "5",
  "Nice people"
);

let easterneurope = new DestinationBook();
let westerneurope = new DestinationBook();

easterneurope.addDestination(moscow);
westerneurope.addDestination(frankfurt);
westerneurope.addDestination(paris);

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
$(document).ready(function () {
  $("h6#paris").click(function () {
    $("#paristext").text(paris.showProperties());
  });
  $("h6#frankfurt").click(function () {
    $("#frankfurttext").text(paris.showProperties());
  });
  $("h6#moscow").click(function () {
    $("#moscowtext").text(paris.showProperties());
  });
});
