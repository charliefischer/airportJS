class Airport {
  constructor(capacity = 20) {
    this.capacity = capacity
    this.planes = []
  }

  land(plane) {
    if(this.planes.length === this.capacity) {
      throw new Error ('Airport full.');
    } else {
      this.planes.push(plane);
      plane.landed();
    }
  }

  takeoff(plane) {
    this.planes.pop();
  }
}
