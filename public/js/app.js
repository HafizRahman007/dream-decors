/**
 * Dream Decors Stateful Controller & Render Engine
 * Operates on a declarative reactive state-and-render architecture.
 * Fully self-contained, guaranteeing zero browser CORS or compiling errors.
 */

// ==========================================================================
// DATASETS
// ==========================================================================
const PORTFOLIO_ITEMS = [
  {
    id: 3,
    title: 'Premium Wedding Entrance',
    category: 'entrances',
    image: 'assets/wedding_entrance.jpg',
    images: ['assets/wedding_entrance.jpg', 'assets/white_floral_entrance.png', 'assets/wedding_royal_stage.png', 'assets/wedding_circle_backdrop.jpg'],
    desc: 'Breathtaking floral welcome arches ranging from gold crystal marigold drapes to plaster arches with rose-lined runways.'
  },
  {
    id: 1,
    title: 'Corporate Staging & Gala Decors',
    category: 'corporate',
    image: 'assets/corporate_led.jpg',
    images: ['assets/corporate_led.jpg', 'assets/corporate_rco.jpg'],
    desc: 'Bespoke corporate environments featuring high-definition LED stages and grand branded VIP masquerade gala styling.'
  },
  {
    id: 11,
    title: 'Bespoke Event Furniture Collections',
    category: 'furniture',
    image: 'assets/rental_acrylic_chairs.png',
    images: ['assets/rental_acrylic_chairs.png', 'assets/rental_velvet_dining.jpg'],
    desc: 'Elite furniture curation featuring premium crystal-clear acrylic Tiffany chairs and gold-trimmed velvet garden dining salons.'
  },
  {
    id: 8,
    title: 'Safari Jungle Celebration',
    category: 'birthday',
    image: 'assets/birthday_jungle.jpg',
    desc: 'Whimsical jungle-themed milestone setting featuring organic green-and-gold balloon garlands, forest backdrop, and custom animal cutouts.'
  },
  {
    id: 9,
    title: 'Aviation World Tour Backdrop',
    category: 'birthday',
    image: 'assets/birthday_aviation.jpg',
    desc: 'Bespoke flight-themed birthday staging featuring a printed world map landmark illustration panel and organic colored balloon arches.'
  },
  {
    id: 10,
    title: 'Woodland Fairytale Staging',
    category: 'birthday',
    image: 'assets/birthday_fairytale.jpg',
    desc: 'Intimate Little Red Riding Hood fairytale setup with curved floral drapes, custom forest scenery, mushroom accents, and a luxury dessert table.'
  },
  {
    id: 13,
    title: 'Gourmet Cakes & Catering',
    category: 'catering',
    image: 'assets/catering_cake.jpg',
    images: ['assets/catering_cake.jpg', 'assets/catering_buffet.jpg'],
    desc: 'Artisanal culinary staging featuring opulent multi-tiered theme cakes and premium gourmet buffets styled for elite celebrations.'
  },
  {
    id: 14,
    title: 'Scenic LED & Concert AV Staging',
    category: 'av',
    image: 'assets/av_led_display.jpg',
    images: ['assets/av_led_display.jpg', 'assets/av_stage_lighting.png'],
    desc: 'Concert-grade outdoor LED screens, ambient crystal light rigging, and professional acoustic speaker staging.'
  },
  {
    id: 15,
    title: 'Outdoor Surprise & Intimate Staging',
    category: 'outdoor',
    image: 'assets/outdoor_proposal.png',
    images: ['assets/outdoor_proposal.png', 'assets/outdoor_baby_shower.jpg', 'assets/intimate_canopy_bed.jpg', 'assets/intimate_love_canopy.jpg'],
    desc: 'Breathtaking heart-shaped red rose arch setup with candle walkways and luxury pastel-themed baby shower welcome gateways.'
  },
  {
    id: 16,
    title: 'Bespoke Gift Hampers & Souvenirs',
    category: 'hampers',
    image: 'assets/hamper_baby.jpg',
    images: ['assets/hamper_baby.jpg', 'assets/hamper_wedding.jpg'],
    desc: 'Opulent newborn celebration boxes and customized velvet-wrapped wedding souvenirs styled with fresh roses.'
  }
];

