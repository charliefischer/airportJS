describe('Airport', function() {
  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })
  it('has a default capacity of 20 spaces', function() {
    expect(airport.capacity).toBe(20);
  })
  it('can specify a different default capacity', function() {
    airport_2 = new Airport(100);
    expect(airport_2.capacity).toBe(100);
  })
  it('lands planes', function() {
    airport.land(plane)
    expect(airport.planes[0]).toBe(plane)
  })

  it('doesnt let planes land when full', function() {
    airport_3 = new Airport(1);
    airport_3.land(plane)
    expect ( function() {airport_3.land(plane); }).toThrow(new Error("Airport full."))
  })

  it('removes the plane from planes on takeoff', function() {
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.planes.length).toBe(0)
  })

})
