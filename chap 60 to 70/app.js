// //  var a = document.createElement('h1');
// //  var b = a.setAttribute('class,mainHead');
// // var h1 = document.getElementById('name').setAttribute('class','nameClass')
// //  console.log(h1)

// //  var a = document.createElement('h1');
// //  a.setAttribute("class","Nai");
// // //  a.innerHTML = 'Lorem Ipsum';
// // var b = document.createTextNode('hasnain welcome');
// // a.appendChild(b);
// //  console.log(a);

// // var a = document.getElementById('btn')
// // function mainName(){
// //     var b = document.createElement('p')
// //     var c = document.createTextNode('Welcome To My first Page')
// //     b.appendChild(c)
// //     document.write(b)
// // }

// function edValue(elethis){
// // console.log('edit',elethis.childNodes)
// li.appendChild(txtNod)
// input.appendChild(ol)

// }
// function deValue(elethis){
//     console.log('delete',elethis.parentNode.remove())
// // a.value = '';
// }


// function addTask(){
//     var ol = document.getElementById('taskLi')
//  var input  = document.getElementById('mainInp').value;
//  var li = document.createElement('li');
//  var edbtn = document.createElement('button')
//  var delbtn = document.createElement('button')
// edbtn.innerHTML = 'Edit';
// edbtn.setAttribute('onclick','edValue(this)')
// delbtn.innerHTML = 'Delete';
// delbtn.setAttribute('onclick','deValue(this)')
// // console.log(delbtn)
// var txtNod  = document.createTextNode(input.value)
// li.appendChild(txtNod);
// li.appendChild(edbtn);
// li.appendChild(delbtn);
// ol.appendChild(li);
// input.value = "";
// // console.log(li.childNodes);
// }

function editBtn(ele1){
var val = ele1.parentNode.firstChild.nodeValue;
// var editVal = prompt('Enter Edit Value ',val);
var input = document.getElementById('inp-input').value;
var b = input.val;
ele1.parentNode.firstChild.nodeValue = b;
}
function delete_All(){
orderList.innerHTML = '';
}


function deleteBtn(ele2){
   console.log('Delete',ele2.parentNode.remove());
}





function Add_Task(){
var ordrLst = document.getElementById('orderList');
 var inp = document.getElementById('inp-input').value;
 var crList = document.createElement('li');
 var txtNode = document.createTextNode(inp);
 var addBtn = document.createElement('button');
 addBtn.setAttribute('onclick','editBtn(this)');
 addBtn.innerHTML = 'Edit';
 var delBtn = document.createElement('button');
 delBtn.setAttribute('onclick','deleteBtn(this)');
 delBtn.innerHTML = 'Delete';
crList.appendChild(txtNode);
crList.appendChild(addBtn);
crList.appendChild(delBtn);
ordrLst.appendChild(crList);

document.getElementById('inp-input').value = '';
}








































