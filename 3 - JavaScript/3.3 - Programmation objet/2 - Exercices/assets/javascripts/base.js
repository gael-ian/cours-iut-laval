var Race = function(length, opponnents) {
  
  this.length       = length;
  this.steps        = Math.ceil(Math.random() * 50);
  this.step_length  = (this.length / this.steps);
  
  this.opponnents   = opponnents;
  this.track        = [];
  
  this.buildTrack();
  
};

Race.prototype.buildTrack = function() {
  for (var i = 0; i <= this.length; i = i + this.step_length) {
    var max_speed = Math.ceil(Math.random() * 200) + 20;
    for (var j = 0; j <= this.step_length; j++) {
      this.track.push(max_speed);
    }
  }
};

Race.prototype.getMaxSpeedAtPosition = function(position) {
  return this.track[position];
};

Race.prototype.ended = function() {
  var found = false;
  
  this.opponnents.forEach(function(o) {
    if (o.getPosition() >= this.length) {
      found = true;
    }
  }, this);
  
  return found;
};