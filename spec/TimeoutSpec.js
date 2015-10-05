describe("Jasmine Clock demo", function() {

  // It is installed with a call to jasmine.clock().install 
  // in a spec or suite that needs to manipulate time.
  beforeEach(function() {
    jasmine.clock().install();
  });	

  // Be sure to uninstall the clock after you are done 
  // to restore the original functions.
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("setTimeout must behave synchronously", function() {
		var array = [1,2,3,4,5,6];
		var sum = 0;
		(function _handleArray() {
			sum += array.shift();
			if(array.length != 0) {
				setTimeout(_handleArray,0);
			}
		}());

		// The cool part 
		// We have something like
		// time machine and can 
		// move time forward. 
		jasmine.clock().tick(200);
		// 1 + 2 + 3 + 4 + 5 + 6
		// is equal to 21
		expect(sum).toEqual(21);
  });
});
