/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Andrew Owens");
var formattedTitle = HTMLheaderRole.replace("%data%", "Front End Developer");

$('#header').append(formattedName);
$('#header').append(formattedTitle);

var skills =
    ["Cool", "Programming", "Excel", "Databases", "HTML"];

for ( i = 0; i < skills.length; i++){

    $('#main').append(skills[i]);
}

var bio = {

    "name": "Andrew Owens",
    "role": "Front End Developer",
    "skills": skills,
    "contact": "iseis360@gmail.com",
    "welcome": "Hello I am awesome and want a job",
    "pic": 
};

