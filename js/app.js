'use strict';

let hour = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const shopSalmon = document.getElementById('shopSalmon');
let countries = [];

console.log(countries);


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



const seattle = new Salmon('Seattle', 23, 65, 6.3);

const tokoy = new Salmon('Tokoy', 3, 24, 1.2);

const dubai = new Salmon('Dubai', 11, 38, 3.7);

const Paris = new Salmon('Paris', 20, 38, 3.7);

const lima = new Salmon('Lima', 2, 16, 4.6);




const articalElement = document.createElement('article');
shopSalmon.appendChild(articalElement);

const tableElement = document.createElement('table');
articalElement.appendChild(tableElement);


const headtable = function () {




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




const bodyTable = function () {


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


    const td1Element = document.createElement('td');
    tr1Element.appendChild(td1Element);
    td1Element.textContent = countries[i].total;



  }
};
const footerTable = function () {
  console.log('text');
  const tr2Element = document.createElement('tr');
  tableElement.appendChild(tr2Element);

 

  const th1Element = document.createElement('th');
  tr2Element.appendChild(th1Element);
  th1Element.textContent = 'total ';

  for (let i = 0; i < hour.length; i++) {
    const th2Element = document.createElement('th');
    tr2Element.appendChild(th2Element);
    let totalPerHour = 0;

    for (let j = 0; j < countries.length; j++) {
      console.log(countries[j].cookiesSales[i]);

      totalPerHour += countries[j].cookiesSales[i];


    }
    th2Element.textContent = totalPerHour;


  }
  const th3Element = document.createElement('th');
  tr2Element.appendChild(th3Element);
  let totalOfTotal = 0;
  for (let j = 0; j < countries.length; j++) {

    totalOfTotal = totalOfTotal + countries[j].total;
    th3Element.textContent = totalOfTotal;
  }
};




headtable();
bodyTable();
footerTable();
