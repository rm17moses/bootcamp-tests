describe('Bootcamp countAllFromTown function' , function(){
    it('should return the number of registration numbers in the string for a town' , function(){
        assert.equal(3, countAllFromTown("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123", "CJ"));
    });

    it('should return the number of registration numbers in the string for a town' , function(){
        assert.equal(1, countAllFromTown("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123", "CL"));
    });

    it('should return the number of registration numbers in the string for a town' , function(){
        assert.equal(2, countAllFromTown("CY 345 123, CY 2345, CL 123-546, CK 345, CJ 123", "CY"));
    });
});