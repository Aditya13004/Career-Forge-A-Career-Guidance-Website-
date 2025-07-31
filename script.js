// DOM Elements
const careerForm = document.getElementById("careerForm");
const resultDiv = document.getElementById("result");

// Career Data with enhanced information
const careerData = [
    {
        title: "Software Engineer",
        skills: ["technology", "math", "engineering"],
        description: "Develops software applications and systems using programming languages and frameworks.",
        education: "Bachelor's in Computer Science or related field",
        salary: "₹6,00,000 - ₹12,00,000",
        future: "Very High Demand",
        growth: "22% growth expected",
        icon: "fas fa-laptop-code",
        difficulty: "Medium",
        workStyle: "Remote/Hybrid available"
    },
    {
        title: "Data Scientist",
        skills: ["math", "analytics", "technology"],
        description: "Analyzes complex data to help organizations make informed decisions.",
        education: "Master's in Data Science, Statistics, or CS",
        salary: "₹8,00,000 - ₹15,00,000",
        future: "Very High Demand",
        growth: "35% growth expected",
        icon: "fas fa-chart-line",
        difficulty: "High",
        workStyle: "Remote/Hybrid available"
    },
    {
        title: "UX/UI Designer",
        skills: ["art", "technology", "design"],
        description: "Creates user-friendly digital experiences and interfaces.",
        education: "Bachelor's in Design, HCI, or related field",
        salary: "₹4,50,000 - ₹8,00,000",
        future: "High Demand",
        growth: "18% growth expected",
        icon: "fas fa-palette",
        difficulty: "Medium",
        workStyle: "Remote/Hybrid available"
    },
    {
        title: "Mechanical Engineer",
        skills: ["engineering", "math", "technology"],
        description: "Designs mechanical systems and devices for various industries.",
        education: "Bachelor's in Mechanical Engineering",
        salary: "₹4,00,000 - ₹8,50,000",
        future: "High Demand",
        growth: "7% growth expected",
        icon: "fas fa-cogs",
        difficulty: "High",
        workStyle: "On-site/Field work"
    },
    {
        title: "Business Analyst",
        skills: ["business", "analytics", "technology"],
        description: "Bridges business needs with technical solutions and processes.",
        education: "Bachelor's in Business, IT, or related field",
        salary: "₹5,00,000 - ₹10,00,000",
        future: "High Demand",
        growth: "14% growth expected",
        icon: "fas fa-chart-bar",
        difficulty: "Medium",
        workStyle: "Hybrid/Remote available"
    },
    {
        title: "Research Scientist",
        skills: ["science", "math", "writing"],
        description: "Conducts research and publishes findings in scientific journals.",
        education: "PhD in Science/Engineering field",
        salary: "₹6,50,000 - ₹12,00,000",
        future: "Moderate to High Demand",
        growth: "8% growth expected",
        icon: "fas fa-flask",
        difficulty: "Very High",
        workStyle: "Lab/Research facility"
    },
    {
        title: "Content Creator",
        skills: ["writing", "art", "social"],
        description: "Creates engaging content for digital platforms and media.",
        education: "Bachelor's in Communications, Journalism, or related",
        salary: "₹2,50,000 - ₹6,00,000",
        future: "Growing Demand",
        growth: "12% growth expected",
        icon: "fas fa-pen-fancy",
        difficulty: "Low to Medium",
        workStyle: "Remote/Freelance available"
    },
    {
        title: "Civil Engineer",
        skills: ["engineering", "math", "science"],
        description: "Designs infrastructure projects like roads, buildings, and bridges.",
        education: "Bachelor's in Civil Engineering",
        salary: "₹4,00,000 - ₹8,00,000",
        future: "High Demand",
        growth: "8% growth expected",
        icon: "fas fa-building",
        difficulty: "High",
        workStyle: "On-site/Field work"
    },
    {
        title: "Healthcare Administrator",
        skills: ["doctor", "business", "social"],
        description: "Manages operations and policies in healthcare settings.",
        education: "Master's in Healthcare Administration",
        salary: "₹6,00,000 - ₹12,00,000",
        future: "Growing Demand",
        growth: "32% growth expected",
        icon: "fas fa-hospital",
        difficulty: "Medium",
        workStyle: "Office/Healthcare facility"
    },
    {
        title: "Cybersecurity Analyst",
        skills: ["technology", "analytics", "engineering"],
        description: "Protects organizations from digital threats and security breaches.",
        education: "Bachelor's in Cybersecurity, IT, or related field",
        salary: "₹7,00,000 - ₹13,00,000",
        future: "Very High Demand",
        growth: "31% growth expected",
        icon: "fas fa-shield-alt",
        difficulty: "High",
        workStyle: "Remote/Hybrid available"
    },
    {
        title: "Environmental Scientist",
        skills: ["science", "biology", "analytics"],
        description: "Studies environmental issues and develops solutions for sustainability.",
        education: "Bachelor's in Environmental Science or related field",
        salary: "₹3,50,000 - ₹7,50,000",
        future: "Growing Demand",
        growth: "8% growth expected",
        icon: "fas fa-leaf",
        difficulty: "Medium",
        workStyle: "Field/Office hybrid"
    },
    {
        title: "Financial Analyst",
        skills: ["business", "math", "analytics"],
        description: "Analyzes financial data to guide business decisions and investments.",
        education: "Bachelor's in Finance, Economics, or related field",
        salary: "₹4,50,000 - ₹9,00,000",
        future: "High Demand",
        growth: "9% growth expected",
        icon: "fas fa-coins",
        difficulty: "Medium",
        workStyle: "Office/Remote available"
    }
];

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 2000);
});

// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Utility Functions
function showLoading() {
    resultDiv.innerHTML = `
        <div class="empty-state" data-aos="fade-up">
            <div class="loading"></div>
            <h3>AI is Analyzing Your Profile...</h3>
            <p>Our advanced algorithms are processing your skills and matching them with the perfect career paths.</p>
        </div>
    `;
}

function scrollToResults() {
    document.getElementById('results').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function createCareerCard(career, matchCount = null) {
    const card = document.createElement("div");
    card.className = "career-card";
    card.setAttribute('data-aos', 'fade-up');
    
    const matchBadge = matchCount ? `<div class="match-badge">${matchCount} skills match</div>` : '';
    
    card.innerHTML = `
        ${matchBadge}
        <div class="career-header">
            <i class="${career.icon}"></i>
            <h3>${career.title}</h3>
        </div>
        <p class="career-description">${career.description}</p>
        <div class="career-details">
            <div class="detail-item">
                <i class="fas fa-graduation-cap"></i>
                <span><strong>Education:</strong> ${career.education}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-rupee-sign"></i>
                <span><strong>Salary Range:</strong> ${career.salary}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-chart-line"></i>
                <span><strong>Growth:</strong> ${career.growth}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-fire"></i>
                <span><strong>Demand:</strong> ${career.future}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-signal"></i>
                <span><strong>Difficulty:</strong> ${career.difficulty}</span>
            </div>
            <div class="detail-item">
                <i class="fas fa-briefcase"></i>
                <span><strong>Work Style:</strong> ${career.workStyle}</span>
            </div>
        </div>
    `;
    
    return card;
}

function getDifficultyColor(difficulty) {
    const colors = {
        'Low': '#10b981',
        'Medium': '#f59e0b',
        'High': '#ef4444',
        'Very High': '#dc2626'
    };
    return colors[difficulty] || '#6b7280';
}

// Enhanced Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const nextStepBtn = document.getElementById("nextStep");
    
    if (nextStepBtn) {
        nextStepBtn.addEventListener("click", function(e) {
            e.preventDefault();

            const selectedSkills = Array.from(
                document.querySelectorAll("input[type=checkbox]:checked")
            ).map((checkbox) => checkbox.value);

            if (selectedSkills.length === 0) {
                resultDiv.innerHTML = `
                    <div class="empty-state" data-aos="fade-up">
                        <div class="empty-icon">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <h3>Please Select Your Interests</h3>
                        <p>Choose at least one skill or interest to get personalized career recommendations.</p>
                    </div>
                `;
                return;
            }

            // Show loading state
            showLoading();
            scrollToResults();

            // Simulate processing time for better UX
            setTimeout(() => {
                const resultDiv = document.getElementById("result");
                resultDiv.innerHTML = "";

                // Find matching careers
                const matchedCareers = careerData.filter((career) => {
                    const matchCount = career.skills.filter(skill => selectedSkills.includes(skill)).length;
                    return matchCount >= 2;
                });

                if (matchedCareers.length === 0) {
                    // If no exact matches, show top recommendations
                    const scoredCareers = careerData.map(career => {
                        const matchCount = career.skills.filter(skill => selectedSkills.includes(skill)).length;
                        return { ...career, matchCount };
                    }).sort((a, b) => b.matchCount - a.matchCount);

                    const topCareers = scoredCareers.slice(0, 4);
                    
                    const header = document.createElement("div");
                    header.className = "results-header";
                    header.setAttribute('data-aos', 'fade-up');
                    header.innerHTML = `
                        <h3><i class="fas fa-lightbulb"></i> Recommended Career Paths</h3>
                        <p>Based on your selected skills, here are some career paths that might interest you:</p>
                    `;
                    resultDiv.appendChild(header);

                    topCareers.forEach((career, index) => {
                        const card = createCareerCard(career, career.matchCount);
                        card.style.animationDelay = `${index * 0.1}s`;
                        resultDiv.appendChild(card);
                    });
                } else {
                    // Show exact matches
                    const header = document.createElement("div");
                    header.className = "results-header";
                    header.setAttribute('data-aos', 'fade-up');
                    header.innerHTML = `
                        <h3><i class="fas fa-star"></i> Perfect Matches Found!</h3>
                        <p>These careers align perfectly with your selected skills and interests:</p>
                    `;
                    resultDiv.appendChild(header);

                    matchedCareers.forEach((career, index) => {
                        const card = createCareerCard(career);
                        card.style.animationDelay = `${index * 0.1}s`;
                        resultDiv.appendChild(card);
                    });
                }

                // Add additional recommendations section
                const additionalSection = document.createElement("div");
                additionalSection.className = "additional-recommendations";
                additionalSection.setAttribute('data-aos', 'fade-up');
                additionalSection.innerHTML = `
                    <h4><i class="fas fa-plus-circle"></i> Explore More Options</h4>
                    <p>Consider these related career paths that might also interest you:</p>
                `;
                resultDiv.appendChild(additionalSection);

                // Show 2-3 additional careers
                const additionalCareers = careerData
                    .filter(career => !matchedCareers.includes(career))
                    .slice(0, 3);

                additionalCareers.forEach((career, index) => {
                    const card = createCareerCard(career);
                    card.style.animationDelay = `${(index + matchedCareers.length) * 0.1}s`;
                    resultDiv.appendChild(card);
                });

                // Reinitialize AOS for new elements
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }

            }, 2000); // 2 second delay for better UX
        });
    }
});

