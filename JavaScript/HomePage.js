// JS code for the Clickable Image Slider which navigates the user to the location in the website as referred in the clicked image //

// Array of the location of image and the corresponding sections where the click will take you to. //
var data = [['samsung.png','HTML/Products.html#samsung'],['oppo.png','HTML/Products.html#oppo'],['vivo.png','HTML/Products.html#vivo']];

	var i=0;
	var overviews = document.getElementById("overview");
	setInterval(slide, 2000);


	function slide() {

		// Using variable i to get the data //

		if (i <= 1) 
			{
		    	i = i+1;
			}

		else
			{
				i=0; 
			}

		// Wrapping img with anchor tag to make image clickable //

	    overviews.innerHTML = "<a href=" + data[i][1] + ">" + "<img src=Images/" + data[i][0] + "></a>";
	    // Placed the data from the array to the right spots //
	} 