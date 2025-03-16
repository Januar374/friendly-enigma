document.addEventListener("DOMContentLoaded", () => {
    // Countdown Timer
    const countdown = document.getElementById("timer");
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // 7 days from now

    function updateCountdown() {
        let now = new Date().getTime();
        let timeLeft = targetDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeLeft < 0) {
            countdown.innerHTML = "Offer expired!";
        }
    }

    setInterval(updateCountdown, 1000);

    // Sign-up Form
    document.getElementById("signup-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let email = document.getElementById("email").value;
        alert(`Thank you for signing up, ${email}!`);
    });
});
