// constructor ( starts with Capital letter) must call the function after it's defined.


var Comment = function(userName, text) {
	this.userName = userName;
	this.text = text;
};

Comment.prototype.render = function() {
	var li = document.createElement('li');
    li.innerHTML = '<img width="70px" src="img/' + this.userName + '.jpg"> <b>' + this.userName + ': </b><em>' + this.text + '</em></p>';
	return li;
};


//+++++++++++++++++++++++++++++++++++++++++++++
// the variables forthe DOM

var comments = document.getElementById('comments');
var chatForm = document.getElementById('chat-form');
var clearComments = document.getElementById('clear-comments');
var commentData = [];

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// This is a global function to render all of the new instances
var renderAllComments = function() {
  comments.innerHTML = '';
  commentData.forEach(function(comment) {
    comments.appendChild(comment.render());
  });
};


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// This function handles the submission of comments
var handleCommentSubmit = function(event) {
  event.preventDefault(); // prevents reloading the page

   if (!event.target.says.value || !event.target.who.value) {
    return alert('Fields cannot be empty!');
   }

   var commenter = event.target.who.value;
   var remark = event.target.says.value;

   console.log(commenter);
   console.log(remark);

   if (commenter === 'Rick') {
     remark += 'Never gonna...'
   }

    if (commenter === 'Emily') {
    remark = 'YOLO SWAG 420!!!!';
   }

   var newComment = new Comment(commenter, remark);

   console.log('Comment by ' + event.target.who.value + ' at ' + Date());
   event.target.who.value = null;
   event.target.says.value = null;

   commentData.push(newComment);
   renderAllComments();
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// event listener for comment submission
chatForm.addEventListener('submit', handleCommentSubmit);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for the CLear all comment button
clearComments.addEventListener('click', function() {
	console.log('You just cleared the comment!');
	comments.innerHTML = '';
	commentData = [];
});

// while(true) {
// 	// listen for events
// 	// notify eventlistener
// }