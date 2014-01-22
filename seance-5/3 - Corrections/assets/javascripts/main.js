var Vehicle = function(options) {
  
  var options = options || {};
  
  this.max_speed    = 100;
  this.acceleration = 1.2;
  this.brake_ratio  = 0.8;
  
  this.options      = options;
  
  this.speed        = 0;
  this.position     = 0;

};

Vehicle.prototype.getPosition = function() {
  return this.position;
};

Vehicle.prototype.run = function(race) {
  this.action(race);
  
  if (race.getMaxSpeedAtPosition(this.position) > this.speed) {
    this.accelerate();
  } else {
    this.brake();
  }
  
  this.updatePosition();
};

Vehicle.prototype.action = function(race) {
  for (method in this) {
    if (typeof this[method] == 'function' && /^action_/.test(method)) {
      this[method].call(this, race);
    }
  }
};

Vehicle.prototype.accelerate = function() {
  this.speed = Math.ceil(this.speed * this.acceleration + 1);
};

Vehicle.prototype.brake = function() {
  this.speed = Math.floor(this.speed * this.brake_ratio);
};

Vehicle.prototype.updatePosition = function() {
  this.position += this.speed;
};


var Car = function(options) {
  Vehicle.call(this, options);
  
  this.max_speed    = 160;
  this.acceleration = 1.2;
  this.brake_ratio  = 0.85;
};

Car.prototype = Object.create(Vehicle.prototype);


var Van = function(options) {
  Vehicle.call(this, options);
  
  this.max_speed    = 120;
  this.acceleration = 1.15;
  this.brake_ratio  = 0.9;
};

Van.prototype = Object.create(Vehicle.prototype);


var Scooter = function(options) {
  Vehicle.call(this, options);
  
  this.max_speed    = 140;
  this.acceleration = 1.25;
  this.brake_ratio  = 0.8;
};

Scooter.prototype = Object.create(Vehicle.prototype);

