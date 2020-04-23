const firstRequest = new XMLHttpRequest();

firstRequest.addEventListener('load', function() { 
    console.log('IT WORKED!');
    const data = JSON.parse(this.responseText);
    console.log(data);
    // for (const character of data) {
    //     console.log(character.aliases);
    // }
    const bookURL = data[0].books;
    const bookRequest = new XMLHttpRequest();
    bookRequest.addEventListener('load', function() {
        const bookData = JSON.parse(this.responseText);
        console.log(bookData);
    })
    bookRequest.addEventListener('error', (e) => console.log('SECOND ERROR!', e));
    bookRequest.open('GET', bookURL);
    bookRequest.send();
});
firstRequest.addEventListener('error', () => console.log('ERROR!'));
firstRequest.open('GET', 'https://anapioficeandfire.com/api/characters/');
firstRequest.send();
console.log('Request Sent!');