// const newTag = document.createElement("h1");
// const newLink = document.createElement("a");
// const newBtn = document.createElement("button");
// const newInput = document.createElement("input");

// newTag.textContent = "Salom H1 DOM";
// newLink.textContent = "Salom A LINK";
// newBtn.textContent = "Salom Btn DOM";
// newInput.placeholder = "Enter your name";

// newTag.style.color = "red";
// newTag.style.backgroundColor = "black";
// newTag.style.textAlign = "center";

// newLink.href = "https://kun.uz/ru";
// newLink.target = "blank";

// document.body.append(newTag,newLink,newBtn,newInput);


// const userData = {
//     name: "SUNNATBEK",
//     surname: "YUSUPOV",
//     age: 18
// };

// const container = document.createElement("div");
// container.style.border = "1px solid black";
// container.style.padding = "10px";
// container.style.margin = "10px";
// container.style.width = "250px";
// container.style.backgroundColor = "#f9f9f9";
// container.style.fontFamily = "Arial, sans-serif";


// container.innerHTML = 
//     <p><strong>Имя:</strong> ${userData.name}</p>
//     <p><strong>Фамилия:</strong> ${userData.surname}</p>
//     <p><strong>Возраст:</strong> ${userData.age}</p>
// ;

// document.body.appendChild(container);

// const userName = document.createElement("h2")
// userName.style.color = "black" ;
// const userSurname = document.createElement("h2")
// const userAge = document.createElement("h2")

// if (userName = prompt("ismingizni kiriting")){

// }



// document.body.append(userName) 

// const userName = document.createElement("h2");
// userName.style.color = "black";

// const userSurname = document.createElement("h2");
// const userAge = document.createElement("h2");

// const name = prompt("Ismingizni kiriting:");
// const surname = prompt("Familyangizni kiriting:");
// const age = prompt("Yoshingizni kiriting:");
// const KottaKichik = confirm("Ism familiangizni kotta kihkich kilmoqchimisiz")

// if (name && surname && age && KottaKichik) {
//   userName.textContent = `Ism: ${name}`;
//   userSurname.textContent = `Familya: ${surname}`;
//   userAge.textContent = `Yosh: ${age}`;
//   KottaKichik.textContent.textCont = 

//   document.body.append(userName, userSurname, userAge);
// }else if (userName && userSurname ){

    
// }
//  else {
//   alert("Iltimos ism familangiz ni kiriting");
// }



const userName = document.createElement("h2");
const userSurname = document.createElement("h2");
const userAge = document.createElement("h2");

const name = prompt("Ismingizni kiriting:");
const surname = prompt("Familyangizni kiriting:");
const age = prompt("Yoshingizni kiriting:");
const KottaKichik = confirm("Ism familiangizni kotta kichik kilmoqchimisiz?");

if (name && surname && age !== null) {
  if (KottaKichik) {
    userName.textContent = `Ism: ${name.toUpperCase()}`;
    userSurname.textContent = `Familya: ${surname.toUpperCase()}`;
  } else {
    userName.textContent = `Ism: ${name.toLowerCase()}`;
    userSurname.textContent = `Familya: ${surname.toLowerCase()}`;
  }
  
  userAge.textContent = `Yosh: ${age}`;
  
  document.body.append(userName, userSurname, userAge);
} else {
  alert("Iltimos ism, familia, va yoshni kiriting.");
}
