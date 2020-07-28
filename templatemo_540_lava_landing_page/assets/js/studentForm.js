(function () {
    let studentForm = document.querySelector('#studentForm');
    let instrumentInput = document.querySelector('#instrumentInput').options;
    let sessionTypeInput = document.querySelector('#sessionTypeInput').options;
    let mentorReasonInput = document.querySelector('#mentorReasonInput').options;

    const sessionStorage = window.sessionStorage;
    const mentors = window.mentors;

    /*
        Finds a match to a mentor(s) given the student input
    */
    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // gets instrument and sessionType options selected
        let instrument = instrumentInput[instrumentInput.selectedIndex].value;
        let sessionType = sessionTypeInput[sessionTypeInput.selectedIndex].value;
        let mentorReason = mentorReasonInput[mentorReasonInput.selectedIndex].value;

        // array to hold mentors that matched with student input
        let mentorMatches = [];

        for(let i = 0; i < mentors.length; ++i){
            let mentor = mentors[i];
            
            if(
                !(
                    mentor.instruments.includes(instrument) &&
                    mentor.sessionTypes.includes(sessionType) &&
                    mentor.mentorReason.includes(mentorReason)
                )
            ){
                continue;
            }

            // code is reached if mentor is a match, so the mentor is added to the mentorMatches array
            mentorMatches.push(mentor);     
        }

        sessionStorage.setItem('numMentors', mentorMatches.length);
        mentorMatches.forEach((mentor, index) => {
            // console.log(index);
            console.log(mentor);
            sessionStorage.setItem(`mentor${index}`, JSON.stringify(mentor));
            
        });

        window.location.href = './matchedMentors.html';
    });

}());
