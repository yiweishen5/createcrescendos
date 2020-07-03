let studentForm = document.querySelector('#studentForm');
let instrumentInput = document.querySelector('#instrumentInput').options;
let purposeInput = document.querySelector('#purposeInput').options;

let mentors = [
    {
        name: 'Rbeca Collins',
        instruments: ['clarinet', 'french horn'],
        type: ['online lessons', 'general advice']
    },
    {
        name: 'Tyler J',
        instruments: ['bass clarinet', 'trumpet'],
        type: ['audio recording reviews']
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

        // checks if mentor's type array contains the purpose of the student input
        for(let j = 0; j < mentor.type.length; ++j){
            if(purpose === mentor.type[j]){
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

    mentorMatches.forEach((mentor) => {
        let mentorCard = document.createElement('p');
        let nameText = document.createTextNode(mentor.name);
        mentorCard.className = 'mentor';
        
        mentorCard.appendChild(nameText);

        document.body.appendChild(nameText);
    });


    console.log(document.body);
});

