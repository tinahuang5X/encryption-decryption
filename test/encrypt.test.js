const name = "encrypt"
const chai = require("chai");
const encrypt = require("../encrypt");
const decrypt = require("../decrypt");
const expect = chai.expect;
const string = "this is a test"

describe(name, function () {
  it("should encrypt a string", function () {
    expect(encrypt(string)).to.not.equal(string)
  });
  it("should return a string", function () {
    expect(typeof encrypt(string)).to.equal("string")
  });
});

xdescribe("decrypt", function () {
  it("should decrypt string", function () {
    expect(decrypt(encrypt(string))).to.equal(string)
  });
});
