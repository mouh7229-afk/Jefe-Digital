const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const T = {
  en: {
    facebook:'Facebook',maps:'Google Maps',save_contact:'＋ Save Contact',demo_label:'DEMO CONCEPT',noir_sub:'Restaurant Premium',riad_sub:'Riads & Hotels',atelya_sub:'E-commerce',stockly_sub:'POS & Stock',
    nav_services:'Services',nav_nfc:'NFC',nav_software:'Software',nav_work:'Portfolio',nav_process:'Process',nav_contact:'Contact',start:'Start Project',
    hero_label:'DIGITAL SOLUTIONS FOR MODERN BUSINESS',hero1:'Build.',hero2:'Connect.',hero3:'Grow.',hero_text:'NEXORA creates premium websites, digital profiles, NFC solutions, business software and custom digital experiences for modern businesses.',hero_btn1:'Explore Services ↗',hero_btn2:'View Our Work',stat1:'Digital Partner',stat2:'Possibilities',stat3:'Digital Presence',growth:'growth',
    services_label:'01 — SERVICES',services_title:'Everything your<br><span>business needs.</span>',services_text:'From websites to complete digital systems, NEXORA builds the tools your business needs to grow.',explore:'Explore ↗',
    s1:'Websites',s1t:'Premium websites and landing pages designed to turn visitors into customers.',s1l:'Landing · Business · E-commerce',s2:'NFC Profiles',s2t:'Smart NFC cards connected to a professional digital profile.',s2l:'NFC · QR · Profile',s3:'Business Software',s3t:'POS, stock, sales, customers and dashboards built around your business.',s3l:'POS · Stock · Dashboard',s4:'Custom Solutions',s4t:'Custom web applications and digital tools for specific business needs.',s4l:'CRM · Booking · Custom',s5:'Digital Branding',s5t:'Logos, business cards, QR menus, digital menus and social visuals.',s5l:'Logo · QR Menu · Social',s6:'Digital Presence',s6t:'Content, social setup and online presence designed to help local businesses get noticed.',s6l:'Reels · Social · Google',
    nfc_label:'02 — NFC DIGITAL PROFILE',nfc_title:'Your business.<br><span>One tap away.</span>',nfc_text:'Turn your NFC card into a powerful digital profile with WhatsApp, Instagram, phone, location, portfolio and more.',nf1:'WhatsApp & phone',nf2:'Instagram & social links',nf3:'Location & directions',nf4:'QR backup included',nfc_btn:'Get an NFC Profile ↗',profile_sub:'Digital Solutions',whats:'WhatsApp',insta:'Instagram',location:'Location',call:'Call',smart_profile:'SMART DIGITAL PROFILE',tap:'TAP TO CONNECT',
    software_label:'03 — BUSINESS SOFTWARE',software_title:'Business software<br><span>built around you.</span>',software_text:'Manage products, stock, sales, customers and operations from one powerful dashboard.',overview:'▦ Overview',products:'◫ Products',sales:'↕ Sales',customers:'◉ Customers',reports:'▤ Reports',today:'TODAY',business_overview:'Business Overview',revenue:'Revenue',sales_metric:'Sales',low_stock:'Low Stock',attention:'Attention',sales_activity:'Sales Activity',inventory_alert:'Inventory Alert',left:'left',
    why_label:'04 — WHY NEXORA',why_title:'Digital work with<br><span>business purpose.</span>',why_text:"We don't build technology just to look good. Every solution is designed to make your business clearer, faster and easier to use.",why1:'Built for your business',why1t:'No one-size-fits-all package. We adapt the experience to your activity and customers.',why2:'Premium first impression',why2t:'Modern design helps your business look credible, professional and ready to grow.',why3:'Simple to use',why3t:'Clear interfaces and practical systems so you can focus on running your business.',why4:'Made to evolve',why4t:'Start with what you need today and add new digital tools as your business grows.',
    work_label:'05 — SELECTED WORK',work_title:'Built to make<br><span>businesses better.</span>',work_text:'A growing portfolio of websites, NFC experiences and business software.',nfc_project:'NFC PROFILE',pos_project:'POS MANAGER',booking_project:'BOOKING WEBSITE',menu_project:'DIGITAL MENU',
    process_label:'06 — PROCESS',process_title:'Simple process.<br><span>Serious results.</span>',process_text:'A clear path from idea to finished digital solution.',p1:'Discover',p1t:'We understand your business, goals, customers and needs.',p2:'Design',p2t:'We define the visual direction, structure and experience.',p3:'Build',p3t:'We develop the website, profile or software and connect the systems.',p4:'Launch',p4t:'We test, publish and help your digital presence move forward.',
    faq_label:'07 — FAQ',faq_title:'Questions before<br><span>we start?</span>',faq_text:'A few quick answers about how we work and what you can build with NEXORA.',q1:'What kind of websites do you build?',a1:'Landing pages, business websites, e-commerce stores, booking systems and custom web applications.',q2:'Can the NFC profile be updated later?',a2:'Yes. The digital profile can be updated without changing the physical NFC card.',q3:'Can you build software for my shop or restaurant?',a3:'Yes. We can design POS, stock, sales, customer and reporting systems around your workflow.',q4:'Do I need to know how to code?',a4:'No. We handle the technical side and explain the important parts in simple language.',
    cta_label:"08 — LET'S BUILD",cta_title:'Ready to build<br><span>something better?</span>',cta_text:"Tell us what your business needs and we'll turn the idea into a professional digital solution.",name_ph:'Your name',contact_ph:'WhatsApp or email',message_ph:'Tell us what you need',opt_website:'Website',opt_nfc:'NFC Profile',opt_software:'Business Software',opt_branding:'Branding',opt_other:'Other',send:'Send Request ↗',form_success:'Thanks — your request is ready. Connect your WhatsApp/email next.',footer:'Digital solutions for businesses ready to move forward.',rights:'All rights reserved.'
  },
  fr: {
    facebook:'Facebook',maps:'Google Maps',save_contact:'＋ Enregistrer le contact',demo_label:'CONCEPT DÉMO',noir_sub:'Restaurant Premium',riad_sub:'Riads & Hôtels',atelya_sub:'E-commerce',stockly_sub:'POS & Stock',
    nav_services:'Services',nav_nfc:'NFC',nav_software:'Logiciels',nav_work:'Portfolio',nav_process:'Processus',nav_contact:'Contact',start:'Démarrer un projet',
    hero_label:'SOLUTIONS DIGITALES POUR LES ENTREPRISES MODERNES',hero1:'Construire.',hero2:'Connecter.',hero3:'Grandir.',hero_text:'NEXORA crée des sites web premium, des profils digitaux, des solutions NFC, des logiciels professionnels et des expériences digitales sur mesure.',hero_btn1:'Découvrir nos services ↗',hero_btn2:'Voir nos projets',stat1:'Partenaire digital',stat2:'Possibilités',stat3:'Présence digitale',growth:'croissance',
    services_label:'01 — SERVICES',services_title:'Tout ce dont votre<br><span>entreprise a besoin.</span>',services_text:'Des sites web aux systèmes digitaux complets, NEXORA construit les outils nécessaires à votre croissance.',explore:'Découvrir ↗',
    s1:'Sites Web',s1t:'Sites premium et landing pages conçus pour transformer les visiteurs en clients.',s1l:'Landing · Entreprise · E-commerce',s2:'Profils NFC',s2t:'Cartes NFC intelligentes reliées à un profil digital professionnel.',s2l:'NFC · QR · Profil',s3:'Logiciels',s3t:'POS, stock, ventes, clients et tableaux de bord adaptés à votre activité.',s3l:'POS · Stock · Dashboard',s4:'Solutions sur mesure',s4t:'Applications web et outils digitaux personnalisés.',s4l:'CRM · Réservation · Custom',s5:'Branding digital',s5t:'Logos, cartes de visite, menus QR, menus digitaux et visuels sociaux.',s5l:'Logo · Menu QR · Social',s6:'Présence digitale',s6t:'Contenu, réseaux sociaux et présence en ligne pour aider les entreprises locales à être remarquées.',s6l:'Reels · Social · Google',
    nfc_label:'02 — PROFIL DIGITAL NFC',nfc_title:'Votre entreprise.<br><span>À un geste.</span>',nfc_text:'Transformez votre carte NFC en profil digital puissant avec WhatsApp, Instagram, téléphone, localisation, portfolio et plus.',nf1:'WhatsApp & téléphone',nf2:'Instagram & réseaux sociaux',nf3:'Localisation & itinéraire',nf4:'QR de secours inclus',nfc_btn:'Obtenir un profil NFC ↗',profile_sub:'Solutions digitales',whats:'WhatsApp',insta:'Instagram',location:'Localisation',call:'Appeler',smart_profile:'PROFIL DIGITAL INTELLIGENT',tap:'TOUCHER POUR CONNECTER',
    software_label:'03 — LOGICIELS PROFESSIONNELS',software_title:'Un logiciel<br><span>adapté à votre activité.</span>',software_text:'Gérez produits, stock, ventes, clients et opérations depuis un tableau de bord puissant.',overview:'▦ Vue d’ensemble',products:'◫ Produits',sales:'↕ Ventes',customers:'◉ Clients',reports:'▤ Rapports',today:"AUJOURD'HUI",business_overview:'Vue d’ensemble',revenue:'Chiffre d’affaires',sales_metric:'Ventes',low_stock:'Stock faible',attention:'Attention',sales_activity:'Activité des ventes',inventory_alert:'Alerte stock',left:'restants',
    why_label:'04 — POURQUOI NEXORA',why_title:'Le digital avec<br><span>un vrai objectif business.</span>',why_text:'Nous ne créons pas de technologie uniquement pour faire joli. Chaque solution doit rendre votre activité plus claire, plus rapide et plus simple.',why1:'Pensé pour votre activité',why1t:'Pas de solution générique. Nous adaptons l’expérience à votre métier et à vos clients.',why2:'Une image premium',why2t:'Un design moderne renforce la crédibilité et la confiance de vos clients.',why3:'Simple à utiliser',why3t:'Des interfaces claires et des outils pratiques pour vous concentrer sur votre activité.',why4:'Prêt à évoluer',why4t:'Commencez avec vos besoins actuels et ajoutez de nouveaux outils au fur et à mesure.',
    work_label:'05 — PROJETS SÉLECTIONNÉS',work_title:'Des solutions qui<br><span>font la différence.</span>',work_text:'Un portfolio en développement de sites, expériences NFC et logiciels professionnels.',nfc_project:'PROFIL NFC',pos_project:'GESTION POS',booking_project:'SITE DE RÉSERVATION',menu_project:'MENU DIGITAL',
    process_label:'06 — PROCESSUS',process_title:'Un processus simple.<br><span>Des résultats sérieux.</span>',process_text:'Un parcours clair de l’idée jusqu’à la solution digitale finale.',p1:'Découvrir',p1t:'Nous comprenons votre activité, vos objectifs, vos clients et vos besoins.',p2:'Concevoir',p2t:'Nous définissons la direction visuelle, la structure et l’expérience.',p3:'Développer',p3t:'Nous construisons le site, le profil ou le logiciel et connectons les systèmes.',p4:'Lancer',p4t:'Nous testons, publions et vous aidons à faire évoluer votre présence digitale.',
    faq_label:'07 — FAQ',faq_title:'Des questions avant<br><span>de commencer ?</span>',faq_text:'Quelques réponses rapides sur notre façon de travailler et ce que vous pouvez construire avec NEXORA.',q1:'Quels types de sites créez-vous ?',a1:'Landing pages, sites vitrines, e-commerce, systèmes de réservation et applications web sur mesure.',q2:'Le profil NFC peut-il être modifié plus tard ?',a2:'Oui. Le profil digital peut être mis à jour sans changer la carte NFC physique.',q3:'Pouvez-vous créer un logiciel pour mon commerce ou restaurant ?',a3:'Oui. Nous pouvons concevoir des systèmes POS, stock, ventes, clients et rapports selon votre fonctionnement.',q4:'Dois-je savoir coder ?',a4:'Non. Nous gérons la partie technique et expliquons les éléments importants simplement.',
    cta_label:'08 — CONSTRUISONS',cta_title:'Prêt à construire<br><span>quelque chose de meilleur ?</span>',cta_text:'Parlez-nous de votre besoin et nous transformerons votre idée en solution digitale professionnelle.',name_ph:'Votre nom',contact_ph:'WhatsApp ou email',message_ph:'Décrivez votre besoin',opt_website:'Site Web',opt_nfc:'Profil NFC',opt_software:'Logiciel professionnel',opt_branding:'Branding',opt_other:'Autre',send:'Envoyer la demande ↗',form_success:'Merci — votre demande est prête. Connectez ensuite votre WhatsApp/email.',footer:'Des solutions digitales pour les entreprises qui veulent avancer.',rights:'Tous droits réservés.'
  },
  ar: {
    facebook:'فيسبوك',maps:'خرائط Google',save_contact:'＋ حفظ جهة الاتصال',demo_label:'نموذج تجريبي',noir_sub:'مطعم فاخر',riad_sub:'رياض وفنادق',atelya_sub:'متجر إلكتروني',stockly_sub:'نظام البيع والمخزون',
    nav_services:'الخدمات',nav_nfc:'NFC',nav_software:'البرمجيات',nav_work:'أعمالنا',nav_process:'طريقة العمل',nav_contact:'تواصل معنا',start:'ابدأ مشروعك',
    hero_label:'حلول رقمية للأعمال الحديثة',hero1:'ابنِ.',hero2:'اربط.',hero3:'تطوّر.',hero_text:'تقدم NEXORA مواقع احترافية وملفات رقمية وحلول NFC وبرامج لإدارة الأعمال وتجارب رقمية مخصصة.',hero_btn1:'اكتشف خدماتنا ↗',hero_btn2:'شاهد أعمالنا',stat1:'شريكك الرقمي',stat2:'إمكانيات',stat3:'حضور رقمي',growth:'نمو',
    services_label:'01 — الخدمات',services_title:'كل ما يحتاجه<br><span>مشروعك.</span>',services_text:'من المواقع إلى الأنظمة الرقمية المتكاملة، نبني الأدوات التي تساعد مشروعك على النمو.',explore:'اكتشف ↗',
    s1:'المواقع',s1t:'مواقع احترافية وصفحات هبوط لتحويل الزوار إلى عملاء.',s1l:'صفحات هبوط · شركات · متجر',s2:'ملفات NFC',s2t:'بطاقات NFC ذكية مرتبطة بملف رقمي احترافي.',s2l:'NFC · QR · ملف رقمي',s3:'برمجيات الأعمال',s3t:'نظام بيع ومخزون ومبيعات وعملاء ولوحات تحكم.',s3l:'POS · مخزون · لوحة تحكم',s4:'حلول مخصصة',s4t:'تطبيقات وأدوات رقمية مخصصة لاحتياجات مشروعك.',s4l:'CRM · حجز · مخصص',s5:'الهوية الرقمية',s5t:'شعارات وبطاقات عمل وقوائم QR وقوائم رقمية وتصاميم للسوشيال.',s5l:'Logo · QR · Social',s6:'الحضور الرقمي',s6t:'محتوى وحسابات وحضور على الإنترنت لمساعدة المشاريع المحلية على الظهور.',s6l:'Reels · Social · Google',
    nfc_label:'02 — الملف الرقمي NFC',nfc_title:'مشروعك.<br><span>بنقرة واحدة.</span>',nfc_text:'حوّل بطاقة NFC إلى ملف رقمي يتيح الوصول إلى واتساب وإنستغرام والهاتف والموقع والأعمال.',nf1:'واتساب والهاتف',nf2:'إنستغرام وروابط التواصل',nf3:'الموقع والاتجاهات',nf4:'رمز QR احتياطي',nfc_btn:'احصل على ملف NFC ↗',profile_sub:'حلول رقمية',whats:'واتساب',insta:'إنستغرام',location:'الموقع',call:'اتصال',smart_profile:'ملف رقمي ذكي',tap:'قرّب البطاقة للاتصال',
    software_label:'03 — برمجيات الأعمال',software_title:'برنامج أعمال<br><span>مصمم حسب احتياجاتك.</span>',software_text:'أدر المنتجات والمخزون والمبيعات والعملاء والعمليات من لوحة تحكم واحدة.',overview:'▦ نظرة عامة',products:'◫ المنتجات',sales:'↕ المبيعات',customers:'◉ العملاء',reports:'▤ التقارير',today:'اليوم',business_overview:'نظرة عامة على المشروع',revenue:'المداخيل',sales_metric:'المبيعات',low_stock:'مخزون منخفض',attention:'انتباه',sales_activity:'نشاط المبيعات',inventory_alert:'تنبيه المخزون',left:'متبقي',
    why_label:'04 — لماذا NEXORA',why_title:'حلول رقمية لها<br><span>هدف تجاري واضح.</span>',why_text:'لا نبني التقنية فقط لتبدو جميلة. كل حل نصممه ليجعل مشروعك أوضح وأسرع وأسهل في الاستخدام.',why1:'مصمم لمشروعك',why1t:'لا نقدم حلاً واحداً للجميع. نكيّف التجربة حسب نشاطك وعملائك.',why2:'انطباع احترافي',why2t:'تصميم عصري يساعد مشروعك على الظهور بثقة واحترافية.',why3:'سهل الاستخدام',why3t:'واجهات واضحة وأنظمة عملية حتى تركز على تسيير مشروعك.',why4:'قابل للتطور',why4t:'ابدأ بما تحتاجه اليوم وأضف أدوات رقمية جديدة مع نمو مشروعك.',
    work_label:'05 — أعمال مختارة',work_title:'حلول تجعل<br><span>الأعمال أفضل.</span>',work_text:'مجموعة متنامية من المواقع وتجارب NFC وبرمجيات الأعمال.',nfc_project:'ملف NFC',pos_project:'نظام POS',booking_project:'موقع حجز',menu_project:'قائمة رقمية',
    process_label:'06 — طريقة العمل',process_title:'عملية بسيطة.<br><span>نتائج احترافية.</span>',process_text:'طريق واضح من الفكرة إلى الحل الرقمي النهائي.',p1:'اكتشاف',p1t:'نفهم مشروعك وأهدافك وعملاءك واحتياجاتك.',p2:'تصميم',p2t:'نحدد الاتجاه البصري والبنية وتجربة المستخدم.',p3:'تطوير',p3t:'نبني الموقع أو الملف أو البرنامج ونربط الأنظمة.',p4:'إطلاق',p4t:'نختبر وننشر الحل ونساعدك على تطوير حضورك الرقمي.',
    faq_label:'07 — أسئلة شائعة',faq_title:'عندك أسئلة قبل<br><span>ما نبدأو؟</span>',faq_text:'بعض الأجوبة السريعة حول طريقة العمل وما يمكن أن نبنيه مع NEXORA.',q1:'ما نوع المواقع التي تبنونها؟',a1:'صفحات هبوط، مواقع شركات، متاجر إلكترونية، أنظمة حجز وتطبيقات ويب مخصصة.',q2:'هل يمكن تعديل ملف NFC لاحقاً؟',a2:'نعم. يمكن تحديث الملف الرقمي بدون تغيير بطاقة NFC نفسها.',q3:'هل يمكنكم بناء برنامج لمتجري أو مطعمي؟',a3:'نعم. يمكننا تصميم أنظمة البيع والمخزون والمبيعات والعملاء والتقارير حسب طريقة عملك.',q4:'هل يجب أن أعرف البرمجة؟',a4:'لا. نحن نتكفل بالجانب التقني ونشرح لك الأمور المهمة بطريقة بسيطة.',
    cta_label:'08 — لنبدأ',cta_title:'مستعد لبناء<br><span>شيء أفضل؟</span>',cta_text:'أخبرنا بما يحتاجه مشروعك وسنحوّل فكرتك إلى حل رقمي احترافي.',name_ph:'اسمك',contact_ph:'واتساب أو البريد الإلكتروني',message_ph:'اكتب لنا ما تحتاجه',opt_website:'موقع إلكتروني',opt_nfc:'ملف NFC',opt_software:'برنامج أعمال',opt_branding:'هوية رقمية',opt_other:'شيء آخر',send:'أرسل الطلب ↗',form_success:'شكراً — تم تجهيز طلبك. اربط الآن واتساب أو البريد الإلكتروني الحقيقي.',footer:'حلول رقمية للشركات المستعدة للتقدم.',rights:'جميع الحقوق محفوظة.'
  }
};

