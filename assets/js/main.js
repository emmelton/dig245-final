/* javascript */

//idea of project:
//Social media comments sentiment analysis to rid media of negativity / negative
//talk toward other people ... slander? idk something like that

//PSEUDOCODE
//user selects type of sentiment they want
//comment from an array appears into the commentsArea
//user selects submit when they're ready to see how the sentiment analysis occurs
//sentiment returns with photo corresponding to negative or positive
//sentence loads as well with data of sentiment analysis


// array of positive comments to input
let positivePosts = [{
    text: "I love your dress! You look so cute in that!"
  },
  {
    text: "Your puppy is the cutest! I love her. I hope to see y'all soon!"
  },
  {
    text: "The @Chick-Fil-A drive through should run our entire world. I love them. They're so fast and serve so well."
  },
  {
    text: "I am so glad that I got to see you. Spending time with you makes me happy!"
  },
  {
    text: "Dude. You have the coolest shoes. I love them."
  },
  {
    text: "You have a nice boat! Let's waterski soon."
  },
  {
    text: "We're so glad that you work at our company! Thanks for coming to the Christmas party!"
  },
  {
    text: "So cute!!"
  },
  {
    text: "You're so pretty!"
  },
  {
    text: "I wish I could have been there. I hope it was so much fun!"
  },
  {
    text: "I hope the flight was quick and easy. See you again so soon!"
  }
];

// array of negative comments to input
let negativePosts = [{
    text: "I hate your dress! Please buy something else."
  },
  {
    text: "Why does your puppy look like that? She looks ugly in the sweater."
  },
  {
    text: "She's just so rude. I never want to talk to her again. Nobody talk to her."
  },
  {
    text: "Dude. Get different shoes. They're disgusting."
  },
  {
    text: "They said pizza in fifteen minutes. They got it to me in two hours. This place is awful. I'd never go back."
  },
  {
    text: "We fired him because he sucks at his job. Do not hire this guy. He turns in poor work."
  },
  {
    text: "You're going on my block list. You're so rude. I hate you."
  },
  {
    text: "Your parent literally scammed mine. I am never going to talk to you anymore. You are an awful person."
  },
  {
    text: "Do you even have a life? You're on here arguing about stupid stuff like an idiot. Get off your screen, dude."
  },
  {
    text: "@Starbucks gave me my coffee wrong twice in a week. Thanks for ruining my morning and week."
  }
];

let positiveEmojiResponse = [{
  emoji: "☺️"
},
{
  emoji: "😄"
},
{
  emoji: "😆"
},
];

let negativeEmojiResponse = [{
  emoji: "😒"
},
{
  emoji: "😤"
},
{
  emoji: "😞"
},
];



//function for making the positive words appear...?
function returnExamplePost(arr) {

  let r = Math.floor(Math.random() * arr.length);

  return arr[r].text;
}


$(document).on('click', '#positiveBtn', function() {
  $('#commentsArea').val(returnExamplePost(positivePosts));
});

$(document).on('click', '#negativeBtn', function() {
  $('#commentsArea').val(returnExamplePost(negativePosts));
});


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
  var commentsAreaText = $('#commentsArea').val();

  $('#rotation').load('pages/posts.html');


  fetch("https://sentim-api.herokuapp.com/api/v1/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        "text": commentsAreaText,
      }),
    })
    .then((res) => res.json())
    .then((data) => {

      console.log(data);

      let str = '';

      if (data.sentences.length > 0) {
        for (var i = 0; i < data.sentences.length; i++) {
          console.log(data.sentences[i]);
          str += `${negativeEmojiResponse} + ${data.sentences[i].sentiment.type} - ${data.sentences[i].sentence} <br>`;
        }

      }


      $('.result').html(str);


    });

  return false;


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
