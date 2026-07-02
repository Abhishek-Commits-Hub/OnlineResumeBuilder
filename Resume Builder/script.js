// button1
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
//button2
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
function printCV(){
   window.print();
}
//generate resume button
function generateResume(){
   let nameField=document.querySelector("#fullName").value;
   document.querySelector("#preview-name").innerHTML=nameField;

      let emailField=document.querySelector("#email").value;
   document.querySelector("#preview-email").innerHTML=emailField;

      let phoneField=document.querySelector("#phone").value;
   document.querySelector("#preview-phone").innerHTML=phoneField;
   
      let proffSField=document.querySelector("#summary").value;
   document.querySelector("#preview-summary").innerHTML= proffSField;

      let degreeField=document.querySelector("#degree").value;
      let universityField=document.querySelector("#university").value;
      let gradYearField=document.querySelector("#gradYear").value;
    document.querySelector("#preview-education").innerHTML ="<strong>" + degreeField + "</strong><br>" +
    universityField + "<br>" +"Graduation Year: " + gradYearField;

      let jobTitleField=document.querySelector("#jobTitle").value;
      let companyField=document.querySelector("#company").value;
      let jobDescField=document.querySelector("#jobDesc").value;
    document.querySelector("#preview-experience").innerHTML ="<strong>" + jobTitleField + "</strong><br>" +
    companyField + "<br>" + jobDescField;
    // for add element values(skills)
    let we= document.querySelectorAll(".weField");
    let s="";
    for(let e of we){
      s=s+"<li>"+e.value+"</li>";
    }
    document.querySelector("#preview-skills").innerHTML=s;
    //projects
      let weD= document.querySelectorAll(".weProject");
    let p="";
    for(let e of weD){
      p=p+"<li>"+e.value+"</li>";
    }
    document.querySelector("#builder-section").style.display = "none";
document.querySelector("#preview-section").style.width = "100%";
document.querySelector("#printBtn").style.display = "block";
    document.querySelector("#preview-projects").innerHTML=p;
    document.querySelector("#resume-form").style.display="none";
   document.querySelector("#printBtn").style.display = "inline-block";
}


