// Sample article data
const articles = [
    {
        id: 1,
        title: "Digital Identity in Post-Pandemic Society",
        publication: "Journal of Digital Culture",
        date: "2024-03-15",
        year: "2024",
        type: "research",
        excerpt: "An exploration of how online identity formation has evolved in the wake of global digital transformation, examining the ways individuals construct and maintain digital personas across multiple platforms.",
        category: "research"
    },
    {
        id: 2,
        title: "The Algorithmic Gaze: How AI Shapes Cultural Production",
        publication: "Media Theory Today",
        date: "2024-02-28",
        year: "2024",
        type: "articles",
        excerpt: "A critical analysis of artificial intelligence's role in contemporary cultural production, from content recommendation systems to generative art and its impact on creative expression.",
        category: "articles"
    },
    {
        id: 3,
        title: "Community Building in Digital Spaces",
        publication: "Online Communities Quarterly",
        date: "2024-01-10",
        year: "2024",
        type: "essays",
        excerpt: "Examining the strategies and challenges of building meaningful communities in digital environments, with focus on marginalized groups finding voice and solidarity online.",
        category: "essays"
    },
    {
        id: 4,
        title: "Book Review: 'The Networked Self' by Maria Rodriguez",
        publication: "Contemporary Sociology Review",
        date: "2023-12-05",
        year: "2023",
        type: "reviews",
        excerpt: "A comprehensive review of Rodriguez's groundbreaking work on digital identity formation, examining her theoretical framework and empirical contributions to the field.",
        category: "reviews"
    },
    {
        id: 5,
        title: "Social Media and Political Discourse: A Longitudinal Study",
        publication: "Political Communication Journal",
        date: "2023-11-20",
        year: "2023",
        type: "research",
        excerpt: "Five-year longitudinal analysis of how social media platforms have transformed political discourse patterns, with implications for democratic participation and public sphere theory.",
        category: "research"
    },
    {
        id: 6,
        title: "The Digital Divide Revisited: Access Beyond Infrastructure",
        publication: "Technology & Society Magazine",
        date: "2023-10-15",
        year: "2023",
        type: "articles",
        excerpt: "Reexamining the digital divide through the lens of digital literacy, cultural capital, and social exclusion, proposing a more nuanced understanding of technological inequality.",
        category: "articles"
    },
    {
        id: 7,
        title: "Meme Culture as Digital Folklore",
        publication: "Folklore Studies Today",
        date: "2023-09-22",
        year: "2023",
        type: "essays",
        excerpt: "Exploring internet memes as contemporary folklore, analyzing their function in digital communities and their role in cultural transmission and social commentary.",
        category: "essays"
    },
    {
        id: 8,
        title: "Platform Governance and User Agency",
        publication: "Internet Policy Review",
        date: "2023-08-30",
        year: "2023",
        type: "research",
        excerpt: "Critical examination of platform governance models and their impact on user agency, free expression, and democratic participation in digital public spheres.",
        category: "research"
    },
    {
        id: 9,
        title: "Digital Archiving and Cultural Memory",
        publication: "Archival Science Quarterly",
        date: "2023-07-18",
        year: "2023",
        type: "articles",
        excerpt: "Investigating the challenges and opportunities of digital archiving practices, examining how cultural memory is preserved and constructed in digital environments.",
        category: "articles"
    },
    {
        id: 10,
        title: "The Ethics of Big Data Research",
        publication: "Research Ethics Journal",
        date: "2023-06-25",
        year: "2023",
        type: "essays",
        excerpt: "Examining ethical considerations in big data research, including privacy, consent, and the responsibilities of researchers working with large-scale digital datasets.",
        category: "essays"
    },
    {
        id: 11,
        title: "Virtual Reality and Embodied Experience",
        publication: "New Media & Society",
        date: "2023-05-12",
        year: "2023",
        type: "research",
        excerpt: "Phenomenological investigation of embodied experience in virtual reality environments, exploring questions of presence, agency, and technological mediation.",
        category: "research"
    },
    {
        id: 12,
        title: "Book Review: 'Digital Minimalism' by Cal Newport",
        publication: "Technology Culture Review",
        date: "2023-04-08",
        year: "2023",
        type: "reviews",
        excerpt: "Thoughtful analysis of Newport's prescription for intentional technology use, examining both its practical applications and theoretical implications.",
        category: "reviews"
    },
    {
        id: 13,
        title: "Online Education and Digital Pedagogy",
        publication: "Educational Technology Journal",
        date: "2023-03-15",
        year: "2023",
        type: "articles",
        excerpt: "Comprehensive review of online education practices, examining the transformation of pedagogical approaches in digital learning environments.",
        category: "articles"
    },
    {
        id: 14,
        title: "Cryptocurrency and Digital Economies",
        publication: "Economic Anthropology Quarterly",
        date: "2023-02-28",
        year: "2023",
        type: "essays",
        excerpt: "Anthropological analysis of cryptocurrency communities and the emergence of alternative economic systems in digital spaces.",
        category: "essays"
    },
    {
        id: 15,
        title: "The Future of Digital Publishing",
        publication: "Publishing Research Quarterly",
        date: "2023-01-20",
        year: "2023",
        type: "articles",
        excerpt: "Examining the transformation of academic and trade publishing in the digital age, with focus on open access, peer review, and dissemination models.",
        category: "articles"
    },
    {
        id: 16,
        title: "Social Movements and Digital Organizing",
        publication: "Social Movement Studies",
        date: "2022-12-10",
        year: "2022",
        type: "research",
        excerpt: "Analysis of how contemporary social movements utilize digital tools for organizing, mobilization, and narrative construction in the global political landscape.",
        category: "research"
    },
    {
        id: 17,
        title: "Book Review: 'The Age of Surveillance Capitalism'",
        publication: "Critical Inquiry Journal",
        date: "2022-11-15",
        year: "2022",
        type: "reviews",
        excerpt: "In-depth review of Zuboff's seminal work on surveillance capitalism, evaluating its contributions to understanding contemporary digital economic models.",
        category: "reviews"
    },
    {
        id: 18,
        title: "Digital Wellness and Mental Health",
        publication: "Health & Technology Review",
        date: "2022-10-22",
        year: "2022",
        type: "articles",
        excerpt: "Investigating the relationship between digital technology use and mental health, examining both challenges and opportunities for digital wellness.",
        category: "articles"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
    renderArticles();
});

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Render all articles
function renderArticles() {
    const container = document.getElementById('articles-container');
    
    if (!container) {
        console.error('Articles container not found!');
        return;
    }
    
    // Clear container
    container.innerHTML = '';
    
    // Render all articles
    articles.forEach((article, index) => {
        const articleElement = createArticleElement(article);
        articleElement.classList.add('fade-in');
        container.appendChild(articleElement);
        
        // Animate in with delay
        setTimeout(() => {
            articleElement.classList.add('visible');
        }, index * 100);
    });
}

// Create article element
function createArticleElement(article) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article-card rounded-lg shadow-sm p-6 mb-6 cursor-pointer';
    
    const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    articleDiv.innerHTML = `
        <div class="flex flex-col md:flex-row md:items-start gap-4">
            <div class="flex-1">
                <div class="flex items-center gap-3 mb-3">
                    <span class="category-tag px-3 py-1 text-xs font-medium rounded-full">
                        ${article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                    </span>
                    <span class="publication-date text-sm">${formattedDate}</span>
                </div>
                <h3 class="serif-font text-xl font-semibold text-gray-800 mb-2 hover:text-teal-600 transition-colors">
                    ${article.title}
                </h3>
                <p class="text-sm text-gray-600 mb-3">
                    Published in <em>${article.publication}</em>
                </p>
                <p class="text-gray-700 leading-relaxed">
                    ${article.excerpt}
                </p>
            </div>
        </div>
    `;
    
    // Add click handler for article
    articleDiv.addEventListener('click', function() {
        // In a real implementation, this would navigate to the full article
        alert(`Opening: ${article.title}\n\nThis would navigate to the full article content.`);
    });
    
    return articleDiv;
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
