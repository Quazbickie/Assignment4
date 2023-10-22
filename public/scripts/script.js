//TODO: 
// - Dark Mode Toggle
// - form validation
// - assignment part 1+2/

const form = document.getElementById('comment_form');
let commentContainer = document.getElementById('comment_holder');
let commentArray = [];



form.addEventListener("submit", function(event){
    event.preventDefault();

    let commentDiv = document.createElement("div");         // I am appending a large Div containing Username and comments to the DOM
    let commentUser = document.createElement("ul");         // Each comment is made up of a username and comment section
    let listTimeStamp = document.createElement("li");       // the username is in the form of a list, with Username and Timestamp list items
    let listUser = document.createElement("li");            // the comment is stored in a paragraph element
    listUser.id = 'user-name';                              // a <hr> is used between the username list and the comment paragraph to provide 
    let commentBody = document.createElement("p");          // some simply styling.
    let hr = document.createElement("hr");                  

    //assign the username and comment fields to 
    //corresponding variables
    //this variable stores the html element
    //(i.e) userName holds <input/>
    let userName = form.elements['username'];  
    let comment = form.elements['comment'];

    //variable to hold textcontent of username
    //trim any trailing whitespace.
    let enterredUsername = userName.value.trim();

    //check if enterred name is hacker, if so alert user
    //casting tolowercase to make sure 'Hacker' gets caught too
    //hackers and hACKERS can be very sneaky
    if(enterredUsername.toLowerCase() == "hacker"){
        alert("You are banned!");
        form.reset();
    } else {

        //need to remove the comments array of Div comments
        //just because our comments need to be looped through
        //previously had simpler solution without use of loop.
        while (commentContainer.firstChild) {
            commentContainer.removeChild(commentContainer.firstChild);
        }

        //listItems to be appended are assigned here
        //ListUser item is filled with enterred username
        //listTimeStamp is filled from result of getTimeStamp() function
        listUser.textContent = enterredUsername;
        listTimeStamp.textContent = getTimeStamp();

        
        //append username and timestamp list items
        //to the commentUser UL item
        commentUser.appendChild(listUser);
        commentUser.appendChild(listTimeStamp);

        //commentBody p item is populated with content
        //of comment box enterred by user
        commentBody.textContent = comment.value;

        //commentDiv holder is appended with the Username, followed
        // by a <hr> and then followed by the comment paragraph
        //This commentDiv is then added to an array of other comment Divs
        commentDiv.appendChild(commentUser);
        commentDiv.appendChild(hr);
        commentDiv.appendChild(commentBody);
        commentArray.push(commentDiv);

        //step through comment Divs array and append
        //each individual comment to the DOM
        for(let i = 0; i < commentArray.length; i++){
            console.log(commentArray[i]);
            commentContainer.appendChild(commentArray[i]);
        }


        form.reset();
    }

    function getTimeStamp() {
        let dateStr = "";
        let date = new Date();
        dateStr += date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + 
                        date.getDate() + "-" + (Number(date.getMonth())+1) + "-" + date.getFullYear(); 
        return dateStr;
    }
    

});


//TODO: 
// - Dark Mode Toggle
// - Perform Date calc in function
// - form validation
// - assignment part 1+2/


//Array seems to update to contain the same thing in every index
//is this because the array only has a reference to the item instead of the item itself?
//need to have this explained to me.

// const form = document.getElementById('comment_form');
// let commentContainer = document.getElementById('comment_holder');
// let commentArray = [];
// let commentBox = document.createElement("div");
// let commentUser = document.createElement("ul");
// let commentBody = document.createElement("p");
// let listUser = document.createElement("li");
// let listTimeStamp = document.createElement("li");
// listUser.id = 'user-name';


// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let userName = form.elements['username'];
//     let comment = form.elements['comment'];
//     let enterredUsername = userName.value;

//     if(enterredUsername == "hacker"){
//         alert("You are banned!");
//         form.reset();
//     } else {

//         //need to remove the comments array of Div comments
//         //just because our comments need to be looped through
//         while (commentContainer.firstChild) {
//             commentContainer.removeChild(commentContainer.firstChild);
//         }

//         listUser.textContent = enterredUsername;

//         //create timestamp
//         //want to reinitialise this every time
//         //to get accurate timestamp
//         let dateStr = "";
//         let date = new Date();
//         dateStr += date.getDate() + "-";
//         let month = Number(date.getMonth());
//         month++;
//         dateStr += month + "-";
//         dateStr += date.getFullYear();
//         listTimeStamp.textContent = dateStr;
        
        
//         commentUser.appendChild(listUser);
//         commentUser.appendChild(listTimeStamp);

//         commentBody.textContent = comment.value;

//         commentBox.appendChild(commentUser);
//         commentBox.appendChild(commentBody);
//         commentArray.push(commentBox);

 
//         for(let i = 0; i < commentArray.length; i++){
//             console.log(commentArray[i]);
//             commentContainer.appendChild(commentArray[i]);
//         }


//         form.reset();
//     }
    

// });



