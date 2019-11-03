	function doAppend()
	{	
		if(validateText())
		{
		var name = document.myForm.student.value;
		var branch = document.myForm.major.value; 
		var startYear = parseInt(document.myForm.year.value);	
		
		if(startYear < 2000 || startYear < 9999)
						{
							alert( "Inncorrect Year!" );
							document.myForm.year.focus();
							return false;
						}
		
		
		var myDate = new Date();	
		var results = "";
		
		results +=  (myDate.getMonth() + 1) +"/"+ myDate.getDate() + "/" + myDate.getFullYear() + "-" + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() + " - " + name + " , " + branch + "  " + ", " + startYear; 
		
		var t = document.createTextNode(results);
		document.getElementById("result").appendChild(t);
		
		linebreak = document.createElement("br");
		document.getElementById("result").appendChild(linebreak);
	
		document.myForm.student.value = "";
		document.myForm.major.value = "";
		document.myForm.year.value = "";
		}
	}
	
	function validateText()
				{			/* Validate all the fields to verify any null values present */
									
					if( document.myForm.student.value == "" ) 
						{
						alert( "Please provide your name!" );
						document.myForm.student.focus();
						return false;
						}
					 if( document.myForm.major.value == "" ) 
						{
						alert( "Please provide your Major!" );
						document.myForm.major.focus();
						return false;
						}
											
					return true;
				}	
