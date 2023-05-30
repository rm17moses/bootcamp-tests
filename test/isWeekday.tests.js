describe('Bootcamp isWeekday Function' , function(){
    it('should return true if a day is a weekday', function(){
        assert.equal(true, isWeekday("Monday"));
    });

    it('should return true if a day is a weekday', function(){
        assert.equal(true, isWeekday("Tuesday"));
    });

    it('should return true if a day is a weekday', function(){
        assert.equal(true, isWeekday("Wednesday"));
    });
    
    it('should return true if a day is a weekday', function(){
        assert.equal(true, isWeekday("Thursday"));
    });

    it('should return true if a day is a weekday', function(){
        assert.equal(true, isWeekday("Friday"));
    });

    it('should return false if a day is not a weekday', function(){
        assert.equal(false, isWeekday("Saturday"));
    });

    it('should return false if a day is not a weekday', function(){
        assert.equal(false, isWeekday("Sunday"));
    });
});