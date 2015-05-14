/*  CLIENT SIDE CODE */

//set up a view object to render our content
//set up other object models
//actually initialize the page look (document.ready)
// on page load
$(function(){
  // get and render the food
  phrase.all();
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

// Phrases OBJECT
function phrase() {};
phrase.all = function() {
  $.get("/phrases", function(res){ 
    // parse the response
    var phrases = JSON.parse(res);
    console.log(phrases);
    // render the results
    View.render(phrases, "phrase-ul", "phrases-template");
  });
};