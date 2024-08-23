// const ul = document.getElementById("todo-list");
// const addBtn = document.getElementById("btn");
// const input = document.getElementById("input");

// addBtn.addEventListener("click", () => {
//   if (input.value.trim().length == 0) {
//     alert("Inputga nimadir yozing!");
//     input.value = ""
//   } else {
//     const li = document.createElement("li");
//     li.innerHTML = `  <div>
//                         <i class="fa-regular fa-circle" id="circle" onclick="completedTodo(this)" ></i>
//                         <i class="fa-regular fa-circle-check" id="check" onclick="nocompletedTodo(this)"></i>
//                         <p>${input.value}</p>
//                     </div>
//                     <button class="delete" onclick="deleteTodo(this)"><i class="fa-solid fa-trash-can"></i></button>`;

//     ul.appendChild(li);
//     input.value = "";
//   }


// });
// const vaqt=new Date ();
// console.log(vaqt);

const body=document.getElementsByName("body")[0]
const hour=document.getElementById("soat")
const minut=document.getElementById("minut")
const sekund=document.getElementById("sekund")



let s=0;
let m=0;
let sec=0;
function timer(){
    if(sec==59){
        m++;
        sec=0;
    }
    if(m==59){
        s++;
        m=0;
    }
    hour.textContent= s;
    minut.textContent= m ;
    sekund.textContent= sec ;


    sec++;
}
setInterval(timer,1);