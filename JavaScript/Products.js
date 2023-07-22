var data = [['s9.png','Samsung Galaxy S9','1,00,000','90,000'],['note8.png','Samsung Galaxy Note 8','','1,00,000'],
['j3.png', 'Samsung Galaxy J3','20,000','15,000'],['core.png','Samsung Galaxy Core','15,000','10,000'],
['s7.png','Samsung Galaxy S7','60,000','50,000'],['j2.png','Samsung Galaxy J2','15,000','10,000'],
['j7.png','Samsung Galaxy J7','40,000','30,000'],['a71.png','Samsung Galaxy A71','50,000','30,000'],
['v1.png','Vivo V1','70,000','60,000'],['v5s.png','Vivo V5s','40,000','30,000'],['v9.png', 'Vivo V9','80,000','70,000'],
['x20.png','Vivo X20','40,000','30,000'],['a37.png','Oppo A37','','30,000'],['f1s.png','Oppo F1s','1,00,000','90,000'],
['r9s.png', 'Oppo R9s','','30,000'],['r11.png','Oppo R11','','90,000']];

// using var i in loop to get the data from the array and placing it with the HTML code //

var length = data.length;

	for (var i=0; i<length; i++) {
		
		var td = document.getElementById(String(i));

		td.innerHTML = '<center><img src=../Images/' + data[i][0] + '><p>' + data[i][1] + '</p>' + 
							'<p id="priceCut">' + data[i][2] + '</p>' +
							'<p id="price">NPR ' + data[i][3] + '</p>' +
							'<button class="cart" onclick="addedToCart()"> Add to Cart</button>'+
						'</center>';
	}

function addedToCart() {
			alert("Item has been added to your cart!");
		}

function validateSearch() {
	var search = document.forms["search"]["searchbox"].value;
	if (search == "")
	{
		alert("Oops! the search box is Empty.")
	}else{
		alert("Sorry, the search feature is currently not available.")
	}
}