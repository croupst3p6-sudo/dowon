/**
 * =========================================================================
 * 🌟 DOWON SYSTEMS (도원시스템) - Master Interactive Script (script.js) 🌟
 * Powering: Quote Calculator, Error Code Diagnostics, Product/Portfolio Filter,
 * FAQ Accordion, and Mobile Navigation
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 0. HERO BACKGROUND SLIDESHOW (타이틀 배경 슬라이드쇼)
    // =========================================================================
    const heroSlides = document.querySelectorAll('#heroBgSlideshow .hero-bg-slide');
    const heroDotsContainer = document.getElementById('heroSlideDots');
    if (heroSlides.length > 0) {
        let currentSlide = 0;
        let slideTimer = null;

        const goToSlide = (idx) => {
            heroSlides[currentSlide].classList.remove('active');
            if (heroDotsContainer && heroDotsContainer.children[currentSlide]) {
                heroDotsContainer.children[currentSlide].classList.remove('active');
            }
            currentSlide = (idx + heroSlides.length) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
            if (heroDotsContainer && heroDotsContainer.children[currentSlide]) {
                heroDotsContainer.children[currentSlide].classList.add('active');
            }
        };

        const startSlideTimer = () => {
            if (slideTimer) clearInterval(slideTimer);
            slideTimer = setInterval(() => goToSlide(currentSlide + 1), 4000);
        };

        if (heroDotsContainer) {
            heroSlides.forEach((_, idx) => {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = idx === 0 ? 'hero-slide-dot active' : 'hero-slide-dot';
                dot.setAttribute('aria-label', `${idx + 1}번째 배경 사진`);
                dot.addEventListener('click', () => {
                    goToSlide(idx);
                    startSlideTimer();
                });
                heroDotsContainer.appendChild(dot);
            });
        }

        startSlideTimer();
    }

    // =========================================================================
    // 0-1. HERO TITLE TEXT ROTATOR (타이틀 두 문구 천천히 교차 전환)
    // =========================================================================
    const heroTitleItems = document.querySelectorAll('#heroTitleRotator .hero-key-title');
    if (heroTitleItems.length > 1) {
        let currentTitleIdx = 0;
        setInterval(() => {
            heroTitleItems[currentTitleIdx].classList.remove('active');
            currentTitleIdx = (currentTitleIdx + 1) % heroTitleItems.length;
            heroTitleItems[currentTitleIdx].classList.add('active');
        }, 5000);
    }


    // =========================================================================
    // 1. MOBILE DRAWER NAVIGATION
    // =========================================================================
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }

    const closeMobileNav = () => {
        if (mobileDrawer) {
            mobileDrawer.classList.remove('open');
            document.body.style.overflow = '';
        }
    };

    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', closeMobileNav);
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });


    // =========================================================================
    // 2. COMPACT SMS INQUIRY (통화 부재 시 간편 문자 문의)
    // =========================================================================
    const smsInquiryForm = document.getElementById('smsInquiryForm');
    if (smsInquiryForm) {
        smsInquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phoneInput = document.getElementById('smsInputPhone');
            const msgInput = document.getElementById('smsInputMsg');

            const phoneVal = phoneInput ? phoneInput.value.trim() : "";
            const msgVal = msgInput ? msgInput.value.trim() : "";

            const lines = ["[도원시스템 문자문의]"];
            if (phoneVal) lines.push(`• 연락처/지역: ${phoneVal}`);
            lines.push(`• 문의내용: ${msgVal || "통화가 어려워 문자로 문의드립니다. 확인 후 연락 부탁드립니다."}`);

            const smsBody = lines.join("\n");
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            const delimiter = isIOS ? '&' : '?';
            window.location.href = `sms:01038196610${delimiter}body=${encodeURIComponent(smsBody)}`;
        });
    }


    // =========================================================================
    // 3. PRODUCTS CATALOG (판매 상품 및 부품 탭 필터링)
    // =========================================================================
    const productGrid = document.getElementById('catalogProductGrid');
    const catalogTabs = document.querySelectorAll('.catalog-tab-btn');

    const renderProducts = (category = 'all', limit = null) => {
        if (!productGrid || typeof PRODUCTS === 'undefined') return;

        productGrid.innerHTML = '';
        let list = (category === 'all') 
            ? PRODUCTS 
            : PRODUCTS.filter(p => p.category === category);

        if (limit) {
            list = list.slice(0, limit);
        }

        list.forEach(item => {
            const card = document.createElement('div');
            card.className = 'product-card';

            const specsHtml = item.specs 
                ? item.specs.map(s => `<span class="product-spec-badge">${s}</span>`).join('') 
                : '';

            card.innerHTML = `
                <div class="product-img-box">
                    <img src="images/${item.image}" alt="${item.name}" loading="lazy">
                    <span class="product-badge-corner">${item.badge || item.categoryName}</span>
                </div>
                <div class="product-body">
                    <span class="product-cat-name">${item.type}</span>
                    <h3 class="product-title">${item.name}</h3>
                    <p class="product-desc">${item.desc}</p>
                    <div class="product-specs-list">
                        ${specsHtml}
                    </div>
                    <div class="product-footer">
                        <span class="product-price-val">${item.price}</span>
                        <a href="tel:01038196610" class="product-inquire-btn">재고/견적 문의</a>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    };

    if (catalogTabs.length > 0) {
        catalogTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                catalogTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const cat = tab.getAttribute('data-cat') || 'all';
                renderProducts(cat);
            });
        });
    }

    // Initial Products Render
    const isHomePage = document.getElementById('isHomePage');
    if (isHomePage) {
        renderProducts('all', 6);
    } else {
        renderProducts('all');
    }


    // =========================================================================
    // 5-1. PORTFOLIO LIGHTBOX GALLERY MODAL (사진 클릭 시 상세 갤러리)
    // =========================================================================
    const pfModal = document.getElementById('pfGalleryModal');
    const pfModalImg = document.getElementById('pfModalImg');
    const pfModalCounter = document.getElementById('pfModalCounter');
    const pfModalThumbs = document.getElementById('pfModalThumbs');
    const pfModalClose = document.getElementById('pfModalClose');
    const pfModalPrev = document.getElementById('pfModalPrev');
    const pfModalNext = document.getElementById('pfModalNext');

    let modalPhotos = [];
    let modalIdx = 0;

    const updateModalView = () => {
        if (!pfModalImg || modalPhotos.length === 0) return;
        pfModalImg.src = `images/${modalPhotos[modalIdx]}`;
        if (pfModalCounter) {
            pfModalCounter.textContent = `${modalIdx + 1} / ${modalPhotos.length}`;
        }
        if (pfModalThumbs) {
            Array.from(pfModalThumbs.children).forEach((t, i) => {
                t.classList.toggle('active', i === modalIdx);
            });
        }
    };

    const openGalleryModal = (photos) => {
        modalPhotos = photos && photos.length > 0 ? photos : [];
        if (modalPhotos.length === 0 || !pfModal) return;
        modalIdx = 0;
        if (pfModalThumbs) {
            pfModalThumbs.innerHTML = '';
            modalPhotos.forEach((src, i) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = i === 0 ? 'pf-modal-thumb active' : 'pf-modal-thumb';
                btn.innerHTML = `<img src="images/${src}" alt="">`;
                btn.addEventListener('click', () => {
                    modalIdx = i;
                    updateModalView();
                });
                pfModalThumbs.appendChild(btn);
            });
        }
        updateModalView();
        pfModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeGalleryModal = () => {
        if (!pfModal) return;
        pfModal.classList.remove('open');
        document.body.style.overflow = '';
    };

    if (pfModalClose) pfModalClose.addEventListener('click', closeGalleryModal);
    if (pfModal) {
        pfModal.addEventListener('click', (e) => {
            if (e.target === pfModal) closeGalleryModal();
        });
    }
    if (pfModalPrev) {
        pfModalPrev.addEventListener('click', () => {
            modalIdx = (modalIdx - 1 + modalPhotos.length) % modalPhotos.length;
            updateModalView();
        });
    }
    if (pfModalNext) {
        pfModalNext.addEventListener('click', () => {
            modalIdx = (modalIdx + 1) % modalPhotos.length;
            updateModalView();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (!pfModal || !pfModal.classList.contains('open')) return;
        if (e.key === 'Escape') closeGalleryModal();
        if (e.key === 'ArrowLeft' && pfModalPrev) pfModalPrev.click();
        if (e.key === 'ArrowRight' && pfModalNext) pfModalNext.click();
    });


    // =========================================================================
    // 5. PORTFOLIO (시공 및 수리 사례 렌더링)
    // =========================================================================
    const portfolioGrid = document.getElementById('casePortfolioGrid');
    const portfolioTabs = document.querySelectorAll('.portfolio-tab-btn');

    const renderPortfolios = (categoryKey = 'all', limit = null) => {
        if (!portfolioGrid || typeof PORTFOLIO_ITEMS === 'undefined') return;

        portfolioGrid.innerHTML = '';
        let list = (categoryKey === 'all')
            ? PORTFOLIO_ITEMS
            : PORTFOLIO_ITEMS.filter(p => p.categoryKey === categoryKey);

        if (limit) {
            list = list.slice(0, limit);
        }

        list.forEach(item => {
            const photos = (item.photos && item.photos.length > 0) ? item.photos : [item.image];

            if (isHomePage) {
                const card = document.createElement('div');
                card.className = 'pf-slide-card';

                const slidesHtml = photos.map((src, idx) =>
                    `<img src="images/${src}" alt="" class="${idx === 0 ? 'pf-card-slide active' : 'pf-card-slide'}" loading="lazy">`
                ).join('');

                const captionHtml = item.shortLabel
                    ? `<div class="pf-card-caption">${item.shortLabel}</div>`
                    : '';

                card.innerHTML = `
                    <div class="pf-card-media">
                        <div class="pf-card-slides">${slidesHtml}</div>
                        <span class="pf-photo-count">📷 ${photos.length}장 보기</span>
                    </div>
                    ${captionHtml}
                `;

                if (photos.length > 1) {
                    let cur = 0;
                    const slideImgs = card.querySelectorAll('.pf-card-slide');
                    setInterval(() => {
                        slideImgs[cur].classList.remove('active');
                        cur = (cur + 1) % slideImgs.length;
                        slideImgs[cur].classList.add('active');
                    }, 3000);
                }

                card.addEventListener('click', () => openGalleryModal(photos));
                portfolioGrid.appendChild(card);
                return;
            }

            const card = document.createElement('div');
            card.className = 'portfolio-card';

            const tagsHtml = item.tags 
                ? item.tags.map(t => `<span class="portfolio-tag-item">#${t}</span>`).join('') 
                : '';

            card.innerHTML = `
                <div class="portfolio-img-box">
                    <img src="images/${item.image}" alt="${item.title}" loading="lazy">
                    <span class="portfolio-cat-badge">${item.category}</span>
                </div>
                <div class="portfolio-body">
                    <div class="portfolio-meta">
                        <span>📍 ${item.location}</span>
                        <span>🗓 ${item.date}</span>
                    </div>
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p class="portfolio-desc">${item.desc}</p>
                    <div class="portfolio-tags">
                        ${tagsHtml}
                    </div>
                </div>
            `;
            portfolioGrid.appendChild(card);
        });
    };

    if (portfolioTabs.length > 0) {
        portfolioTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                portfolioTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const key = tab.getAttribute('data-cat') || 'all';
                renderPortfolios(key);
            });
        });
    }

    if (isHomePage) {
        renderPortfolios('all', 12);
    } else {
        renderPortfolios('all');
    }


    // =========================================================================
    // 6. FAQ ACCORDION (자주 묻는 질문)
    // =========================================================================
    const faqContainer = document.getElementById('faqListContainer');
    if (faqContainer && typeof FAQS !== 'undefined') {
        faqContainer.innerHTML = '';
        FAQS.forEach((item, index) => {
            const faqEl = document.createElement('div');
            faqEl.className = `faq-item ${index === 0 ? 'active' : ''}`;
            faqEl.innerHTML = `
                <div class="faq-question">
                    <span>Q. ${item.q}</span>
                    <span class="faq-icon">+</span>
                </div>
                <div class="faq-answer" style="${index === 0 ? 'max-height: 200px;' : ''}">
                    <div class="faq-answer-inner">${item.a}</div>
                </div>
            `;

            const questionBtn = faqEl.querySelector('.faq-question');
            const answerEl = faqEl.querySelector('.faq-answer');

            questionBtn.addEventListener('click', () => {
                const isActive = faqEl.classList.contains('active');
                
                // Close other items
                document.querySelectorAll('.faq-item').forEach(other => {
                    other.classList.remove('active');
                    const otherAns = other.querySelector('.faq-answer');
                    if (otherAns) otherAns.style.maxHeight = null;
                });

                if (!isActive) {
                    faqEl.classList.add('active');
                    answerEl.style.maxHeight = answerEl.scrollHeight + 40 + 'px';
                }
            });

            faqContainer.appendChild(faqEl);
        });
    }


    // =========================================================================
    // 7. CUSTOMER REVIEWS (고객 리얼 후기)
    // =========================================================================
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (reviewsContainer && typeof REVIEWS !== 'undefined') {
        reviewsContainer.innerHTML = '';
        REVIEWS.forEach(rev => {
            const stars = '★'.repeat(rev.rating);
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <div class="review-stars">${stars}</div>
                <p class="review-content">"${rev.content}"</p>
                <div class="review-author">${rev.name}</div>
                <div class="review-service">${rev.service} • ${rev.date}</div>
            `;
            reviewsContainer.appendChild(card);
        });
    }

});
