describe('Plane', function() {
  it('can check the status of a plane', function() {
    let plane = new Plane();
    expect(plane.status).toBe("In The Air");
  })

  it('shows status as in airport after landing', function() {
    let plane = new Plane();
    plane.landed();
    expect(plane.status).toBe("In airport")
  })
})
