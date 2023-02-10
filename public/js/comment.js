const commentSub = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment').value.trim();
    // const post_id = document.querySelector('')
    // give p a class and getattribute to target id of user id
    if(content){
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({content}),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok) {
            console.log('it worked!')
        } else {
            alert('Failed to comment')
        }
    }
}

document.querySelector('.new-comment').addEventListener('submit', commentSub);