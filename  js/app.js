'use strict';

let hour = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const shopSalmon = document.getElementById('shopSalmon');
let countries = [];

console.log(countries);
/*0: Salmon {name: "Seattle", min: 23, max: 65, avg: 6.3,.cookiesSales: Array(14), …}
1: Salmon {name: "Tokoy", min: 3, max: 24, avg: 1.2, cookiesSales: Array(14), …}
2: Salmon {name: "Dubai", min: 11, max: 38, avg: 3.7, cookiesSales: Array(14), …}
3: Salmon {name: "Paris", min: 20, max: 38, avg: 3.7, cookiesSales: Array(14), …}
4: Salmon {name: "Lima", min: 2, max: 16, avg: 4.6, cookiesSales: Array(14), …}*/

function Salmon(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.customer = [];
  this.cookiesSales = [];
  this.total = 0;
  this.getCustomer();
  this.getsales();
  this.totalPerHour = 0;
  this.totalperhourallcontury = 0;
  countries.push(this);
}
Salmon.prototype.getCustomer = function () {
  for (let i = 0; i < hour.length; i++) {
    let cookie = Math.ceil(getRandomArbitrary(this.min, this.max));
    this.customer.push(cookie);
    console.log(this.customer);

  }
};
Salmon.prototype.getsales = function () {
  for (let i = 0; i < hour.length; i++) {
    let cookie = Math.ceil(getRandomArbitrary(this.min, this.max) * this.avg);
    this.cookiesSales.push(cookie);
    this.total += cookie;
    console.log(5);

  }
};

// Salmon.prototype.render = function () {




//   // const articalElement = document.createElement('article');
//   // parentElement.appendChild(articalElement);

//   // const h2Element = document.createElement('h2');
//   // articalElement.appendChild(h2Element);
//   // h2Element.textContent = this.name;

//   // const ulElement = document.createElement('ul');
//   // articalElement.appendChild(ulElement);

//   // console.log('test');

//   // for (let i = 0; i < hour.length; i++) {
//   //   const liElement = document.createElement('li');
//   //   ulElement.appendChild(liElement);

//   //   liElement.textContent = `${hour[i]}:${this.cookiesSales[i]} cookies .`;


//   // }
//   // const liElement = document.createElement('li');
//   // ulElement.appendChild(liElement);
//   // liElement.textContent = `Total: ${this.total} cookies`;

// };


const seattle = new Salmon('Seattle', 23, 65, 6.3);
//seattle.render();
const tokoy = new Salmon('Tokoy', 3, 24, 1.2);
//tokoy.render();
const dubai = new Salmon('Dubai', 11, 38, 3.7);
//dubai.render();
const Paris = new Salmon('Paris', 20, 38, 3.7);
//Paris.render();
const lima = new Salmon('Lima', 2, 16, 4.6);
//lima.render();



const articalElement = document.createElement('article');
shopSalmon.appendChild(articalElement);

const tableElement = document.createElement('table');
articalElement.appendChild(tableElement);


const headtable = function () {


  //creat tr and append it to the table
  // creat th (name of countries) for the header and append it to the tr
  // creat for loop and inside it th for the hours
  // creat th (daily of ...) for the header and append it to the tr

  const trElement = document.createElement('tr');
  tableElement.appendChild(trElement);

  const thElement = document.createElement('th');
  trElement.appendChild(thElement);
  thElement.textContent = 'country ';
  for (let i = 0; i < hour.length; i++) {
    const thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = hour[i];
  } console.log(5);
  const th1Element = document.createElement('th');
  trElement.appendChild(th1Element);
  th1Element.textContent = 'Total';

};

// call it in the render method


const bodyTable = function () {
  //for[i] to loop throu countries
  // tr
  // td = countries[i].name
  // for[j] to loop throu getsales
  // td = countries[i].getsales[j]

  for (let i = 0; i < countries.length; i++) {

    const tr1Element = document.createElement('tr');
    tableElement.appendChild(tr1Element);

    const tdElement = document.createElement('td');
    tr1Element.appendChild(tdElement);
    tdElement.textContent = countries[i].name;

    for (let j = 0; j < hour.length; j++) {
      const tdElement = document.createElement('td');
      tr1Element.appendChild(tdElement);
      tdElement.textContent = countries[i].cookiesSales[j];
      countries.total += countries[i].cookiesSales[j];
    }

    console.log(countries[i].total);
    const td1Element = document.createElement('td');
    tr1Element.appendChild(td1Element);
    td1Element.textContent = countries[i].total;



  }
};
const footerTable = function () {
  console.log('text');
  const tr2Element = document.createElement('tr');
  tableElement.appendChild(tr2Element);

  tr2Element.id = 'lastFooter';

  const th1Element = document.createElement('th');
  tr2Element.appendChild(th1Element);
  th1Element.textContent = 'total ';

  for (let i = 0; i < hour.length; i++) {
    const th2Element = document.createElement('th');
    tr2Element.appendChild(th2Element);
    let totalPerHour = 0;

    for (let j = 0; j < countries.length; j++) {
      console.log(countries[j].cookiesSales[i]);
      // totalPerHour = totalPerHour + (countries[j].cookiesSales[i]);
      totalPerHour += countries[j].cookiesSales[i];
      // console.log("totalPerHour", totalPerHour);

    }
    th2Element.textContent = totalPerHour;
    // th2Element.textContent =countries[i].totalPerHour;
    //  th2Element.textContent =countries[i].cookiesSales;
    // countries[i].totalperhourallcontury += countries[i].cookiesSales;
    // th2Element.textContent = countries[i].cookiesSales;

  }
  const th3Element = document.createElement('th');
  tr2Element.appendChild(th3Element);
  let totalOfTotal = 0;
  for (let j = 0; j < countries.length; j++) {

    totalOfTotal = totalOfTotal + countries[j].total;
    th3Element.textContent = totalOfTotal;
  }
};



//console.log(countries);


const formElement = document.getElementById('addNewCountryForm');
console.log(formElement);

formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event.target.countryName.value);

  const countryName = event.target.country_Name.value;
  const minCustomer = event.target.min_Customer.value;
  const maxCustomer = event.target.max_Customer.value;
  const avgCookies = event.target.avg_Cookies.value;




  const country = new Salmon(countryName, minCustomer, maxCustomer, avgCookies);
  //document.getElementById('shopSalmon').removeChild(document.getElementById('shopSalmon').lastChild);

  const trNewElement = document.createElement('tr');
  tableElement.appendChild(trNewElement);

  const tdNewElement = document.createElement('td');
  trNewElement.appendChild(tdNewElement);
  tdNewElement.textContent = country.name;
  country.total=0;

  for (let i = 0; i < hour.length; i++) {

    const tdElement = document.createElement('td');
    trNewElement.appendChild(tdElement);
    tdElement.textContent = country.cookiesSales[i];
    country.total += country.cookiesSales[i];

  }
  const td1Element = document.createElement('td');
  trNewElement.appendChild(td1Element);
  td1Element.textContent = country.total;

  let deleteFooter = document.getElementById('lastFooter');
  deleteFooter.parentNode.removeChild(deleteFooter);
  footerTable();
  formElement.reset();

});

headtable();
bodyTable();
footerTable();
