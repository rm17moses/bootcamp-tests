describe('Bootcamp transportFee function' , function(){
    it('should return the right price based on the shift you are working' , function(){
        assert.equal("R20", transportFee("morning"));
    });

    it('should return the right price based on the shift you are working' , function(){
        assert.equal("R10", transportFee("afternoon"));
    });

    it('should return the right price based on the shift you are working' , function(){
        assert.equal("free", transportFee("nightshift"));
    });
});