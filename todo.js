const add = document.getElementById('add');
let textarea = document.getElementById('inputField');

let container = document.getElementById('container');

let container2 = document.getElementById('container2');

let container3 = document.getElementById('container3');

let viewTodo = document.getElementById("viewTodo");
let viewOngoing = document.getElementById("viewOngoing");
let viewCompleted = document.getElementById("viewCompleted");

setInterval(() => {
  let one = document.getElementsByTagName("span")[0];
  let two = document.getElementsByTagName("span")[1];
  let three = document.getElementsByTagName("span")[2];
  let four = document.getElementsByTagName("span")[3];
  let five = document.getElementsByTagName("span")[4];
  let six = document.getElementsByTagName("span")[5];
  let seven = document.getElementsByTagName("span")[6];
  let eight = document.getElementsByTagName("span")[7];

  let colors = ["#790808e1","#0e480ed2","#0b0353ea","#430247","#444644","#045457d2","#fa4545a8","#354703df","#fad7d796","#ff07ea78","#9bfcff7a"];
  let i = Math.floor(Math.random()* 11);
  one.style.color = colors[Math.floor(Math.random()* 11)];
  two.style.color = colors[Math.floor(Math.random()* 11)];
  three.style.color = colors[Math.floor(Math.random()* 11)];
  four.style.color = colors[Math.floor(Math.random()* 11)];
  five.style.color = colors[Math.floor(Math.random()* 11)];
  six.style.color = colors[Math.floor(Math.random()* 11)];
  seven.style.color = colors[Math.floor(Math.random()* 11)];
  eight.style.color = colors[Math.floor(Math.random()* 11)];

  let header = document.getElementsByTagName('header')[0];
  header.style.borderBottomColor = colors[i];
}, 500);


setInterval(() => {
  let images = document.querySelector("img");
  let img = ["img/a.jpeg","img/b.jpeg","img/c.jpeg","img/d.jpeg","img/e.jpeg","img/f.jpeg","img/g.jpeg","img/h.jpeg","img/i.jpeg","img/j.jpeg","img/k.jpeg"];
  let i = Math.floor(Math.random()* 11);
  images.src = img[i]
}, 3000);

const showTodo = () => {

  let section1 = document.getElementById("section1");
  let section2 = document.getElementById("section2");
  let section3 = document.getElementById("section3");
  section1.style.display = "block";
  section2.style.display = "none";
  section3.style.display = "none";
}
viewTodo.addEventListener("click", showTodo);

const showOngoing = () => {

  let section1 = document.getElementById("section1");
  let section2 = document.getElementById("section2");
  let section3 = document.getElementById("section3");
  section1.style.display = "none";
  section2.style.display = "block";
  section3.style.display = "none";
}
viewOngoing.addEventListener("click", showOngoing);

const showCompleted = () => {

  let section1 = document.getElementById("section1");
  let section2 = document.getElementById("section2");
  let section3 = document.getElementById("section3");
  section1.style.display = "none";
  section2.style.display = "none";
  section3.style.display = "block";
}
viewCompleted.addEventListener("click", showCompleted);

function loadTodoList(){
 // localStorage.clear()
 let a = localStorage.getItem("todo");
 container.innerHTML = a;
};
function inProgress(){
 //  localStorage.clear()
  let a = localStorage.getItem("ongoing");
  container2.innerHTML = a;
 };
 function done(){
  // localStorage.clear()
  let a = localStorage.getItem("complete");
  container3.innerHTML = a;
 };

 window.addEventListener("load",done);
window.addEventListener("load",loadTodoList);
window.addEventListener("load",inProgress);