function storageGet(key, fallback){try{return localStorage.getItem(key)||fallback}catch(e){return fallback}}
function storageSet(key,value){try{localStorage.setItem(key,value)}catch(e){}}
function getText(dict,key){return dict[key] !== undefined ? dict[key] : null}

function applyLanguage(code){
  const lang = T[code] ? code : 'en';
  const dict = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dataset.lang = lang;
  $$('[data-i18n]').forEach(el=>{const value=getText(dict,el.dataset.i18n);if(value!==null)el.innerHTML=value});
  $$('[data-i18n-placeholder]').forEach(el=>{const value=getText(dict,el.dataset.i18nPlaceholder);if(value!==null)el.placeholder=value});
  const btn=$('#languageBtn'); if(btn) btn.textContent = lang==='ar' ? 'AR⌄' : `${lang.toUpperCase()}⌄`;
  storageSet('nexora-lang',lang);
}

const languageBtn=$('#languageBtn');
const languageMenu=$('#languageMenu');
if(languageBtn&&languageMenu){
  languageBtn.addEventListener('click',e=>{e.stopPropagation();languageMenu.classList.toggle('show')});
  $$('[data-lang]').forEach(button=>button.addEventListener('click',()=>{applyLanguage(button.dataset.lang);languageMenu.classList.remove('show')}));
  document.addEventListener('click',()=>languageMenu.classList.remove('show'));
}
applyLanguage(storageGet('nexora-lang','en'));

