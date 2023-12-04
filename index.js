(() => {
    const form = document.querySelector('.form');
    const showPasswordTextToggle = document.querySelector('.show-password-text-toggle');

    if (!form) {
        throw new Error('The form was not found.')
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const data = new FormData(form);

        try {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/users',
                {
                    method: 'POST',
                    body: data,
                },
            );
            const resData = await res.json();
            console.log(resData);
        } catch (err) {
            throw new Error(err.message);
        }
    });

    showPasswordTextToggle.addEventListener('click', (event) => {
        const passwordInput = document.getElementById('password');
        showPasswordTextToggle.classList.toggle('hide-password-text');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    })
})()
