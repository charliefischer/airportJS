describe('Plane', function() {

  beforeEach(function() {
    plane = new Plane();
  })

  it('can check the status of a plane', function() {
    expect(plane.status).toBe("In The Air");
  })

  it('shows status as in airport after landing', function() {
    plane.landed();
    expect(plane.status).toBe("In airport")
  })

  it('shows status as in the air after takeoff', function() {
    plane.takeoff();
    expect(plane.status).toBe("In The Air");
  })
})
