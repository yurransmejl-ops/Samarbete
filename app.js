// ===== Kategorier =====
const kategorier = [
    { id: 'alla', namn: 'Alla', icon: '🏠' },
    { id: 'stadare', namn: 'Städare', icon: '🧹' },
    { id: 'rormokare', namn: 'Rörmokare', icon: '🔧' },
    { id: 'snickare', namn: 'Snickare', icon: '🪚' },
    { id: 'malare', namn: 'Målare', icon: '🎨' },
    { id: 'ekonom', namn: 'Ekonom', icon: '📊' },
    { id: 'elektriker', namn: 'Elektriker', icon: '⚡' },
    { id: 'tradgard', namn: 'Trädgård', icon: '🌱' },
    { id: 'flytt', namn: 'Flytthjälp', icon: '📦' },
    { id: 'it', namn: 'IT-support', icon: '💻' },
    { id: 'frisor', namn: 'Frisör', icon: '✂️' },
    { id: 'massage', namn: 'Massage', icon: '💆' },
    { id: 'ovrig', namn: 'Övrigt', icon: '🛠️' }
];

// ===== Exempel-data för arbetare (endast de med högst betyg) =====
const defaultArbetare = [
    // Städare - bästa betyg
    { id: 3, namn: "Maria Svensson", yrke: "Städare", kategori: "stadare", bild: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face", betyg: 5.0, antalRecensioner: 156, pris: 380, prisEnhet: "kr/timme", beskrivning: "Premium städtjänster för krävande kunder. Specialutbildad inom hotellstädning och VIP-service.", skills: ["Premium städning", "Hotellstandard", "Storköksrengöring"], erfarenhet: "15 år", telefon: "070-345 67 89", email: "maria@mail.se" },
    { id: 1, namn: "Anna Lindqvist", yrke: "Städare", kategori: "stadare", bild: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face", betyg: 4.9, antalRecensioner: 127, pris: 350, prisEnhet: "kr/timme", beskrivning: "Professionell städning med fokus på detaljer. 10 års erfarenhet av hemstädning, kontorsstädning och flyttstädning.", skills: ["Hemstädning", "Kontorsstädning", "Flyttstädning", "Fönsterputsning"], erfarenhet: "10 år", telefon: "070-123 45 67", email: "anna@mail.se" },
    
    // Rörmokare - bästa betyg
    { id: 5, namn: "Anders Ström", yrke: "Rörmokare", kategori: "rormokare", bild: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face", betyg: 4.9, antalRecensioner: 167, pris: 580, prisEnhet: "kr/timme", beskrivning: "Certifierad för golvvärme och komplexa VVS-system. Snabb jour dygnet runt för akuta problem.", skills: ["Golvvärme", "Jour 24/7", "Läcksökning", "Vattenburna system"], erfarenhet: "18 år", telefon: "070-222 33 44", email: "anders@mail.se" },
    { id: 4, namn: "Lars Pettersson", yrke: "Rörmokare", kategori: "rormokare", bild: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face", betyg: 4.8, antalRecensioner: 203, pris: 550, prisEnhet: "kr/timme", beskrivning: "Auktoriserad rörmokare med över 20 års erfarenhet. Expert på VVS-installationer och reparationer.", skills: ["VVS-installation", "Avloppsrensning", "Värmepumpar", "Badrumsrenovering"], erfarenhet: "22 år", telefon: "070-111 22 33", email: "lars@mail.se" },
    
    // Snickare - bästa betyg
    { id: 6, namn: "Gustav Ekström", yrke: "Snickare", kategori: "snickare", bild: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=face", betyg: 4.9, antalRecensioner: 189, pris: 480, prisEnhet: "kr/timme", beskrivning: "Mästersnickare med passion för hantverk. Bygger allt från altaner till platsbyggda möbler.", skills: ["Altanbygge", "Platsbyggda möbler", "Kök", "Inredning"], erfarenhet: "25 år", telefon: "070-666 77 88", email: "gustav@mail.se" },
    { id: 7, namn: "Fredrik Lind", yrke: "Snickare", kategori: "snickare", bild: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop&crop=face", betyg: 4.8, antalRecensioner: 156, pris: 460, prisEnhet: "kr/timme", beskrivning: "Expert på träkonstruktioner och takarbeten. Certifierad för att arbeta på alla typer av byggnader.", skills: ["Takarbete", "Stomresning", "Tillbyggnad", "Garage"], erfarenhet: "18 år", telefon: "070-777 88 99", email: "fredrik@mail.se" },
    
    // Målare - bästa betyg
    { id: 8, namn: "Josefin Blom", yrke: "Målare", kategori: "malare", bild: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face", betyg: 4.9, antalRecensioner: 178, pris: 420, prisEnhet: "kr/timme", beskrivning: "Kreativ målare med öga för färg och form. Specialiserad på exklusiva hem och designprojekt.", skills: ["Invändig målning", "Tapetsering", "Färgkonsultation", "Dekorationsmålning"], erfarenhet: "12 år", telefon: "070-223 34 45", email: "josefin@mail.se" },
    
    // Ekonom - bästa betyg
    { id: 10, namn: "Sara Lindberg", yrke: "Ekonom", kategori: "ekonom", bild: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face", betyg: 4.9, antalRecensioner: 145, pris: 650, prisEnhet: "kr/timme", beskrivning: "Auktoriserad redovisningskonsult med fokus på småföretag. Hjälper dig med bokföring, deklaration och ekonomisk rådgivning.", skills: ["Bokföring", "Deklaration", "Lönehantering", "Årsredovisning"], erfarenhet: "12 år", telefon: "070-444 55 66", email: "sara@mail.se" },
    { id: 11, namn: "Magnus Björk", yrke: "Ekonom", kategori: "ekonom", bild: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face", betyg: 4.8, antalRecensioner: 98, pris: 700, prisEnhet: "kr/timme", beskrivning: "Ekonomisk rådgivare med expertis inom skatteplanering och företagsekonomi. MBA från Handelshögskolan.", skills: ["Skatteplanering", "Företagsrådgivning", "Budgetering", "Finansiell analys"], erfarenhet: "18 år", telefon: "070-555 66 77", email: "magnus@mail.se" },
    
    // Elektriker - bästa betyg
    { id: 12, namn: "Peter Holm", yrke: "Elektriker", kategori: "elektriker", bild: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop&crop=face", betyg: 4.8, antalRecensioner: 167, pris: 520, prisEnhet: "kr/timme", beskrivning: "Behörig elektriker med full behörighet. Utför allt från enklare installationer till kompletta elentreprenader.", skills: ["Elinstallation", "Säkringsbyten", "Belysning", "Smarta hem"], erfarenhet: "15 år", telefon: "070-666 77 88", email: "peter@mail.se" },
    
    // Trädgård - bästa betyg
    { id: 14, namn: "Johan Berg", yrke: "Trädgårdsmästare", kategori: "tradgard", bild: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face", betyg: 4.9, antalRecensioner: 134, pris: 380, prisEnhet: "kr/timme", beskrivning: "Utbildad trädgårdsmästare med passion för växter. Skapar vackra trädgårdar anpassade efter kundens önskemål.", skills: ["Trädgårdsdesign", "Plantering", "Häckklippning", "Gräsmattor"], erfarenhet: "14 år", telefon: "070-888 99 00", email: "johan@mail.se" },
    
    // Flytt - bästa betyg
    { id: 16, namn: "Viktor Lund", yrke: "Flytthjälp", kategori: "flytt", bild: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face", betyg: 4.7, antalRecensioner: 189, pris: 350, prisEnhet: "kr/timme", beskrivning: "Professionell flytthjälp med egen lastbil. Hjälper dig flytta snabbt, säkert och utan stress.", skills: ["Hemflytt", "Kontorsflytt", "Packning", "Pianoflytt"], erfarenhet: "9 år", telefon: "070-000 11 22", email: "viktor@mail.se" },
    
    // IT - bästa betyg
    { id: 18, namn: "Oscar Nyberg", yrke: "IT-support", kategori: "it", bild: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop&crop=face", betyg: 4.9, antalRecensioner: 167, pris: 550, prisEnhet: "kr/timme", beskrivning: "IT-konsult med bred kompetens. Hjälper privatpersoner och småföretag med allt inom IT.", skills: ["Datorhjälp", "Nätverk", "Säkerhet", "Molntjänster"], erfarenhet: "12 år", telefon: "070-223 34 45", email: "oscar@mail.se" },
    
    // Frisör - bästa betyg
    { id: 20, namn: "Sofia Bergström", yrke: "Frisör", kategori: "frisor", bild: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face", betyg: 4.9, antalRecensioner: 234, pris: 450, prisEnhet: "kr/klippning", beskrivning: "Erfaren frisör som kommer hem till dig. Specialiserad på moderna klippningar och färgningar.", skills: ["Herrklippning", "Damklippning", "Färgning", "Slingor"], erfarenhet: "11 år", telefon: "070-445 56 67", email: "sofia@mail.se" },
    
    // Massage - bästa betyg
    { id: 21, namn: "Klara Nyberg", yrke: "Massör", kategori: "massage", bild: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face", betyg: 4.9, antalRecensioner: 189, pris: 600, prisEnhet: "kr/behandling", beskrivning: "Legitimerad massör med egen utrustning. Kommer hem till dig för avslappnande behandlingar.", skills: ["Klassisk massage", "Sportmassage", "Hot stone", "Aromaterapi"], erfarenhet: "9 år", telefon: "070-556 67 78", email: "klara@mail.se" }
];

// ===== State =====
let currentUser = null;
let arbetare = [...defaultArbetare];
let currentKategori = 'alla';
let userSkills = [];

// ===== DOM-element =====
const pages = document.querySelectorAll('.page');
const kategoriGrid = document.getElementById('kategori-grid');
const kategoriSelect = document.getElementById('kategori-select');
const arbetareContainer = document.getElementById('arbetare-container');
const arbetareRubrik = document.getElementById('arbetare-rubrik');
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const authButtons = document.getElementById('auth-buttons');
const userMenu = document.getElementById('user-menu');
const toastContainer = document.getElementById('toast-container');

// ===== Utility Functions =====

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span>${type === 'success' ? '✅' : '❌'}</span>
        <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function getInitials(firstname, lastname) {
    return `${(firstname || '')[0] || ''}${(lastname || '')[0] || ''}`.toUpperCase();
}

function getKategoriInfo(kategoriId) {
    return kategorier.find(k => k.id === kategoriId) || kategorier[0];
}

// ===== Page Navigation =====

function showPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Load page-specific data
    if (pageId === 'profile' && currentUser) {
        loadProfileData();
    } else if (pageId === 'my-listing' && currentUser) {
        loadListingData();
    }
}

// ===== Auth Functions =====

function loadUserFromStorage() {
    const savedUser = localStorage.getItem('hjalparen_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
        loadUserListing();
    }
}

function saveUserToStorage() {
    if (currentUser) {
        localStorage.setItem('hjalparen_user', JSON.stringify(currentUser));
    } else {
        localStorage.removeItem('hjalparen_user');
    }
}

function updateAuthUI() {
    if (currentUser) {
        authButtons.style.display = 'none';
        userMenu.style.display = 'block';
        
        const initials = getInitials(currentUser.firstname, currentUser.lastname);
        document.getElementById('user-initials').textContent = initials;
        document.getElementById('dropdown-name').textContent = `${currentUser.firstname} ${currentUser.lastname}`;
        document.getElementById('dropdown-email').textContent = currentUser.email;
    } else {
        authButtons.style.display = 'flex';
        userMenu.style.display = 'none';
    }
}

function login(email, password) {
    // Check localStorage for existing users
    const users = JSON.parse(localStorage.getItem('hjalparen_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        saveUserToStorage();
        updateAuthUI();
        loadUserListing();
        showToast('Inloggningen lyckades!');
        showPage('home');
        return true;
    }
    
    showToast('Fel e-post eller lösenord', 'error');
    return false;
}

function register(userData) {
    const users = JSON.parse(localStorage.getItem('hjalparen_users') || '[]');
    
    // Check if email already exists
    if (users.find(u => u.email === userData.email)) {
        showToast('E-postadressen används redan', 'error');
        return false;
    }
    
    const newUser = {
        id: Date.now(),
        ...userData,
        listing: null
    };
    
    users.push(newUser);
    localStorage.setItem('hjalparen_users', JSON.stringify(users));
    
    currentUser = newUser;
    saveUserToStorage();
    updateAuthUI();
    
    showToast('Kontot har skapats!');
    showPage('my-listing');
    return true;
}

function logout() {
    currentUser = null;
    userSkills = [];
    saveUserToStorage();
    updateAuthUI();
    showToast('Du har loggats ut');
    showPage('home');
    renderArbetare(currentKategori);
}

function updateProfile(data) {
    if (!currentUser) return;
    
    currentUser = { ...currentUser, ...data };
    saveUserToStorage();
    
    // Update in users array
    const users = JSON.parse(localStorage.getItem('hjalparen_users') || '[]');
    const index = users.findIndex(u => u.id === currentUser.id);
    if (index !== -1) {
        users[index] = currentUser;
        localStorage.setItem('hjalparen_users', JSON.stringify(users));
    }
    
    updateAuthUI();
    showToast('Profilen har uppdaterats!');
}

// ===== Listing Functions =====

function loadUserListing() {
    if (!currentUser || !currentUser.listing) {
        userSkills = [];
        return;
    }
    userSkills = currentUser.listing.skills || [];
}

function saveListing(listingData) {
    if (!currentUser) return;
    
    currentUser.listing = listingData;
    saveUserToStorage();
    
    // Update in users array
    const users = JSON.parse(localStorage.getItem('hjalparen_users') || '[]');
    const index = users.findIndex(u => u.id === currentUser.id);
    if (index !== -1) {
        users[index] = currentUser;
        localStorage.setItem('hjalparen_users', JSON.stringify(users));
    }
    
    // Update arbetare list
    renderArbetare(currentKategori);
    
    showToast('Annonsen har sparats!');
}

function loadProfileData() {
    if (!currentUser) return;
    
    document.getElementById('profile-firstname').value = currentUser.firstname || '';
    document.getElementById('profile-lastname').value = currentUser.lastname || '';
    document.getElementById('profile-email').value = currentUser.email || '';
    document.getElementById('profile-phone').value = currentUser.phone || '';
    
    const initials = getInitials(currentUser.firstname, currentUser.lastname);
    document.getElementById('profile-initials').textContent = initials;
    document.getElementById('profile-display-name').textContent = `${currentUser.firstname} ${currentUser.lastname}`;
    document.getElementById('profile-display-email').textContent = currentUser.email;
}

function loadListingData() {
    if (!currentUser) return;
    
    const listing = currentUser.listing || {};
    
    document.getElementById('listing-title').value = listing.title || '';
    document.getElementById('listing-description').value = listing.description || '';
    document.getElementById('listing-price').value = listing.price || '';
    document.getElementById('listing-experience').value = listing.experience || '';
    document.getElementById('listing-active').checked = listing.active || false;
    
    // Set selected category
    const kategoriOptions = document.querySelectorAll('.kategori-option');
    kategoriOptions.forEach(opt => {
        opt.classList.remove('selected');
        if (opt.dataset.kategori === listing.kategori) {
            opt.classList.add('selected');
        }
    });
    
    // Load skills
    userSkills = listing.skills || [];
    renderSkills();
}

function renderSkills() {
    const skillsList = document.getElementById('skills-list');
    if (!skillsList) return;
    
    skillsList.innerHTML = userSkills.map((skill, index) => `
        <span class="skill-tag">
            ${skill}
            <button type="button" onclick="removeSkill(${index})">×</button>
        </span>
    `).join('');
}

function addSkill() {
    const input = document.getElementById('skill-input');
    const skill = input.value.trim();
    
    if (skill && !userSkills.includes(skill)) {
        userSkills.push(skill);
        renderSkills();
        input.value = '';
    }
}

function removeSkill(index) {
    userSkills.splice(index, 1);
    renderSkills();
}

// ===== Render Functions =====

function renderKategorier() {
    // Main kategori grid (home page)
    if (kategoriGrid) {
        kategoriGrid.innerHTML = kategorier.map(kat => {
            const count = kat.id === 'alla' 
                ? getAllArbetare().length 
                : getAllArbetare().filter(a => a.kategori === kat.id).length;
            
            return `
                <button class="kategori-card ${kat.id === currentKategori ? 'active' : ''}" data-kategori="${kat.id}">
                    <div class="kategori-icon">${kat.icon}</div>
                    <span class="kategori-namn">${kat.namn}</span>
                    <span class="kategori-antal">${count} hjälpare</span>
                </button>
            `;
        }).join('');
        
        // Add event listeners
        kategoriGrid.querySelectorAll('.kategori-card').forEach(card => {
            card.addEventListener('click', () => {
                currentKategori = card.dataset.kategori;
                renderKategorier();
                renderArbetare(currentKategori);
            });
        });
    }
    
    // Kategori select (listing page)
    if (kategoriSelect) {
        const selectableKategorier = kategorier.filter(k => k.id !== 'alla');
        kategoriSelect.innerHTML = selectableKategorier.map(kat => `
            <div class="kategori-option" data-kategori="${kat.id}">
                <span class="icon">${kat.icon}</span>
                <span class="name">${kat.namn}</span>
            </div>
        `).join('');
        
        // Add event listeners
        kategoriSelect.querySelectorAll('.kategori-option').forEach(opt => {
            opt.addEventListener('click', () => {
                kategoriSelect.querySelectorAll('.kategori-option').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
            });
        });
    }
}

function getAllArbetare() {
    // Combine default arbetare with user listings
    const allArbetare = [...defaultArbetare];
    
    // Get all users with active listings
    const users = JSON.parse(localStorage.getItem('hjalparen_users') || '[]');
    users.forEach(user => {
        if (user.listing && user.listing.active) {
            const katInfo = getKategoriInfo(user.listing.kategori);
            allArbetare.push({
                id: `user-${user.id}`,
                namn: `${user.firstname} ${user.lastname}`,
                yrke: user.listing.title || katInfo.namn,
                kategori: user.listing.kategori,
                bild: `https://ui-avatars.com/api/?name=${user.firstname}+${user.lastname}&background=ff6b35&color=fff&size=200`,
                betyg: 5.0,
                antalRecensioner: 0,
                pris: user.listing.price || 0,
                prisEnhet: 'kr/timme',
                beskrivning: user.listing.description || '',
                skills: user.listing.skills || [],
                erfarenhet: user.listing.experience || '',
                telefon: user.phone,
                email: user.email,
                isUser: true
            });
        }
    });
    
    return allArbetare;
}

function renderArbetare(filterKategori = 'alla') {
    const allArbetare = getAllArbetare();
    let filtreradeArbetare = filterKategori === 'alla' 
        ? allArbetare 
        : allArbetare.filter(a => a.kategori === filterKategori);
    
    // Sortera efter betyg (högst först), sedan antal recensioner
    filtreradeArbetare.sort((a, b) => {
        if (b.betyg !== a.betyg) {
            return b.betyg - a.betyg; // Högst betyg först
        }
        return b.antalRecensioner - a.antalRecensioner; // Fler recensioner först vid samma betyg
    });
    
    // Update rubrik
    const katInfo = getKategoriInfo(filterKategori);
    if (arbetareRubrik) {
        arbetareRubrik.textContent = filterKategori === 'alla' ? 'Alla hjälpare' : katInfo.namn;
    }
    
    // Render cards
    if (arbetareContainer) {
        if (filtreradeArbetare.length === 0) {
            arbetareContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--color-text-muted);">
                    <p style="font-size: 3rem; margin-bottom: 1rem;">${katInfo.icon}</p>
                    <p>Inga hjälpare i denna kategori ännu.</p>
                    <p style="margin-top: 0.5rem;">Vill du erbjuda dina tjänster? <a href="#" onclick="showPage('register')" style="color: var(--color-accent);">Skapa ett konto</a></p>
                </div>
            `;
            return;
        }
        
        arbetareContainer.innerHTML = filtreradeArbetare.map((person, index) => {
            const katInfo = getKategoriInfo(person.kategori);
            return `
                <div class="arbetare-card" style="animation-delay: ${index * 0.05}s" data-id="${person.id}">
                    <div class="arbetare-header">
                        <img src="${person.bild}" alt="${person.namn}" class="arbetare-bild" loading="lazy" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(person.namn)}&background=ff6b35&color=fff&size=200'">
                        <div class="arbetare-info">
                            <h3 class="arbetare-namn">${person.namn}</h3>
                            <span class="arbetare-yrke">${katInfo.icon} ${person.yrke}</span>
                            <div class="arbetare-betyg">
                                <span class="star">★</span>
                                <strong>${person.betyg}</strong>
                                <span>(${person.antalRecensioner} recensioner)</span>
                            </div>
                        </div>
                    </div>
                    <div class="arbetare-body">
                        <p class="arbetare-beskrivning">${person.beskrivning}</p>
                        <div class="arbetare-tags">
                            ${(person.skills || []).slice(0, 3).map(skill => `<span class="arbetare-tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                    <div class="arbetare-footer">
                        <div class="arbetare-pris">
                            <strong>${person.pris}</strong> ${person.prisEnhet}
                        </div>
                        <button class="arbetare-knapp">Visa profil</button>
                    </div>
                </div>
            `;
        }).join('');
        
        // Add event listeners
        arbetareContainer.querySelectorAll('.arbetare-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.dataset.id;
                const person = filtreradeArbetare.find(a => String(a.id) === id);
                if (person) openModal(person);
            });
        });
    }
}

function openModal(person) {
    const katInfo = getKategoriInfo(person.kategori);
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <img src="${person.bild}" alt="${person.namn}" class="modal-bild" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(person.namn)}&background=ff6b35&color=fff&size=200'">
            <div class="modal-info">
                <h2>${person.namn}</h2>
                <span class="modal-yrke">${katInfo.icon} ${person.yrke}</span>
                <div class="modal-stats">
                    <span><span class="star">★</span> <strong>${person.betyg}</strong> (${person.antalRecensioner} recensioner)</span>
                    ${person.erfarenhet ? `<span>📅 ${person.erfarenhet} erfarenhet</span>` : ''}
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Om mig</h3>
            <p>${person.beskrivning || 'Ingen beskrivning ännu.'}</p>
        </div>
        
        ${(person.skills && person.skills.length > 0) ? `
        <div class="modal-section">
            <h3>Kunskaper & tjänster</h3>
            <div class="modal-skills">
                ${person.skills.map(skill => `<span class="modal-skill">${skill}</span>`).join('')}
            </div>
        </div>
        ` : ''}
        
        <div class="modal-section">
            <h3>Kontaktuppgifter</h3>
            <p>📞 ${person.telefon || 'Ej angivet'}<br>✉️ ${person.email || 'Ej angivet'}</p>
        </div>
        
        <div class="modal-footer">
            <div class="modal-pris">
                Pris från
                <strong>${person.pris} ${person.prisEnhet}</strong>
            </div>
            <button class="modal-kontakt" onclick="window.location.href='tel:${person.telefon}'">
                📞 Kontakta nu
            </button>
        </div>
    `;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Event Listeners =====

// Modal
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Login form
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    login(email, password);
});

// Register form
document.getElementById('register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('reg-password').value;
    const passwordConfirm = document.getElementById('reg-password-confirm').value;
    
    if (password !== passwordConfirm) {
        showToast('Lösenorden matchar inte', 'error');
        return;
    }
    
    register({
        firstname: document.getElementById('reg-firstname').value,
        lastname: document.getElementById('reg-lastname').value,
        email: document.getElementById('reg-email').value,
        phone: document.getElementById('reg-phone').value,
        password: password
    });
});

// Profile form
document.getElementById('profile-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    updateProfile({
        firstname: document.getElementById('profile-firstname').value,
        lastname: document.getElementById('profile-lastname').value,
        email: document.getElementById('profile-email').value,
        phone: document.getElementById('profile-phone').value
    });
});

// Listing form
document.getElementById('listing-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const selectedKategori = document.querySelector('.kategori-option.selected');
    if (!selectedKategori) {
        showToast('Välj en kategori', 'error');
        return;
    }
    
    saveListing({
        kategori: selectedKategori.dataset.kategori,
        title: document.getElementById('listing-title').value,
        description: document.getElementById('listing-description').value,
        price: parseInt(document.getElementById('listing-price').value) || 0,
        experience: document.getElementById('listing-experience').value,
        skills: userSkills,
        active: document.getElementById('listing-active').checked
    });
});

// Skill input - Enter key
document.getElementById('skill-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addSkill();
    }
});

// User dropdown toggle for mobile
document.getElementById('user-avatar-btn')?.addEventListener('click', () => {
    document.getElementById('user-dropdown')?.classList.toggle('active');
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    loadUserFromStorage();
    renderKategorier();
    renderArbetare('alla');
});
