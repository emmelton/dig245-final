/* javascript */

//variables to store each input and comment
var submission = {
  "name": "",
  "comment": ""
};


// to remmeber previous answers
var pastSubmission;

// load homepage by default
$("rotation").load('pages/submit.html');

// document.getElementById('test').onclick().load('pages/submit.html');

// click event to display submit page
$(document).on('click', '#homeBtn', function() {
  $('#rotation').load('pages/submit.html');
});

//click event to display real page
$(document).on('click', '#submitBtn', function() {
  $('rotation').load('pages/posts.html');
});

  window.onload = function () {
       document.getElementById("submitBtn").addEventListener("click", function () {
         fetch("https://sentim-api.herokuapp.com/api/v1/", {
           headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
           },
           method: "POST",
           body: JSON.stringify({
             nameText: document.getElementById('inputName').value,
             commentText: document.getElementById("commentsArea").value,
           }),
         })
           .then((res) => res.json())
           .then((data) => {
             document.getElementById("resp").innerText = JSON.stringify(
               data,
               null,
               2
             );
           });
       });
     };




//  $('#rotation').load('pages/real.html, pages/post.html');
//access value of text area and store the input
// userComment = $("commentsArea").text();
//
// //if you put "userComment" inside the () of text, it sets the value there
// });
//
// // display the real comments pages
// $(document).on('submit', '#commentForm', function() {
//
// // track entries
// var answer = $('input[name=name]:written').val();
// //store the answer to show in case they go back
// pastSubmission = answer;
// // testing
// console.log('submission was', answer);
//
// // add entry in list of entries
// if (answer == 'name') {
//   answers.nameText ++;
// } else if (answer == 'email'){
//   answers.emailText ++;
// } else if (answer == 'comment'){
//   answers.commentText ++;
//   //testing
// }
//   console.log('answers', answers);
//
//   //one page is laoded then its data can be updated
//   $('#rotation').load('pages/post.html', function() {
//
//     // get a reference to the site where the submissions will load
//     var subs = document.getElementById('submissions').getContext('2d');
//
//     // create the list of submissiosn and supply settings
//
//     var submissions = new Submission(subs, {
//       type: 'text',
//       data: {
//         labels: ["Name", "Comment"],
//         datasets: [{
//           label: 'Responses',
//           data: [
//             answers.nameText,
//             answers.emailText,
//             answers.commentText
//           ],
//         }]
//
//       }
//     });
//   });
//
// });











// document.querySelectorAll('#commentForm input');
// Array.form(document.querySelectorAll('#commentForm input')).reduce((acc, input) => ({
//   ...acc,
//   [input.id]: input.value
// }), {});
//
//
// function game() {
//
//   let str = '';
//   let r = Math.floor(Math.random() * data.length);
//   str += `var name = ${data[r].time}`
//
//
//   var name = "Pieter";
//   console.log(name.replace("good", "bad"));
//
//   var input = "[input from user]";
//   var ourIntriguingString = ourInterestingString.replace("interesting", "intriguing");
//   console.log(ourIntriguingString);


  // const commentForm = document.getElementById('commentForm');
  //
  // commentForm.addEventListener('submit', function(e) {
  //   e.preventDefault();
  //
  //   const formData = new FormData(this);
  //
  //   fetch('login.php', {
  //     method: 'post',
  //     body: formData }).then(function(response) {
  //       return response.text().then(function (text) {
  //         console.log(text);
  //       }).catch(function (error) {
  //         console.error(error);
  //       })
  //     }
  // });
