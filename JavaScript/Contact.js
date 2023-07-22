function validateForm()
			{
				var name = document.forms["contactForm"]["name"].value;
				var number = document.forms["contactForm"]["number"].value;
				var email = document.forms["contactForm"]["email"].value;
				var messageDetails = document.forms["contactForm"]["message"].value;

				//alert(messageDetails);
				if (name == "" || number == "" || messageDetails == "" || email == "") 
				{
					alert("Please type into all the fields");
				}

				else
				{
					alert("We will respond to you within 30 mins.")
				}
			}