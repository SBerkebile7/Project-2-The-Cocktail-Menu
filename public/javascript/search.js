async function searchFormHandler(event) {
    event.preventDefault();

    const search = document.querySelector('input[name="search-area"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            search
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.post-search').addEventListener('submit', searchFormHandler);