const text = () => {

  let label = document.createElement('label');
label.style.display = "block";
let span = document.createElement('span');
span.classList.add('todo');

  var inputTag = document.createElement('input');
  inputTag.classList.add('todoCheckbox');
  inputTag.type = "checkbox";
  inputTag.name = "lists";
  inputTag.style.marginRight = "10px"

  if(textarea.value ==="" ){
    textarea.placeholder = "FIELD IS EMPTY";
  } else if(textarea.value.charAt(0) === " "){
    alert("INPUT FIELD CAN NOT START WITH A SPACE");
  } else if (textarea.value !==""){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let time;

 if(minutes < 10){
minutes = "0" + minutes;
 };

 if(hour === 0){
     hour = hour + 12;
     time = "time:" + " " + hour + ":" + minutes + "AM";
 } else if(hour > 0 && hour < 13){
     time = "time:"+ hour + ":" + minutes + "PM";
 } else {
    hour = hour - 12;
     time = "time:" + hour + ":" + minutes + "PM";
 };
    let createDate = ` (added on:${day}/${month}/${year} ${time})`
    let firstLetter = textarea.value.charAt(0).toUpperCase();
    textarea.value = firstLetter + textarea.value.substr(1) + createDate;


  let newTask = document.createTextNode(textarea.value);
  textarea.value = '';

  label.append(inputTag);
 span.append(newTask);
 label.append(span);


container.appendChild(label);
localStorage.setItem("todo", container.innerHTML);
 };

};
add.addEventListener("click", text);

  const ongoing = () => {

const checkboxes = document.querySelectorAll(`input[name="lists"]:checked`);
 
  checkboxes.forEach((checkbox) => {

    
   
  let label = document.createElement('label');
  label.style.display = "block";
  let span = document.createElement('span');
  span.classList.add('todo');
  
    let inputTag = document.createElement('input');
    inputTag.classList.add('todoCheckbox');
    inputTag.type = "checkbox";
    inputTag.name = "ongoing";
    inputTag.style.marginRight = "10px"
    let newTask = document.createTextNode(checkbox.nextSibling.innerHTML);

    label.append(inputTag);
   span.append(newTask);
   label.append(span);
  
  container2.appendChild(label);
  checkbox.parentNode.parentNode.removeChild(checkbox.parentNode);
 
  
  localStorage.removeItem('todo');
  localStorage.setItem("todo", container.innerHTML);
  localStorage.setItem("ongoing", container2.innerHTML);

  });
}

const ongoing1 = document.querySelector('#move');
ongoing1.addEventListener('click', (event) => {
 ongoing();
});


const toComplete = () => {
  
  const checkboxes = document.querySelectorAll(`input[name="ongoing"]:checked`);
    checkboxes.forEach((checkbox) => {
  
    
    let label = document.createElement('label');
    label.style.display = "block";
    let span = document.createElement('span');
    span.classList.add('ongoing');
    
      let inputTag = document.createElement('input');
      inputTag.classList.add('ongoingCheckbox');
      inputTag.type = "checkbox";
      inputTag.name = "completed";
      inputTag.style.marginRight = "10px"

      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let time;
  
   if(minutes < 10){
  minutes = "0" + minutes;
   };
  
   if(hour === 0){
       hour = hour + 12;
       time = "time:" + " " + hour + ":" + minutes + "AM";
   } else if(hour > 0 && hour < 13){
       time = "time:"+ hour + ":" + minutes + "PM";
   } else {
      hour = hour - 12;
       time = "time:" + hour + ":" + minutes + "PM";
   };

      let createDate = ` - (completed on:${day}/${month}/${year} ${time})`

      checkbox.nextSibling.innerHTML += createDate;
      let newTask = document.createTextNode(checkbox.nextSibling.innerHTML);
  
      label.append(inputTag);
     span.append(newTask);
     label.append(span);
    
    
    container3.appendChild(label);
    checkbox.parentNode.parentNode.removeChild(checkbox.parentNode);
    
    localStorage.removeItem('ongoing');
    localStorage.setItem("ongoing", container2.innerHTML);
    localStorage.setItem("complete", container3.innerHTML);
    });
  }
  
  const toCompleted = document.querySelector('#complete');
  toCompleted.addEventListener('click', (event) => {
   toComplete();
  });

  

  const remove = () => {
  
    const checkboxes = document.querySelectorAll(`input[name="completed"]:checked`);
      checkboxes.forEach((checkbox) => {

      let toConfirm = confirm(`Congratulations on the completion of this task. Do you want to delete "${checkbox.nextSibling.innerHTML}" from your todo list?`);

      if(toConfirm === false){
        return;
      }
      checkbox.parentNode.parentNode.removeChild(checkbox.parentNode);
      
      localStorage.removeItem('complete');
      localStorage.setItem("complete", container3.innerHTML);
      });
    }
    
    const removeButton = document.querySelector('#remove');
    removeButton.addEventListener('click', (event) => {
   
     remove();
    });








/*let a = document.getElementById('add');
let b = document.getElementsByTagName('textarea')[0];

const cl = () => {
console.log(b.value);
}
a.addEventListener("click", cl);



let a = document.getElementsByTagName("button")[0];
let b = document.getElementsByTagName("input")[0];


function func(){
    localStorage.setItem("name", b.value);
};

function fun(){
  let a = localStorage.getItem("name");
  console.log(a);
b.value = a;
};


 window.addEventListener("load", fun);
a.addEventListener("click", func);*/