const mobileMenu=$('#mobileMenu');
const mobileNav=$('#mobileNav');
if(mobileMenu&&mobileNav){
  mobileMenu.addEventListener('click',()=>mobileNav.classList.toggle('open'));
  $$('.mobile-nav a').forEach(link=>link.addEventListener('click',()=>mobileNav.classList.remove('open')));
}

try{document.documentElement.classList.add('js-ready')}catch(e){}
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
  $$('.reveal').forEach(el=>observer.observe(el));
}else{$$('.reveal').forEach(el=>el.classList.add('visible'))}

const navbar=$('.navbar');
const updateNav=()=>{if(navbar)navbar.style.background=window.scrollY>35?'rgba(5,5,7,.94)':'rgba(5,5,7,.78)'};
window.addEventListener('scroll',updateNav,{passive:true});updateNav();

const contactForm=$('#contactForm');
const formNote=$('#formNote');
if(contactForm){
  contactForm.addEventListener('submit',event=>{
    event.preventDefault();
    const lang=document.documentElement.lang||'en';
    const name=$('#name')?.value.trim()||'';
    const contact=$('#contactInfo')?.value.trim()||'';
    const service=$('#serviceChoice')?.value||'';
    const message=$('#message')?.value.trim()||'';
    const labels={en:{website:'Website',nfc:'NFC Profile',software:'Business Software',branding:'Branding',other:'Other'},fr:{website:'Site Web',nfc:'Profil NFC',software:'Logiciel professionnel',branding:'Branding',other:'Autre'},ar:{website:'موقع إلكتروني',nfc:'ملف NFC',software:'برنامج أعمال',branding:'هوية رقمية',other:'شيء آخر'}};
    const serviceLabel=(labels[lang]||labels.en)[service]||service;
    const text=lang==='ar'
      ? `مرحبا NEXORA،\nالاسم: ${name}\nالخدمة: ${serviceLabel}\nالتواصل: ${contact}\nالطلب: ${message}`
      : lang==='fr'
      ? `Bonjour NEXORA,\nNom: ${name}\nService: ${serviceLabel}\nContact: ${contact}\nBesoin: ${message}`
      : `Hello NEXORA,\nName: ${name}\nService: ${serviceLabel}\nContact: ${contact}\nRequest: ${message}`;
    if(formNote)formNote.textContent=T[lang].form_success;
    window.open('https://wa.me/212699332502?text='+encodeURIComponent(text),'_blank','noopener');
  });
}

