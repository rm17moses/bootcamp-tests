describe('Bootcamp yearsAgo function' , function(){
    it('should return how many years ago that year is from the current year' , function(){
        assert.equal(new Date().getFullYear() - 1976, yearsAgo(1976));
    });

    it('should return how many years ago that year is from the current year' , function(){
        assert.equal(new Date().getFullYear() - 2000, yearsAgo(2000));
    });

    it('should return how many years ago that year is from the current year' , function(){
        assert.equal(new Date().getFullYear() - 2023, yearsAgo(2023));
    });
});