
var suggestionsArray =[];

// $('#submit').click(function() {
// 	var suggestion= $('#comment').val();
// 	suggestionsArray.push(suggestion);
// 	console.log(suggestion)
// 	console.log(suggestionsArray)


// })


$("#submit").click(function(){
  
  var suggest = $("#comment").val();
  if(suggest === ""){
    alert("You must write something")
  }

  if( suggest !== " "){
     $('#comment').empty()
     suggestionsArray.push(suggest);
     alert(" Thank You ! We have recived your suggestion")
  }
     console.log(suggest);
     console.log(suggestionsArray);        
})

   