// Enhanced UI Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 2000);
    }

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Skill card hover effects
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Form validation and feedback
    const checkboxes = document.querySelectorAll('.skill-checkbox');
    const nextStepBtn = document.getElementById('nextStep');

    function updateNextStepButton() {
        const checkedCount = document.querySelectorAll('.skill-checkbox:checked').length;
        if (checkedCount > 0) {
            nextStepBtn.style.opacity = '1';
            nextStepBtn.style.cursor = 'pointer';
            nextStepBtn.disabled = false;
        } else {
            nextStepBtn.style.opacity = '0.6';
            nextStepBtn.style.cursor = 'not-allowed';
            nextStepBtn.disabled = true;
        }
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateNextStepButton);
    });

    // Initialize button state
    updateNextStepButton();

    // Hero animations
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }

    // Floating elements animation
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });

    // Progress bar animation
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        setTimeout(() => {
            progressFill.style.width = '100%';
        }, 1000);
    }

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = stat.textContent.replace(/\d+/, Math.floor(current));
        }, 50);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-particles');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Contact form handling with popup
    const contactForm = document.getElementById('contactForm');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Show popup
            popup.classList.add('active');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Close popup functionality
    if (closePopup) {
        closePopup.addEventListener('click', function() {
            popup.classList.remove('active');
        });
    }
    
    // Close popup when clicking outside
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.classList.remove('active');
            }
        });
    }
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            popup.classList.remove('active');
        }
    });

    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Tech stack items animation
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });

    // Social links hover effect
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});

// Add CSS for new elements
const additionalStyles = `
    .results-header {
        text-align: center;
        margin-bottom: 2rem;
        padding: 2rem;
        background: var(--bg-primary);
        border-radius: 16px;
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow-sm);
    }

    .results-header h3 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }

    .results-header i {
        margin-right: 0.5rem;
    }

    .career-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .career-header i {
        font-size: 2rem;
        color: var(--primary-color);
    }

    .career-description {
        font-size: 1.1rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }

    .career-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }

    .detail-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem;
        background: var(--bg-tertiary);
        border-radius: 8px;
    }

    .detail-item i {
        color: var(--primary-color);
        width: 20px;
    }

    .match-badge {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: var(--gradient-primary);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.875rem;
        font-weight: 600;
    }

    .additional-recommendations {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 2px solid var(--border-color);
    }

    .additional-recommendations h4 {
        color: var(--text-primary);
        margin-bottom: 1rem;
    }

    .additional-recommendations i {
        color: var(--primary-color);
        margin-right: 0.5rem;
    }

    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        border-top: 1px solid var(--border-color);
        padding: 1rem;
        box-shadow: var(--shadow-lg);
    }

    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
        
        .nav-menu.active {
            display: flex;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement("style");
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
