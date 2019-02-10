var MrzReader = require("nativescript-mrz-reader").MrzReader;

describe("start function", function () {
    it("exists", function () {
        expect(MrzReader.start).toBeDefined();
    });
});