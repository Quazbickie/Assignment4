// const button = document.querySelector("button");



// function promptTest() {
//     const comment = prompt("What is your comment?");
    
//     console.log("Testing user input");

//     const commentHolder = document.querySelector("#comment_holder");
//     commentHolder.textContent = `${comment}`;

// }

// button.addEventListener("click", promptTest);

const form = document.getElementById('comment_form');
const userName = form.elements['username'];
const comment = form.elements['comment'];
const commentContainer = document.getElementById('comment_holder');


form.addEventListener("submit", function(event){
    event.preventDefault();

    let enterredUsername = userName.value;
    let enterredComment = comment.value;
    console.log(enterredUsername);
    console.log(enterredComment);

    const commentBox = document.createElement("div");
    const commentUser = document.createElement("ul");
    const commentBody = document.createElement("p");

    const listUser = document.createElement("li");
    listUser.id = 'user-name';
    const listTimeStamp = document.createElement("li");

    listUser.textContent = enterredUsername;

    let dateStr = "";
    const date = new Date();
    dateStr += date.getDate() + "-";
    
    let month = Number(date.getMonth());
    month++;
    dateStr += month + "-";
    dateStr += date.getFullYear();


    listTimeStamp.textContent = dateStr;
    commentUser.appendChild(listUser);
    commentUser.appendChild(listTimeStamp);

    commentBody.textContent = enterredComment;

    commentBox.appendChild(commentUser);
    commentBox.appendChild(commentBody);

    commentContainer.appendChild(commentBox);


});





// const login = prompt("What is your login?");

// if (login == "Admin"){
//     const password = prompt("Please enter your password");

//     if(password == "TheMaster"){
//         alert("Welcome!");
//     } else if (password == '' || password == null){
//         alert("Cancelled");
//     } else {
//         alert("Wrong Password");
//     }

// } else if (login == '' || login == null ) {
//     alert("Cancelled");
// } else {
//     alert("I don't know you");
// }