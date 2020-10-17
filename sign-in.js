$("#login").click(function login(){
	var name =$("#username").val()
	var pass =$('#password').val()

	console.log(name)
	console.log(pass)

	if (name ==="farah@hotmail.com" && pass !=="12345") {
		alert('Wrong password')
	}

	if (name !=="farah@hotmail.com" && pass ==="12345") {
		alert('Wrong username')
	}

	if(name ==="farah@hotmail.com" && pass==="12345"){
		alert("Welcome to your profile !")
		location.replace(profile.html);
	}
		
	})


             


