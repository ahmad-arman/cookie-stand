'use strict';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
let hour = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];
const seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  customer: [],
  cookiesSales: [],
  total: 0,
  getsales: function () {
    for (let i = 0; i < hour.length; i++) {
      let cookie = Math.ceil(this.customer[i] * this.avg);
      this.cookiesSales.push(cookie);
      this.total += cookie;
    }

  },
  getCustomer: function () {
    for (let i = 0; i < hour.length; i++) {
      let cookie = Math.ceil(getRandomArbitrary(this.min, this.max));
      this.customer.push(cookie);
    }

  },
  render: function () {


    const parentElement = document.getElementById('shopSalmon');

    const articalElement = document.createElement('article');
    parentElement.appendChild(articalElement);

    const h2Element = document.createElement('h2');
    articalElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const ulElement = document.createElement('ul');
    articalElement.appendChild(ulElement);

    console.log('test');

    for (let i = 0; i < hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);

      liElement.textContent = `${hour[i]}:${this.cookiesSales[i]} cookies .`;


    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${this.total} cookies`;

  },
};
console.log(seattle);
seattle.getCustomer();
seattle.getsales();


seattle.render();

const Tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSales: [],
  customer: [],
  total: 0,
  getsales: function () {
    for (let i = 0; i < hour.length; i++) {
      let cookie = Math.ceil(this.customer[i] * this.avg);
      this.cookiesSales.push(cookie);
      this.total += cookie;
    }
  },
  getCustomer: function () {
    for (let i = 0; i < hour.length; i++) {
      let cookie = Math.ceil(getRandomArbitrary(this.min, this.max));
      this.customer.push(cookie);
    }
  },
  render: function () {

    const parentElement = document.getElementById('shopSalmon');

    const articalElement = document.createElement('article');
    parentElement.appendChild(articalElement);

    const h2Element = document.createElement('h2');
    articalElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const ulElement = document.createElement('ul');
    articalElement.appendChild(ulElement);

    for (let i = 0; i < hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hour[i]} : ${this.cookiesSales[i]} cookies.`;

    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total : ${this.total} cookies.`;

  }
};
console.log(Tokyo.cookiesSales);

Tokyo.getCustomer();
Tokyo.getsales();
Tokyo.render();



const Dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSales: [],
  customer: [],
  total: 0,
  getsales: function () {
    for (let i = 0; i < hour.length; i++) {
      let cookie = Math.ceil(this.customer[i] * this.avg);
      this.cookiesSales.push(cookie);
      this.total += cookie;
    }
  },
  getCustomer: function () {
    for (let i = 0; i < hour.length; i++) {
      let cookie = Math.ceil(getRandomArbitrary(this.min, this.max));
      this.customer.push(cookie);
    }
  },
  render: function () {

    const parentElement = document.getElementById('shopSalmon');

    const articalElement = document.createElement('article');
    parentElement.appendChild(articalElement);

    const h2Element = document.createElement('h2');
    articalElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const ulElement = document.createElement('ul');
    articalElement.appendChild(ulElement);

    for (let i = 0; i < hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hour[i]} : ${this.cookiesSales[i]} cookies.`;

    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total : ${this.total} cookies.`;

  }
};
console.log(Dubai.cookiesSales);

Dubai.getCustomer();
Dubai.getsales();
Dubai.render();

const Paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSales: [],
  customer: [],
  total: 0,
  getsales: function () {
    for (let i = 0; i < hour.length; i++) {
      let cookie = Math.ceil(this.customer[i] * this.avg);
      this.cookiesSales.push(cookie);
      this.total += cookie;
    }
  },
  getCustomer: function () {
    for (let i = 0; i < hour.length; i++) {
      let cookie = Math.ceil(getRandomArbitrary(this.min, this.max));
      this.customer.push(cookie);
    }
  },
  render: function () {

    const parentElement = document.getElementById('shopSalmon');

    const articalElement = document.createElement('article');
    parentElement.appendChild(articalElement);

    const h2Element = document.createElement('h2');
    articalElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const ulElement = document.createElement('ul');
    articalElement.appendChild(ulElement);

    for (let i = 0; i < hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hour[i]} : ${this.cookiesSales[i]} cookies.`;

    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total : ${this.total} cookies.`;

  }
};
console.log(Dubai.cookiesSales);

Paris.getCustomer();
Paris.getsales();
Paris.render();


const lima = {
  name: 'lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesSales: [],
  customer: [],
  total: 0,
  getsales: function () {
    for (let i = 0; i < hour.length; i++) {
      let cookie = Math.ceil(this.customer[i] * this.avg);
      this.cookiesSales.push(cookie);
      this.total += cookie;
    }
  },
  getCustomer: function () {
    for (let i = 0; i < hour.length; i++) {
      let cookie = Math.ceil(getRandomArbitrary(this.min, this.max));
      this.customer.push(cookie);
    }
  },
  render: function () {

    const parentElement = document.getElementById('shopSalmon');

    const articalElement = document.createElement('article');
    parentElement.appendChild(articalElement);

    const h2Element = document.createElement('h2');
    articalElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const ulElement = document.createElement('ul');
    articalElement.appendChild(ulElement);

    for (let i = 0; i < hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${hour[i]} : ${this.cookiesSales[i]} cookies.`;

    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total : ${this.total} cookies.`;

  }
};
console.log(Dubai.cookiesSales);

lima.getCustomer();
lima.getsales();
lima.render();






