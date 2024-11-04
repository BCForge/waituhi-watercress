
// Navigation bar
function openMobileNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeMobileNav() {
    document.getElementById("myNav").style.display = "none";
}

// Hero page Scroll button
const scrollBtn = document.getElementById("scrollBtn");
if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
        const superfoodSection = document.getElementById("superfood");
        const offsetPosition = superfoodSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
}

// Gallery page
let items = [{ id: 1, title: "Bagging Watercress", image_url: "images/gallery/bagging_watercress.JPEG", description: "Carefully placing Watercress into produce bags." },
{ id: 2, title: "Watercress Beds", image_url: "images/gallery/blue_skies.JPEG", description: "Watercress beds ready to be cut." },
{ id: 3, title: "Watercress beds after being cut", image_url: "images/gallery/bed_cut.JPEG", description: "Watercress beds after being harvested." },
{ id: 4, title: "Watercress Close-up", image_url: "images/gallery/closeup_water.JPEG", description: "Watercress at the top of the bed where the water flows." },
{ id: 5, title: "Palm tree and hill", image_url: "images/gallery/palmandhill.JPEG", description: "Photo angle of Watercress beds with shed, palm tree and hill in the background." },
{ id: 6, title: "Cutting Watercress", image_url: "images/gallery/cutting_watercress.JPEG", description: "Picture of staff cutting Watercress." },
{ id: 7, title: "Staff cutting Watercress", image_url: "images/gallery/cutting_watercress2.JPEG", description: "Another image of staff cutting Watercress." },
{ id: 8, title: "Crates of Watercress", image_url: "images/gallery/cress_crates.JPEG", description: "Watercress is bagged and placed into crates for transport." },
{ id: 9, title: "Nutrient Monitor", image_url: "images/gallery/monitor_nutrient.JPEG", description: "Nutrient is monitored with a device that checks the level of the nutrient salts." },
{ id: 10, title: "Sunny Day", image_url: "images/gallery/closeup_sun.JPEG", description: "Watercress ready to be cut on a beautiful Gisborne day." },
{ id: 11, title: "Nutrient tank", image_url: "images/gallery/nutrient_tanks.JPEG", description: "Tanks for mixing the natural nutrient salts that nourish the growth of the watercress." },
{ id: 12, title: "Covering crates", image_url: "images/gallery/crate_cover.JPEG", description: "Putting covers on the Watercress crates to protect them while being transported." },

];
document.addEventListener('DOMContentLoaded', () => {
    // Image gallery
    document.getElementById("gallery").innerHTML = getAllItems(items);
    document.getElementById("searchInput").addEventListener("input", displayFilteredItems);



    // Contact form details and overlay
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");

    if (form && confirmationMessage && overlay && closeBtn) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const fname = document.getElementById("fname").value;
            const lname = document.getElementById("lname").value;
            confirmationMessage.innerHTML = `Thank you, ${fname} ${lname}! Your message has been sent.`;
            overlay.style.display = "block";
            form.reset();
        });

        closeBtn.addEventListener("click", () => overlay.style.display = "none");
        window.addEventListener("click", (event) => {
            if (event.target === overlay) overlay.style.display = "none";
        });
    }



    // Dropdown for recipes
    document.getElementById("dropdownButton").addEventListener("click", toggleDropdown);
    document.querySelectorAll(".dropdown-content a").forEach(item => {
        item.addEventListener("click", (event) => selectRecipe(event.target.innerText));
    });


    const hash = window.location.hash;
    if (hash) updateButtonText(hash.replace('#', '').replace('-', ' '));

    // Tabs recipe page
    document.querySelectorAll('.tablinks').forEach(button => {
        button.addEventListener('click', (event) => openTab(event, button.dataset.tab));
    });

    // Ensure the first tab is open by default
    document.getElementById('ingredients').style.display = 'block';
});


// Gallery page
function getAllItems(itemList) {
    return itemList.map(item => `
        <div class="item-card" onclick="openModal(${item.id})">
            <h4 style="font-size:14pt;">${item.title}</h4>
            <p style="font-size:10pt;">${item.description}</p>
            <img src="${item.image_url}" height="150">
        </div>
    `).join("");
}

function displayFilteredItems() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(keyword));
    document.getElementById("gallery").innerHTML = getAllItems(filteredItems);
}


// Recipe page
function openTab(evt, tabName) {
    document.querySelectorAll(".tabcontent").forEach(tab => tab.style.display = "none");
    document.querySelectorAll(".tablinks").forEach(link => link.classList.remove("active"));
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Recipe page
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function selectRecipe(recipe) {
    updateButtonText(recipe);
    document.getElementById("myDropdown").classList.remove("show");
}

function updateButtonText(recipe) {
    document.getElementById("dropdownButton").textContent = recipe;
}
// Contact form
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");

    if (form && confirmationMessage && overlay && closeBtn) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            // Get the user's first and last name
            const fname = document.getElementById("fname").value;
            const lname = document.getElementById("lname").value;

            // Display the overlay and confirmation message
            confirmationMessage.innerHTML = `Thank you, ${fname} ${lname}! Your message has been sent.`;
            overlay.style.display = "block"; // Show the overlay


            form.reset();
        });

        // Close the overlay when the close button is clicked
        closeBtn.addEventListener("click", function () {
            overlay.style.display = "none";
        });


        window.addEventListener("click", function (event) {
            if (event.target === overlay) {
                overlay.style.display = "none";
            }
        });
    } else {
        console.error("Form, confirmationMessage, or overlay element not found!");
    }
});



// create modal for gallery
function getAllItems(itemList) {
    return itemList.map(item => `
                    <div class="item-card" onclick="openModal(${item.id})">
                        <h4 style="font-size:14pt;">${item.title}</h4>
                        <p style="font-size:10pt;">${item.description}</p>
                        <img src="${item.image_url}" height="150">
                    </div>
                `).join("");
}

// open modal
function openModal(itemId) {
    const item = items.find(i => i.id === itemId);
    document.getElementById("modalTitle").innerText = item.title;
    document.getElementById("modalImage").src = item.image_url;
    document.getElementById("modalDescription").innerText = item.description;
    document.getElementById("modal").style.display = "flex";
}
// close modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}


document.getElementById("gallery").innerHTML = getAllItems(items);

