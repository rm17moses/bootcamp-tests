function findItemsOver20(items){
    let itemOver = [];
     //let over20 = {}; 
      for (let i = 0; i < items.length; i++){
        let itemList = items[i];
        let itemQty = itemList.qty;
      if (itemQty > 20){
      itemOver.push(itemList);
      }
      }
      return itemOver;
    }