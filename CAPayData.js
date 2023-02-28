function displaymyMessage()
{
   t5U13File = document.getElementById("T5U13").files[0]; 

   cares = document.getElementById("CARESDTA").files[0];
   document.getElementById('ui_message').innerHTML =t5U13File.name + "----" + cares.name;  
  



	//let string = prompt("Please enter a string to test");	
//document.write("Hello " + string);
//document.getElementById('ui_message').innerHTML ="Reading your input files";  
}