const year=$('#year');if(year)year.textContent=new Date().getFullYear();

$$('a[href^="#"]').forEach(link=>link.addEventListener('click',event=>{
  const targetId=link.getAttribute('href');
  if(!targetId||targetId==='#')return;
  const target=$(targetId);
  if(target){event.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}
}));


/* =========================================================
   NEXORA V4 — PREMIUM 3D TILT
   ========================================================= */
(function initHero3D(){
  const art = document.querySelector('.hero-art');
  const card = document.querySelector('.main-card');
  if(!art || !card) return;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

  let raf = 0;
  const reset = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      art.style.setProperty('--mx','50%');
      art.style.setProperty('--my','50%');
      card.style.setProperty('--rx','0deg');
      card.style.setProperty('--ry','0deg');
    });
  };

  art.addEventListener('pointermove', (e) => {
    const r = art.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const ry = (x - .5) * 12;
    const rx = (.5 - y) * 10;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      art.style.setProperty('--mx', `${Math.round(x*100)}%`);
      art.style.setProperty('--my', `${Math.round(y*100)}%`);
      card.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
      card.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
    });
  });
  art.addEventListener('pointerleave', reset);
  reset();
})();


/* =========================================================
   NEXORA — NFC PROFILE MICRO INTERACTIONS
   ========================================================= */
