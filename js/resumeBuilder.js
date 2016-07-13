/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills =
    ["Cool", "Programming", "Excel", "Databases", "HTML"];

var bio = {

    "name": "Andrew Owens",
    "role": "Front End Developer",
    "skills": skills,
    "email": "iseis360@gmail.com",
    "mobile": "(307)871-4124",
    "gitHub": "www.gitHub.com/Iseis",
    "location": "Eugene, OR",
    "welcome": "Hello I am awesome and want a job",
    "pic": "images/fry.jpg"
};

var formattedText = HTMLheaderName.replace("%data%", bio.name);
$('#header').append(formattedText);

formattedText = HTMLheaderRole.replace("%data%", bio.role);
$('#header').append(formattedText);

formattedText = HTMLmobile.replace("%data%", bio.mobile);
$('#header').append(formattedText);
formattedText = HTMLemail.replace("%data%", bio.email);
$('#header').append(formattedText);
formattedText = HTMLgithub.replace("%data%", bio.gitHub);
$('#header').append(formattedText);
formattedText = HTMLlocation.replace("%data%", bio.location);
$('#header').append(formattedText);
formattedText = HTMLbioPic.replace("%data%", bio.pic);
$('#header').prepend(formattedText);

$('#header').append(HTMLskillsStart);

for(i = 0; i < skills.length; i++){
    formattedText = HTMLskills.replace("%data%", bio.skills[i]);
    $('#header').append(formattedText);
}

var work = {
        "city": "Eugene, OR",
        "employer": "States Ind",
        "years": "1",
        "position": "IT"
    
};

var eductation = {
    "school": "University of Oregon",
    "years": "4",
    "city": "Eugene"
};

 $('#workExperience').append(HTMLworkStart);
 formattedText = HTMLworkEmployer.replace("%data%", work.employer);
  $('#workExperience').append(formattedText);
formattedText = HTMLworkTitle.replace("%data%", " Position: " + work.position);
$('#workExperience').append(formattedText);
formattedText =HTMLworkDates.replace("%data%", "Years: " + work.years);
$('#workExperience').append(formattedText);

formattedText =HTMLworkDates.replace("%data%", " City: " + work.city);
$('#workExperience').append(formattedText);

