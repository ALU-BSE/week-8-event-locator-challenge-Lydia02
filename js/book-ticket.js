document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simulate booking process
        setTimeout(() => {
            showSuccessMessage();
            bookingForm.reset();
        }, 1000);
    });

    function showSuccessMessage() {
        const successCard = document.createElement("div");
        successCard.className = "card text-center p-4 position-fixed top-50 start-50 translate-middle";
        successCard.style.width = "300px";
        successCard.style.zIndex = "1050";
        successCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">🎉 Event Booked Successfully!</h5>
                <p class="card-text">Your ticket has been booked successfully. We look forward to seeing you at the event!</p>
                <button id="okayButton" class="btn btn-primary">Okay</button>
            </div>
        `;
        document.body.appendChild(successCard);

        document.getElementById("okayButton").addEventListener("click", function () {
            successCard.remove();
            window.location.href = "book-ticket.html";
        });
    }
});