(function initNfcDemo(){
  const card=document.querySelector('.metal-card');
  const demo=document.querySelector('.nfc-demo');
  if(!card||!demo)return;
  const phone=document.querySelector('.realistic-phone');
  if(window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    demo.addEventListener('pointermove',e=>{
      const r=demo.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      card.style.setProperty('--card-rx',`${(-y*10).toFixed(2)}deg`);
      card.style.setProperty('--card-ry',`${(x*12).toFixed(2)}deg`);
      if(phone){phone.style.setProperty('--phone-rx',`${(-y*3).toFixed(2)}deg`);phone.style.setProperty('--phone-ry',`${(x*4).toFixed(2)}deg`);}
    });
    demo.addEventListener('pointerleave',()=>{card.style.setProperty('--card-rx','0deg');card.style.setProperty('--card-ry','0deg');if(phone){phone.style.setProperty('--phone-rx','0deg');phone.style.setProperty('--phone-ry','0deg');}});
  }
  const save=document.querySelector('.save-contact');
  if(save){save.addEventListener('click',()=>{
    const blob=new Blob([`BEGIN:VCARD\nVERSION:3.0\nFN:NEXORA\nTEL:+212699332502\nURL:https://mouh7229-afk.github.io/Jefe-Digital/\nEND:VCARD`],{type:'text/vcard'});
    const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='NEXORA-contact.vcf'; a.click(); URL.revokeObjectURL(url);
  });}
})();
