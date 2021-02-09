describe('Plane', function() {

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  })

  it('can check the status of a plane', function() {
    expect(plane.status).toBe("In The Air");
  })

  it('shows status as in airport after landing', function() {
    plane.landed();
    expect(plane.status).toBe("In airport")
  })

  it('changes the status of the plane on landing', function() {
    airport.land(plane)
    expect(plane.status).toBe("In airport")
  })

  it('shows status as in the air after takeoff', function() {
    plane.takeoff();
    expect(plane.status).toBe("In The Air");
  })

  it('changes the status of the plane on takeoff', function() {
    airport.takeoff(plane);
    expect(plane.status).toBe("In The Air");
  })

})
