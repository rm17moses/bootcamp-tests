describe('Bootcamp countRegNumber Function' , function(){
    it('should return number registration numbers in the string', function(){
        assert.equal(3, countRegNumber("CA 182736,CY 523519, CJ 812328"));
    });
    
    it('should return number registration numbers in the string', function(){
        assert.equal(2, countRegNumber("CA 182736,CY 523519"));
    });

    it('should return number registration numbers in the string', function(){
        assert.equal(1, countRegNumber("CA 182736"));
    });
});