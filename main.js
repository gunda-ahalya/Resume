function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
{
  if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
}
xhr.send(null);
}
  loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  //fun definitions
  fun_career(data.career);
  fun_education(data.education);
  fun_acheivements(data.acheivements);
  fun_skills(data.skills);
});
var div2=document.getElementById("child2");
//career fun_education
function fun_career(careerObj){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="career objective";
  div2.appendChild(careerHeading);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var careerInfo=document.createElement("p");
  careerInfo.textContent=careerObj.Info;
  div2.appendChild(careerInfo);
}
function fun_education(edu){
  var h1=document.createElement("h2");
  h1.textContent="education Qualification";
  div2.appendChild(h1);
var hr=document.createElement("hr");
div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);

  for(var i=0; i<edu.length; i++){
var listItem=document.createElement("li");
listItem.textContent=edu[i].degree;
list.appendChild(listItem);
var listItem=document.createElement("p");
listItem.textContent=edu[i].institute;
list.appendChild(listItem);
var listItem=document.createElement("p");
listItem.textContent=edu[i].data;
list.appendChild(listItem);
}
}

function fun_acheivements(ach){
  var h1=document.createElement("h2");
  h1.textContent="acheivements";
  div2.appendChild(h1);
var list=document.createElement("ul");
div2.appendChild(list);
  for(var i=0; i<ach.length; i++)
  {
   var listItem=document.createElement("p");
  listItem.innerHTML=ach[i].name;
  list.appendChild(listItem);
  }
}

function fun_skills(tech){
  var heading=document.createElement("h2");
  heading.textContent="Technical Skill";
  div2.appendChild(heading);

  var hr=document.createElement("hr");
  heading.appendChild(hr);
  var tr="";
  var table=document.createElement("table");
 div2.appendChild(table);
 for(var i=0; i<tech.length; i++){
 tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>";
 }
 table.innerHTML=tr;
 table.border="1";

}
