
//on click save1 take imputs and save them into variables

$('#save1').click(function(){
   var newRecipe ={
    date:"",
    yeild:"" , 
    author:"", 
    prepTime:"", 
    categories:"",
    discription: "" 
   }


   newRecipe.date=$("#date").val();
   newRecipe.yeild=$("#yeild").val();
   newRecipe.author=$("#author").val();
   newRecipe.prepTime=$("#prep-time").val();
   newRecipe.categories= $("#categories").val();
   newRecipe.discription= $("#discription-box").val();

   console.log(newRecipe);

})


//Add section

//add ingredients

var ingredientsArray=[];
var instructionsArray=[];
var notesArray=[];

$("#add-ingredients").click(function(){
  
  var ingredients =$("#add-ingredients-input").val();
  if(ingredients === ""){
    alert("You must write something")
  } else {
  $("<li>"+ ingredients +"</li>").appendTo("#ingr-list")
  ingredientsArray.push(ingredients);
  console.log(ingredientsArray);

}
             
})


// Empty ingredient input feild after adding an ingredient
  $('#add-ingredients').click( function(){
        if($("#add-ingredients-input").val() !== " "){
          //OR use .val().length === 0
          $("#add-ingredients-input").val("");}
    })


//add instruction 

$("#add-instructions").click(function(){
  var instructions =$("#add-instructions-input").val();
  if(instructions === ""){
    alert("You must write something")
  } else {
  $("<li>"+ instructions +"</li>").appendTo("#inst-list")
   instructionsArray.push(instructions);
   console.log(instructionsArray);
}           
})

// Empty instructions input feild after adding an instruction
  $('#add-instructions').click( function(){
        if($("#add-instructions-input").val() !== " "){
          //OR use .val().length === 0
          $("#add-instructions-input").val("");}
    })


//add notes

$("#add-notes").click(function(){
  var notes =$("#add-notes-input").val();
  if(notes === ""){
    alert("You must write something")
  } else {
  $("<li>"+ notes +"</li>").appendTo("#notes-list")
 notesArray.push(notes);
   console.log(notesArray);
}          
})

// Empty notes input feild after adding a note
  $('#add-notes').click( function(){
        if($("#add-notes-input").val() !== " "){
          //OR use .val().length === 0
          $("#add-notes-input").val("");}
    })


// Delete Section 
 
// delete ingredient 
$("#delete-ingredients").click(function(){ 
    if ( $('#ingr-list li').length === 0 ){
      alert("no more ingredients to remove");
    }
    else {
      $("#ingr-list li:last-child").remove()
      ingredientsArray.pop();
      console.log(ingredientsArray)
    }
   })


// delete instruction

  $("#delete-instructions").click(function(){ 
    if ( $('#inst-list li').length === 0 ){
      alert("no more instructions to remove");
    }
    else {
      $("#inst-list li:last-child").remove()
      instructionsArray.pop();
      console.log(instructionsArray)
    }
   })


// delete note

    $("#delete-notes").click(function(){ 
    if ( $('#notes-list li').length === 0 ){
      alert("no more notes to remove");
    }
    else {
      $("#notes-list li:last-child").remove()
      notesArray.pop();
      console.log(notesArray)
    }
   })



//remove all section

//remove all ingredients
   
  $('#delete-all-ingredients').click(function(){
  $('#ingr-list').empty();
  ingredientsArray.splice(0,ingredientsArray.length);

  console.log(ingredientsArray);
   })

  

  //remove all instructions
   
  $('#delete-all-instructions').click(function(){
  $('#inst-list').empty()
  instructionsArray.splice(0,instructionsArray.length);

  console.log(instructionsArray)

   })


  //remove all notes
   
  $('#delete-all-notes').click(function(){
  $('#notes-list').empty()
  notesArray.splice(0,notesArray.length);

  console.log(notesArray)

})


  // $("#reset-btn").click( function(){$("#Myform").trigger("reset")})

 
        
      