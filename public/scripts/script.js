const submitBtn = document.querySelector("#submit-button");
const userName = document.querySelector('#username');
const comment = document.querySelector('#comment');

submitBtn.addEventListener('click', testPrint);

function testPrint(){
    console.log(userName);
    console.log(comment)
}