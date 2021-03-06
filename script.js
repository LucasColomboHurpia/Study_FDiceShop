let body = document.getElementById('body')
let catalog = document.getElementById('catalog')

let howManyCatalog = 10 //change this to set how many items will appear on main page
console.log(window.screen.availWidth)
//generates every catalog item
const loadCatalog = () =>{
  for(i=0;i<howManyCatalog;i++){

  let newItem = document.createElement('span')
  newItem.classList.add('catalogItem')

  let img = document.createElement('img')
  img.classList.add('imgItem')
  img.height = '200'
  newItem.appendChild(img);

  let p1 = document.createElement('p');
  p1.classList.add('Item1');
  newItem.appendChild(p1);

  let p2 = document.createElement('p');
  p2.classList.add('disc'); ///discount
  p2.classList.add('hide'); ///discount
  newItem.appendChild(p2);

  let p3 = document.createElement('p');
  p3.classList.add('price')
  newItem.appendChild(p3);

  let button = document.createElement('div')
  button.classList.add('buttonBuy')
  button.innerHTML='BUY NOW'
  newItem.appendChild(button);

  catalog.appendChild(newItem);
  specifyCatalogItem(i,newItem)}
}

onload = function () {
  loadCatalog();
  loadMobileMenu();
}

//set properties to each item
const specifyCatalogItem = (w,x) =>{
  if(w==0){x.children[0].src = './Assets/dices/4_sided_gem.jpg';x.children[1].innerHTML = ' D4 DICE';x.children[3].innerHTML = '$ 4.50'}
  if(w==1){x.children[0].src = './Assets/dices/d6-green_1.jpg';x.children[1].innerHTML = ' D6 DICE';x.children[3].innerHTML = '$ 6.50'}
  if(w==2){x.children[0].src = './Assets/dices/d8-gemini-black-purple-dice.jpg';x.children[1].innerHTML = ' D8 DICE';x.children[3].innerHTML = '$ 8.50'}
  if(w==3){x.children[0].src = './Assets/dices/710x528_27056020_13728472_1585776535.jpg';x.children[1].innerHTML = ' D10 METAL DICE';x.children[3].innerHTML = '$ 31.50'}
  if(w==4){x.children[0].src = './Assets/dices/d12-gem_2.jpg';x.children[1].innerHTML = ' D12 DICE';x.children[3].innerHTML = '$ 14.00'}
  if(w==5){x.children[0].src = './Assets/dices/71fYg4LvELL._AC_SX425_.jpg';x.children[1].innerHTML = ' D20 GOLDEN DICE';x.children[3].innerHTML = '$ 50.00'}
  if(w==6){x.children[0].src = './Assets/dices/chain-mail-dice-bag-2.jpg';x.children[1].innerHTML = 'CHAIN MAIL DICE BAG';x.children[3].innerHTML = '$ 28.99'}
  if(w==7){x.children[0].src = './Assets/dices/blueDiceSet.jpg';x.children[1].innerHTML = 'BLUE WAVES DICE SET';x.children[3].innerHTML = '$ 29.99'}
  if(w==8){x.children[0].src = './Assets/dices/setDiceCase.PNG';x.children[1].innerHTML = 'SPECIAL FULL CASE SET';x.children[3].innerHTML = '$ 200.50'}
  if(w==9){x.children[0].src = './Assets/dices/e099bf84748e6ee85f3934317b9c1b7ebc58bb6a323c611452e5cb2d6687ece8.jpg';x.children[1].innerHTML = 'METAL DICE SET';x.children[3].innerHTML = '$ 88.50'}
}
let n = 0
let t=0
let menuMobile = document.getElementById('menuMobile');
let banner = document.getElementById('banner');
let mobileMenuOpen = body.lastChild
let span = document.getElementById('span')
let logoSpan = document.getElementById('logoSpan');
let firstBannerHalf = document.getElementById('firstBannerHalf')
let secondBannerHalf = document.getElementById('secondBannerHalf')

menuMobile.onclick = function() {console.log(n);console.log(banner.children)
  if(t==0){t++;
  banner.removeChild(firstBannerHalf)
  banner.removeChild(secondBannerHalf)
  banner.removeChild(logoSpan)
}
  if(n==0){ n=1;  populateMenu();}
    else{
      n=0
      returnMenutoNormal()
    }
}

const returnMenutoNormal = () =>{
  logoSpan.style.display = 'block'
  mobileMenuOpen.style.display = "none";
  banner.appendChild(menuMobile)
  banner.appendChild(logoSpan)
}

const loadMobileMenu = () =>{
  let mobileMenuOpen = document.createElement('div')
  mobileMenuOpen.classList.add('hide'); //hide when load
  body.appendChild(mobileMenuOpen)

}

const populateMenu = () =>{
  logoSpan.style.display = 'none'

  mobileMenuOpen.classList.remove('hide');
  mobileMenuOpen.classList.add('mobileMenuOpen');
  mobileMenuOpen.style.display = "grid";
  mobileMenuOpen.appendChild(menuMobile)

  firstBannerHalf.style.display = "grid";
  secondBannerHalf.style.display = "grid";

  firstBannerHalf.style.gridTemplateColumns = "auto";
  firstBannerHalf.style.gridTemplateRows = "auto auto auto auto";

  secondBannerHalf.style.gridTemplateColumns = "auto";
  secondBannerHalf.style.gridTemplateRows = "auto auto auto auto";
  secondBannerHalf.style.justifyContent = "left";

  mobileMenuOpen.appendChild(firstBannerHalf)
  mobileMenuOpen.appendChild(secondBannerHalf)
}