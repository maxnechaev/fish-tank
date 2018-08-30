//jshint esversion:6

class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.png';
  }

  onClick(event) {
    this.makeNewVelocity(500);
  }
}
