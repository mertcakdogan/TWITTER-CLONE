const form = document.querySelector('form');

const API_URL = 'http://localhost:5000/tweets';

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    // isim ve tweet 

    const name = formData.get('name');
    const content = formData.get('content');

    const tweet = {
        name,
        content
    };
    console.log(tweet);

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    }) .then(response => response.json())
    .then(()=> {
        form.reset();
    });
});