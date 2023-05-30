describe('Bootcamp isFromBellville Function' , function(){
    it('should return true for registration number starting with "CY"', function(){
        assert.equal(true, isFromBellville("CY 123"));
    });

    it('should return false for registration number not starting with "CY"', function(){
        assert.equal(false, isFromBellville("CJ 123"));
    });    
});