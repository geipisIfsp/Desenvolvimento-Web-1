document.getElementById('loadDataButton').addEventListener('click', loadUserData);

function loadUserData() {
    // URL da API
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Fazendo a requisição para a API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Manipulando os dados e exibindo na página
            const userListDiv = document.getElementById('userList');
            userListDiv.innerHTML = '';

            data.forEach(user => {
                const userItem = document.createElement('div');
                userItem.classList.add('user-item');
                userItem.innerHTML = `
                    <strong>${user.name}</strong><br>
                    <em>${user.email}</em><br>
                    <small>${user.address.city}</small>
                `;
                userListDiv.appendChild(userItem);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
}
