describe('Bootcamp findItemsOver20 function' , function(){
    it('should return all the products that have a quantity higher than 20 (itemList)' , function(){
  //results and itemList
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
      
        assert.deepEqual(results, findItemsOver20(itemList));
    });
//results2 and itemList2
    it('should return all the products that have a quantity higher than 20 (itemList2)' , function(){
      
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [];
      
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });
//results3 and itemList3 
    it('should return all the products that have a quantity higher than 20 (itemList3)' , function(){
        
        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
        
        var results3 = [
            {name : 'apples', qty : 40},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];
      
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });
    
});      

    
    