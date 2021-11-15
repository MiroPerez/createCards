  
    
    
const form = document.querySelector('form')



const textArea = document.querySelector('.form__textarea');
const button = document.querySelector('.addButton');
const inputImg = document.querySelector('.inputImg');
const inputName = document.querySelector('.inputName');
const inputPrice = document.querySelector('.inputPrice');
const products = document.querySelector('.products')

function createProduct(Image, Name, Description, Price){

  const productCard = document.createElement('div');
  
  productCard.className = 'productCard';
  products.append(productCard);

  const productImage = document.createElement('img');
  productImage.src = Image;
  productCard.append(productImage);
  productImage.className = 'productImage';


  const productInfo = document.createElement('div');
  productCard.append(productInfo);
  productInfo.className = 'productInfo';

  const productName = document.createElement('div');
  productName.textContent = Name;
  productInfo.append(productName);
  productName.className = 'productName';


  const productDescription = document.createElement('div');
  productDescription.textContent = Description;
  productInfo.append(productDescription);
  productDescription.className = 'productDescription';


  const productPrice = document.createElement('div');
  productPrice.textContent = Price + ' руб';
  productInfo.append(productPrice);
  productPrice.className = 'productPrice';

  return productCard;
}




form.addEventListener('submit', (event) => {
  event.preventDefault()
  if(!validateForm()){
    return
  }
  const product = createProduct(inputImg.value, inputName.value, 
    textArea.value, inputPrice.value);
  form.reset();
  document.body.append(product);
})

function validateForm(){
  if(inputImg.value != '' && inputName.value != '' && inputPrice.value != '' && textArea.value != ''){
    return true;
  }

  return false;
}

form.addEventListener('input',() => {
  const isValid = validateForm();
  if (isValid){
    button.classList.add('greenButton') ;
  } else {
    button.classList.remove('greenButton') ;

  }
})
