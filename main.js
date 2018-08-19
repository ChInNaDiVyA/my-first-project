// function loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange = function(){
// 		if(xhr.readyState === 4 && xhr.status == "200")
// 		{
// 		callback(xhr.responseText);
// 			}
// 		};
// xhr.send(null);
// }
// loadjson("data.json",function(text){
// var data = JSON.parse(text);
// console.log(data)
// basics(data.details);
// Careerinfo(data.career);
// qual(data.education);
// skillset(data.technicalskills);
// ach(data.achievements)
// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error("error"));
			}
		
		})
	})
}
var newfile = loadjson("data.json");
newfile.then(data=>{
 console.log(data)
 basics(data.details);
 Careerinfo(data.career);
 qual(data.education);
 skillset(data.technicalskills);
 ach(data.achievements);
})


var left = document.querySelector(".left");
function basics(det){
	var img =document.createElement("img");
	img.src = det.image;
	left.appendChild(img);
	var name1 = document.createElement("h3")
	name1.textContent = det.name;
	left.appendChild(name1);
	var contactnum = document.createElement("h4");
	contactnum.textContent=det.contactnumber;
	left.appendChild(contactnum);
	var Email=document.createElement("a");
	Email.href="mailto:divyachaitanya2@gmail.com";
	Email.textContent = det.email;
	left.appendChild(Email);
	var address1 = document.createElement("h6");
	address1.textContent = det.address;
	left.appendChild(address1);
	var hrline = document.createElement("hr");
	left.appendChild(hrline);
	var add = document.createElement("add");
	add.textContent = det.add;
	left.appendChild(add)
}
var right=document.querySelector(".right");
function Careerinfo(info){
	var caree = document.createElement("h1");
	caree.textContent = "career objective";
	right.appendChild(caree);
	var hrline = document.createElement("hr");
	right.appendChild(hrline);
	var inf = document.createElement("p");
	inf.textContent = info.Info;
	right.appendChild(inf);
}
function qual(q){
	var add1=document.createElement("h4");
	add1.textContent="educational qualification";
	right.appendChild(add1);
	var hrline = document.createElement("hr");
	right.appendChild(hrline);
	var table = document.createElement("table");
	table.border = "2";
	right.appendChild(table);
	tabledata="";
	for(i=0;i<q.length;i++)
	{
		tabledata+="<tr><td>"+q[i].qualification+"</td><td>"+q[i].institute+"</td><td>"+q[i].year+"</td><td>"+q[i].percentage+"</td></tr>";
	}
	table.innerHTML=tabledata;
}
function skillset(ss)
{
	var add1=document.createElement("h4");
add1.textContent = "technical skills";
right.appendChild(add1);
var hrline = document.createElement("hr");
right.appendChild(hrline);
for(i=0;i<ss.length;i++)
{
	var s= document.createElement("h3");
	s.textContent =ss[i].title;
	right.appendChild(s);
var ul=document.createElement("ul");
var li=document.createElement("li");
li.textContent = ss[i].info;
ul.appendChild(li);
right.appendChild(ul);
}
}
function ach(oc)
{
	var a1 = document.createElement("h4");
	a1.textContent ="Achievements:";
	right.appendChild(a1);

	var hrline = document.createElement("hr");
	right.appendChild(hrline);

	for(i=0;i<oc.length;i++)
{
	var s1 = document.createElement("h3");
	s1.textContent = oc[i].info;
	right.appendChild(s1);
}	
}
function  openpage()
 {
	window.open("resume.html","_self,true");
}