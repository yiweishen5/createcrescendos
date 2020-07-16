const body = document.querySelector('body');

window.onload = () => {
    const numMentors = parseInt(sessionStorage.getItem('numMentors'));

    const cardContainer = document.createElement('div');
    cardContainer.className = 'cardContainer';

    for(let i = 0; i < numMentors; ++i){
        const mentor = JSON.parse(sessionStorage.getItem(`mentor${i}`));
        
        const nameText = document.createTextNode(mentor.name);
        const name = document.createElement('h1');
        name.appendChild(nameText);

        const pic = document.createElement('img');
        pic.src = mentor.picSrc;
        pic.alt = mentor.name;

        const bioText = document.createTextNode(mentor.bio);
        const bio = document.createElement('p');
        bio.appendChild(bioText);

        const button = document.createElement('button');
        button.innerHTML = `Connect with ${mentor.name}`;
        button.addEventListener('click', () => {
            window.location.href = './connecttomentor.html';
        });

        let mentorCard = document.createElement('div');

        mentorCard.className = 'mentorCard';

        mentorCard.appendChild(name);
        mentorCard.appendChild(pic);
        mentorCard.appendChild(bio);
        mentorCard.appendChild(button);

        console.log(bio);

        cardContainer.appendChild(mentorCard);
        
    }
    
    body.appendChild(cardContainer);
}