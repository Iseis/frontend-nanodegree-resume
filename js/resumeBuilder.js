/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Andrew Owens");
var formattedTitle = HTMLheaderRole.replace("%data%", "Front End Developer");

$('#header').append(formattedName);
$('#header').append(formattedTitle);