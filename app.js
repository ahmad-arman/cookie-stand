
'use strict';
// eslint-disable-next-line no-unused-vars
const seattle = {
  name: 'Seattle',
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSales: 0,
  total: 0,
  getsales: function () {
    // eslint-disable-next-line no-undef
    this.sales = math.floor(getRandomArbitrary(this.min, this.max);
  },
  render: function () {
    const parenterElement = document.getElementById('ah');
    const articalElement = document.createElement('article');
    parenterElement.appendChild(articalElement);

    const h2Element = document.createElement('h2');
    articalElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const ulElement = document.createElement('ul');
    articalElement.appendChild(ulElement);

    for (let i = 0; i < this.hour.lenght; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      this.getsales();
      liElement.textContent = `${this.hour[i]}:${this.cookiesSales} cookies .`;
      this.total = this.total + this.cookiesSales;
      this.cookiesSales = 0;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ${this.total} cookies`;

  },

};


function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function calculateCookiesNumber (randomNumber,multiplyNumber){
  randomNumber = randomNumber*multiplyNumber;
  return Math.ceil(randomNumber); 


seattle.render(); 