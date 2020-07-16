let studentForm = document.querySelector('#studentForm');
let instrumentInput = document.querySelector('#instrumentInput').options;
let purposeInput = document.querySelector('#purposeInput').options;

const sessionStorage = window.sessionStorage;

let mentors = [
    {
        name: 'Rbeca Collins',
        picSrc: './assets/images/RbecaCollins.jpg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        instruments: ['clarinet', 'french horn'],
        teaches: ['online lessons', 'general advice']
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

    sessionStorage.setItem('numMentors', 4);
    mentorMatches.forEach((mentor, index) => {
        // console.log(index);
        // console.log(JSON.stringify(mentor));
        for(let i = 0; i < 4; ++i){
            sessionStorage.setItem(`mentor${i}`, JSON.stringify(mentor));
        }
        
    });

    

    window.location.href = './matchedMentors.html';
});