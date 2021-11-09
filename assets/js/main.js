/* javascript */

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


  const commentForm = document.getElementById('commentForm');

  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('login.php', {
      method: 'post',
      body: formData }).then(function(response) {
        return response.text().then(function (text) {
          console.log(text);
        }).catch(function (error) {
          console.error(error);
        })
      }
  });
