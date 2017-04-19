function Vector(num1, num2) {
  this.x = num1,
  this.y = num2;
};
Vector.prototype.plus = function(vector2) {
  var newX = this.x + vector2.x;
  var newY = this.y + vector2.y;
  return new Vector(newX, newY);
};
//console.log(new Vector(1, 2).plus(new Vector(2, 3)));
Vector.prototype.minus = function(vector2) {
  return new Vector(this.x - vector2.x, this.y - vector2.y);
};
//console.log(new Vector(1, 2).minus(new Vector(2, 3)));

//add a getter property length to the prototype
//that computes the length of the vector
Vector.prototype = { get length() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
}};
console.log(new Vector(3, 4).length);
