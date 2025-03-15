document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ EventPulse Loaded!");

    const events = [
        {
            id: 1,
            title: "🎵 Live Music Festival",
            date: "2025-07-20",
            location: "New York",
            category: "Music",
            image: "assets/LiveMusicFestival.jpeg",
            description: "Experience an electrifying night of live performances from top artists! Dance, sing, and enjoy an unforgettable experience.",
            countdownDate: "2025-07-20T00:00:00"
        },
        {
            id: 2,
            title: "💻 Tech Conference 2025",
            date: "2025-08-05",
            location: "San Francisco",
            category: "Technology",
            image: "assets/conference2.jpeg",
            description: "Join top tech leaders discussing AI, blockchain, and future innovations. An opportunity to network with industry experts.",
            countdownDate: "2025-08-05T00:00:00"
        },
        {
            id: 3,
            title: "🍔 Food & Culture Fest",
            date: "2025-09-15",
            location: "Los Angeles",
            category: "Food & Drink",
            image: "assets/foodfest2.jpeg",
            description: "A weekend of delicious flavors, international cuisines, and cultural performances from around the world.",
            countdownDate: "2025-09-15T00:00:00"
        },
        {
            id: 4,
            title: "⚽ Sports Championship",
            date: "2025-10-10",
            location: "Miami",
            category: "Sports",
            image: "assets/sports1.jpeg",
            description: "Watch top teams compete in a thrilling sports championship. Experience the excitement live!",
            countdownDate: "2025-10-10T00:00:00"
        },
        {
            id: 5,
            title: "🎨 Modern Art Showcase",
            date: "2025-11-22",
            location: "Paris",
            category: "Arts & Culture",
            image: "assets/artshow2.jpeg",
            description: "Explore creative masterpieces from top artists.",
            countdownDate: "2025-11-22T00:00:00"
        },
        {
            id: 6,
            title: "📈 Business Growth Summit",
            date: "2025-12-10",
            location: "Chicago",
            category: "Business",
            image: "assets/businesses.jpeg",
            description: "Learn strategies from leading business experts.",
            countdownDate: "2025-12-10T00:00:00"
        },
        {
            id: 7,
            title: "📚 International Book Festival",
            date: "2025-06-18",
            location: "London",
            category: "Literature",
            image: "assets/bookfest.jpeg",
            description: "Meet world-renowned authors and explore thousands of books.",
            countdownDate: "2025-06-18T00:00:00"
        },
        {
            id: 8,
            title: "🚀 Space Exploration Forum",
            date: "2025-08-30",
            location: "Houston",
            category: "Technology",
            image: "assets/space.jpeg",
            description: "Discover the future of space travel and innovation.",
            countdownDate: "2025-08-30T00:00:00"
        },
        {
            id: 9,
            title: "🎭 Broadway Theater Night",
            date: "2025-07-25",
            location: "Berlin",
            category: "Arts & Culture",
            image: "assets/theatre.jpeg",
            description: "Experience the magic of Broadway with world-class performances.",
            countdownDate: "2025-07-25T00:00:00"
        }
    ];

    // 🎯 Countdown Timer for the Featured Event
    function startCountdown(targetDate) {
        const countdownElement = document.getElementById("countdown");

        if (!countdownElement) {
            console.error("❌ Countdown element NOT found!");
            return;
        }

        console.log("⏳ Countdown started for Featured Event...");

        function updateCountdown() {
            const now = new Date().getTime();
            const eventDate = new Date(targetDate).getTime();
            const timeRemaining = eventDate - now;

            if (timeRemaining > 0) {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                countdownElement.innerHTML = `
                    <h4 class="text-white fw-bold">⏳ Next Event Starts In:</h4>
                    <span class="fw-bold fs-4">${days}d ${hours}h ${minutes}m ${seconds}s</span>
                `;
            } else {
                countdownElement.innerHTML = `<h4 class="text-white fw-bold">🚀 Event is Live Now!</h4>`;
            }
        }

        updateCountdown(); // Run immediately so the user sees it instantly
        setInterval(updateCountdown, 1000); // Update every second
    }

    // ✅ Start countdown for Featured Event (Update date accordingly)
    startCountdown("2025-07-20T00:00:00");

    // 🎟️ Countdown Timer for Each Event in the Upcoming Events Section
    function startEventCountdowns() {
        const countdownElements = document.querySelectorAll(".countdown");

        countdownElements.forEach((element) => {
            const targetDate = element.getAttribute("data-date");

            function updateEventCountdown() {
                const now = new Date().getTime();
                const eventDate = new Date(targetDate).getTime();
                const timeRemaining = eventDate - now;

                if (timeRemaining > 0) {
                    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

                    element.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m`;
                } else {
                    element.innerHTML = "🚀 Live Now!";
                }
            }

            updateEventCountdown(); // Run immediately
            setInterval(updateEventCountdown, 1000); // Update every second
        });
    }

    // ✅ Start countdown for each event in the Upcoming Events Section
    startEventCountdowns();

    // 🟣 Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // 🎟️ Event Search Functionality
    document.getElementById("searchForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const searchInput = document.getElementById("search").value.toLowerCase();
        const selectedCategory = document.getElementById("category").value.replace(/[^a-zA-Z ]/g, "").trim().toLowerCase();
        const selectedDate = document.getElementById("event-date").value;

        const filteredEvents = events.filter(event => {
            const matchesSearchQuery = event.title.toLowerCase().includes(searchInput) || event.location.toLowerCase().includes(searchInput);
            const matchesCategory = selectedCategory === "all categories" || event.category.toLowerCase() === selectedCategory;
            const matchesDate = !selectedDate || event.date === selectedDate;

            return matchesSearchQuery && matchesCategory && matchesDate;
        });

        displayDropdown(filteredEvents);
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
                    <a href="../pages/event-details.html?id=${event.id}" class="dropdown-link">${event.title} - ${event.date}</a>
                `;
                dropdown.appendChild(listItem);
            });
        }

        dropdown.classList.add("show"); // Show the dropdown
    }

    // 🆕 Reset Filters Button (Clears Search Input and Resets Category & Date)
    document.getElementById("resetFilters").addEventListener("click", function () {
        document.getElementById("search").value = "";
        document.getElementById("category").selectedIndex = 0;
        document.getElementById("event-date").value = "";
        const dropdown = document.getElementById("searchDropdown");
        if (dropdown) {
            dropdown.classList.remove("show"); // Hide the dropdown
        }
    });
});