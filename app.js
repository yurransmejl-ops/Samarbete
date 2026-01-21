// ===== Data för arbetare =====
const arbetare = [
    // Städare
    {
        id: 1,
        namn: "Anna Lindqvist",
        yrke: "Städare",
        kategori: "stadare",
        bild: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face",
        betyg: 4.9,
        antalRecensioner: 127,
        pris: 350,
        prisEnhet: "kr/timme",
        beskrivning: "Professionell städning med fokus på detaljer. 10 års erfarenhet av hemstädning, kontorsstädning och flyttstädning.",
        skills: ["Hemstädning", "Kontorsstädning", "Flyttstädning", "Fönsterputsning"],
        erfarenhet: "10 år",
        telefon: "070-123 45 67",
        email: "anna@mail.se"
    },
    {
        id: 2,
        namn: "Erik Johansson",
        yrke: "Städare",
        kategori: "stadare",
        bild: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
        betyg: 4.7,
        antalRecensioner: 89,
        pris: 320,
        prisEnhet: "kr/timme",
        beskrivning: "Specialiserad på djuprengöring och sanering. Miljövänliga produkter och noggrann finish.",
        skills: ["Djuprengöring", "Sanering", "Trappstädning", "Golvvård"],
        erfarenhet: "7 år",
        telefon: "070-234 56 78",
        email: "erik@mail.se"
    },
    {
        id: 3,
        namn: "Maria Svensson",
        yrke: "Städare",
        kategori: "stadare",
        bild: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
        betyg: 5.0,
        antalRecensioner: 156,
        pris: 380,
        prisEnhet: "kr/timme",
        beskrivning: "Premium städtjänster för krävande kunder. Specialutbildad inom hotellstädning och VIP-service.",
        skills: ["Premium städning", "Hotellstandard", "Storköksrengöring", "Kristallkronor"],
        erfarenhet: "15 år",
        telefon: "070-345 67 89",
        email: "maria@mail.se"
    },
    {
        id: 4,
        namn: "David Andersson",
        yrke: "Städare",
        kategori: "stadare",
        bild: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
        betyg: 4.6,
        antalRecensioner: 72,
        pris: 300,
        prisEnhet: "kr/timme",
        beskrivning: "Pålitlig och effektiv städare. Flexibla tider och snabb respons på förfrågningar.",
        skills: ["Hemstädning", "Byggstädning", "Fönsterputsning", "Mattvätt"],
        erfarenhet: "5 år",
        telefon: "070-456 78 90",
        email: "david@mail.se"
    },
    {
        id: 5,
        namn: "Sofia Bergström",
        yrke: "Städare",
        kategori: "stadare",
        bild: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
        betyg: 4.8,
        antalRecensioner: 94,
        pris: 340,
        prisEnhet: "kr/timme",
        beskrivning: "Expert på ekologisk städning. Använder endast miljöcertifierade produkter för ett hållbart hem.",
        skills: ["Ekostädning", "Allergianpassad", "Djurvänlig", "Hemstädning"],
        erfarenhet: "8 år",
        telefon: "070-567 89 01",
        email: "sofia@mail.se"
    },
    {
        id: 6,
        namn: "Johan Nilsson",
        yrke: "Städare",
        kategori: "stadare",
        bild: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
        betyg: 4.5,
        antalRecensioner: 63,
        pris: 290,
        prisEnhet: "kr/timme",
        beskrivning: "Erfaren städare med fokus på industriella lokaler. Certifierad inom arbetsmiljö och säkerhet.",
        skills: ["Industristädning", "Lagerstädning", "Höghöjdsarbete", "Sanering"],
        erfarenhet: "12 år",
        telefon: "070-678 90 12",
        email: "johan@mail.se"
    },
    {
        id: 7,
        namn: "Emma Karlsson",
        yrke: "Städare",
        kategori: "stadare",
        bild: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
        betyg: 4.9,
        antalRecensioner: 118,
        pris: 360,
        prisEnhet: "kr/timme",
        beskrivning: "Specialiserad på flyttstädning med garanti. Godkänd av alla stora fastighetsbolag i Stockholm.",
        skills: ["Flyttstädning", "Storstädning", "Garanti", "Besiktning"],
        erfarenhet: "9 år",
        telefon: "070-789 01 23",
        email: "emma@mail.se"
    },
    {
        id: 8,
        namn: "Oscar Lund",
        yrke: "Städare",
        kategori: "stadare",
        bild: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
        betyg: 4.7,
        antalRecensioner: 81,
        pris: 330,
        prisEnhet: "kr/timme",
        beskrivning: "Ung och ambitiös städare med moderna metoder. Specialiserad på smarta hem och teknikrika miljöer.",
        skills: ["Teknikvänlig", "Kontorsstädning", "Glaspartier", "Snabbstädning"],
        erfarenhet: "4 år",
        telefon: "070-890 12 34",
        email: "oscar@mail.se"
    },

    // Rörmokare
    {
        id: 9,
        namn: "Lars Pettersson",
        yrke: "Rörmokare",
        kategori: "rormokare",
        bild: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
        betyg: 4.8,
        antalRecensioner: 203,
        pris: 550,
        prisEnhet: "kr/timme",
        beskrivning: "Auktoriserad rörmokare med över 20 års erfarenhet. Expert på VVS-installationer och reparationer.",
        skills: ["VVS-installation", "Avloppsrensning", "Värmepumpar", "Badrumsrenovering"],
        erfarenhet: "22 år",
        telefon: "070-111 22 33",
        email: "lars@mail.se"
    },
    {
        id: 10,
        namn: "Anders Ström",
        yrke: "Rörmokare",
        kategori: "rormokare",
        bild: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
        betyg: 4.9,
        antalRecensioner: 167,
        pris: 580,
        prisEnhet: "kr/timme",
        beskrivning: "Certifierad för golvvärme och komplexa VVS-system. Snabb jour dygnet runt för akuta problem.",
        skills: ["Golvvärme", "Jour 24/7", "Läcksökning", "Vattenburna system"],
        erfarenhet: "18 år",
        telefon: "070-222 33 44",
        email: "anders@mail.se"
    },
    {
        id: 11,
        namn: "Mikael Berg",
        yrke: "Rörmokare",
        kategori: "rormokare",
        bild: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face",
        betyg: 4.6,
        antalRecensioner: 92,
        pris: 520,
        prisEnhet: "kr/timme",
        beskrivning: "Specialiserad på renovering av äldre fastigheter. Kunskap om både moderna och klassiska rörssystem.",
        skills: ["Renovering", "Äldre fastigheter", "Kopparrör", "Gjutjärn"],
        erfarenhet: "15 år",
        telefon: "070-333 44 55",
        email: "mikael@mail.se"
    },
    {
        id: 12,
        namn: "Henrik Åberg",
        yrke: "Rörmokare",
        kategori: "rormokare",
        bild: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop&crop=face",
        betyg: 4.7,
        antalRecensioner: 134,
        pris: 540,
        prisEnhet: "kr/timme",
        beskrivning: "Expert på energieffektiva lösningar och grön VVS-teknik. Hjälper dig spara pengar och miljö.",
        skills: ["Energibesparing", "Solpaneler", "Bergvärme", "Smart VVS"],
        erfarenhet: "12 år",
        telefon: "070-444 55 66",
        email: "henrik@mail.se"
    },
    {
        id: 13,
        namn: "Patrik Holm",
        yrke: "Rörmokare",
        kategori: "rormokare",
        bild: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face",
        betyg: 4.5,
        antalRecensioner: 78,
        pris: 490,
        prisEnhet: "kr/timme",
        beskrivning: "Nyutbildad men ambitiös rörmokare. Fokus på kundservice och att alltid leverera i tid.",
        skills: ["Badrumsrenovering", "Köksinstallation", "Blandare", "WC-reparation"],
        erfarenhet: "5 år",
        telefon: "070-555 66 77",
        email: "patrik@mail.se"
    },

    // Snickare
    {
        id: 14,
        namn: "Gustav Ekström",
        yrke: "Snickare",
        kategori: "snickare",
        bild: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=face",
        betyg: 4.9,
        antalRecensioner: 189,
        pris: 480,
        prisEnhet: "kr/timme",
        beskrivning: "Mästersnickare med passion för hantverk. Bygger allt från altaner till platsbyggda möbler.",
        skills: ["Altanbygge", "Platsbyggda möbler", "Kök", "Inredning"],
        erfarenhet: "25 år",
        telefon: "070-666 77 88",
        email: "gustav@mail.se"
    },
    {
        id: 15,
        namn: "Fredrik Lind",
        yrke: "Snickare",
        kategori: "snickare",
        bild: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop&crop=face",
        betyg: 4.8,
        antalRecensioner: 156,
        pris: 460,
        prisEnhet: "kr/timme",
        beskrivning: "Expert på träkonstruktioner och takarbeten. Certifierad för att arbeta på alla typer av byggnader.",
        skills: ["Takarbete", "Stomresning", "Tillbyggnad", "Garage"],
        erfarenhet: "18 år",
        telefon: "070-777 88 99",
        email: "fredrik@mail.se"
    },
    {
        id: 16,
        namn: "Marcus Dahl",
        yrke: "Snickare",
        kategori: "snickare",
        bild: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&h=200&fit=crop&crop=face",
        betyg: 4.7,
        antalRecensioner: 112,
        pris: 440,
        prisEnhet: "kr/timme",
        beskrivning: "Specialiserad på fönster och dörrar. Renoverar, installerar och underhåller med precision.",
        skills: ["Fönsterbyte", "Dörrar", "Isolering", "Ljuddämpning"],
        erfarenhet: "14 år",
        telefon: "070-888 99 00",
        email: "marcus@mail.se"
    },
    {
        id: 17,
        namn: "Alexander Wall",
        yrke: "Snickare",
        kategori: "snickare",
        bild: "https://images.unsplash.com/photo-1548449112-96a38a643324?w=200&h=200&fit=crop&crop=face",
        betyg: 4.6,
        antalRecensioner: 87,
        pris: 420,
        prisEnhet: "kr/timme",
        beskrivning: "Modern snickare med fokus på design. Skapar unika lösningar som kombinerar funktion och estetik.",
        skills: ["Design", "Modulbygge", "Hemmakontor", "Förvaring"],
        erfarenhet: "10 år",
        telefon: "070-999 00 11",
        email: "alexander@mail.se"
    },
    {
        id: 18,
        namn: "Simon Kraft",
        yrke: "Snickare",
        kategori: "snickare",
        bild: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop&crop=face",
        betyg: 4.8,
        antalRecensioner: 143,
        pris: 470,
        prisEnhet: "kr/timme",
        beskrivning: "Allround-snickare för både inomhus och utomhus. Gedigen erfarenhet av ROT-arbeten.",
        skills: ["ROT-arbeten", "Fasadrenovering", "Golv", "Panel"],
        erfarenhet: "16 år",
        telefon: "070-000 11 22",
        email: "simon@mail.se"
    },
    {
        id: 19,
        namn: "Viktor Eng",
        yrke: "Snickare",
        kategori: "snickare",
        bild: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=200&h=200&fit=crop&crop=face",
        betyg: 4.5,
        antalRecensioner: 65,
        pris: 400,
        prisEnhet: "kr/timme",
        beskrivning: "Ung och driven snickare som brinner för hållbart byggande. Jobbar gärna med återvunna material.",
        skills: ["Hållbart byggande", "Återbruk", "Trädgårdsbygge", "Växthus"],
        erfarenhet: "6 år",
        telefon: "070-112 23 34",
        email: "viktor@mail.se"
    },

    // Målare
    {
        id: 20,
        namn: "Josefin Blom",
        yrke: "Målare",
        kategori: "malare",
        bild: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
        betyg: 4.9,
        antalRecensioner: 178,
        pris: 420,
        prisEnhet: "kr/timme",
        beskrivning: "Kreativ målare med öga för färg och form. Specialiserad på exklusiva hem och designprojekt.",
        skills: ["Invändig målning", "Tapetsering", "Färgkonsultation", "Dekorationsmålning"],
        erfarenhet: "12 år",
        telefon: "070-223 34 45",
        email: "josefin@mail.se"
    },
    {
        id: 21,
        namn: "Robin Falk",
        yrke: "Målare",
        kategori: "malare",
        bild: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop&crop=face",
        betyg: 4.7,
        antalRecensioner: 134,
        pris: 390,
        prisEnhet: "kr/timme",
        beskrivning: "Erfaren målare för både privata hem och företag. Snabb, pålitlig och alltid noggrann.",
        skills: ["Företagsmålning", "Fasadmålning", "Lackering", "Spackling"],
        erfarenhet: "15 år",
        telefon: "070-334 45 56",
        email: "robin@mail.se"
    },
    {
        id: 22,
        namn: "Linda Sjöberg",
        yrke: "Målare",
        kategori: "malare",
        bild: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
        betyg: 4.8,
        antalRecensioner: 156,
        pris: 410,
        prisEnhet: "kr/timme",
        beskrivning: "Expert på tapetsering och väggbeklädnad. Kan förvandla vilket rum som helst till en oas.",
        skills: ["Tapetsering", "Tygtapeter", "Muralteknik", "Strukturväggar"],
        erfarenhet: "11 år",
        telefon: "070-445 56 67",
        email: "linda@mail.se"
    },
    {
        id: 23,
        namn: "Peter Grahn",
        yrke: "Målare",
        kategori: "malare",
        bild: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?w=200&h=200&fit=crop&crop=face",
        betyg: 4.6,
        antalRecensioner: 98,
        pris: 380,
        prisEnhet: "kr/timme",
        beskrivning: "Specialiserad på utvändig målning och fasadarbeten. Arbetar året runt oavsett väder.",
        skills: ["Fasadmålning", "Fönstermålning", "Träskydd", "Plåtmålning"],
        erfarenhet: "20 år",
        telefon: "070-556 67 78",
        email: "peter@mail.se"
    },
    {
        id: 24,
        namn: "Klara Nyberg",
        yrke: "Målare",
        kategori: "malare",
        bild: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
        betyg: 4.9,
        antalRecensioner: 167,
        pris: 430,
        prisEnhet: "kr/timme",
        beskrivning: "Konstnärlig målare med flair för unika finish. Skapar personliga rum med karaktär.",
        skills: ["Konstnärlig målning", "Patinering", "Marmorering", "Guld & silver"],
        erfarenhet: "14 år",
        telefon: "070-667 78 89",
        email: "klara@mail.se"
    }
];

