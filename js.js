const consejoElement = document.getElementById('consejo');
const generarConsejoButton = document.getElementById('generar-consejo');

generarConsejoButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        consejoElement.textContent = data.slip.advice;
    } catch (error) {
        console.error(error);
    }
});