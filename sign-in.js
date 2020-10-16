// console.log('farah')

//on click redirect to sign up page

// function signin(){

// 	if ($('#username').val() !== null  && $('#password').val() !== null){
// 		$("#login").click(function(){
// 			var users ={
// 		      username: "",
// 		      password: "" }

// 	users.username = $('#username').val()
// 	users.password = $('#password').val()
// 		console.log(users);
// 		})
// 	}
// 		else
// 			if ($('#username').val() === null || $('#password').val() === null){
// 				alert("You must fill both feilds")
// 		console.log(users);
// 			}
// }

// // function addArrayProperty(myObject,key,myArray){

// 	var myObject{
// 	user1:[],
// 	user2:[],
// };

// 	var usersArray= [ username, password]

// // myObject.key = myArray;
// // return myObject;
// // }


    var usersObject ={key: ""}
    var userArray= [ ]
    var name =$("#username").val();
	var pass =$('password').val();

	// var location= "sign-in.html"

function signin(){
		$("#login").click(function(){
			if ( name !== null  && pass !== null){
				 userArray.push(name);
				 userArray.push(pass);
				 console.log(userArray); 

				 usersObject.key=userArray;

				 // location="profile.html";
				 // this.location.href = location;

				 console.log(usersObject);
			}
		})
	}
		     if (name === null || pass === null){
				alert("You must fill both feilds")
		         
		         console.log(usersObject);
			}

             


