
//on click save take imputs and save them into variables
// $('#save').click(function(){
//    var yeildArray =[]
//    yeildArray.push($("#yeild").val());
//    var authorArray =[];
//    authorArray.push($("#author").val()); 
//    console.log(yeildArray)
//    console.log(authorArray);
// })


$('#save').click(function(){
   var newRecipe ={
   	yeild:"" , 
   	author:"", 
   	prepTime:"", 
   	categories:"",
   	discription: " " 
   }

   newRecipe.yeild=$("#yeild").val();
   newRecipe.author=$("#author").val();
   newRecipe.prepTime=$("#prep-time").val();
   newRecipe.categories= $("#categories").val();
   newRecipe.discription= $("#disc").val();

   console.log(newRecipe)

})



//=============
//Add section

//add ingredients

$("#add-ingredients").click(function(){
	var ingredients =$("#add-ingredients-input").val();
	if(ingredients === ""){
		alert("You must write something")
	} else {
	$("<li>"+ ingredients +"</li>").appendTo(".ordered-list")}
})


// $("#add-task").click(function(){
// 	var task = $("#input-task").val()
// 	if(task === ""){
// 		alert("You must write something")
// 	} else {
// 	$("<li>"+ task +"</li>").appendTo("#todo-list").on("click", function toggle(){
// 		$(this).toggleClass("crossed")}   )}
// 	$("#input-task").val("");
//    })


// $("#add-task").click(function(){
// 	var task = $("#input-task").val()
// 	if(task === ""){
// 		alert("You must write something")
// 	} else {
// 	$("<li>"+ task +"</li>").appendTo("#todo-list").on("click", function toggle(){
// 		$(this).toggleClass("crossed")}   )}
// 	$("#input-task").val("");
//    })




 

  $("#remove-task").click(function(){ 
  	if ( $('#todo-list li').length === 0 ){
  		alert("no more tasks to remove");
  	}
  	else {
  		$("#todo-list li:last-child").remove()
  	}
   })


    // Empty input feild after adding a task
  $('#add-task').click( function(){
        if($("#input-task").val() !== " "){
        	//OR use .val().length === 0
        	$("#input-task").val("");}
    })

//remove all tasks
    $(".input-container").append("<button id ='remove-all' > Remove all Tasks </button>")

  $('#remove-all').click(function(){
	$('ul').empty(); })