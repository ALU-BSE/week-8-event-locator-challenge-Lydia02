document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Event Details Page Loaded!");
    const events = [
        {
            id: 1,
            title: "🎵 Live Music Festival",
            date: "July 20, 2025",
            location: "New York",
            image: "../assets/LiveMusicFestival.jpeg",
            description: "Experience an electrifying night of live performances from top artists! Dance, sing, and enjoy an unforgettable experience.",
            speakers: ["DJ Snake", "Ariana Grande", "The Weeknd"],
            schedule: ["6:00 PM - Opening Act", "8:00 PM - Headliner Show", "10:30 PM - Closing Ceremony"],
            tickets: ["General - $50", "VIP - $120"]
        },
        {
            id: 2,
            title: "💻 Tech Conference 2025",
            date: "August 5, 2025",
            location: "San Francisco",
            image: "../assets/conference2.jpeg",
            description: "Join top tech leaders discussing AI, blockchain, and future innovations. An opportunity to network with industry experts.",
            speakers: ["Elon Musk", "Satya Nadella", "Sundar Pichai"],
            schedule: ["9:00 AM - Keynote Speech", "12:00 PM - Panel Discussion", "3:00 PM - Tech Demos"],
            tickets: ["General - $100", "VIP - $300"]
        },
        {
            id: 3,
            title: "🍔 Food & Culture Fest",
            date: "September 15, 2025",
            location: "Los Angeles",
            image: "../assets/foodfest2.jpeg",
            description: "A weekend of delicious flavors, international cuisines, and cultural performances from around the world.",
            speakers: ["Gordon Ramsay", "Chef Dominique Crenn"],
            schedule: ["11:00 AM - Food Tasting", "2:00 PM - Cooking Show", "6:00 PM - Cultural Dance"],
            tickets: ["General - $20", "VIP - $80"]
        },
        {
            id: 4,
            title: "⚽ Sports Championship",
            date: "October 10, 2025",
            location: "Miami",
            image: "../assets/sports.jpeg",
            description: "Watch top teams compete in a thrilling sports championship. Experience the excitement live!",
            speakers: ["Cristiano Ronaldo", "LeBron James"],
            schedule: ["2:00 PM - Opening Ceremony", "4:00 PM - Main Match", "7:00 PM - Awards Ceremony"],
            tickets: ["General - $40", "VIP - $150"]
        },
        {
            id: 5,
            title: "🎨 Modern Art Showcase",
            date: "November 22, 2025",
            location: "Paris",
            image: "../assets/artshow2.jpeg",
            description: "Explore creative masterpieces from renowned artists. An exclusive event for art lovers.",
            speakers: ["Banksy", "Jean-Michel Basquiat"],
            schedule: ["10:00 AM - Opening Gallery", "2:00 PM - Live Art Session", "6:00 PM - Networking Event"],
            tickets: ["General - $30", "VIP - $90"]
        },
        {
            id: 6,
            title: "📈 Business Growth Summit",
            date: "December 10, 2025",
            location: "Chicago",
            image: "../assets/businesses.jpeg",
            description: "Top business leaders share insights on scaling businesses and innovation strategies.",
            speakers: ["Warren Buffett", "Oprah Winfrey"],
            schedule: ["9:00 AM - CEO Roundtable", "12:30 PM - Investor Pitch", "4:00 PM - Closing Speech"],
            tickets: ["General - $150", "VIP - $500"]
        },
        {
            id: 7,
            title: "📚 International Book Festival",
            date: "June 18, 2025",
            location: "London",
            image: "../assets/bookfest.jpeg",
            description: "Meet bestselling authors, attend book signings, and explore the literary world.",
            speakers: ["J.K. Rowling", "Malcolm Gladwell"],
            schedule: ["10:00 AM - Book Signing", "2:00 PM - Author Panel", "5:00 PM - Poetry Reading"],
            tickets: ["General - $10", "VIP - $50"]
        },
        {
            id: 8,
            title: "🚀 Space Exploration Forum",
            date: "August 30, 2025",
            location: "Houston",
            image: "../assets/space.jpeg",
            description: "Explore the future of space travel, technology, and innovation.",
            speakers: ["Neil deGrasse Tyson", "NASA Engineers"],
            schedule: ["9:30 AM - Mars Exploration Talk", "1:00 PM - Space Tech Expo", "6:00 PM - Astronaut Q&A"],
            tickets: ["General - $80", "VIP - $250"]
        },
        {
            id: 9,
            title: "🎭 Broadway Theater Night",
            date: "July 25, 2025",
            location: "Berlin",
            image: "../assets/theatre.jpeg",
            description: "Experience the magic of live Broadway performances in an unforgettable night.",
            speakers: ["Lin-Manuel Miranda", "Andrew Lloyd Webber"],
            schedule: ["7:00 PM - Opening Act", "8:30 PM - Main Show", "11:00 PM - Afterparty"],
            tickets: ["General - $60", "VIP - $200"]
        }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get("id")) || null;

    function displayEventDetails(eventId) {
        const eventContainer = document.getElementById("eventDetails");
        const event = events.find(e => e.id === eventId);

        if (event) {
            eventContainer.innerHTML = `
                <div class="card p-4 shadow-lg animate__animated animate__fadeInUp">
                    <div class="row g-4">
                        <div class="col-md-6">
                            <img src="${event.image}" class="img-fluid rounded animate__animated animate__fadeIn" alt="${event.title}">
                        </div>
                        <div class="col-md-6">
                            <h2 class="fw-bold text-purple animate__animated animate__fadeIn">${event.title}</h2>
                            <p class="text-muted animate__animated animate__fadeIn"><i class="bi bi-calendar-event"></i> ${event.date} | <i class="bi bi-geo-alt"></i> ${event.location}</p>
                            <p class="animate__animated animate__fadeIn">${event.description}</p>
                            <h5 class="fw-bold animate__animated animate__fadeIn">🎤 Speakers:</h5>
                            <ul class="small animate__animated animate__fadeIn">${event.speakers.map(s => `<li><i class="bi bi-person-circle"></i> ${s}</li>`).join("")}</ul>
                            <h5 class="fw-bold animate__animated animate__fadeIn">⏰ Schedule:</h5>
                            <ul class="small animate__animated animate__fadeIn">${event.schedule.map(s => `<li><i class="bi bi-clock"></i> ${s}</li>`).join("")}</ul>
                            <h5 class="fw-bold animate__animated animate__fadeIn">🎟️ Ticket Prices:</h5>
                            <ul class="small animate__animated animate__fadeIn">${event.tickets.map(t => `<li><i class="bi bi-ticket"></i> ${t}</li>`).join("")}</ul>
                            <a href="book-ticket.html" class="btn btn-purple mt-3">Buy a Ticket</a>
                        </div>
                    </div>
                </div>
            `;
        } else {
            eventContainer.innerHTML = `<p class="text-center placeholder animate__animated animate__fadeInOut">Event details will show here when you click "More Info" on an event.</p>`;
        }
    }

    // Ensure the placeholder text is shown if no event ID is provided
    if (!eventId) {
        document.getElementById("eventDetails").innerHTML = `<p class="text-center placeholder animate__animated animate__fadeInOut">Event details will show here when you click "More Info" on an event.</p>`;
    } else {
        displayEventDetails(eventId);
    }
});