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

studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let instrument = instrumentInput[instrumentInput.selectedIndex].value;
    let purpose = purposeInput[purposeInput.selectedIndex].value;

    let mentorMatches = [];

    for(let i = 0; i < mentors.length; ++i){
        let mentor = mentors[i];
        let match = false;

        for(let j = 0; j < mentor.instruments.length; ++j){
            if(instrument === mentor.instruments[j]){
                match = true;
                break;
            }
        }

        if(!match){
            continue;
        }

        for(let j = 0; j < mentor.type.length; ++j){
            if(purpose === mentor.type[j]){
                match = true;
                break;
            }
        }

        if(!match){
            continue;
        }

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

