console.log("iam conected");
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("content-1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}


const home = document.querySelector('#home');
home.addEventListener("click" , (e) => {
    e.preventDefault();
    scrollTo({top:0 , behavior: "smooth"})
});

const band = document.querySelector('#band');
band.addEventListener("click" , (e) => {
    e.preventDefault();
    scrollTo({ top:901 , behavior: "smooth"})
});

const tour = document.getElementById('tour')
tour.addEventListener("click" , (e) => {
    e.preventDefault();
    scrollTo({ top: 1484 , behavior: "smooth"})
});

const contact = document.getElementById('contact');
contact.addEventListener("click" , (e) => {
    e.preventDefault();
    scrollTo({ top: 1798 , behavior: "smooth"});
});


const Wrapper = document.querySelectorAll(".form-wrapper");
const buyButton = document.querySelectorAll(".buy-btn");


buyButton.forEach((btn) => {
    btn.addEventListener("click" , (e) => {
        e.preventDefault();
        Wrapper[0].style.display = "block";
    })
});


Wrapper.forEach((form) => {
    form.addEventListener("click" , (e) => {
        e.preventDefault();
        if(e.target.className === "form-wrapper"){
            Wrapper[0].style.display = "none" ;
        }else if (e.target.className === "close"){
            Wrapper[0].style.display = "none";
        } else {
            Wrapper[0].style.display = "block";
        }
    })
});

