// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const links = [
        { name: 'Google', url: 'https://www.google.com' },
        { name: 'YouTube', url: 'https://www.youtube.com' },
        { name: 'GitHub', url: 'https://www.github.com' }
    ];

    const linksList = document.getElementById('links-list');

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.target = '_blank';
        li.appendChild(a);
        linksList.appendChild(li);
    });
});
