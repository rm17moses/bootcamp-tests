describe('Bootcamp regCheck Function' , function(){
    it('should return true for registration number ending with "GP", "EC", "MP", "L"', function(){
        assert.equal(true, regCheck("RG 45 HN GP", "GP"));
    });

    it('should return true for registration number ending with "GP", "EC", "MP", "L"', function(){
        assert.equal(true, regCheck("LkG 679 EC", "EC"));
    });

    it('should return true for registration number ending with "GP", "EC", "MP", "L"', function(){
        assert.equal(true, regCheck("GHT 456 MP", "MP"));
    });

    it('should return true for registration number ending with "GP", "EC", "MP", "L"', function(){
        assert.equal(true, regCheck("FGT 491 L", "L"));
    });

    it('should return false for registration number not ending with "GP", "EC", "MP", "L"', function(){
        assert.equal(false, regCheck("ND 123-456", "ND"));
    });

    it('should return false for registration number not ending with "GP", "EC", "MP", "L"', function(){
        assert.equal(false, regCheck("CY 678-453", "CY"));
    });

    it('should return false for registration number not ending with "GP", "EC", "MP", "L"', function(){
        assert.equal(false, regCheck("CA 1234-123", "CA"));
    });
  
});