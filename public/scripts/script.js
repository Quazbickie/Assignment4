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
    commentContainer.textContent = enterredUsername + "\n" + enterredComment;

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