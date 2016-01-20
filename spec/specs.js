describe ('appendAy', function() {
	it("if word begins with a vowel (a,e,i,o,u), append 'ay' to the word", function() {
		expect(appendAy("apple")).to.equal("appleay");
	});
});

describe ('beginWithVowel', function() {
  it("if word begins with a vowel (a,e,i,o,u) return true", function() {
  	expect(beginWithVowel("apple")).to.equal(true);
  });
});

describe ('beginWithConsonant', function() {
  it("if word begins with a consonant (any letter != a,e,i,o,u) return true", function() {
  	expect(beginWithConsonant("Zebra")).to.equal(true);
  });
});



describe ('removeLeadingConsonantsAndAppend', function() {
  it("remove leading consonants from word and append to the word", function() {
  	expect(removeLeadingConsonantsAndAppend("shaun")).to.equal("aunsh");
  });
});


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
