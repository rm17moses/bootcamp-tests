function mostProfitableDepartment(salesData){
    const depSales = {};
      for (const sale of salesData) {
        if (depSales[sale.department]){
        depSales[sale.department] = depSales[sale.department] + sale.sales;
        } else {
        depSales[sale.department] = sale.sales;
        }
      }
      let mostProfitableDep = '';
      let highestSales = 0;
      for (const department in depSales) {
      if (depSales[department] > highestSales) {
      highestSales = depSales[department];
        mostProfitableDep = department;
      }
      }
      return mostProfitableDep;
    }