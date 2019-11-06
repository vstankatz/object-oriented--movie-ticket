//Backend Logic:
function Ticket(thisMovie, thisAge, thisTime) {
  this.movie = thisMovie,
  this.age = thisAge,
  this.time = thisTime,
  this.price = 0
}

Ticket.prototype.addAnswer = function() {
  if (this.age === 1) {
    this.price += 2
  } else if (this.age === 2) {
    this.price += 6
  } else {
    this.price += 4
  }
  if (this.time === 1) {
    this.price - 1
  } else if (this.time === 2) {
    this.price += 1
  } else {
    this.price += 3
  }
  if (this.movie === 1) {
    this.price += 4
  } else if (this.movie === 2) {
    this.price += 6
  } else {
    this.price += 10
  }

}

var ticket = new Ticket();


//Front end logic:
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    var inputMovie = parseInt($("input:radio[name=option1]:checked").val());
    var inputAge = parseInt($("input:radio[name=option2]:checked").val());
    var inputTime = parseInt($("input:radio[name=option3]:checked").val());
    var ticket  = new Ticket (inputMovie, inputAge, inputTime);
    ticket.addAnswer();
    console.log(ticket.price);

    $("#output").html("Your ticket will cost $" + ticket.price + "! So much money!");

  });
});
