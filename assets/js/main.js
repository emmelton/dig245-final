/* javascript */

//variables to store each input and comment
var submission = {
  "name": [],
  "email": [],
  "comment": []
};


// to remmeber previous answers
var pastSubmission;

// load homepage by default
$("rotation").load('pages/submit.html');

// click event to display real comments page
$(document).on('click', '.displayRealPage', function() {
  $('rotation').load('pages/real.html');
});

// display the real comments pages
$(document).on('submit', '#commentForm', function() {

// track entries
var answer = $('input[name=name]:written').val();
//store the answer to show in case they go back
pastSubmission = answer;
// testing
console.log('submission was', answer);

// add entry in list of entries
if (answer == 'name') {
  answers.nameText ++;
} else if (answer == 'email'){
  answers.emailText ++;
} else if (answer == 'comment'){
  answers.commentText ++;
  //testing
}
  console.log('answers', answers);

  //one page is laoded then its data can be updated
  $('#rotation').load('pages/post.html', function() {

    // get a reference to the site where the submissions will load
    var subs = document.getElementById('submissions').getContext('2d');

    // create the list of submissiosn and supply settings

    var submissions = new Submission(subs, {
      type: 'text',
      data: {
        labels: ["Name", "Comment"],
        datasets: [{
          label: 'Responses',
          data: [
            answers.nameText,
            answers.emailText,
            answers.commentText
          ],
        }]

      }
    });
  });

});











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
