document.addEventListener('DOMContentLoaded', function () {
    const familiaImagesContainer = document.getElementById('familia1-images');
    
    // Obtém o valor do parâmetro "familia" da URL
    const urlParams = new URLSearchParams(window.location.search);
    const familiaFolderPath = urlParams.get('familia') || 'Lea/'; // Se o parâmetro não estiver presente, assume 'Lea/'

    const numeroDeFotos = 100;

    function carregarFotos() {
        for (let i = 1; i <= numeroDeFotos; i++) {
            const numeroFormatado = String(i).padStart(4, '0');
            const imgPath = `${familiaFolderPath}/${numeroFormatado}.jpg`;
            const imgElement = document.createElement('img');
            imgElement.src = imgPath;
            imgElement.alt = `Foto ${i}`;
            familiaImagesContainer.appendChild(imgElement);

            imgElement.addEventListener('click', function () {
                exibirModal(i);
            });
        }
    }

    function exibirModal(index) {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('modal-img');
        const captionText = document.getElementById('caption');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        modal.style.display = 'block';
        modalImg.src = `${familiaFolderPath}/${String(index).padStart(4, '0')}.jpg`;
        captionText.textContent = `Foto ${index}`;

        prevBtn.addEventListener('click', function () {
            if (index > 1) {
                index--;
                modalImg.src = `${familiaFolderPath}/${String(index).padStart(4, '0')}.jpg`;
                captionText.textContent = `Foto ${index}`;
            }
        });

        nextBtn.addEventListener('click', function () {
            if (index < numeroDeFotos) {
                index++;
                modalImg.src = `${familiaFolderPath}/${String(index).padStart(4, '0')}.jpg`;
                captionText.textContent = `Foto ${index}`;
            }
        });

        const closeModal = document.querySelector('.close');
        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        window.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                modal.style.display = 'none';
            } else if (event.key === 'ArrowLeft' && index > 1) {
                index--;
                modalImg.src = `${familiaFolderPath}/${String(index).padStart(4, '0')}.jpg`;
                captionText.textContent = `Foto ${index}`;
            } else if (event.key === 'ArrowRight' && index < numeroDeFotos) {
                index++;
                modalImg.src = `${familiaFolderPath}/${String(index).padStart(4, '0')}.jpg`;
                captionText.textContent = `Foto ${index}`;
            }
        });
    }

    carregarFotos();
});


