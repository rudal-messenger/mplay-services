fetch("news.json")
.then(r => r.json())
.then(data=>{

const patch=document.getElementById("patchNotes");

data.patchNotes.forEach(note=>{

const li=document.createElement("li");

li.textContent=note;

patch.appendChild(li);

});

const crew=document.getElementById("crew");

data.crew.forEach(member=>{

crew.innerHTML+=`<b>${member.role}</b>: ${member.name}<br>`;

});

document.getElementById("featuredTitle").textContent=data.featured.title;

document.getElementById("featuredText").textContent=data.featured.text;

document.getElementById("driverName").textContent=data.driver.name;

document.getElementById("avatar").src=data.driver.avatar;

const msgs=document.getElementById("messages");

data.messages.forEach(msg=>{

msgs.innerHTML+=`

<b>${msg.from}</b><br>

${msg.text}<br><br>

`;

});

});