const TESTIMONIALS = [
  {
    quote: "Huge shoutout to the decor team! 🔥 They killed it, exceeded our expectations, and made our day super special 🙏",
    author: "Tbn 56",
    rating: 5,
    meta: "4 reviews • 1 photo",
    time: "3 months ago",
    avatarLetter: "T",
    avatarBg: "#34A853" // Green
  },
  {
    quote: "We are truly grateful to the event organizer for making our son’s Holy Communion so special and memorable. Every detail was handled with care, elegance, and professionalism, giving us a stress-free and joyful celebration. Highly recommended for their wonderful service! ✨",
    author: "Ajish T",
    rating: 5,
    meta: "9 reviews • 5 photos",
    time: "3 months ago",
    avatarLetter: "A",
    avatarBg: "#4285F4" // Blue
  },
  {
    quote: "We are really thankful to Dream Decors; they made our son's birthday more special. From the decoration to the kids' activities and photographer, they did an amazing job. All our guests appreciated the work they had done. Two weeks of continuous talks and their patience showed how much they value their customers. Thank you so much, Dream Decors! ❤️",
    author: "lekshmi nair",
    rating: 5,
    meta: "10 reviews • 1 photo",
    time: "a month ago",
    avatarLetter: "L",
    avatarBg: "#7B1FA2" // Purple
  },
  {
    quote: "Amazing decor for my sister’s birthday! The setup was beautiful, classy, and done on time. Very professional team and great attention to detail. Would definitely recommend Dream Decors Events",
    author: "mehjabeen ebinu",
    rating: 5,
    meta: "6 reviews • 3 photos",
    time: "3 months ago",
    avatarLetter: "M",
    avatarBg: "#EA4335" // Red
  }
];

