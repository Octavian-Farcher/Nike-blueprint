'use strict';
let timeoutID;
// Selecting elements
const newDropdown = document.getElementById('newdropdown');
const menDropdown = document.getElementById('mendropdown')
const womenDropdown = document.getElementById('womendropdown')
const kidsDropdown = document.getElementById('kidsdropdown')
const salesDropdown = document.getElementById('salesdropdown')

const newLi = document.querySelector('.newand');
const menLi = document.querySelector('.men')
const womenLi = document.querySelector('.women')
const kidsLi = document.querySelector('.kids')
const salesLi = document.querySelector('.sale')
// console.log(newDropdown, newM);
newDropdown.classList.add('hidden');
menDropdown.classList.add('hidden');
womenDropdown.classList.add('hidden')
kidsDropdown.classList.add('hidden')
salesDropdown.classList.add('hidden')

// Dropdownmenu function (used for every dropdown menu)
const dropDownMenu = function(li, menu){
    li.addEventListener('mouseover' , function(){
        menu.classList.remove('hidden')})
    li.addEventListener('mouseout' , function(){
            menu.classList.add('hidden')})
    
    menu.addEventListener('mouseover', function(){
        menu.classList.remove('hidden')})
    menu.addEventListener('mouseout', function(){
        menu.classList.add('hidden')})
           
    }
    dropDownMenu(newLi, newDropdown)
    dropDownMenu(menLi,menDropdown )
    dropDownMenu(womenLi,womenDropdown)
    dropDownMenu(kidsLi,kidsDropdown)
    dropDownMenu(salesLi,salesDropdown)



// newM.addEventListener('onmouseenter' , function(){
//     newDropdown.classList.remove('hidden')
    
// })
// newM.addEventListener('mouseout' , function(){
//     newDropdown.classList.add('hidden')
// }
// )





