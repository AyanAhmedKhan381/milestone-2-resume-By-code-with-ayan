var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // type assertion 
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email:');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experenceElement = document.getElementById('experence');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experenceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experence = experenceElement.value;
        var skills = skillsElement.value;
        // create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n<p> <strong>Name:</strong> ".concat(name_1, " </p>\n<p> <strong>Email:</strong> ").concat(email, " </p>\n<p> <strong>Phone Number:</strong> ").concat(phone, " </p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experence</h3>\n<p>").concat(experence, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
        var ResumeOutputElement = document.getElementById(resumeOutput);
        if (ResumeOutputElement) {
            ResumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output element missing');
        }
    }
    else {
        console.error('one or more output element are missing');
    }
});
