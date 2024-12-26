const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let arr = [];
let eidtableId=null;
addBtn.addEventListener('click',add)

function add(){
   if(eidtableId==null){
   arr.push({ text: inputBox.value, id: Math.random() })
   showTodo()
   inputBox.value =''
   }else{
         // Add Edit Logic Here
         
         eidtableId=null;
   }
}

function showTodo(){
   todoList.innerHTML=''
   for (let i = 0; i < arr.length; i++) {
      let id =arr[i].id
      todoList.innerHTML += `<li><p>${arr[i].text}</p>
    <div>
        <button onclick="edit(${id})" class="edit">Edit</button>
        <button onclick="del(${id})"  class="delete">Delete</button>
    </div></li>`
   }
}
function edit(id){
   eidtableId=id;
   add()
}

function del(id){
  let filtredArray = arr.filter(function(item,index){
      if(item.id!=id){
         return item
      }
   })
   arr = filtredArray;
   showTodo()
}