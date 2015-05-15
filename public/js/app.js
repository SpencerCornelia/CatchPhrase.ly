//  CLIENT SIDE CODE

//set up a view object to render our content
//set up other object models
//actually initialize the page look (document.ready)
// on page load
$(function(){
  // get and render the food
  Phrase.all();
  View.init();
});



// // // // // // //

// VIEW OBJECT
function View() {};
View.render = function(items, parentId, templateId) {
  // render a template
  var compile = _.template($("#" + templateId).html());
  // input data into template and append to parent
  $("#" + parentId).html(compile({collection: items}));
};

View.init = function() {
    // food form submit event listener
  $("#newPhrase").on("submit", function(e){
    // stop page reload
    e.preventDefault();
    // format form data into a query string
    var phraseParams = $(this).serialize();
    Phrase.create(phraseParams);
  });
}

// Phrases OBJECT
function Phrase() {};
Phrase.all = function() {
  $.get("/phrases", function(res){ 
    // parse the response
    var phrases = JSON.parse(res);
    // render the results
    View.render(phrases, "phrase-ul", "phrases-template");
  });
};

Phrase.create = function(wordParams) {
  $.post("/phrases", wordParams).done(function(res){
    // once done, re-render all foods
    Phrase.all();
  }).done(function(res){
    // reset form
    $("#newPhrase")[0].reset();
  });
};

Phrase.delete = function(word) {
  var wordId = $(word).data().id;
  $.ajax({
    url: '/phrases/' + wordId, // where does url link to??
    type: 'DELETE',
    success: function(res) {
      // once successfull, re-render all foods
      Phrase.all();
    }
  });
};

