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
$(document).on('click', '#submitBtn', function(e) {
  e.preventDefault();
  $('#rotation').load('pages/posts.html');


  console.log(
    $('#commentsArea').val()
  );

  fetch("https://sentim-api.herokuapp.com/api/v1/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        "text": $('#commentsArea').val(),
      }),
    })
    .then((res) => res.json())
    .then((data) => {

      console.log(data);
      $('.result').html(data);


      var getUserInput = function sentimentResult() {
        var lines = [];

        $('#commentsArea').each(function() {
          lines.push($(this).val().split('\n'));
        });

        // var responseData = "#commentsArea".value;
        // var result = data.result.type;

        for (let i = 0; i < responseData.sentences.length; i++) {
          if (results.sentences[i].sentiment.type) {
            sentences++;
          }

          console.log('sentimentResult()');
          return sentimentResult();

        }

      };



      return false;

    });

});

// if result.sentences.length is greater than zero
// loop through sentences
// do something with each sentence

//
// console.log(data);
// $('.result').html(data);
//
//
//
// function example() {
// results.sentences[i].sentiment.type
// }
//
// function sentimentResult() {
// var responseData = "#commentsArea".value;
// var result = data.result.type;
//
//
// for (let i = 0; i < responseData.sentences.length; i++) {
//   if (results.sentences[i].sentiment.type) {
//     sentences++;
//   }
//
//   console.log('sentimentResult');
//   return sentimentResult;
//
// }
//
//
//
// function sentimentResult() {
//   var responseData = data;
//   var result = data.result.type;
//
//
//   for (let i = 0; i > -1; i++) {
//     text += "Your sentence was" + data.result.type;
//   }
//   if (data[i].result.type) {}
// }
//
//
//
//
//           function sentimentResult() {
//             let str = '';
//             str += `
// <div class='row center mt-4'>
//   <div class="col-12">
//     <p>${data[i].result.type}'<br></p>
//   </div>
// </div>`
//
//             return str;
//           }
//
//
//
