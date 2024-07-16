// script.js

document.addEventListener("DOMContentLoaded", function() {
    const faqList = document.getElementById("faq-list");
    const faqTemplate = document.getElementById("faq-template");

    // Carregar dados do arquivo JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            renderFAQ(data);
        })
        .catch(error => {
            console.error('Erro ao carregar dados do JSON:', error);
        });

    // Função para carregar as perguntas e respostas na página
    function renderFAQ(faqData) {
        faqData.forEach(item => {
            const clone = faqTemplate.content.cloneNode(true);
            const questionText = clone.querySelector(".question-text");
            const answer = clone.querySelector(".answer");
            const arrow = clone.querySelector(".arrow");

            questionText.textContent = item.question;
            answer.textContent = item.answer;

            // Adicionar evento de clique na pergunta para exibir resposta
            questionText.addEventListener("click", function() {
                answer.classList.toggle("active");
                arrow.textContent = answer.classList.contains("active") ? "▼" : "▶";
            });

            // Adicionar evento de clique na seta para exibir resposta
            arrow.addEventListener("click", function() {
                answer.classList.toggle("active");
                arrow.textContent = answer.classList.contains("active") ? "▼" : "▶";
            });

            faqList.appendChild(clone);
        });
    }
});
