document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const formMessage = document.getElementById('formMessage');
    const loadingBar = document.getElementById('loadingBar');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            loadingBar.style.display = 'block';
            formMessage.innerHTML = '';

            setTimeout(function () {
                loadingBar.style.display = 'none';

                // Redirige después de 2 segundos
                setTimeout(function () {
                    location.reload();
                }, 2000);
            }, 2000); // Simula un tiempo de carga
        }

        form.classList.add('was-validated');
    }, false);
});
