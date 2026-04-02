//classification logic routing before reconfig
//include info about support material

//engagement_score is what the system calculates based on digital behaviours, see engagement-attribute.json for details.
//if student meets engagement_threshold, they are classified as engaged, else they are at risk
function studentEngagementClassification(engagement_score) {
    if (engagement_score >= engagement_threshold) {
        engagement_level = "engaged"
    }
    else {
        engagement_level = "at risk"
    }
}

//based on engagement levels, students are offered various support materials
//engaged students are provided with advanced material
//at risk students deal with automated intervention methods which may include additional assignments or readings
function provideSupport(engagement_level) {
    switch (engagement_level) {
        case "engaged":
            return advancedMaterial()
        case "at risk":
            return automatedIntervention()
    }
}

//not implemented here. out of scope.
function automatedIntervention() {
    //automated intervention methods which may include additional assignments or readings depending on engagement_score attributes.
}