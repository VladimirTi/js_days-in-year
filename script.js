function daysInYear (year) {
  const promise = new Promise ((resolve, reject) => {
    typeof(year) === 'number' && Number.isInteger(year) ? resolve(year) : reject('exception');
  });

  promise
  .then(
    year => { 
      year % 400 === 0 || !(year % 100 === 0 || !(year % 4 === 0)) ? console.log(366) : console.log(365);
     }
  )
  .catch(error => console.log(error));
}

daysInYear('2019'); // exception
daysInYear({year: 2100}); // exception
daysInYear(2020.2); // exception
daysInYear(2019); // 365
daysInYear(2020); // 366
daysInYear(2100); // 365
daysInYear(2000); // 366