// ===== DOM-element =====
const kategoriKnappar = document.querySelectorAll('.kategori-card');
const arbetareContainer = document.getElementById('arbetare-container');
const arbetareRubrik = document.getElementById('arbetare-rubrik');
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

// ===== Funktioner =====

// Generera yrkes-emoji
function getYrkesEmoji(kategori) {
    const emojis = {
        stadare: '🧹',
        rormokare: '🔧',
        snickare: '🪚',
        malare: '🎨'
    };
    return emojis[kategori] || '👷';
}

// Generera yrkes-namn
function getYrkesNamn(kategori) {
    const namn = {
        stadare: 'Städare',
        rormokare: 'Rörmokare',
        snickare: 'Snickare',
        malare: 'Målare'
    };
    return namn[kategori] || 'Arbetare';
}

// Rendera arbetarkort
function renderArbetare(filterKategori = 'alla') {
    const filtreradeArbetare = filterKategori === 'alla' 
        ? arbetare 
        : arbetare.filter(a => a.kategori === filterKategori);
    
    // Uppdatera rubrik
    if (filterKategori === 'alla') {
        arbetareRubrik.textContent = 'Alla arbetare';
    } else {
        arbetareRubrik.textContent = getYrkesNamn(filterKategori);
    }
    
    // Rensa container
    arbetareContainer.innerHTML = '';
    
    // Rendera kort
    filtreradeArbetare.forEach((person, index) => {
        const kort = document.createElement('div');
        kort.className = 'arbetare-card';
        kort.style.animationDelay = `${index * 0.05}s`;
        kort.innerHTML = `
            <div class="arbetare-header">
                <img src="${person.bild}" alt="${person.namn}" class="arbetare-bild" loading="lazy">
                <div class="arbetare-info">
                    <h3 class="arbetare-namn">${person.namn}</h3>
                    <span class="arbetare-yrke">${getYrkesEmoji(person.kategori)} ${person.yrke}</span>
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
                    ${person.skills.slice(0, 3).map(skill => `<span class="arbetare-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="arbetare-footer">
                <div class="arbetare-pris">
                    <strong>${person.pris}</strong> ${person.prisEnhet}
                </div>
                <button class="arbetare-knapp">Visa profil</button>
            </div>
        `;
        
        kort.addEventListener('click', () => openModal(person));
        arbetareContainer.appendChild(kort);
    });
}

// Öppna modal
function openModal(person) {
    modalContent.innerHTML = `
        <div class="modal-header">
            <img src="${person.bild}" alt="${person.namn}" class="modal-bild">
            <div class="modal-info">
                <h2>${person.namn}</h2>
                <span class="modal-yrke">${getYrkesEmoji(person.kategori)} ${person.yrke}</span>
                <div class="modal-stats">
                    <span><span class="star">★</span> <strong>${person.betyg}</strong> (${person.antalRecensioner} recensioner)</span>
                    <span>📅 ${person.erfarenhet} erfarenhet</span>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Om mig</h3>
            <p>${person.beskrivning}</p>
        </div>
        
        <div class="modal-section">
            <h3>Kunskaper & tjänster</h3>
            <div class="modal-skills">
                ${person.skills.map(skill => `<span class="modal-skill">${skill}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Kontaktuppgifter</h3>
            <p>📞 ${person.telefon}<br>✉️ ${person.email}</p>
        </div>
        
        <div class="modal-footer">
            <div class="modal-pris">
                Timpris från
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

// Stäng modal
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Event Listeners =====

// Kategori-knappar
kategoriKnappar.forEach(knapp => {
    knapp.addEventListener('click', () => {
        // Uppdatera aktiv knapp
        kategoriKnappar.forEach(k => k.classList.remove('active'));
        knapp.classList.add('active');
        
        // Filtrera arbetare
        const kategori = knapp.dataset.kategori;
        renderArbetare(kategori);
    });
});

// Modal stängning
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Escape-tangent för att stänga modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ===== Initiering =====
document.addEventListener('DOMContentLoaded', () => {
    renderArbetare('alla');
});
