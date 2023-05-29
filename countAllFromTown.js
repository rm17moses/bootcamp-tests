function countAllFromTown(regNo, town){
    var townCount = regNo.split(',');
      var countTown = 0;
      for (let i = 0; i < townCount.length; i++){
        var reg = townCount[i].trim();
      if (reg.startsWith(town)){
      countTown++;
      }
      }
      return countTown
    }
    
    console.log(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));