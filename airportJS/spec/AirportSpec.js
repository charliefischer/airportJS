describe('Airport', function() {
  beforeEach(function() {
    airport = new Airport();
  })
  it('has a defaul capacity of 20 spaces', function() {
    expect(airport.capacity).toBe(20);
  })
})