// ==========================================================================
// SERVICES DATABASE
// ==========================================================================
const SERVICES_DATA = {
  corporate: {
    title: 'Corporate Events',
    subtitle: 'Luxury Gala & Activations',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>`,
    description: 'We orchestrate highly-styled luxury corporate environments that reflect and elevate your brand prestige. Our decorators transform massive halls, resort gardens, and ballroom spaces into immersive bespoke brand activations.',
    bullets: [
      'VIP annual gala dinners and luxury staging',
      'High-fashion product launch backdrop architectures',
      'Exclusive brand activation and runway setups',
      'Prestige media walls and step-and-repeat frames',
      'Executive lounge furniture and VIP pavilion styling'
    ]
  },
  birthday: {
    title: 'Birthday Party',
    subtitle: 'Milestone Staging',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"></circle><path d="M12 15c0 3-2 4-2 6"></path><path d="M12 15l2 1.5"></path></svg>`,
    description: 'Milestone birthdays deserve nothing short of spectacular design. We craft opulent, curated atmospheres that celebrate your special day with signature floral and textile architectures.',
    bullets: [
      'Custom grand photo zones and themed backdrop sets',
      'Lavish flower wall backdrops and orchid cascades',
      'Organic metallic balloon installations and sculptures',
      'Bespoke cake presentation pavilions and table runners',
      'Illuminated numbers and floating ceiling drapery layers'
    ]
  },
  entertainment: {
    title: 'Entertainment & Talent Booking',
    subtitle: 'Live Symphony & Shows',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,
    description: 'A luxurious event is incomplete without sensory acoustic experiences. We coordinate and book elite local and international artists to provide high-performance entertainment styled to your event theme.',
    bullets: [
      'Elite classical harpists and string quartets',
      'Grand symphonic orchestral bookings and custom stages',
      'Premium international soloists and acoustic live bands',
      'High-end choreographic dance acts and theatrics',
      'Bespoke aerial shows and silk-acrobatic staging'
    ]
  },
  wedding: {
    title: 'Wedding',
    subtitle: 'Royal Mandap & Reception',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="7"></circle><path d="M12 7V3"></path><path d="M10 4l2-2 2 2-2 2z"></path></svg>`,
    description: 'Our signature service. We design, build, and decorate breathtaking royal mandaps, opulent Christian altars, grand reception stages, and high-fashion walkways draped in thousands of premium florals.',
    bullets: [
      'Symmetrical curved royal mandap stages and domes',
      'Exquisite multi-tiered floral aisle arches and pathways',
      'Cascading fresh rose and white hydrangea backdrops',
      'Luxury crystal chandelier rigging and staging grids',
      'Custom head table styling, premium linen, and glass rentals'
    ]
  },
  outdoor: {
    title: 'Outdoor Surprise & Intimate Moments',
    subtitle: 'Scenic Proposals & Cabanas',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    description: 'We translate your romance into physical splendor. From beachfront luxury cabana proposal designs to candlelit dessert dining setups, we curate high-end intimate surprises.',
    bullets: [
      'Private luxury beachfront cabana draping and candles',
      'Scenic sunset marriage proposal floral arches',
      'Pathways of a thousand tea lights and glass lanterns',
      'Romantic intimate garden or rooftop dinner staging',
      'Exclusive customized anniversary floral arrangements'
    ]
  },
  furniture: {
    title: 'Furniture Rentals',
    subtitle: 'Luxury Gilded Collections',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8"></path><path d="M1 11h22"></path><path d="M6 11V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5"></path></svg>`,
    description: 'Skip the standard catering furniture. Rent our curated collection of premium event furniture, featuring hand-gilded golden frames, Italian velvet seatings, and custom dining tables.',
    bullets: [
      'Gilded luxury dining tables and glass tabletops',
      'Plush royal velvet sofas and VIP lounge armchairs',
      'Gold-rimmed crystal glassware and designer charger plates',
      'Polished brass cutlery sets and customized linens',
      'Curated cocktail bars and high-fashion bar stools'
    ]
  },
  inauguration: {
    title: 'Inauguration',
    subtitle: 'Grand Launch Activations',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89l1.515 8.11L12 17.5l-4.992 3.5 1.515-8.11"></path></svg>`,
    description: 'Make a powerful first impression. We stage premium commercial and private launches featuring custom ribbon-cutting architecture and executive styling.',
    bullets: [
      'Bespoke gold or velvet ceremonial ribbon-cutting setups',
      'Grand red or champagne carpet entry walkways',
      'VIP press podiums and luxury backdrop banners',
      'Gilded guest stanchions and custom entrance arches',
      'Executive ribbon-cutting scissors and custom-engraved trays'
    ]
  },
  av: {
    title: 'LED Screen & AV Setup',
    subtitle: 'Scenic 3D Projection',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    description: 'Concert-grade sensory production. We deliver state-of-the-art audiovisual setups, featuring crystal-clear high-definition LED backdrops, intelligent lighting mapping, and luxury acoustic arrays.',
    bullets: [
      'Indoor/Outdoor high-definition LED screens and banners',
      'Concert-grade line array sound systems and acoustics',
      'Intelligent moving-head spotlights and color wash systems',
      'Architectural 3D mapping projection structures',
      'Gilded truss grids and premium stage rigging support'
    ]
  },
  venue: {
    title: 'Venue Selection',
    subtitle: 'Castle Gardens & Resorts',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    description: 'Through our trusted venue network, we provide access to luxury resorts, private desert estates, yacht cruises, Farmhouse and elegant ballrooms for unforgettable celebrations',
    bullets: [
      'Access to elite five-star luxury resorts and private gardens',
      'Scenic private desert estates and oasis retreats',
      'Exquisite yacht cruises and floating ballroom experiences',
      'Bespoke countryside farmhouses and rustic estate staging',
      'Elegant royal ballrooms and glass pavilion setups'
    ]
  },
  photography: {
    title: 'Photo & Videography',
    subtitle: 'Cinematic Editorial Capture',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`,
    description: 'Preserving your curated event in high-fashion editorial imagery. Our network of award-winning cinematographers and photographers capture every atmospheric detail.',
    bullets: [
      'High-end lifestyle photographers and editorial captures',
      'Multi-angle 4K cinematic wedding reels and films',
      'High-fashion photo books and hand-bound leather albums',
      'Curated drone captures for grand outdoor staging scale',
      'Instant digital guest galleries and live social reels coverage'
    ]
  },
  catering: {
    title: 'Theme Based Cakes & Catering',
    subtitle: 'Sugar Sculptures & Gourmet',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"></path><path d="M3 10h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z"></path><path d="M3 10c0-2.5 4-3.5 9-3.5s9 1 9 3.5"></path></svg>`,
    description: 'A feast for all senses. We coordinate with elite culinary designers to deliver custom multi-tiered sugar sculptures and bespoke molecular gastronomy menus.',
    bullets: [
      'Multi-tiered customized wedding and birthday themed cakes',
      'Handcrafted sugar-flower sculptures and gilded accents',
      'Premium live-station molecular gastronomy catering',
      'Luxury buffet design with customized floral styling elements',
      'Bespoke menu styling and curated welcome mocktails'
    ]
  },
  hampers: {
    title: 'Gift Hampers',
    subtitle: 'Velvet-Lined Souvenirs',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="14" rx="2" ry="2"></rect><path d="M12 5V3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2"></path><path d="M12 5V3a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2"></path><path d="M12 8v14"></path><path d="M3 12h18"></path></svg>`,
    description: 'Show your appreciation with curated luxury favors. We design velvet-lined souvenir boxes filled with bespoke fragrances, calligraphic details, and handcrafted delights.',
    bullets: [
      'Bespoke leather and velvet-lined souvenir gift boxes',
      'Artisanal handcrafted favors and customized packaging',
      'Handpicked luxury fragrances and premium chocolates',
      'Personalized calligraphy greeting cards and seals',
      'Royal curated corporate and family holiday hampers'
    ]
  },
  ceremony: {
    title: 'Other Ceremony Decor',
    subtitle: 'Henna & Baby Showers',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>`,
    description: 'Celebrating all cultural milestones with dedicated styling. We specialize in Henna nights, grand baby showers, engagement banquets, and customized ceremonial staging.',
    bullets: [
      'Traditional or modern Henna night floor seating and arches',
      'Royal pastel-themed baby shower backdrops and tablescapes',
      'Gilded cultural engagement ceremony stage structures',
      'Curated welcoming home floral arches and entrance paths',
      'Bespoke staging for cultural milestones across ballrooms'
    ]
  },
  invitation: {
    title: 'Invitation Designing',
    subtitle: 'Velvet & Gold Foil Print',
    icon: `<svg class="service-svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="var(--color-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    description: 'The prelude to your opulent celebration. We design and manufacture royal calligraphic invitations featuring gold-foil letterpress details, custom wax seals, and royal envelopes.',
    bullets: [
      'Custom gold-foil letterpress calligraphy invitations',
      'Thick high-density cotton and textured papers',
      'Bespoke royal wax seal stamps and velvet envelopes',
      'Hand-bound invitation brochures and silk ribbon accents',
      'Premium animated digital invitations and wedding websites'
    ]
  }
};

// ==========================================================================
// STATE MANAGEMENT & COORDINATION
// ==========================================================================
const App = {
  // Reactive UI State
  state: {
    activeFilter: 'all',
    activeTestimonial: 0
  },

  // Initialize and Bind event listeners
  init() {
    this.bindPortfolioEvents();
    this.bindServicesEvents();
    this.bindTestimonialsEvents();
    this.bindFormEvents();
    this.bindConciergeEvents();
    this.bindMobileMenuEvents();
    this.initLightbox();
    
    // Core Startup renders
    this.renderPortfolio();
    this.renderTestimonials();

    // Start auto timers
    this.startTestimonialsTimer();
    this.startHeroBgRotator();
  },

  // ==========================================
  // MOBILE NAVIGATION MENU BINDINGS
  // ==========================================
  bindMobileMenuEvents() {
    const toggleBtn = document.getElementById('mobile-nav-toggle-btn');
    const closeBtn = document.getElementById('mobile-menu-close-btn');
    const overlay = document.getElementById('mobile-menu-overlay');
    const links = document.querySelectorAll('.mobile-menu-link');

    if (!toggleBtn || !overlay) return;

    // Open mobile menu
    toggleBtn.addEventListener('click', () => {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Lock background scrolling
    });

    // Close mobile menu via button
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scrolling
      });
    }

    // Close mobile menu when clicking a link
    links.forEach(link => {
      link.addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape key press
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  },

  // ==========================================
  // FLOATING CONCIERGE EVENT BINDINGS
  // ==========================================
  bindConciergeEvents() {
    const callWidget = document.getElementById('floating-call-widget');
    const callTrigger = document.getElementById('call-trigger-btn');
    const waWidget = document.getElementById('floating-whatsapp-widget');
    const waTrigger = document.getElementById('whatsapp-trigger-btn');

    // Call Widget toggle
    if (callWidget && callTrigger) {
      callTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (waWidget) waWidget.classList.remove('active'); // Close other popup
        callWidget.classList.toggle('active');
      });
    }

    // WhatsApp Widget toggle
    if (waWidget && waTrigger) {
      waTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (callWidget) callWidget.classList.remove('active'); // Close other popup
        waWidget.classList.toggle('active');
      });
    }

    // Close both when clicking outside
    document.addEventListener('click', (e) => {
      if (callWidget && !callWidget.contains(e.target)) {
        callWidget.classList.remove('active');
      }
      if (waWidget && !waWidget.contains(e.target)) {
        waWidget.classList.remove('active');
      }
    });

    // Close both when pressing Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (callWidget) callWidget.classList.remove('active');
        if (waWidget) waWidget.classList.remove('active');
      }
    });
  },

  // ==========================================
  // PORTFOLIO / GALLERY BINDINGS & RENDERS
  // ==========================================
  bindPortfolioEvents() {
    const tabsContainer = document.getElementById('portfolio-tabs-container');
    if (!tabsContainer) return;

    tabsContainer.querySelectorAll('.portfolio-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        tabsContainer.querySelectorAll('.portfolio-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        this.state.activeFilter = tab.getAttribute('data-filter');
        this.renderPortfolio();
      });
    });
  },

  renderPortfolio() {
    const gridContainer = document.getElementById('portfolio-grid-container');
    if (!gridContainer) return;

    // Filter list
    const filtered = PORTFOLIO_ITEMS.filter(item => 
      this.state.activeFilter === 'all' || item.category === this.state.activeFilter
    );

    // Build lightbox flat pool of visible images
    const lightboxPool = [];
    filtered.forEach(item => {
      if (item.images && item.images.length > 0) {
        item.images.forEach(img => {
          lightboxPool.push({
            src: img,
            title: item.title,
            desc: item.desc
          });
        });
      } else {
        lightboxPool.push({
          src: item.image,
          title: item.title,
          desc: item.desc
        });
      }
    });

    gridContainer.innerHTML = '';
    
    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'portfolio-card';
      card.style.cursor = 'pointer';
      
      if (item.images && item.images.length > 0) {
        card.className += ' portfolio-card-slider';
        card.innerHTML = `
          <div class="portfolio-slider-container">
            <div class="portfolio-slides">
              ${item.images.map((img, idx) => `
                <img src="${img}" alt="${item.title}" class="portfolio-card-img ${idx === 0 ? 'active' : ''}" />
              `).join('')}
            </div>
            <button class="slider-btn slider-prev" aria-label="Previous image">&lsaquo;</button>
            <button class="slider-btn slider-next" aria-label="Next image">&rsaquo;</button>
            <div class="slider-dots">
              ${item.images.map((_, idx) => `
                <span class="slider-dot ${idx === 0 ? 'active' : ''}"></span>
              `).join('')}
            </div>
          </div>
          <div class="portfolio-card-overlay">
            <span class="portfolio-card-category">${item.category}</span>
            <h3 class="portfolio-card-title">${item.title}</h3>
            <p class="portfolio-card-desc">${item.desc}</p>
          </div>
        `;

        // Bind slider logic
        let activeIdx = 0;
        const slides = card.querySelectorAll('.portfolio-card-img');
        const dots = card.querySelectorAll('.slider-dot');
        
        const updateSlider = (newIdx) => {
          slides[activeIdx].classList.remove('active');
          dots[activeIdx].classList.remove('active');
          
          activeIdx = (newIdx + slides.length) % slides.length;
          
          slides[activeIdx].classList.add('active');
          dots[activeIdx].classList.add('active');
        };

        card.querySelector('.slider-prev').addEventListener('click', (e) => {
          e.stopPropagation();
          updateSlider(activeIdx - 1);
        });

        card.querySelector('.slider-next').addEventListener('click', (e) => {
          e.stopPropagation();
          updateSlider(activeIdx + 1);
        });

        dots.forEach((dot, dIdx) => {
          dot.addEventListener('click', (e) => {
            e.stopPropagation();
            updateSlider(dIdx);
          });
        });
      } else {
        card.innerHTML = `
          <img src="${item.image}" alt="${item.title}" class="portfolio-card-img" />
          <div class="portfolio-card-overlay">
            <span class="portfolio-card-category">${item.category}</span>
            <h3 class="portfolio-card-title">${item.title}</h3>
            <p class="portfolio-card-desc">${item.desc}</p>
          </div>
        `;
      }

      // Bind Lightbox click to card (ignoring sub-slider navigation buttons)
      card.addEventListener('click', (e) => {
        if (e.target.closest('.slider-btn') || e.target.closest('.slider-dots')) {
          return;
        }

        const activeImg = card.querySelector('.portfolio-card-img.active') || card.querySelector('.portfolio-card-img');
        if (!activeImg) return;

        const currentSrc = activeImg.getAttribute('src');
        this.openLightbox(currentSrc, lightboxPool);
      });

      gridContainer.appendChild(card);
    });

    // Initialize mobile scroll fade-in observer
    this.initPortfolioScrollFade();
  },

  initPortfolioScrollFade() {
    const cards = document.querySelectorAll('.portfolio-card');
    if (!cards.length) return;

    // Progressive enhancement: add visible class immediately if IntersectionObserver is unsupported
    if (!('IntersectionObserver' in window)) {
      cards.forEach(card => card.classList.add('visible'));
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px', // slightly offset trigger to feel natural during scrolling
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cards.forEach(card => {
      observer.observe(card);
    });
  },



  // ==========================================
  // TESTIMONIALS SLIDER BINDINGS & RENDERS
  // ==========================================
  bindTestimonialsEvents() {
    const dotsContainer = document.getElementById('testimonial-dots-container');
    const card = document.getElementById('testimonial-card-container');

    if (card) {
      card.style.cursor = 'pointer';
      this.touchState = { isSwiping: false };

      card.addEventListener('click', (e) => {
        if (this.touchState && this.touchState.isSwiping) {
          // Reset state and block navigation
          this.touchState.isSwiping = false;
          return;
        }
        window.open('https://g.page/r/CfCE4_qbC9QmEBM/review', '_blank');
      });

      // Horizontal swipe navigation support for mobile devices
      let touchStartX = 0;
      let touchStartY = 0;
      let touchEndX = 0;
      let touchEndY = 0;

      card.addEventListener('touchstart', (e) => {
        if (e.changedTouches && e.changedTouches[0]) {
          touchStartX = e.changedTouches[0].screenX;
          touchStartY = e.changedTouches[0].screenY;
        }
        if (this.touchState) this.touchState.isSwiping = false;
      }, { passive: true });

      card.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches[0]) {
          touchEndX = e.changedTouches[0].screenX;
          touchEndY = e.changedTouches[0].screenY;
          handleSwipe();
        }
      }, { passive: true });

      const handleSwipe = () => {
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // Ensure horizontal swipe motion dominates vertical scrolling and meets a threshold
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
          if (this.touchState) this.touchState.isSwiping = true;
          if (diffX > 0) {
            // Swipe right -> load previous review
            this.state.activeTestimonial = (this.state.activeTestimonial - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
          } else {
            // Swipe left -> load next review
            this.state.activeTestimonial = (this.state.activeTestimonial + 1) % TESTIMONIALS.length;
          }
          this.renderTestimonials();
          this.resetTestimonialsTimer();
        }
      };
    }

    const prevBtn = document.getElementById('testimonial-prev-btn');
    const nextBtn = document.getElementById('testimonial-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.state.activeTestimonial = (this.state.activeTestimonial - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
        this.renderTestimonials();
        this.resetTestimonialsTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.state.activeTestimonial = (this.state.activeTestimonial + 1) % TESTIMONIALS.length;
        this.renderTestimonials();
        this.resetTestimonialsTimer();
      });
    }

    if (!dotsContainer) return;

    dotsContainer.innerHTML = '';
    
    TESTIMONIALS.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = `dot ${index === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => {
        this.state.activeTestimonial = index;
        this.renderTestimonials();
        this.resetTestimonialsTimer(); // reset interval on user interaction
      });
      dotsContainer.appendChild(dot);
    });
  },

  renderTestimonials() {
    const current = TESTIMONIALS[this.state.activeTestimonial];
    const card = document.getElementById('testimonial-card-container');
    const dotsContainer = document.getElementById('testimonial-dots-container');

    if (!card) return;

    // Smooth CSS fade-in keyframes trigger
    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      const avatarEl = document.getElementById('test-avatar');
      if (avatarEl) {
        avatarEl.innerText = current.avatarLetter;
        avatarEl.style.background = current.avatarBg;
      }
      
      const authorEl = document.getElementById('test-author');
      if (authorEl) authorEl.innerText = current.author;
      
      const metaEl = document.getElementById('test-meta');
      if (metaEl) metaEl.innerText = current.meta;
      
      const timeEl = document.getElementById('test-time');
      if (timeEl) timeEl.innerText = current.time;
      
      const quoteEl = document.getElementById('test-quote');
      if (quoteEl) quoteEl.innerText = `“${current.quote}”`;

      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      card.style.transition = 'all 0.5s ease-out';
    }, 200);

    // Update dot classes
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === this.state.activeTestimonial) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  },

  startTestimonialsTimer() {
    this.testimonialsInterval = setInterval(() => {
      this.state.activeTestimonial = (this.state.activeTestimonial + 1) % TESTIMONIALS.length;
      this.renderTestimonials();
    }, 5500);
  },

  resetTestimonialsTimer() {
    clearInterval(this.testimonialsInterval);
    this.startTestimonialsTimer();
  },

  // ==========================================
  // HERO BACKGROUND ROTATOR
  // ==========================================
  startHeroBgRotator() {
    const images = [
      'assets/wedding_entrance.jpg',
      'assets/portfolio_stage.png',
      'assets/portfolio_banquet.png',
      'assets/white_floral_entrance.png'
    ];
    let currentIdx = 0;
    const bg1 = document.getElementById('hero-bg-1');
    const bg2 = document.getElementById('hero-bg-2');

    if (!bg1 || !bg2) return;

    // Set initial background image for bg1
    bg1.style.backgroundImage = `url('${images[0]}')`;

    setInterval(() => {
      // Determine the next index
      const nextIdx = (currentIdx + 1) % images.length;
      const nextImg = images[nextIdx];

      // Alternate active layers
      if (bg1.classList.contains('active')) {
        // Load next image on bg2
        bg2.style.backgroundImage = `url('${nextImg}')`;
        // Transition bg2 in, bg1 out
        bg2.classList.add('active');
        bg1.classList.remove('active');
      } else {
        // Load next image on bg1
        bg1.style.backgroundImage = `url('${nextImg}')`;
        // Transition bg1 in, bg2 out
        bg1.classList.add('active');
        bg2.classList.remove('active');
      }

      currentIdx = nextIdx;
    }, 5000); // Switch every 5 seconds
  },

  // ==========================================
  // BESPOKE CONSULTATION WIZARD CONTROLLERS
  // ==========================================
  bindFormEvents() {
    const form = document.getElementById('consultation-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Retrieve form values
      const formName = document.getElementById('form-name').value.trim();
      const formPartner = '';
      const formDate = document.getElementById('form-date').value;
      const formVenue = document.getElementById('form-venue').value.trim();
      const formScale = document.getElementById('form-scale').value;
      const formStyling = document.getElementById('form-styling').value;
      const formMessage = document.getElementById('form-message').value.trim();

      const inquiry = {
        name: formName,
        partner: formPartner,
        date: formDate,
        venue: formVenue,
        scale: formScale,
        styling: formStyling,
        message: formMessage
      };

      // Save locally first as a fallback
      const localInq = {
        id: `inq-${Math.random().toString(36).substring(2, 8)}`,
        ...inquiry,
        timestamp: new Date().toISOString()
      };
      const existing = JSON.parse(localStorage.getItem('dream_decors_consultations') || '[]');
      existing.push(localInq);
      localStorage.setItem('dream_decors_consultations', JSON.stringify(existing));

      // Post to backend server
      try {
        const response = await fetch('/api/consultations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inquiry)
        });
        
        if (!response.ok) {
          throw new Error('Server responded with an error');
        }
        
        console.log('[Dream Decors Backend] Inquiry successfully stored on server.');
      } catch (err) {
        console.warn('[Dream Decors Backend] Backend offline or error. Saved locally instead:', err);
      }

      // Trigger beautiful canvas petal confetti explosion
      if (window.Confetti && typeof window.Confetti.fire === 'function') {
        window.Confetti.fire();
      }

      // Render SUCCESS state overlay
      this.renderSuccess(formName, formPartner, formDate, formVenue);
    });
  },

  renderSuccess(name, partner, date, venue) {
    const box = document.getElementById('booking-box-container');
    if (!box) return;

    // Generate WhatsApp text pre-filled with the consultation summary
    const waText = encodeURIComponent(
      `Hello Dream Decors! I just submitted a website consultation request.\n\n` +
      `• Name: ${name} ${partner ? `& ${partner}` : ''}\n` +
      `• Date: ${date || 'TBD'}\n` +
      `• Venue: ${venue || 'TBD'}\n\n` +
      `I would love to connect and coordinate our event styling design details!`
    );
    const waLink = `https://wa.me/971508805513?text=${waText}`;

    box.innerHTML = `
      <div class="success-message">
        <div class="success-icon">✓</div>
        <h4>Date Curated! 🌹</h4>
        <p>Congratulations, <strong>${name} ${partner ? `& ${partner}` : ''}</strong>. Your bespoke consult request has been persistently recorded on our server.</p>
        
        <a href="${waLink}" target="_blank" class="btn" style="background: #25D366; color: #ffffff; width: 100%; border: none; margin-top: 1rem; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3); font-weight: 600; text-decoration: none;">
          💬 Forward Inquiry via WhatsApp
        </a>
        
        <button class="btn btn-outline" id="btn-schedule-new" style="width: 100%; margin-top: 1rem;">
          Schedule Another Consultation
        </button>
      </div>
    `;

    // Re-bind schedule button action
    document.getElementById('btn-schedule-new').addEventListener('click', () => {
      this.restoreForm();
    });
  },

  restoreForm() {
    const box = document.getElementById('booking-box-container');
    if (!box) return;

    box.innerHTML = `
      <form id="consultation-form">
        <div class="form-grid">
          <div class="form-group full-width">
            <label class="form-label" for="form-name">Your Full Name</label>
            <input type="text" id="form-name" class="form-input" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="form-date">Event Date</label>
            <input type="date" id="form-date" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="form-venue">Selected Venue</label>
            <input type="text" id="form-venue" class="form-input" placeholder="e.g. Helix Grand Gardens" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="form-scale">Estimated Guest Size</label>
            <select id="form-scale" class="form-select">
              <option value="Intimate Scenic">Intimate Scenic (&lt;100 Guests)</option>
              <option value="Classic Elegance" selected>Classic Elegance (100-250 Guests)</option>
              <option value="Royal Opulence">Royal Opulence (&gt;250 Guests)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="form-styling">Service Preference</label>
            <select id="form-styling" class="form-select">
              <option value="entrances" selected>Premium Wedding Entrance</option>
              <option value="corporate">Corporate Gala Styling</option>
              <option value="birthday">Birthday Party</option>
              <option value="anniversary">Anniversary Theme Decors</option>
              <option value="furniture">Luxury Furniture Rentals</option>
              <option value="catering">Gourmet Cakes & Catering</option>
              <option value="av">LED Screen & AV Setup</option>
              <option value="outdoor">Outdoor Surprise & Intimate Moments</option>
              <option value="hampers">Bespoke Gift Hampers</option>
            </select>
          </div>
          <div class="form-group full-width">
            <label class="form-label" for="form-message">Manifesto & Custom Requests</label>
            <textarea id="form-message" class="form-textarea" placeholder="Tell us about your dream mandap stage, color themes, or floral visions..." required></textarea>
          </div>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%;">
          Publish Consultation Inquiry
        </button>
      </form>
    `;

    // Re-bind listeners
    this.bindFormEvents();
  },

  // ==========================================
  // BESPOKE SERVICES INTERACTION CONTROLLERS
  // ==========================================
  bindServicesEvents() {
    const cards = document.querySelectorAll('.service-card');
    const modal = document.getElementById('service-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    if (!modal || !closeBtn) return;

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const serviceId = card.getAttribute('data-service');
        this.renderServiceModal(serviceId);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
      });
    });

    // Close on button click
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Unlock scrolling
    });

    // Close on click outside content card
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close on Escape key press
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Mobile "Explore All Services" Toggle
    const exploreBtn = document.getElementById('services-explore-btn');
    const servicesGrid = document.querySelector('.services-grid');
    if (exploreBtn && servicesGrid) {
      exploreBtn.addEventListener('click', () => {
        const isExpanded = servicesGrid.classList.toggle('expanded');
        if (isExpanded) {
          exploreBtn.textContent = 'Show Less';
          // Smoothly scroll to reveal the newly displayed 6th service card
          const sixthCard = servicesGrid.children[5];
          if (sixthCard) {
            sixthCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } else {
          exploreBtn.textContent = 'Explore All Services';
          // Smoothly scroll back to the start of the services section
          const servicesSection = document.getElementById('services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  },

  renderServiceModal(serviceId) {
    const data = SERVICES_DATA[serviceId];
    const container = document.getElementById('modal-body');
    if (!data || !container) return;

    // Check service type and map to form options
    let optionValue = 'entrances';
    if (serviceId === 'corporate') {
      optionValue = 'corporate';
    } else if (serviceId === 'birthday') {
      optionValue = 'birthday';
    } else if (serviceId === 'furniture' || serviceId === 'invitation') {
      optionValue = 'furniture';
    } else if (serviceId === 'hampers') {
      optionValue = 'hampers';
    } else if (serviceId === 'catering') {
      optionValue = 'catering';
    } else if (serviceId === 'av') {
      optionValue = 'av';
    } else if (serviceId === 'outdoor') {
      optionValue = 'outdoor';
    } else if (serviceId === 'ceremony') {
      optionValue = 'anniversary';
    } else {
      optionValue = 'entrances';
    }

    container.innerHTML = `
      <div class="modal-service-details">
        <div class="modal-service-header">
          <span class="modal-service-icon">${data.icon}</span>
          <div>
            <span class="modal-service-tag">${data.subtitle}</span>
            <h4 class="modal-service-title">${data.title}</h4>
          </div>
        </div>
        <p class="modal-service-desc">${data.description}</p>
        
        <h5 class="modal-bullets-title">What We Curate:</h5>
        <ul class="modal-service-bullets">
          ${data.bullets.map(b => `<li><span>✓</span> ${b}</li>`).join('')}
        </ul>

        <div class="modal-actions" style="margin-top: 2.5rem;">
          <a href="#book" class="btn btn-primary" id="modal-cta-book">Request Custom Quote</a>
        </div>
      </div>
    `;

    // Hook CTA to close modal and auto-select styling option in form
    document.getElementById('modal-cta-book').addEventListener('click', () => {
      const modal = document.getElementById('service-modal');
      modal.classList.remove('active');
      document.body.style.overflow = '';

      // Set the select element styling preference
      const selectEl = document.getElementById('form-styling');
      if (selectEl) {
        selectEl.value = optionValue;
      }

      // Add a custom message indicating the requested service
      const textarea = document.getElementById('form-message');
      if (textarea) {
        textarea.value = `I would love to request a custom luxury design consultation for your "${data.title}" service (${data.subtitle}). `;
        textarea.focus();
      }

      // Smooth scroll to the booking section
      const bookSec = document.getElementById('book');
      if (bookSec) {
        bookSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  },

  // ==========================================
  // PREMIUM LIGHTBOX CONTROLLERS
  // ==========================================
  initLightbox() {
    const overlay = document.getElementById('lightbox-modal');
    if (!overlay) return;

    const closeBtn = document.getElementById('lightbox-close-btn');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeLightbox());
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.navigateLightbox(-1));
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.navigateLightbox(1));
    }

    // Close on clicking the dark overlay background
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.closeLightbox();
      }
    });

    // Keyboard controls
    window.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'Escape') {
        this.closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        this.navigateLightbox(-1);
      } else if (e.key === 'ArrowRight') {
        this.navigateLightbox(1);
      }
    });
  },

  openLightbox(activeSrc, pool) {
    const overlay = document.getElementById('lightbox-modal');
    if (!overlay) return;

    this.lightboxState = {
      pool: pool || [],
      currentIndex: (pool || []).findIndex(p => p.src === activeSrc)
    };

    if (this.lightboxState.currentIndex === -1 && pool && pool.length > 0) {
      this.lightboxState.currentIndex = 0;
    }

    this.renderLightboxContent();

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  },

  renderLightboxContent() {
    const imgEl = document.getElementById('lightbox-img');
    const captionEl = document.getElementById('lightbox-caption');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    if (!imgEl || !this.lightboxState) return;

    const currentItem = this.lightboxState.pool[this.lightboxState.currentIndex];
    if (!currentItem) return;

    // Set source and caption
    imgEl.src = currentItem.src;
    imgEl.alt = currentItem.title || 'Gallery Preview';
    
    if (captionEl) {
      captionEl.innerHTML = `<strong>${currentItem.title}</strong> — ${currentItem.desc}`;
    }

    // Toggle nav buttons based on pool size
    const poolLength = this.lightboxState.pool.length;
    if (prevBtn && nextBtn) {
      if (poolLength <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
      }
    }
  },

  navigateLightbox(direction) {
    if (!this.lightboxState || !this.lightboxState.pool.length) return;

    const poolLength = this.lightboxState.pool.length;
    let nextIdx = (this.lightboxState.currentIndex + direction) % poolLength;
    if (nextIdx < 0) nextIdx = poolLength - 1;

    this.lightboxState.currentIndex = nextIdx;
    
    // Smooth transition effect
    const imgEl = document.getElementById('lightbox-img');
    if (imgEl) {
      imgEl.style.opacity = '0';
      imgEl.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.renderLightboxContent();
        imgEl.style.opacity = '1';
        imgEl.style.transform = 'scale(1)';
      }, 150);
    } else {
      this.renderLightboxContent();
    }
  },

  closeLightbox() {
    const overlay = document.getElementById('lightbox-modal');
    if (!overlay) return;

    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Unlock scrolling
  }
};

// ==========================================
// STARTUP BOOTSTRAPPER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
