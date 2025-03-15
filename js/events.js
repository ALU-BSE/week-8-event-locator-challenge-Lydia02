document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Event List Page Loaded!");

    const events = [
        {
            id: 1,
            title: "🎵 Live Music Festival",
            date: "2025-07-20",
            location: "New York",
            category: "Music",
            image: "../assets/LiveMusicFestival.jpeg",
            description: "Experience an electrifying night of live performances from top artists! Dance, sing, and enjoy an unforgettable experience.",
            countdownDate: "2025-07-20T00:00:00"
        },
        {
            id: 2,
            title: "💻 Tech Conference 2025",
            date: "2025-08-05",
            location: "San Francisco",
            category: "Technology",
            image: "../assets/conference2.jpeg",
            description: "Join top tech leaders discussing AI, blockchain, and future innovations. An opportunity to network with industry experts.",
            countdownDate: "2025-08-05T00:00:00"
        },
        {
            id: 3,
            title: "🍔 Food & Culture Fest",
            date: "2025-09-15",
            location: "Los Angeles",
            category: "Food & Drink",
            image: "../assets/foodfest2.jpeg",
            description: "A weekend of delicious flavors, international cuisines, and cultural performances from around the world.",
            countdownDate: "2025-09-15T00:00:00"
        },
        {
            id: 4,
            title: "⚽ Sports Championship",
            date: "2025-10-10",
            location: "Miami",
            category: "Sports",
            image: "../assets/sports1.jpeg",
            description: "Watch top teams compete in a thrilling sports championship. Experience the excitement live!",
            countdownDate: "2025-10-10T00:00:00"
        },
        {
            id: 5,
            title: "🎨 Modern Art Showcase",
            date: "2025-11-22",
            location: "Paris",
            category: "Arts & Culture",
            image: "../assets/artshow2.jpeg",
            description: "Explore creative masterpieces from top artists.",
            countdownDate: "2025-11-22T00:00:00"
        },
        {
            id: 6,
            title: "📈 Business Growth Summit",
            date: "2025-12-10",
            location: "Chicago",
            category: "Business",
            image: "../assets/businesses.jpeg",
            description: "Learn strategies from leading business experts.",
            countdownDate: "2025-12-10T00:00:00"
        },
        {
            id: 7,
            title: "📚 International Book Festival",
            date: "2025-06-18",
            location: "London",
            category: "Literature",
            image: "../assets/bookfest.jpeg",
            description: "Meet world-renowned authors and explore thousands of books.",
            countdownDate: "2025-06-18T00:00:00"
        },
        {
            id: 8,
            title: "🚀 Space Exploration Forum",
            date: "2025-08-30",
            location: "Houston",
            category: "Technology",
            image: "../assets/space.jpeg",
            description: "Discover the future of space travel and innovation.",
            countdownDate: "2025-08-30T00:00:00"
        },
        {
            id: 9,
            title: "🎭 Broadway Theater Night",
            date: "2025-07-25",
            location: "Berlin",
            category: "Arts & Culture",
            image: "../assets/theatre.jpeg",
            description: "Experience the magic of Broadway with world-class performances.",
            countdownDate: "2025-07-25T00:00:00"
        }
    ];

    const eventContainer = document.getElementById("eventContainer");

    // Function to Display Events
    function displayEvents(eventList) {
        eventContainer.innerHTML = ""; // Clear previous events
    
        if (eventList.length === 0) {
            eventContainer.innerHTML = `<div class="col-12 text-center"><p class="text-muted">No events found. Try adjusting your filters.</p></div>`;
            return;
        }
        
        eventList.forEach(event => {
            eventContainer.innerHTML += `
                <div class="col-md-4">
                    <div class="card event-cards shadow-lg">
                        <img src="${event.image}" class="card-img-top" alt="${event.title}">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">${event.title}</h5>
                            <p class="card-text">${event.description}</p>
                            <p class="event-category">${event.category}</p>
                            <p class="event-meta">
                                <i class="bi bi-calendar-event"></i> ${event.date} |
                                <i class="bi bi-geo-alt"></i> ${event.location}
                                <span class="countdown text-danger fw-bold" data-date="${event.countdownDate}"></span>
                            </p>
                            <a href="event-details.html?id=${event.id}" class="btn btn-glow">More Info</a>
                        </div>
                    </div>
                </div>
            `;
        });

        startEventCountdowns(); // Activate countdowns
    }

    // Countdown for Each Event
    function startEventCountdowns() {
        document.querySelectorAll(".countdown").forEach(element => {
            const targetDate = element.getAttribute("data-date");

            function updateCountdown() {
                const now = new Date().getTime();
                const eventDate = new Date(targetDate).getTime();
                const timeRemaining = eventDate - now;

                if (timeRemaining > 0) {
                    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    element.innerHTML = `⏳ ${days}d ${hours}h`;
                } else {
                    element.innerHTML = "🚀 Live Now!";
                }
            }

            updateCountdown();
            setInterval(updateCountdown, 1000);
        });
    }

    displayEvents(events); // Initially display all events

    // Search Functionality
    document.getElementById("searchForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const searchQuery = document.getElementById("search").value.toLowerCase();
        const selectedCategory = document.getElementById("category").value.replace(/[^a-zA-Z& ]/g, "").trim().toLowerCase();
        const selectedDate = document.getElementById("event-date").value;

        const filteredEvents = events.filter(event => {
            const matchesSearchQuery = event.title.toLowerCase().includes(searchQuery) || event.location.toLowerCase().includes(searchQuery);
            const matchesCategory = selectedCategory === "all categories" || event.category.toLowerCase() === selectedCategory;
            const matchesDate = !selectedDate || event.date === selectedDate;

            return matchesSearchQuery && matchesCategory && matchesDate;
        });

        displayEvents(filteredEvents); // Display filtered events in the main container
        displayDropdown(filteredEvents); // Display filtered events in the dropdown
    });

    // Function to Display Dropdown of Filtered Events
    function displayDropdown(eventList) {
        const dropdown = document.getElementById("searchDropdown");
        if (!dropdown) {
            console.error("❌ Dropdown element NOT found!");
            return;
        }
        dropdown.innerHTML = ""; // Clear existing content

        if (eventList.length === 0) {
            dropdown.innerHTML = `<li class="dropdown-item">No events found</li>`;
        } else {
            eventList.forEach(event => {
                const listItem = document.createElement("li");
                listItem.className = "dropdown-item";
                listItem.innerHTML = `
                    <a href="event-details.html?id=${event.id}" class="dropdown-link">${event.title} - ${event.date}</a>
                `;
                dropdown.appendChild(listItem);
            });
        }

        dropdown.classList.add("show"); // Show the dropdown
    }

    // Reset Filters
    document.getElementById("resetFilters").addEventListener("click", function () {
        document.getElementById("search").value = "";
        document.getElementById("category").value = "🎭 All Categories";
        document.getElementById("event-date").value = "";
        const dropdown = document.getElementById("searchDropdown");
        if (dropdown) {
            dropdown.classList.remove("show"); // Hide the dropdown
        }
        displayEvents(events);
    });
});