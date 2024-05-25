const todo = document.querySelector('.todo');
const date = document.querySelector('.date');
const addbutton = document.querySelector('.addbutton');
const div =document.querySelector('.list');

let todolist =[]
function addtodo(){
  const name = todo.value;
  const duedate =date.value;
todolist.push({name,duedate});
todo.value='';
date.value='';
render();
}
function render(){
  let html1 ='';
  todolist.forEach((valueobject,index)=>{
    const html =`<p>${valueobject.name}</p><p>${valueobject.duedate}</p><button class="input" onclick="todolist.splice(${index},1);render();">delete</button>`;
     html1 += html;
  });
  div.innerHTML=html1;
}