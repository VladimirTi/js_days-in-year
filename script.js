function daysInYear (year) {
  const promise = new Promise ((resolve, reject) => {
    if (typeof(year) === 'number' && Number.isInteger(year)) {
      resolve(year);
    } else {
      reject('exception');
    }
  });

  promise.then(
    year => { 
      if (year % 400 === 0 || !(year % 100 === 0 || !(year % 4 === 0)  )) {
        console.log(366);
      } else {
        console.log(365);
      }
     },
    error => console.log(error)
  );
}

daysInYear('2019'); // exception
daysInYear({year: 2100}); // exception
daysInYear(2020.2); // exception
daysInYear(2019); // 365
daysInYear(2020); // 366
daysInYear(2100); // 365
daysInYear(2000); // 366
