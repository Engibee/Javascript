document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Atualiza os dados do perfil
            document.getElementById('avatar-img').src = data.avatar;
            
            // Formatar o nome com sobrenome em negrito
            const fullName = data.name.split(' ');
            const firstName = fullName.slice(0, -1).join(' ');
            const lastName = fullName.slice(-1).join(' ');
            document.getElementById('name').innerHTML = `${firstName} <b>${lastName}</b>`;

            document.getElementById('description').textContent = data.description;

            // Adiciona os links
            const linksList = document.getElementById('links-list');
            data.links.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.url;
                a.textContent = link.name;
                a.target = '_blank';
                a.classList.add('button', 'small-width'); // Adiciona as classes 'button' e 'small-width' aos links
                li.appendChild(a);
                linksList.appendChild(li);
            });

            // Adiciona os links sociais com imagens
            const socialLinksList = document.getElementById('social-links-list');
            data.socialLinks.forEach(socialLink => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = socialLink.url;
                a.target = '_blank';
                const img = document.createElement('img');
                img.src = socialLink.icon;
                img.alt = socialLink.name;
                img.classList.add('social-icon'); // Adiciona uma classe para estilizar os ícones
                a.appendChild(img);
                li.appendChild(a);
                socialLinksList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
});
