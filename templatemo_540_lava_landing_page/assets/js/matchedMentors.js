const body = document.querySelector('body');

window.onload = () => {
    const numMentors = parseInt(sessionStorage.getItem('numMentors'));


    for(let i = 0; i < numMentors; ++i){
        const mentor = JSON.parse(sessionStorage.getItem(`mentor${i}`));
       
        const nameText = document.createTextNode(mentor.name);
        const name = document.createElement('p');
        name.appendChild(nameText);

        const pic = document.createElement('img');
        pic.src = mentor.picSrc;
        pic.alt = mentor.name;

        const bioText = document.createTextNode(mentor.bio);
        const bio = document.createElement('p');
        bio.appendChild(bioText);

        const instruments = document.createElement('ul');
        const teaches = document.createElement('ul');

        for(let i = 0; i < mentor.instruments.length; ++i){
            const instrumentText = document.createTextNode(mentor.instruments[i]);
            const instrument = document.createElement('li');
            instrument.appendChild(instrumentText);
            
            instruments.appendChild(instrument);
        }

        for(let i = 0; i < mentor.teaches.length; ++i){
            const teachText = document.createTextNode(mentor.teaches[i]);
            const teach = document.createElement('li');
            teach.appendChild(teachText);

            teaches.appendChild(teach);
        }

        let mentorCard = document.createElement('div');
        mentorCard.className = 'mentorCard';

        mentorCard.appendChild(name);
        mentorCard.appendChild(pic);
        mentorCard.appendChild(bio);
        mentorCard.appendChild(instruments);
        mentorCard.appendChild(teaches);

        console.log(bio);

        body.appendChild(mentorCard);
    }
    

}