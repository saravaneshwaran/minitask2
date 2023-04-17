
// let Tablehead=document.createElement("thead")
// Tablehead.className="thead-light"
// tble.append(Tablehead)
// let TableRow=document.createElement("tr")
// Tablehead.append(TableRow)
// let TableTH=document.createElement('th')
// TableTH.scope="col"
// TableTH.innerHTML=

function crtTB(TB,table){
  let tble=document.createElement(TB)
  tble.className=table
  return tble
}
function tablerow(tagname){
  let ele=document.createElement(tagname);
  return ele
}
function createTH(TH,scopename,content){
  let tble=document.createElement(TH)
  tble.scope=scopename
  tble.innerHTML=content
  return tble
}
function createTd(TD,content){
  let tble=document.createElement(TD)
  tble.innerHTML=content
  return tble
}

let Table = crtTB("table","table")
document.body.append(Table)
let TableHead=crtTB("thead","thead-light")
Table.append(TableHead)
let tableROW=tablerow("tr")
TableHead.append(tableROW)
let tableth_1=createTH("th","col","First")
tableROW.append(tableth_1)
let tableth_2=createTH("th","col","second")
tableROW.append(tableth_2)
let TableBody=tablerow("tbody")
Table.append(TableBody)
let tableRow1=tablerow("tr")
TableBody.append(tableRow1)
let tabletd_1=createTd("td","mark")
tableRow1.append(tabletd_1)
let tabletd_2=createTd("td","Otto")
tableRow1.append(tabletd_2)