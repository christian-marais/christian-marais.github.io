window.onload = ()=>{

        //--------------Initiate the wowjs------------
    new WOW().init();



    /*==================== MENU SHOW Y HIDDEN ====================*/
    const navMenu = document.getElementById('nav-menu'),
        navToggle=document.getElementById('nav-toggle'),
        navClose=document.getElementById('nav-close');

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu');
        })
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu');
        })
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav-link');

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        //when we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));

    /*==================== ACCORDION SKILLS ====================*/
    const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header');

    function toggleSkills(){
        let itemClass = this.parentNode.className

        for(i = 0; i< skillsContent.length; i++){
            skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass === 'skills__content skills__close'){
            this.parentNode.className = 'skills__content skills__open'
        }
    }

    skillsHeader.forEach((el)=>{
        el.addEventListener('click',toggleSkills);
    })

  /*==================== QUALIFICATION TABS ====================*/
    const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach(tab=>{
        tab.addEventListener('click',()=>{
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent =>{
                tabContent.classList.remove('qualification__active')
            })
            target.classList.add('qualification__active')

            tabs.forEach(tab =>{
                tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
        })
    })
    /*==================== SERVICES MODAL ====================*/
    const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')

    let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-modal')
    }
    modalBtns.forEach((modalBtn, i) =>{
        modalBtn.addEventListener('click', ()=>{
            modal(i)
        })
    })

    modalCloses.forEach((modalClose)=> {
        modalClose.addEventListener('click', ()=>{
            modalViews.forEach((modalView) => {
                modalView.classList.remove('active-modal')
            })
        })
    })
    /*==================== PORTFOLIO SWIPER  ====================*/
    let swiperPortfolio = new Swiper(".portfolio__container", {
        cssMode: true,
        loop:true,

        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
        el: ".swiper-pagination",
        clickable:true,
        },
        mousewheel: true,
        keyboard: true,
    });

    
    /*==================== TESTIMONIAL ====================*/

    let swiperTestimonial = new Swiper(".testimonial__container", {
        loop: true,
        grabCursor: true,
        spaceBetween: 48,

        pagination: {
        el: ".swiper-pagination",
        clickable:true,
        dynamicBullets:true,
        },

        breakpoints:{
            568:{
                slidesPerView:2,
            }
        },
        mousewheel: true,
        keyboard: true,
    });
    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('.section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight
            const sectionTop =  current.offsetTop - 50;
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('nav__menu a[href*='+ sectionId +']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll',scrollActive)

    /*==================== CHANGE BACKGROUND HEADER ====================*/ 
    function scrollHeader(){
        const nav = document.getElementById('header')
        //when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    /*==================== SHOW SCROLL UP ====================*/ 

    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up');
        //when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

    }

    window.addEventListener('scroll', scrollUp)
    /*==================== DARK LIGHT THEME ====================*/ 

    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'uil-sun'

    // Previously selected topic (if user selected)

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    //we obtain the current theme that the interface has by validating the dark-theme
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

    // We validate if the user previously choe a topic
    if (selectedTheme){
        //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark themeButton
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
    }


    // Activate / Deactivate the theme manually with the button
    themeButton.addEventListener('click', () =>{
        //Add or remove the dark / icon theme depending
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        //We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })

    //-------------- Typed js------------

    let typed1,typed2,typed3,typed4,typed5,typed6,typed8,typed9,typed10;


    //--------------Initiate the Typed js------------
    typed1 = new Typed('.typed', {
        strings: ['Front-End','Back-End'],
        typeSpeed: 60,
        backSpeed: 60,
        smartBackspace: true, 
        loop: true
    });

    typed2 = new Typed('.typed-about', {
        strings: ['Après 10 années de métiers administratifs et commerciaux, j\'ai entamé une reconversion dans les métiers du numérique. J\'ai fait de la communication puis du Webdesign qui m\'ont progressivement amené au métier de <strong>développeur web</strong>.',
        'Fiable, sérieux, motivé, mon souhait est de travailler  dans le <strong>développement de site et d\'application en back end!</strong> et <strong>d\'atteindre le métier de DevOps</strong>'],
        typeSpeed: 40,
        backSpeed: 60,
        backDelay: 3500,
        smartBackspace: true, 
        loop: true
    });
    typed3 = new Typed('#portfolio1', {
        strings: ['Interface de suivi en temps réel des coureurs via API REST avec map. <br/> Durée: 1 semaine <br/>Techno:JS,HTML5,CSS3, AJAX, LEAFLET.JS',
        'Réalisation: Affichage en temps réel sur la map et dans une liste des coureurs du Grand Raid.<br/> <strong>Page et map dynamiques</strong> via javascript et <strong>utilisation d\'une API</strong>.'],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 3500,
        smartBackspace: true, 
        loop: true
    });
    typed4 = new Typed('#portfolio2', {
        strings: ['Modal de disclaimer<br/>Durée: 1 semaine<br/>Plateforme: Wordpress<br/>Techno: Php,JS,MySql',
        'Respect du cahier des charges. <strong>Conception et développement</strong> de la logique applicative avec <strong>manipulation de la BDD</strong> de Wordpress. <strong>Rédaction de la documentation technique.</strong>'],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 3500,
        smartBackspace: true, 
        loop: true
    });
    typed5 = new Typed('#portfolio3', {
        strings: ['Jeu Web et javascript du pendu<br/>Durée: 1 semaine<br/>Techno: HTML5,SAAS,JS',
        'Réalisation: <strong>Conception et développement</strong> de la logique applicative avec manipulation du DOM.'],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 3500,
        smartBackspace: true, 
        loop: true
    });
    typed6 = new Typed('#portfolio4', {
        strings: ['LMS de formation <br/>techno: LMS/Css/JS<br/>plateforme: moodle',
        'Site d\'apprentissage des étudiants Sup de Pub de l\'organisme de formation IFR. <strong>Gestion de l\'hébergement</strong>, installation et configuration de l\'application web et mobile, <strong>maquettage et création</strong> de page web, <strong>gestion de theme enfant</strong>. <strong>Administration</strong> des utilisateurs, des plugins et rédaction et </strong>mise en conformité des obligations et mentions légales</strong>, <strong>rédaction de contenu web</strong> '],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 3500,
        smartBackspace: true, 
        loop: true
    });

    typed8 = new Typed('#portfolio6', {
        strings: ['Projet Front-End et Back-end PHP from scratch.<br/>Durée: 2 semaine<br/>Techno: Php(POO), MySql',
        'Réalisation: CRUD et MVC. <strong>Front-end dynamique</strong> avec affichage des articles et des catégories d\'articles.',
        'Réalisation: <strong>LOGIN,CRUD Back-End</strong> de gestion des categories, des articles(prix, image, categorie), des utilisateurs et des rôles.'],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 3500,
        smartBackspace: false, 
    loop: true
    });
    typed9 = new Typed('#portfolio7', {
        strings: ['Projet Back-end PHP from scratch réalisé dans le cadre d\'un exercice.<br/>Durée: 1 semaine<br/>Techno: Php(POO), MySql',
        'Réalisation: CRUD et MVC. <strong>Front-end dynamique</strong> avec affichage des produits, des prix et du personnel.<strong> Gestion du login et CRUD Back-End</strong> de gestion des prix et du personnel.'],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 4500,
        smartBackspace: false, 
        loop: true
    });
    typed10 = new Typed('#portfolio8', {
        strings: ['Projet Front-End et Back-end PHP from scratch réalisé dans le cadre professionnel.<br/>Durée: 10 semaines<br/>Techno: Php8(POO), Apache2, MySql5, Javascript, Jquery, PhpMailer, Chartjs, FPDF, Putty.',
        'Réalisation: CRUD et MVC. <br/><strong>Conception, maquettage, développement et déploiement</strong> d\'une solution applicative de gestion des stocks d\'un CFA avec un système de permissions.<br/> <strong>Installation et configuration</strong> de php, du serveur web et de base de données sur un serveur debian. <br/><strong>Présentation client</strong> du projet, <strong>rédaction</strong> du cahier des charges final et des documentations techniques.'],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 4500,
        smartBackspace: false, 
        loop: true
    });


    let a = document.querySelectorAll('.nav__menus');
    let tab=[typed1,typed2,typed3,typed4,typed5,typed6,typed8,typed9,typed10];

    a.forEach((e)=>{
        addEventListener('click',()=>{
            tab.forEach((el)=>{
                el.stop();
               document.getElementById((e.id).substring(2).toLowerCase()).scrollIntoView(true)
               setTimeout(() => {
                (function(){
                    el.start()
                }())
            },3000);
            })
        })
       
    });






};
