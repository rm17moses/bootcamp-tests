describe('Bootcamp fromWhere function' , function(){
    it('should return the town the cars are from if the registration number startsWith "CY"' , function(){
        assert.equal("Bellville", fromWhere("CY 567489"));
    });

    it('should return the town the cars are from if the registration number startsWith "CJ"' , function(){
        assert.equal("Bellville", fromWhere("CY 567489"));
    });

    it('should return the town the cars are from if the registration number startsWith "CA"' , function(){
        assert.equal("Bellville", fromWhere("CY 567489"));
    });

    it('should return the town the cars are from if the registration number does not start with "CY", "CJ", "CA"' , function(){
        assert.equal("Some other place!", fromWhere("ZN 45667"));
    });
});