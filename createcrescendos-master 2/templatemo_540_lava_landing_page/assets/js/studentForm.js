let studentForm = document.querySelector('#studentForm');
let instrumentInput = document.querySelector('#instrumentInput').options;
let purposeInput = document.querySelector('#purposeInput').options;

let mentors = [
    {
        name: 'Rbeca Collins',
        picSrc: './assets/images/RbecaCollins.jpg',
        bio: 'rbeca colins bio',
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

    mentorMatches.forEach((mentor, index) => {
        // console.log(index);
         
        const nameText = document.createTextNode(mentor.name);
        const name = document.createElement('p');
        name.appendChild(nameText);

        const pic = document.createElement('img');
        pic.src = mentor.picSrc;
        pic.alt = mentor.name;

        const bioText = document.createTextNode(mentor.bio);
        const bio = document.createElement('p');
        bio.appendChild(bioText);

        const button = document.createElement('a');
        button.innerHTML = `Connect with ${mentor.name}`;
        button.setAttribute('href', './connecttomentor.html');

        let mentorCard = document.createElement('div');
        mentorCard.className = 'mentorCard';

        mentorCard.appendChild(name);
        mentorCard.appendChild(pic);
        mentorCard.appendChild(bio);
        mentorCard.appendChild(button);

        console.log(bio);

        document.body.appendChild(mentorCard);
    });
});

