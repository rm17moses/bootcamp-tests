function countAllPaarl(regNo){
    var paarl = regNo.split(',');
    var count = 0;
    for (let i = 0; i < paarl.length; i++){
    
      if (paarl[i].includes('CJ')){
          count ++;
          }
    }
    return count;
  }
  
  console.log(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));