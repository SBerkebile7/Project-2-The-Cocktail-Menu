async function saveFormHandler(event) {
    event.preventDefault();

    console.log('button clicked');

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    console.log(id);

    const response = await fetch(`/api/posts/save`, {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.reload;
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.save-post-btn').addEventListener('click', saveFormHandler);