function totalPhoneBill(callSMS){
    var bill = callSMS.split(',');
      var totalCost = 0;
      for (let i = 0; i < bill.length; i++){
        const prod = bill[i].trim();
        //console.log(prod);
        if (prod.includes('call')){
        totalCost = totalCost + 2.75;
        } else if (prod.includes('sms')){
        totalCost = totalCost + 0.65;
        }
      }
      return "R" + totalCost.toFixed(2);
    }
    
    console.log(totalPhoneBill('call, sms, call, sms, sms'));