	function doAppend()
	{	
		if(validateText())
		{
		var name = document.StudentForm.student.value;
		var branch = document.StudentForm.major.value; 
		var startYear = parseInt(document.StudentForm.year.value);	
		
		if(2000 >= document.StudentForm.year.value )
						{
							alert( "Inncorrect Year!" );
							document.StudentForm.year.focus();
							return false;
						}
		
		
		var myDate = new Date();	
		var results = "";
		
		results +=  (myDate.getMonth() + 1) +"/"+ myDate.getDate() + "/" + myDate.getFullYear() + "-" + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds() + " - " + name + " , " + branch + "  " + ", " + startYear; 
		
		var t = document.createTextNode(results);
		document.getElementById("result").appendChild(t);
		
		linebreak = document.createElement("br");
		document.getElementById("result").appendChild(linebreak);
	
		document.StudentForm.student.value = "";
		document.StudentForm.major.value = "";
		document.StudentForm.year.value = "";
		}
	}
	
	function validateText()
				{			/* Validate all the fields to verify any null values present */
									
					if( document.StudentForm.student.value == "" ) 
						{
						alert( "Please provide your name!" );
						document.StudentForm.student.focus();
						return false;
						}
					 if( document.StudentForm.major.value == "" ) 
						{
						alert( "Please provide your Major!" );
						document.StudentForm.major.focus();
						return false;
						}
											
					return true;
				}	
