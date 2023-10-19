//TODO: 
// - Dark Mode Toggle
// - Perform Date calc in function
// - form validation
// - assignment part 1+2/

const form = document.getElementById('comment_form');
const userName = form.elements['username'];
const comment = form.elements['comment'];
const commentContainer = document.getElementById('comment_holder');
let commentArray = [];
let commentBox = document.createElement("div");
let commentUser = document.createElement("ul");
let commentBody = document.createElement("p");
let listUser = document.createElement("li");
let listTimeStamp = document.createElement("li");
listUser.id = 'user-name';


form.addEventListener("submit", function(event){
    event.preventDefault();

    let enterredUsername = userName.value;

    if(enterredUsername == "hacker"){
        alert("You are banned!");
        form.reset();
    } else {

        //need to remove the comments array of Div comments
        //just because our comments need to be looped through

        while (commentContainer.firstChild) {
            commentContainer.removeChild(commentContainer.firstChild);
        }

        listUser.textContent = enterredUsername;

        //create timestamp
        //want to reinitialise this every time
        //to get accurate timestamp
        let dateStr = "";
        let date = new Date();
        dateStr += date.getDate() + "-";
        let month = Number(date.getMonth());
        month++;
        dateStr += month + "-";
        dateStr += date.getFullYear();
        listTimeStamp.textContent = dateStr;
        
        
        commentUser.appendChild(listUser);
        commentUser.appendChild(listTimeStamp);

        commentBody.textContent = comment.value;

        commentBox.appendChild(commentUser);
        commentBox.appendChild(commentBody);
        commentArray.push(commentBox);

 
        for(let i = 0; i < commentArray.length; i++){
            console.log(commentArray[i]);
            commentContainer.appendChild(commentArray[i]);
        }


        form.reset();
    }
    

});

