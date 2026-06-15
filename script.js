document.getElementById("volunteerForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const skills = document.getElementById("skills").value.toLowerCase();
    const availability = document.getElementById("availability").value;

    let recommendation = "";

    if (skills.includes("first aid")) {
        recommendation = "Medical Assistance Volunteer";
    } else if (skills.includes("teaching")) {
        recommendation = "Health Awareness Educator";
    } else if (skills.includes("communication")) {
        recommendation = "Community Outreach Volunteer";
    } else {
        recommendation = "General Support Volunteer";
    }

    document.getElementById("result").innerHTML = `
        <h3>Volunteer Registration Confirmed</h3>
        <p>Thank you for your interest in supporting HealthConnect NGO.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Recommended Role:</strong> ${recommendation}</p>
        <p><strong>Availability:</strong> ${availability}</p>
    `;
});
function answerQuestion() {

    let question = document
        .getElementById("question")
        .value
        .toLowerCase();

    let answer = "";

    if(question.includes("volunteer")) {
        answer =
        "You can volunteer by filling out the registration form above.";
    }

    else if(question.includes("donate")) {
        answer =
        "You can support our NGO through donations and community programs.";
    }

    else if(question.includes("health")) {
        answer =
        "For healthcare assistance, please contact our support team.";
    }

    else {
        answer =
        "Thank you for your question. Our team will get back to you soon.";
    }

    document.getElementById("chatbotResponse").innerHTML =
    "<p><strong>AI Assistant:</strong> " +
    answer +
    "</p>";
}
window.onload = function() {

    document.getElementById("chatbot-btn").addEventListener("click", function() {

        let box = document.getElementById("chatbot-box");

        if (box.style.display === "block") {
            box.style.display = "none";
        } else {
            box.style.display = "block";
        }

    });

};