//classification logic routing after reconfig w/ educator intervention

//engagement_score is what the system calculates based on digital behaviours, see engagement-attribute.json for details.
//if student meets engagement_threshold, they are classified as engaged, else they are indeterminate
function studentEngagementClassification(engagement_score) {
    if (engagement_score >= engagement_threshold) {
        engagement_level = "engaged"
    }
    else {
        engagement_level = "indeterminate"
    }
}

//indeterminate students are routed to be reviewed by the educator
function provideSupport(engagement_level) {
    switch (engagement_level) {
        case "engaged":
            return
        case "indeterminate":
            return educatorReview()
    }
}

//educators are notified about the student's engagement score and its attributes. The system may also offer the educator the option to schedule a meeting with the student to discuss support required. 
function educatorReview(educator, student, engagement_score) {
    createNotification(educator, "student has engagement score of engagement_score, please review below")
    display(engagement_score.attributes)
    initiateStudentMeeting()
}

//not implemented here. 
function initiateStudentMeeting(student) {
    //sends a meeting request to student to discuss online engagement 
}