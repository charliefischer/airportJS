describe('Plane', function() {
  it('can check the status of a plane', function() {
    let plane = new Plane();
    console.log(plane);
    expect(plane.status()).toBe("In The Air");
  })
})
