// Funzione per eseguire il countdown
function countdown() {
    let count = 10; // Tempo di countdown in secondi

    const countdownInterval = setInterval(() => {
        // Mostra il conto alla rovescia in pagina
        document.getElementById("countdown").innerText = count;

        // Mostra il conto alla rovescia nella console
        console.log("Countdown:", count);

        // Aggiorna il valore del conto alla rovescia
        count--;

        // Se il conto alla rovescia raggiunge 0, mostra il messaggio "Buon anno!"
        if (count == 0) {
            clearInterval(countdownInterval);
            alert("Buon anno!");
        }
    }, 1000); // Intervallo di aggiornamento di 1 secondo

    // Bottone per interrompere il countdown
    document.getElementById("stopButton").addEventListener("click", () => {
        clearInterval(countdownInterval);
        alert("Countdown interrotto.");
    });
}

// Avvia il countdown quando la pagina è completamente caricata
document.addEventListener("DOMContentLoaded", () => {
    countdown();
});
