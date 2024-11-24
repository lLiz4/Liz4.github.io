
var sekcjaTest = document.getElementById("test");
var testText = document.getElementById('testText');
var button = document.getElementById('testButton')

sekcjaTest.style.backgroundColor = 'pink';
testText.innerHTML = 'Mam na imię Ada';
button.style.backgroundColor = 'white';






Element.innerHTML
Element.style.backgroundColor
Element.classList.toggle('nazwaKlasy')

if(mobileMenuIcon){
    mobileMenuIcon.addEventListener('click',function(){
        mobileMenuIcon.classList.toggle('opened');
        menu.classList.toggle('opened');
    })
}