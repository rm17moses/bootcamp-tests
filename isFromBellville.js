function isFromBellville(registration){
    return registration.startsWith('CY');
  }
  
  console.log(isFromBellville('CY 5242'));
  console.log(isFromBellville('CJ 5244'));