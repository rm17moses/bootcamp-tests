function transportFee(shift){
    if (shift === 'morning'){
      return 'R20';
    }
    else if (shift === 'afternoon'){
      return 'R10';
    }
    else if (shift === 'nightshift'){
      return 'free';
    }
  }
  
  console.log(transportFee('morning'));
  console.log(transportFee('afternoon'));
  console.log(transportFee('nightshift'));