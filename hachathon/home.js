const informUsModal = document.getElementById('inform-us-modal');
const informUsContent = document.getElementById('inform-us-content');

const informUsPageUrl = "inform.html";

fetch(informUsPageUrl)
    .then(response => response.text())
    .then(html => {
        informUsContent.innerHTML = html;
        informUsModal.style.display = 'block';
    })
    .catch(error => {
        console.error('Error fetching inform_us page:', error);
    });