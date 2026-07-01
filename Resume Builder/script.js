function addField(){
let tx=document.createElement("textarea");
tx.classList.add('form-control');
tx.classList.add('weField');
tx.classList.add('mt-2');
tx.setAttribute("placeholder","Add skill");
tx.setAttribute("rows",2);
var mainButton=document.querySelector("#we fieldset");
var insertButton=document.querySelector("#weAddButton");
mainButton.insertBefore(tx,insertButton);
}
function addFieldProject(){
   let tx=document.createElement("textarea");
tx.classList.add('form-control');
tx.classList.add('weProject');
tx.classList.add('mt-2');
tx.setAttribute("placeholder","Add Project");
tx.setAttribute("rows",2);
var mainButton=document.querySelector("#weProject fieldset");
var insertButton=document.querySelector("#weAddButtonProject");
mainButton.insertBefore(tx,insertButton); 
}
