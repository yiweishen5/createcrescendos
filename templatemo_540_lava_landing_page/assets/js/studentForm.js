let studentForm = document.querySelector('#studentForm');
let instrumentInput = document.querySelector('#instrumentInput').options;
let purposeInput = document.querySelector('#purposeInput').options;

const sessionStorage = window.sessionStorage;

let mentors = [
    {
        name: 'Rbeca Collins',
        picSrc: 'rebca collins pic',
        bio: 'rbeca colins bio',
        instruments: ['clarinet', 'french horn'],
        teaches: ['online lessons', 'general advice']
    },
    {
        name: 'Tyler J',
        instruments: ['bass clarinet', 'trumpet'],
        teaches: ['audio recording reviews']
    }
];

/*
    Finds a match to a mentor(s) given the student input
*/
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // gets instrument and purpose options selected
    let instrument = instrumentInput[instrumentInput.selectedIndex].value;
    let purpose = purposeInput[purposeInput.selectedIndex].value;

    // array to hold mentors that matched with student input
    let mentorMatches = [];

    for(let i = 0; i < mentors.length; ++i){
        let mentor = mentors[i];
        let match = false;
        
        // checks if mentor's instruments array contains the instrument of the student input
        for(let j = 0; j < mentor.instruments.length; ++j){
            if(instrument === mentor.instruments[j]){
                match = true;
                break;
            }
        }

        if(!match){
            continue;
        }

        // checks if mentor's teaching types array contains the purpose of the student input
        for(let j = 0; j < mentor.teaches.length; ++j){
            if(purpose === mentor.teaches[j]){
                match = true;
                break;
            }
        }

        if(!match){
            continue;
        }

        // code is reached if mentor is a match, so the mentor is added to the mentorMatches array
        mentorMatches.push(mentor);     
    }

    sessionStorage.setItem('numMentors', mentorMatches.length);
    mentorMatches.forEach((mentor, index) => {
        // console.log(index);
        // console.log(JSON.stringify(mentor));
        sessionStorage.setItem(`mentor${index}`, JSON.stringify(mentor));
    });

    window.location.href = './matchedMentors.html';
});

