describe('Bootcamp greet function' , function(){
    it('Should return greeting and name' , function(){
        assert.equal("Hello, Moses", greet("Moses"))
    });

    it('Should return greeting and name' , function(){
        assert.equal("Hello, Lebohang", greet("Lebohang"))
    });

    it('Should return greeting and name' , function(){
        assert.equal("Hello, Tshepang", greet("Tshepang"))
    });
});