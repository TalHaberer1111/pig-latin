describe ('appendAy', function() {
	it("if word begins with a vowel (a,e,i,o,u), append 'ay' to the word", function() {
		expect(appendAy("apple")).to.equal("appleay");
	});

//
// 	it ("is true for years divisible by 4", function() {
// 		expect(leapYear(2004)).to.equal(true);
// 	});
//
// 	it ("is false for years divisible by 100", function() {
// 		expect (leapYear(1900)).to.equal(false);
// 	});
//
// 	it ("is true for years divisible by 400", function() {
// 		expect (leapYear(2000)).to.equal(true);
// 	});
//
// 	it ("is false for blank input", function() {
// 		expect (leapYear(NaN)).to.equal(false);
// 	});
//
// 	it ("is false for negavtive integers", function() {
// 		expect (leapYear(-400)).to.equal(false);
// 	});
});
