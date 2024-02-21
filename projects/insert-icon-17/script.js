// Fu insert icon v.4.0.4
// Function for insert icon in links using class name.
/*
How to use:
1. Add class: "insertIcon" to link
2. Embed two scripts: iconsJsonVar.js and then script.js
3. Run function: insertIcon('insertIcon', '', 'on', iconsJsonVar);
*/



function insertIcon(classNameForInsert, mode, status, jsonVar){


if(typeof conf == 'object'){
confDataCollection = conf["confDataCollection"];
if(confDataCollection == undefined||confDataCollection == null){
confDataCollection = "off";
}
}else{
confDataCollection = "off";
}

if(classNameForInsert == undefined){ classNameForInsert = 'insertIcon'; }
if(mode == undefined){ mode = ''; }
if(status == undefined){ status = 'off'; }
if(jsonVar == undefined){ jsonVar = []; }



function fuMGetSvgIcon(iconName, jsonVar){

var icon = '';
jsonVar.forEach((val) => {

if(val.text == iconName){
icon = val.text2;
}
});
return icon;
}
//console.table(fuMGetSvgIcon("test", jsonVar));




/*jsonVar.forEach((item33, index33) => {
alert(item33["dots"]);
});*/



if(status == "random"){
if(fuMRandom(0, 1) == 1){ status = "on"; }
}

if(status == "on"){







// mode: "strict" - for full word
if(mode != 'strict'){ mode = ''; }

let icons = [
{"t":"arch", "t2":`<span class="bold">△</span>`, "t3":"arch"},
{"t":"beacons", "t2":"°.・"},
{"t":"bitcoin", "t2":`<span class="orange">₿</span>`},
{"t":"bluesky", "t2":"🟦"},
{"t":"bento", "t2":"🟦"},
{"t":"blogspot", "t2":"🅱"},
{"t":"dev.to", "t2":"⬛"},
{"t":"about.me", "t2":"⬛"},
{"t":"twitter", "t2":`<span class="bold">𝕏</span>`},
{"t":"x.com", "t2":`<span class="small bold">𝕏</span>`},
{"t":"twitch", "t2":"🔴"},
{"t":"docs", "t2":"📄", "t3":"page"},
{"t":"geany", "t2":"🫖"},
{"t":"blender", "t2":"✏️", "t3":"pencil"},
{"t":"framer", "t2":"//"},
{"t":"facebook", "t2":"🇫"},
{"t":"cloudflare", "t2":"⚡"},
{"t":"behance", "t2":"🎨", "t3":"palette"},
{"t":"dribbble", "t2":"🎨", "t3":"palette"},
{"t":"codepen", "t2":"📜"},
{"t":"github", "t2":"🐱"},
{"t":"neocities", "t2":"🐱"},
{"t":"gitlab", "t2":"📜"},
{"t":"hashnode", "t2":`🟦`},
{"t":"codepen", "t2":"📜"},
{"t":"friendica", "t2":"🇫"},
{"t":"firefox", "t2":"🦊"},
{"t":"liberapay", "t2":`<em class="bold">lp</em>`},
{"t":"lightning", "t2":"⚡"},
{"t":"getalby", "t2":"⚡"},
{"t":"linkedin", "t2":`<b class="blue lowercase">in</b>`},
{"t":"limey", "t2":"🥝"},
{"t":"linux", "t2":"🐧"},
{"t":"linktr", "t2":`<span class="bold green">✳</span>`},
{"t":"linktree", "t2":`<span class="bold green">✳</span>`},
{"t":"pocket", "t2":"📰"},
{"t":"medium", "t2":"📰"},
{"t":"producthunt", "t2":`<span class="bold orange">P</span>`},
{"t":"figma", "t2":`<span class="bold orange">F</span>`},
{"t":"pxlmo", "t2":"🖼"},
{"t":"sites", "t2":"📄", "t3":"page"},
{"t":"substack", "t2":"🔖"},
{"t":"slashdot", "t2":`<span class="bold">/.</span>`},
{"t":"nostr", "t2":"🦩"},
{"t":"tumblr", "t2":`<span class="bold">Ⓣ</span>`},
{"t":"onedrive", "t2":"☁️"},
{"t":"deviantart", "t2":"🖼"},
{"t":"pinterest", "t2":"🖼"},
{"t":"threads", "t2":"@"},
{"t":"instagram", "t2":"📸"},
{"t":"wordpress", "t2":"🅦"},
{"t":"youtube", "t2":"▶️"},
{"t":"wix", "t2":`<span class="bold">W</span>`},
{"t":"webflow", "t2":`<span class="bold em">W</span>`}
];

let icons2 = [
{"t":"angle", "t2":"◀"},
{"t":"angled", "t2":"◀"},
{"t":"angel", "t2":"😇"},
{"t":"angle", "t2":"🔺"},
{"t":"antilope", "t2":"🦌"},
{"t":"gnu", "t2":"🦌"},
{"t":"archive", "t2":"🗃️"},
{"t":"zip", "t2":"🗃️"},
{"t":"balloon", "t2":"🎈"},
{"t":"button", "t2":"▬"},
{"t":"bird", "t2":"🐦"},
{"t":"binary", "t2":"010"},
{"t":"number", "t2":"010"},
{"t":"blog", "t2":"📝", "t3":"memo"},
{"t":"todo", "t2":"📝", "t3":"memo"},
{"t":"task", "t2":"📝", "t3":"memo"},
{"t":"note", "t2":"📝", "t3":"memo"},
{"t":"reminde", "t2":"📝", "t3":"memo"},
{"t":"paper", "t2":"📝", "t3":"memo"},
{"t":"article", "t2":"📝", "t3":"memo"},
{"t":"book", "t2":"📚", "t3":"light-bulb"},
{"t":"quiz", "t2":"📚", "t3":"light-bulb"},
{"t":"box", "t2":"📦"},
{"t":"bookmark", "t2":"🔖"},
{"t":"brain", "t2":"🧠", "t3":"light-bulb"},
{"t":"memory", "t2":"🧠","t3":"light-bulb"},
{"t":"calculator", "t2":"🧮"},
{"t":"abacus", "t2":"🧮", "t3":"calculator"},
{"t":"count", "t2":"🧮", "t3":"calculator"},
{"t":"circle", "t2":"⭕"},
{"t":"round", "t2":"⭕"},
{"t":"cloud", "t2":"☁️"},
{"t":"contact", "t2":"💬"},
{"t":"cookie", "t2":"🍪"},
{"t":"cut", "t2":"✂️"},
{"t":"clock", "t2":"🕑"},
{"t":"cofee", "t2":"☕"},
{"t":"coffee", "t2":"☕"},
{"t":"copyright", "t2":"©"},
{"t":"comment", "t2":"💬"},
{"t":"talk", "t2":"💬"},
{"t":"chat", "t2":"💬"},
{"t":"unicorn", "t2":"🦄"},
{"t":"db", "t2":"💾"},
{"t":"data", "t2":"💾"},
{"t":"database", "t2":"💾"},
{"t":"keep", "t2":"💾"},
{"t":"save", "t2":"💾"},
{"t":"download", "t2":"⬇️"},
{"t":"dir", "t2":"📁️"},
{"t":"developer", "t2":"💻"},
{"t":"document", "t2":"📄", "t3":"page"},
{"t":"draw", "t2":"✏️", "t3":"pencil"},
{"t":"drawing", "t2":"✏️", "t3":"pencil"},
{"t":"paint", "t2":"✏️", "t3":"pencil"},
{"t":"pencil", "t2":"✏️"},
{"t":"painting", "t2":"✏️", "t3":"pencil"},
{"t":"art", "t2":"🎨", "t3":"palette"},
{"t":"icon", "t2":"🎨", "t3":"palette"},
{"t":"earth", "t2":"🌍"},
{"t":"embed", "t2":"▣"},
{"t":"flash", "t2":"⚡"},
{"t":"fact", "t2":"⚡"},
{"t":"file", "t2":"🗃️"},
{"t":"game", "t2":"🎮", "t3":"game"},
{"t":"mmorpg", "t2":"🎮", "t3":"game"},
{"t":"idea", "t2":"💡","t3":"light-bulb"},
{"t":"fire", "t2":"🔥"},
{"t":"teapot", "t2":"🫖"},
{"t":"teacup", "t2":"🍵"},
{"t":"translit", "t2":"⇄"},
{"t":"convert", "t2":"⇄"},
{"t":"fox", "t2":"🦊"},
{"t":"hello", "t2":"👋", "t3":"hi"},
{"t":"info", "t2":"ℹ️", "t3":"information"},
{"t":"faq", "t2":"ℹ️", "t3":"information"},
{"t":"about", "t2":"ℹ️", "t3":"information"},
{"t":"insert", "t2":"📋"},
{"t":"paste", "t2":"📋"},
{"t":"joystick", "t2":"🕹"},
{"t":"keyboard", "t2":"⌨️"},
{"t":"typing", "t2":"⌨️", "t3":"keyboard"},
{"t":"input", "t2":"⌨️", "t3":"keyboard"},
{"t":"mark", "t2":"✔️"},
{"t":"check", "t2":"✅"},
{"t":"label", "t2":"🏷️"},
{"t":"tag", "t2":"🏷️"},
{"t":"laptop", "t2":"💻"},
{"t":"notebook", "t2":"💻"},
{"t":"learning", "t2":"🌱"},
{"t":"learn", "t2":"🌱"},
{"t":"live", "t2":"🔴"},
{"t":"online", "t2":"🔴"},
{"t":"broadcast", "t2":"🔴"},
{"t":"like", "t2":"👍", "t3":"heart"},
{"t":"interests", "t2":"👍", "t3":"heart"},
{"t":"love", "t2":"❤", "t3":"heart"},
{"t":"fav", "t2":"❤", "t3":"heart"},
{"t":"magazine", "t2":"📰"},
{"t":"map", "t2":"📍"},
{"t":"sitemap", "t2":"📍", "t3":"map"},
{"t":"mammoth ", "t2":"🦣"},
{"t":"mastodon", "t2":"🦣"},
{"t":"mail", "t2":"📧"},
{"t":"email", "t2":"📧"},
{"t":"@", "t2":"📧"},
{"t":"message", "t2":"💬"},
{"t":"status", "t2":"💬"},
{"t":"matrix", "t2":"💊"},
{"t":"menu", "t2":"☰"},
{"t":"movie", "t2":"🎥"},
{"t":"money", "t2":"💲"},
{"t":"wallet", "t2":"💲"},
{"t":"payment", "t2":"💲"},
{"t":"music", "t2": "🎶"},
{"t":"network", "t2":"📶"},
{"t":"new", "t2":"🆕"},
{"t":"news", "t2":"📰"},
{"t":"pumpkin", "t2":"🎃"},
{"t":"halloween", "t2":"🎃"},
{"t":"pc", "t2":"🖥"},
{"t":"desktop", "t2":"🖥"},
{"t":"computer", "t2":"🖥"},
{"t":"photo", "t2":"📷", "t3":"camera"},
{"t":"camera", "t2":"📷"},
{"t":"screenshot", "t2":"📷", "t3":"camera"},
{"t":"project", "t2":"∷", "t3":"proportions"},
{"t":"project", "t2":"∷", "t3":"proportions"},
{"t":"main", "t2":"∷", "t3":"proportions"},
{"t":"tpl", "t2":"📄", "t3":"page"},
{"t":"template", "t2":"📄", "t3":"page"},
{"t":"templates", "t2":"📄", "t3":"page"},
{"t":"iframe", "t2":"📄", "t3":"page"},
{"t":"radio", "t2":"📻"},
{"t":"random", "t2":"🎲", "t3":"shuffle"},
{"t":"dice", "t2":"🎲", "t3":"shuffle"},
{"t":"robot", "t2":"🤖"},
{"t":"auto", "t2":"🤖"},
{"t":"share", "t2":"🔁"},
{"t":"script", "t2":"📜"},
{"t":"JavaScript", "t2":"📜"},
{"t":"code", "t2":"📜"},
{"t":"coding", "t2":"📜"},
{"t":"history", "t2":"📜"},
{"t":"search", "t2": "🔎"},
{"t":"sleep", "t2":"😴💤"},
{"t":"bed", "t2":"🛏"},
{"t":"store", "t2":"🛍️", "t3":"store"},
{"t":"shop", "t2":"🛍️", "t3":"store"},
{"t":"extension", "t2":"🛍️", "t3":"store"},
{"t":"extensions", "t2":"🛍️", "t3":"store"},
{"t":"style", "t2":"🎨", "t3":"palette"},
{"t":"css", "t2":"🎨", "t3":"palette"},
{"t":"color", "t2":"🎨", "t3":"palette"},
{"t":"theme", "t2":"🎨", "t3":"palette"},
{"t":"palette", "t2":"🎨", "t3":"palette"},
{"t":"design", "t2":"🎨", "t3":"palette"},
{"t":"webdesign", "t2":"🎨", "t3":"palette"},
{"t":"time", "t2":"⌛", "t3":"colock"},
{"t":"timer", "t2":"⌛", "t3":"colock"},
{"t":"tmp", "t2":"⏳", "t3":"colock"},
{"t":"temporary", "t2":"⏳"},
{"t":"training", "t2":"🏃"},
{"t":"run", "t2":"🏃"},
//{"t":"test", "t2":"test"},
{"t":"test", "t2":"🧪", "t3":"warning"},
{"t":"demo", "t2":"🧪", "t3":"warning"},
{"t":"lorem", "t2":"🧪", "t3":"warning"},
{"t":"ipsum", "t2":"🧪", "t3":"warning"},
{"t":"play", "t2":"▶️"},
{"t":"pleroma", "t2":"🟧️"},
{"t":"portfolio", "t2":"💼"},
{"t":"progress", "t2":"█░░"},
{"t":"quote", "t2":"❝❞"},
{"t":"quotes", "t2":"❝❞"},
{"t":"blockquotes", "t2":"❝❞"},
{"t":"rain", "t2":"💧", "t3":"droplet"},
{"t":"redirect", "t2":"⬈", "t3":"redirect-arraw"},
{"t":"redirects", "t2":"⬈", "t3":"redirect-arraw"},
{"t":"smoking", "t2":"🚭"},
{"t":"sun", "t2":"🌞"},
{"t":"snake", "t2":"🐍"},
{"t":"snow", "t2":"❄️"},
{"t":"cold", "t2":"❄️"},
{"t":"winter", "t2":"❄️"},
{"t":"star", "t2":"⭐"},
{"t":"stopwatch", "t2":"⏱️"},
{"t":"text", "t2":"📄", "t3":"page"},
{"t":"textarea", "t2":"◻", "t3":"rounded-rectangle"},
{"t":"texture", "t2":"ᚙ"},
{"t":"textures", "t2":"ᚙ"},
{"t":"grid", "t2":"ᚙ"},
{"t":"tool", "t2":"🔨"},
{"t":"tv", "t2":"📺"},
{"t":"url", "t2":"🔗"},
{"t":"link", "t2":"🔗"},
{"t":"www", "t2":"🔗"},
{"t":"popup", "t2":"🔗"},
{"t":"video", "t2":"🎞️"},
{"t":"gif", "t2":"🎞️"},
{"t":"setting", "t2":"⚙️", "t3":"gear"},
{"t":"settings", "t2":"⚙️", "t3":"gear"},
{"t":"custom", "t2":"⚙️", "t3":"gear"},
{"t":"user", "t2":"👤"},
{"t":"followers", "t2":"👤"},
{"t":"trash", "t2":"🗑️"},
{"t":"weather", "t2":"🌤️"},
{"t":"web", "t2":"🕸️"},
{"t":"website", "t2":"🕸️"},
{"t":"internet", "t2":"🕸️"},
{"t":"browser", "t2":"🕸️"},
{"t":"wallpaper", "t2":"🖼"},
{"t":"picture", "t2":"🖼"},
{"t":"image", "t2":"🖼"},
{"t":"img", "t2":"🖼"},
{"t":"pixel", "t2":"🖼"},
{"t":"window", "t2":"🪟"},
{"t":"windows", "t2":"🪟"},
{"t":"work", "t2":"🛠️"},
{"t":"page", "t2":"📄", "t3":"page"},

{"t":"question", "t2":"❓"},
{"t":"light", "t2":"⬜️"},
{"t":"highlight", "t2":"⬜️"},
{"t":"white", "t2":"⬜️"},
{"t":"dark", "t2":"⬛"},
{"t":"black", "t2":"⬛"},
{"t":"red", "t2":"🟥"},
{"t":"orange", "t2":"🟧"},
{"t":"yellow", "t2":"🟨"},
{"t":"green", "t2":"🟩"},
{"t":"indigo", "t2":"🟪"},
{"t":"violet", "t2":"🟪"},
{"t":"blue", "t2":"🟦"}
];




var iconsArr = [];
if(confDataCollection != 'on'){
iconsArr = iconsArr.concat(icons, icons2);
}else{
iconsArr = iconsArr.concat(icons2);
}

/* img ico
"instagram":`<img src="/img/icons/instagram-48x48.png" alt="ico" width="16" height="16">`,
"twitter":`<img src="/img/icons/x-48x48.png" alt="ico" width="16" height="16">`,
*/

/*
//https://stackoverflow.com/questions/10682861/how-to-create-javascript-object-with-custom-name
function createSimpleObject(name, value){
    var obj = {};
    obj[name] = value;
    return obj;
}

var test = createSimpleObject('test', 'test value');
alert(test['test']);*/



// links
//iconsArr = iconsArr.sort();

var counter = 0; // for only be 1 icon

const allLinks = document.querySelectorAll('.' + classNameForInsert);
allLinks.forEach((item, index) => {

if(counter == 0){



let linkText = item.innerHTML;


var linkURL = item.href;
if(item.href != undefined){
linkURL = item.href;
}else{ linkURL = '#undefined'; }


let icArr = [];
counter = 0; 
var textIcon = "";
var icon = "";
var icon2 = "";



iconsArr.forEach((item33, index33) => {

textIcon = String(item33["t"]);
icon = String(item33["t2"]);

// insert SVG
if(item33["t3"] == undefined){ item33["t3"] = item33["t"]; }
let iconSvg = fuMGetSvgIcon(item33["t3"], jsonVar);
if(iconSvg != ''&&iconSvg != undefined){
icon = `<div style="display: inline-flex; width: 16px; height: 16px;">${iconSvg}</div>`;
}
//console.log((linkText.toLowerCase()+'')+((icon+' ')));


var linkText2 = linkText;
linkText2 = linkText2.replaceAll("@", " @ ");
linkText2 = linkText2 + " " + linkText2.slice(0, -1) + " " + linkText2 + "s" + " " + linkText2.replaceAll(".", " . ");
linkText2 = linkText2.replaceAll(",", " , ");
//linkText2 = linkText2.replaceAll(".", " . ");
linkText2 = linkText2.replaceAll(":", " : ");
linkText2 = linkText2.replaceAll(">", " > ");
linkText2 = linkText2.replaceAll("<", " < ");
linkText2 = linkText2.replaceAll("-", " - ");
linkText2 = linkText2.replaceAll("(", " ( ");
linkText2 = linkText2.replaceAll(")", " ) ");
linkText2 = linkText2.replaceAll('"', ' " ');
//linkText2 = linkText2.replaceAll('//', ' // ');
linkText2 = linkText2.replaceAll(`
`, "");
linkText2 = linkText2.toLowerCase();
textIcon = textIcon.toLowerCase();



//counter == 0 - only one icon insert
if(mode != 'strict'&&counter == 0){
// main, not strict

//https://stackoverflow.com/questions/412123764/how-to-remove-numbers-from-a-string
if(
('' + linkText2.replace(/\d+/g, '').toLowerCase()).indexOf(('' + textIcon.replace(/\d+/g, '') + '')) != -1
||linkText2.replace(/\d+/g, '').toLowerCase().trim().search(textIcon.replace(/\d+/g, '')) != -1
&&linkText2.replace(/\d+/g, '').toLowerCase().trim().search(icon.replace(/\d+/g, '')) == -1){
icArr.push(icon);
counter++;
}

}else if(mode == 'strict'&&counter == 0){
// main, strict word
if(
(' ' + linkText2.replace(/\d+/g, '').toLowerCase() + ' ').indexOf(' ' + textIcon + ' ') != -1&&linkText2.replace(/\d+/g, '').toLowerCase().trim().search(icon.replace(/\d+/g, '')) == -1
||(' ' + linkText2.replace(/\d+/g, '').toLowerCase() + ' ').indexOf(' ' + textIcon + 's ') != -1&&linkText2.replace(/\d+/g, '').toLowerCase().trim().search(icon.replace(/\d+/g, '')) == -1
){
icArr.push(icon);
counter++;
}
}


linkText2 = "";
textIcon = "";
icon = "";
});







// insert favicon text
if(counter == 0){
// if link
if(linkText.toLowerCase().trim().slice(0, 4) == 'http'&&linkText.toLowerCase().trim().search("http|://|www.") != -1){
let linkTextURL = linkText;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="16" height="16">`;
if(confDataCollection != 'on'){ iconHTTP = '🔗'; }
icArr.push(iconHTTP);
counter++;
}
}

// insert favicon url
if(counter == 0){
// if link2
if(linkURL.toLowerCase().trim().search(location.host) == -1&&linkURL.toLowerCase().trim().slice(0, 4) == 'http'&&linkURL.toLowerCase().trim().search("http|://|www.") != -1){
let linkTextURL = linkURL;
let host = linkTextURL.split('/');
if(host[2] != undefined){
linkTextURL = host[2];
}
var iconHTTP = `https://www.google.com/s2/favicons?domain_url=${linkTextURL}`;
//var ico = `https://api.statvoo.com/favicon/?url=${host[2]}`;
//var ico = `https://api.faviconkit.com/${host[2]}/16`;
iconHTTP = `<img src="${iconHTTP}" alt="ico" width="16" height="16">`;
if(confDataCollection != 'on'){ iconHTTP = '🔗'; }
icArr.push(iconHTTP);
counter++;
}
}



icArr = [...new Set(icArr)];
//icon = icArr.toString();
icon = icArr.join('');

// main insert icons if rule bellow true and text icon == text from link
if(counter == 1&&
('' + linkText.toLowerCase()).indexOf((icon)) == -1
){

linkText = `<span><span class="brand ico">${icon}</span>` + linkText + '</span>';
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;

counter++;
}else if(counter == 0&&
('' + linkText.toLowerCase()).indexOf('🦝') == -1&&
('' + linkText.toLowerCase()).indexOf('🔗') == -1
){
linkText = `<span><span class="brand ico">🦝</span>` + linkText + '</span>';
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;
}

/*else{
linkText = '<span>' + linkText + '</span>';
//linkText = `<span class="brand ico uppercase"> • </span>` + linkText;
document.getElementsByClassName(classNameForInsert)[index].innerHTML = linkText;
}*/


}



ckeck = '';
icArr = [];

counter = 0;

});




}

}






