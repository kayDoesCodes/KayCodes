const inputElement = document.querySelector(".js-input");
const submitBtn = document.querySelector(".js-submitbtn");
const nameElement = document.querySelector(".js-name");
const subBtn = document.querySelector(".js-subscribe");
const messageEle = document.querySelector(".js-message");

function userName(){
  const name = inputElement.value;
  nameElement.innerHTML = `Your name is : ${name}`;
};

inputElement.addEventListener("keyup", (event) => {userName()});

submitBtn.addEventListener("click", () => {userName()});

subBtn.addEventListener("click", () => {
  if (subBtn.innerText === "subscribe"){
    subBtn.innerHTML = "subscribed";
    messageEle.innerHTML = "Thank you for subscribing💖";
    subBtn.classList.add("subscribed");
  } else {
    subBtn.innerHTML = "subscribe";
    messageEle.innerHTML = "Please Subscribe or else....👿";
    subBtn.classList.remove("subscribed");
  };
});






/*const products = {
  name: 'basketball',
  price: 2095,
};

products['delivery-time'] = '3 days';

products.price += 500;

console.log(products);*/


/*function comparePrice(product1, product2) {
  product1 = {
    name: 'football',
    price: 10000
  }
  
  product2 = {
    name: 'jersey',
    price: 2000
  }

  if(product1.price < product2.price) {
    return product1;
  } else {
    return product2;
  }
};

console.log(comparePrice());*/

/*function isSameProduct(product1, product2) {
  product1 = {
    name: 'cat',
    price: 30000
  }

  product2 = {
    name: 'cat',
    price: 30000
  }

  product1 = product2;

  if(product1 === product2) {
    return true;
  } else {
    return false;
  }
};

console.log(isSameProduct());*/