   const elizabethSanger = {
    congressionalDistrict: "",
    platformStatements: {
        taxes: "",
        jobs: "",
        infrastructure: "",
        healthCare: "",
        crimeEnforcement: ""
    },
    donationsURL: "",
    calendar: "",
    volunteerInfo: {
        name: "",
        address: "",
        email: "",
        phoneNumber: "",
        availability: "",
        willingActivites: []
    },
    biography: "",
    imageGallery: {
        headShot: "",
        familyPhotos: "",
        picConstituents: ""
    },
    missionStatement: "",
    votingURL: ""
    }

    function changeCongressDistrict(newDistrict){
        elizabethSanger.congressionalDistrict = newDistrict;
    };

    function changePlatform(topic, newPlatStatement){
        elizabethSanger.platformStatements[topic] = newPlatStatement;
    }

    function changeDonURL(URL){
        elizabethSanger.donationsURL = URL;
    };

    function changeCalender(Calender){
        elizabethSanger.calendar = Calender;
    }

    function changeVolInfo(topic, newVolInfo){
        if (topic === "willingActivites"){
            elizabethSanger.volunteerInfo.willingActivites.push(newVolInfo)
        }
        else {
            elizabethSanger.volunteerInfo[topic] = newVolInfo
        }
    }

    function changeBio(newBiology){
        elizabethSanger.biography = newBiology;
    }

    function changeImageGal(topic, newImageGal){
        elizabethSanger.imageGallery[topic] = newImageGal;
    }

    function changeMissionStatement(newStatement){
        elizabethSanger.missionStatement = newStatement;
    }

    function changeVotingURL(newVotUrl){
        elizabethSanger.votingURL = newVotUrl;
    }