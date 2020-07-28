let studentForm = document.querySelector('#studentForm');
let instrumentInput = document.querySelector('#instrumentInput').options;
let purposeInput = document.querySelector('#purposeInput').options;
let typeInput = document.querySelector('#typeInput').options;

const sessionStorage = window.sessionStorage;

let mentors = [
    {
        name: 'Anoushka Divekar',
        grade: 'Incoming Masters @ Texas Tech',
        picSrc: './assets/images/divekar.jpg',
        awards:'CU Boulder Outstanding Junior and Presser Scholar',
        bio: 'I just got my clarinet performance and music Ed degree from CU Boulder in 4 years, with highest distinction. I completed 2 degree recitals, and am heading off to my Master’s at Texas Tech with a Teaching Assistantship. I have attended Boston University Tanglewood Institute, Eastern Music Festival, and Rocky Ridge Summer Music Festival. I have also been teaching privately on clarinet and piano since 2012.',
        instruments: ['clarinet'],
        teaches: ['online lessons', 'general advice', 'audio recording reviews'],
        types: ['solo/ensemble preparation', 'all state/all region preparation', 'other audition advice', 'general improvement advice', 'music theory', 'college music essays'],
    },
    {
        name: 'Isabel Goodwin',
        grade: 'Sophomore @ CU Boulder',
        picSrc: './assets/images/goodwin.jpg',
        awards: 'CU Boulder School of Music Outstanding Freshman 2020, TMEA All-State 2018 and 2019',
        bio: 'I have been playing the bassoon for about 7 years now, having started in sixth grade. I have had access to private lessons every year of playing. I am currently a bassoon performance major studying performance and reedmaking under professor Yoshi Ishikawa, an extremely highly respected bassoonist and former president of the International Double Reed Conference organization. I can also play the contrabassoon, and have been doing so for about 3 years now.', 
        instruments: ['bassoon'],
        teaches: ['online lessons', 'general advice', 'audio recording reviews'],
        types: ['solo/ensemble preparation', 'all state/all region preparation', 'other audition advice', 'general improvement advice', 'composition', 'music theory', 'college music essays'],
    },
    {
        name: 'Carolyn VanderWerf',
        grade: 'Junior @ CU Boulder',
        picSrc: './assets/images/vanderwerf.jpg',
        awards:'Various solo and ensemble awards',
        bio: 'I am a college music education major with 9 years of experience on Bb clarinet and 3 years of experience on auxiliary clarinets.',
        instruments: ['clarinet'],
        teaches: ['online lessons', 'general advice', 'audio recording reviews'],
        types: ['solo/ensemble preparation', 'all state/all region preparation', 'other audition advice', 'general improvement advice'],
    },


];

/*
    Finds a match to a mentor(s) given the student input
*/
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // gets instrument and purpose options selected
    let instrument = instrumentInput[instrumentInput.selectedIndex].value;
    let purpose = purposeInput[purposeInput.selectedIndex].value;
    let type = typeInput[typeInput.selectedIndex].value;

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

        
        for(let j = 0; j < mentor.types.length; ++j){
            if(purpose === mentor.types[j]){
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