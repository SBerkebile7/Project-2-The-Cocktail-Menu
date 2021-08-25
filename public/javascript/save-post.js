async function saveFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/saved`, {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/saved');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.save-post-btn').addEventListener('click', saveFormHandler);