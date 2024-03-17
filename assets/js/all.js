// AOS Library
AOS.init();

// Handle Translate
const translations = {
  en: {
    // Navbar
    "nav-title1": "menu",
    "nav-item1": "home",
    "nav-item2": "about",
    "nav-item3": "services",
    "nav-item4": "our team",
    "nav-title2": "get in touch",
    "nav-item5": "contact us",
    "nav-item6": "get hired",
    "nav-title3": "get social",
    // Hero Section
    "hero-title": "Welcome to OIA",
    "hero-description1":
      "We're all about making your online presence shine. Whether you're just starting out or already a big player, we've got your back with fresh and creative strategies to get you noticed.",
    "hero-description2":
      "From social media to search engine smarts, we've got the tools and the team to help your business grow online.",
    "hero-description3": "Let's make magic happen together at OIA Media!",
    "hero-btn-text": "CONTACT THE TEAM",
    "hero-btn-description": "Schedule a FREE call now",
    // About Section
    "about-title": "TOTAL REVENUE GENERATED",
    "about-number": "$118 THOUSAND",
    "about-card1": "CLIENT HELPED",
    "about-card2": "TOTAL AD SPEND",
    "about-card3": "OFFICES",
    "about-card4": "SERVICES OFFER",
    "about-text": "ABOUT US",
    "about-description":
      "Our philosophy is simple yet powerful: we believe in the transformative potential of digital marketing to empower businesses of all sizes. We're committed to delivering excellence through a combination of creativity, innovation, and genuine care for our clients' success.",
    "about-notice": "Need a boost to your company ?",
    "about-btn-text": "CONTACT THE TEAM",
    "about-btn-description": "Schedule a FREE call now",
    // Features Section
    "features-title": "OH WAIT...",
    "features-description": "What do we provide ?",
    "features-item": "DIGITAL MARKETING",
    "features-item-description1":
      "At OIA Media, we specialize in digital marketing strategies that boost your online visibility and sales. Our expertise includes smart use of social media, effective SEO, and strategic paid advertising to help your business thrive in the digital world.",
    "features-item-description2":
      "We view our relationship with you as a partnership, customizing our approaches to meet your unique needs. This involves a sharp focus on paid ads, where we target your potential customers precisely to ensure that your investment yields maximum returns.",
    "features-item-description3":
      "Committed to your success, we aim to enhance your online presence and increase sales through a blend of organic and paid strategies. Let's collaborate to make your brand stand out and drive higher sales with effective digital marketing. Talking about Return on Ad Spend (ROAS), if we don't generate more sales than you spend, you get your money back — that's a guarantee.",
    "features-items-title": "Also we provide much more...",
    "features-items-description":
      "Of course your organization needs a stunning look, you just don’t worry about it, It’s on US!",
    "features-card1": "BRANDING",
    "features-card2": "WEB DEVELOPMENT",
    "features-card3": "CONTENT CREATION",
    "features-card4": "SOCIAL MEDIA MANAGEMENT",
    // Clients Section
    "clients-title": "Big name that trust us ",
    "clients-description":
      "We're honored to work with some of the biggest names in the industry who trust us to elevate their digital presence.",
    // Team Section
    "team-title": "MEET THE A-TEAM",
    "team-description1":
      "Dive into a world where unparalleled talent meets unmatched experience. Our A-Team is the core of our agency, boasting a collective 10 years of expertise across various industries. We're a dynamic group of visionaries, each selected for our unique skills and dedication to excellence.",
    "team-description2":
      "Our broad spectrum of knowledge empowers us to deliver innovative solutions that redefine standards. Whether it's digital marketing, business strategy, or creative execution, we're at the cutting edge, ensuring our clients not only keep pace but lead the pack.",
    "team-description3":
      "Partnering with us means joining forces with a team dedicated to your success. We blend collaboration with proven methods to turn challenges into triumphs.",
    "team-description4":
      "Experience the future of digital success with the A-Team.",
    // Contact Section
    "contact-card-title": "SCHEDULE A FREE CALL WITH OMAR",
    "contact-card-description":
      "By the end of this Audit call, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results online with Funnels & Paid Advertising.",
    "contact-items-title": "THIS CALL IS PERFECT FOR :",
    "contact-item1":
      "Businesses wanting to turn their website into a high-converting funnel using digital marketing.",
    "contact-item2":
      "Offline businesses ready to go online with effective digital marketing strategies.",
    "contact-item3":
      "Companies aiming to boost revenue with sales funnels and conversion optimization.",
    "contact-item4":
      "Those looking to improve conversion rates and order value through targeted paid ads.",
    "contact-item5":
      "Businesses seeking a reliable agency with expertise in digital marketing and paid advertising.",
    "contact-card-btn": "SCHEDULE A CALL NOW",
    // Opinions Section
    "opinion-title": "Client's opinions about us",
    "opinion-card1": "A great experience work with this team !",
    "opinion-card2": "A great experience work with this team !",
    "opinion-card3": "A great experience work with this team !",
    "opinion-card4": "A great experience work with this team !",
    // Services Page
    "services-title": "KNOW MORE ABOUT OUR SERVICES",
    "services-item1": "DIGITAL MARKETING",
    "services-item2": "BRANDING",
    "services-item3": "WEB DESIGN",
    "services-item4": "CONTENT CREATION",
    "services-item5": "SOCIAL MEDIA MARKETING",
    "services-item1-title": "DIGITAL MARKETING",
    "services-item1-description1":
      "In today's rapidly evolving digital landscape, our agency is committed to employing a multifaceted approach to effectively capture the attention of your target audience. At the heart of our strategy lies paid advertising, a dynamic tool that thrusts your brand into the spotlight and ensures instant visibility. By strategically placing ads on search engines and social media platforms, we leverage the power of pay-per-click (PPC) campaigns to drive targeted traffic to your website, delivering measurable results and a significant return on investment.",
    "services-item1-description2":
      "Complementing the immediacy provided by paid advertising, our content marketing approach is designed to build long-term relationships with your audience. Through the creation and distribution of valuable, relevant, and engaging content, we not only attract and retain a specific audience but also establish your brand as a thought leader in your industry. From informative articles to compelling videos and infographics, our content marketing strategy fosters a connection with your audience that goes beyond transactions, enhancing trust and loyalty.",
    "services-item1-description3":
      "Parallel to these efforts, our cold outreach marketing techniques provide a proactive approach to outreach, enabling us to explore new markets and attract potential customers who may not yet be aware of your brand. By crafting personalized messages and utilizing targeted email campaigns, we introduce your business to a wider audience, paving the way for new opportunities and growth. This strategic outreach ensures that your brand makes an unforgettable first impression, setting the stage for future interactions.",
    "services-item1-description4":
      "To amplify the reach of our content marketing and cold outreach efforts, our expertise in search engine marketing (SEM) plays a crucial role in boosting your online presence. By combining the power of search engine optimization (SEO) with paid advertising within the framework of SEM, we ensure your brand achieves prominent placement on search engine results pages. This dual approach not only increases immediate visibility through ads but also builds a sustainable online presence that continues to attract organic traffic over time.",
    "services-item1-description5":
      "Finally, at the core of our digital marketing strategy lies the power of paid advertising. This method provides the immediacy and precision essential for presenting your brand to the ideal audience at the most critical moments. Utilizing advanced platforms such as Google Ads, Facebook Ads, TikTok Ads, Snapchat Ads, and LinkedIn Ads, we design precisely targeted campaigns that resonate with your audience, guaranteed to deliver impactful results. Our approach is based on a deep understanding of the behaviors and needs of your target market, enabling us to create ads that effectively attract and encourage engagement.",
    "services-item1-description6":
      "By integrating paid advertising with other marketing strategies, we offer a robust pathway to achieving success in the contemporary digital market. Combining diverse tools and tactics ensures that your brand achieves the presence and impact necessary to meet and exceed its goals.",
    "services-item2-title": "BRANDING",
    "services-item2-description1":
      "In today's rapidly evolving digital landscape, our agency is committed to employing a multifaceted approach to effectively capture the attention of your target audience. At the heart of our strategy lies paid advertising, a dynamic tool that thrusts your brand into the spotlight and ensures instant visibility. By strategically placing ads on search engines and social media platforms, we leverage the power of pay-per-click (PPC) campaigns to drive targeted traffic to your website, delivering measurable results and a significant return on investment.",
    "services-item2-description2":
      "Complementing the immediacy provided by paid advertising, our content marketing approach is designed to build long-term relationships with your audience. Through the creation and distribution of valuable, relevant, and engaging content, we not only attract and retain a specific audience but also establish your brand as a thought leader in your industry. From informative articles to compelling videos and infographics, our content marketing strategy fosters a connection with your audience that goes beyond transactions, enhancing trust and loyalty.",
    "services-item2-description3":
      "Parallel to these efforts, our cold outreach marketing techniques provide a proactive approach to outreach, enabling us to explore new markets and attract potential customers who may not yet be aware of your brand. By crafting personalized messages and utilizing targeted email campaigns, we introduce your business to a wider audience, paving the way for new opportunities and growth. This strategic outreach ensures that your brand makes an unforgettable first impression, setting the stage for future interactions.",
    "services-item2-description4":
      "To amplify the reach of our content marketing and cold outreach efforts, our expertise in search engine marketing (SEM) plays a crucial role in boosting your online presence. By combining the power of search engine optimization (SEO) with paid advertising within the framework of SEM, we ensure your brand achieves prominent placement on search engine results pages. This dual approach not only increases immediate visibility through ads but also builds a sustainable online presence that continues to attract organic traffic over time.",
    "services-item2-description5":
      "Finally, at the core of our digital marketing strategy lies the power of paid advertising. This method provides the immediacy and precision essential for presenting your brand to the ideal audience at the most critical moments. Utilizing advanced platforms such as Google Ads, Facebook Ads, TikTok Ads, Snapchat Ads, and LinkedIn Ads, we design precisely targeted campaigns that resonate with your audience, guaranteed to deliver impactful results. Our approach is based on a deep understanding of the behaviors and needs of your target market, enabling us to create ads that effectively attract and encourage engagement.",
    "services-item2-description6":
      "By integrating paid advertising with other marketing strategies, we offer a robust pathway to achieving success in the contemporary digital market. Combining diverse tools and tactics ensures that your brand achieves the presence and impact necessary to meet and exceed its goals.",
    "services-item3-title": "WEB DESIGN",
    "services-item3-description1":
      "In today's rapidly evolving digital landscape, our agency is committed to employing a multifaceted approach to effectively capture the attention of your target audience. At the heart of our strategy lies paid advertising, a dynamic tool that thrusts your brand into the spotlight and ensures instant visibility. By strategically placing ads on search engines and social media platforms, we leverage the power of pay-per-click (PPC) campaigns to drive targeted traffic to your website, delivering measurable results and a significant return on investment.",
    "services-item3-description2":
      "Complementing the immediacy provided by paid advertising, our content marketing approach is designed to build long-term relationships with your audience. Through the creation and distribution of valuable, relevant, and engaging content, we not only attract and retain a specific audience but also establish your brand as a thought leader in your industry. From informative articles to compelling videos and infographics, our content marketing strategy fosters a connection with your audience that goes beyond transactions, enhancing trust and loyalty.",
    "services-item3-description3":
      "Parallel to these efforts, our cold outreach marketing techniques provide a proactive approach to outreach, enabling us to explore new markets and attract potential customers who may not yet be aware of your brand. By crafting personalized messages and utilizing targeted email campaigns, we introduce your business to a wider audience, paving the way for new opportunities and growth. This strategic outreach ensures that your brand makes an unforgettable first impression, setting the stage for future interactions.",
    "services-item3-description4":
      "To amplify the reach of our content marketing and cold outreach efforts, our expertise in search engine marketing (SEM) plays a crucial role in boosting your online presence. By combining the power of search engine optimization (SEO) with paid advertising within the framework of SEM, we ensure your brand achieves prominent placement on search engine results pages. This dual approach not only increases immediate visibility through ads but also builds a sustainable online presence that continues to attract organic traffic over time.",
    "services-item3-description5":
      "Finally, at the core of our digital marketing strategy lies the power of paid advertising. This method provides the immediacy and precision essential for presenting your brand to the ideal audience at the most critical moments. Utilizing advanced platforms such as Google Ads, Facebook Ads, TikTok Ads, Snapchat Ads, and LinkedIn Ads, we design precisely targeted campaigns that resonate with your audience, guaranteed to deliver impactful results. Our approach is based on a deep understanding of the behaviors and needs of your target market, enabling us to create ads that effectively attract and encourage engagement.",
    "services-item3-description6":
      "By integrating paid advertising with other marketing strategies, we offer a robust pathway to achieving success in the contemporary digital market. Combining diverse tools and tactics ensures that your brand achieves the presence and impact necessary to meet and exceed its goals.",
    "services-item4-title": "CONTENT CREATION",
    "services-item4-description1":
      "In today's rapidly evolving digital landscape, our agency is committed to employing a multifaceted approach to effectively capture the attention of your target audience. At the heart of our strategy lies paid advertising, a dynamic tool that thrusts your brand into the spotlight and ensures instant visibility. By strategically placing ads on search engines and social media platforms, we leverage the power of pay-per-click (PPC) campaigns to drive targeted traffic to your website, delivering measurable results and a significant return on investment.",
    "services-item4-description2":
      "Complementing the immediacy provided by paid advertising, our content marketing approach is designed to build long-term relationships with your audience. Through the creation and distribution of valuable, relevant, and engaging content, we not only attract and retain a specific audience but also establish your brand as a thought leader in your industry. From informative articles to compelling videos and infographics, our content marketing strategy fosters a connection with your audience that goes beyond transactions, enhancing trust and loyalty.",
    "services-item4-description3":
      "Parallel to these efforts, our cold outreach marketing techniques provide a proactive approach to outreach, enabling us to explore new markets and attract potential customers who may not yet be aware of your brand. By crafting personalized messages and utilizing targeted email campaigns, we introduce your business to a wider audience, paving the way for new opportunities and growth. This strategic outreach ensures that your brand makes an unforgettable first impression, setting the stage for future interactions.",
    "services-item4-description4":
      "To amplify the reach of our content marketing and cold outreach efforts, our expertise in search engine marketing (SEM) plays a crucial role in boosting your online presence. By combining the power of search engine optimization (SEO) with paid advertising within the framework of SEM, we ensure your brand achieves prominent placement on search engine results pages. This dual approach not only increases immediate visibility through ads but also builds a sustainable online presence that continues to attract organic traffic over time.",
    "services-item4-description5":
      "Finally, at the core of our digital marketing strategy lies the power of paid advertising. This method provides the immediacy and precision essential for presenting your brand to the ideal audience at the most critical moments. Utilizing advanced platforms such as Google Ads, Facebook Ads, TikTok Ads, Snapchat Ads, and LinkedIn Ads, we design precisely targeted campaigns that resonate with your audience, guaranteed to deliver impactful results. Our approach is based on a deep understanding of the behaviors and needs of your target market, enabling us to create ads that effectively attract and encourage engagement.",
    "services-item4-description6":
      "By integrating paid advertising with other marketing strategies, we offer a robust pathway to achieving success in the contemporary digital market. Combining diverse tools and tactics ensures that your brand achieves the presence and impact necessary to meet and exceed its goals.",
    "services-item5-title": "SOCIAL MEDIA MARKETING",
    "services-item5-description1":
      "In today's rapidly evolving digital landscape, our agency is committed to employing a multifaceted approach to effectively capture the attention of your target audience. At the heart of our strategy lies paid advertising, a dynamic tool that thrusts your brand into the spotlight and ensures instant visibility. By strategically placing ads on search engines and social media platforms, we leverage the power of pay-per-click (PPC) campaigns to drive targeted traffic to your website, delivering measurable results and a significant return on investment.",
    "services-item5-description2":
      "Complementing the immediacy provided by paid advertising, our content marketing approach is designed to build long-term relationships with your audience. Through the creation and distribution of valuable, relevant, and engaging content, we not only attract and retain a specific audience but also establish your brand as a thought leader in your industry. From informative articles to compelling videos and infographics, our content marketing strategy fosters a connection with your audience that goes beyond transactions, enhancing trust and loyalty.",
    "services-item5-description3":
      "Parallel to these efforts, our cold outreach marketing techniques provide a proactive approach to outreach, enabling us to explore new markets and attract potential customers who may not yet be aware of your brand. By crafting personalized messages and utilizing targeted email campaigns, we introduce your business to a wider audience, paving the way for new opportunities and growth. This strategic outreach ensures that your brand makes an unforgettable first impression, setting the stage for future interactions.",
    "services-item5-description4":
      "To amplify the reach of our content marketing and cold outreach efforts, our expertise in search engine marketing (SEM) plays a crucial role in boosting your online presence. By combining the power of search engine optimization (SEO) with paid advertising within the framework of SEM, we ensure your brand achieves prominent placement on search engine results pages. This dual approach not only increases immediate visibility through ads but also builds a sustainable online presence that continues to attract organic traffic over time.",
    "services-item5-description5":
      "Finally, at the core of our digital marketing strategy lies the power of paid advertising. This method provides the immediacy and precision essential for presenting your brand to the ideal audience at the most critical moments. Utilizing advanced platforms such as Google Ads, Facebook Ads, TikTok Ads, Snapchat Ads, and LinkedIn Ads, we design precisely targeted campaigns that resonate with your audience, guaranteed to deliver impactful results. Our approach is based on a deep understanding of the behaviors and needs of your target market, enabling us to create ads that effectively attract and encourage engagement.",
    "services-item5-description6":
      "By integrating paid advertising with other marketing strategies, we offer a robust pathway to achieving success in the contemporary digital market. Combining diverse tools and tactics ensures that your brand achieves the presence and impact necessary to meet and exceed its goals.",
    // Contact Page
    "contact-title": "Contact through",
    "contact-whatsapp": "WhatsApp",
    "contact-whatsapp-description":
      "Easiest way to reach the team and schedule a meeting",
    "contact-form-notice":
      "( Our recommendation for a more professional meeting )",
    "contact-form-title": "Would you let us know more about you ?",
    "contact-form-description":
      "Briefly, Introduce yourself through those next fields",
    "contact-field1-title": "Personal information",
    "contact-field1-input1": "Name",
    "contact-field1-input2": "Phone Number",
    "contact-field1-input3": "Email",
    "contact-field1-input4": "Instagram username ( optional )",
    "contact-field2-title": "About your company / organization",
    "contact-field2-input1": "Company name",
    "contact-field2-input2": "Company Scale",
    "contact-field2-input2-option1": "1 Employee",
    "contact-field2-input2-option2": "1 Employee",
    "contact-field2-input2-option3": "1 Employee",
    "contact-field2-input2-option4": "1 Employee",
    "contact-field2-input3": "Company Industry",
    "contact-field2-input4": "Company Recent Sales",
    "contact-field2-input4-option1": "1 Employee",
    "contact-field2-input4-option2": "1 Employee",
    "contact-field2-input4-option3": "1 Employee",
    "contact-field2-input4-option4": "1 Employee",
    "contact-field2-input5": "Choose your country",
    "contact-field2-input6": "Website URL ( optional )",
    "contact-field2-input7": "Instagram username ( optional )",
    "contact-field2-input8": "Is your company registered ?",
    "contact-field2-input8-option1": "No",
    "contact-field2-input8-option2": "Yes",
    "contact-checkbox-title": "Pick the services you are looking for !",
    "contact-checkbox-description": "You can choose more than one service ",
    "contact-date-title": "Pick a date you'd like to meet on",
    "contact-date-description": "Enter a subtitle date based on your schedule",
    "contact-form-btn": "Confirm Your Meeting",
    "contact-team-title": "Wanna know more about our team !",
    "contact-member1":
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae. Aliquid consequatur minus quidem nostrum amet laboriosam culpa aspernatur commodi dicta, ratione delectus dolore tenetur laudantium, nihil obcaecati saepe exercitationem, pariatur eaque sapiente? Expedita architecto dolore explicabo rem consequuntur suscipit?",
    "contact-member2":
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae. Aliquid consequatur minus quidem nostrum amet laboriosam culpa aspernatur commodi dicta, ratione delectus dolore tenetur laudantium, nihil obcaecati saepe exercitationem, pariatur eaque sapiente? Expedita architecto dolore explicabo rem consequuntur suscipit?",
    "contact-member3":
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae. Aliquid consequatur minus quidem nostrum amet laboriosam culpa aspernatur commodi dicta, ratione delectus dolore tenetur laudantium, nihil obcaecati saepe exercitationem, pariatur eaque sapiente? Expedita architecto dolore explicabo rem consequuntur suscipit?",
    "contact-member4":
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae. Aliquid consequatur minus quidem nostrum amet laboriosam culpa aspernatur commodi dicta, ratione delectus dolore tenetur laudantium, nihil obcaecati saepe exercitationem, pariatur eaque sapiente? Expedita architecto dolore explicabo rem consequuntur suscipit?",
    "contact-member5":
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae. Aliquid consequatur minus quidem nostrum amet laboriosam culpa aspernatur commodi dicta, ratione delectus dolore tenetur laudantium, nihil obcaecati saepe exercitationem, pariatur eaque sapiente? Expedita architecto dolore explicabo rem consequuntur suscipit?",
    // Hire Page
    "hire-title": "Become a member of our team now !",
    "hire-description": "Fill the form below to join our team",
    "hire-input1": "Name",
    "hire-input2": "Date Of Birth ",
    "hire-input3": "Gender",
    "hire-input3-option1": "Male",
    "hire-input3-option2": "Female",
    "hire-input4": "Your Position",
    "hire-input5": "Years Of Experience",
    "hire-input5-option1": "Less Than 1 year",
    "hire-input5-option2": "1 year",
    "hire-input5-option3": "2 year",
    "hire-input5-option4": "3 year",
    "hire-input5-option5": "More than 3 years",
    "hire-btn": "Send your data",
    // Footer
    "footer-title": "We do grant things together !",
    "footer-description":
      "If you want to speak to our expert team kindly reach us via email at: oiamediaofficial@gmail.com",
    "footer-btn1-text": "CONTACT THE TEAM",
    "footer-btn1-description": "Schedule a FREE call now",
    "footer-divider": "or",
    "footer-btn2-text": "GET HIRED",
    "footer-btn2-description": "Join our team now",
    "footer-number": "Company number",
    "footer-rights": "© All rights reserved.",
  },
  ar: {
    // Navbar
    "nav-title1": "قائمة",
    "nav-item1": "الصفحة الرئيسية",
    "nav-item2": "من نحن ؟",
    "nav-item3": "المميزات",
    "nav-item4": "تعرف علي الفريق",
    "nav-title2": "كن متواصل",
    "nav-item5": "تواصل معنا",
    "nav-item6": "قدم معنا",
    "nav-title3": "منصات التواصل الإجتماعي",
    "nav-item7": "",
    "nav-item8": "",
    "nav-item9": "",
    "nav-item10": "",
    "nav-item11": "",
    "nav-item12": "",
    // Hero Section
    "hero-title": "مرحبا بك في أويا",
    "hero-description1":
      "نحن هنا لنضمن تألق حضورك على الإنترنت وزيادة مبيعاتك. بفضل خبراتنا في استراتيجيات التسويق الإبداعية واستخدامنا لأحدث الأدوات، سنساعدك سواء كنت في بداية الطريق أو كنت من اللاعبين الكبار",
    "hero-description2":
      "نقدم حلولا مخصصة تجمع بين تعزيز الوجود على وسائل التواصل الاجتماعي والذكاء في محركات البحث لتحقيق نمو عملك وتحسين مبيعاتك، مع التركيز على الوصول للجمهور المناسب وتحقيق النجاح في السوق التنافسي",
    "hero-description3": "هيا لنصنع السحر معًا في أويا ميديا",
    "hero-btn-text": "تواصل مع الفريق",
    "hero-btn-description": "رتب استشارة مجانية الان",
    // About Section
    "about-title": "إجمالي الإيرادات التي تم توليدها للعملاء",
    "about-number": "١١٨ ألف دولار",
    "about-card1": "عدد العملاء السعداء",
    "about-card2": "إجمالي الإنفاق الإعلاني",
    "about-card3": "عدد المكاتب",
    "about-card4": "عدد الخدمات التي نقدمها",
    "about-text": "نبذة عننا",
    "about-description":
      "فلسفتنا بسيطة ولكنها قوية: نحن نؤمن بالقدرة التحويلية للتسويق الرقمي في تمكين الأعمال التجارية من جميع الأحجام نحن ملتزمون بتقديم التميز من خلال مزيج من الإبداع الابتكار، والاهتمام الحقيقي بنجاح عملائنا",
    "about-notice": "هل تحتاج إلى تعزيز لمبيعات شركتك؟",
    "about-btn-text": "تواصل مع الفريق",
    "about-btn-description": "رتب استشارة مجانية الان",
    // Features Section
    "features-title": "مهلًا انتظر ...",
    "features-description": "ماذا نقدم؟",
    "features-item": "التسويق الإلكتروني",
    "features-item-description1":
      "في أويا ميديا، نحن متخصصون في استراتيجيات التسويق الرقمي التي تعزز من ظهورك على الإنترنت وتزيد من مبيعاتك. تتضمن تخصصاتنا استخدام وسائل التواصل الاجتماعي بذكاء، تحسين بفعالية، والإعلانات (SEO) محركات البحث المدفوعة الاستراتيجية لمساعدة عملك على النمو في عالم الديجيتال",
    "features-item-description2":
      "ننظر إلى علاقتنا بك كشراكة، حيث نقوم بتخصيص مقارباتنا لتلبية احتياجاتك الفريدة. هذا يشمل تركيزا حادًا على الإعلانات المدفوعة، حيث نستهدف عملاءك المحتملين بدقة لضمان أن يحقق استثمارك أقصى عوائد",
    "features-item-description3":
      "ملتزمون بنجاحك، نهدف إلى تعزيز حضورك على الإنترنت وزيادة المبيعات من خلال مزيج من الاستراتيجيات العضوية والمدفوعة. دعونا نتعاون لجعل علامتك التجارية تبرز ولدفع المبيعات للأعلى من خلال التسويق الرقمي الفعّال نتحدث عن وما بين ذلك، (ROAS) العائد على الإنفاق الإعلاني وإذا لم نحقق لك مبيعات أكثر مما أنفقت * فستسترد أموالك، هذا وعد منا",
    "features-items-title": "كما نقدم الكثير غير ذلك",
    "features-items-description":
      "بالطبع، تحتاج مؤسستك إلى مظهر مذهل، لا داعي اللقلق بشأن ذلك، فالأمر متروك لنا",
    "features-card1": "الهوية البصرية",
    "features-card2": "تصميم الويب",
    "features-card3": "إنشاء المحتوى",
    "features-card4": "إدارة وسائل التواصل الاجتماعي",
    // Clients Section
    "clients-title": "أسماء كبيرة تثق فينا",
    "clients-description":
      "نتشرف بالعمل مع بعض من أكبر الأسماء في المجال الذين يثقوا بنا للارتقاء بوجودهم الالكتروني",
    // Team Section
    "team-title": "مرحبًا بكم في فريق النخبة",
    "team-description1":
      "انغمس في عالم حيث يلتقي الموهبة لا مثيل لها بخبرة لا تضاهى فريقنا هو جوهر وكالتنا، حيث يفخر بخبرة جماعية تصل إلى 10 سنوات عبر صناعات متنوعة. نحن مجموعة ديناميكية من الرؤى كل منا تم اختياره لمهاراته الفريدة وتفانيه في التميز",
    "team-description2":
      "يمنحنا هذا الطيف الواسع من المعرفة القدرة على تقديم حلول مبتكرة تعيد تعريف المعايير. سواء كان التسويق الرقمي استراتيجية الأعمال، أو التنفيذ الإبداعي، نحن في طليعة الصناعة، نضمن لعملائنا ليس فقط مواكبة الركب بل تصدره",
    "team-description3":
      "الشراكة معنا تعني الانضمام إلى قوى مع فريق مكرس النجاحك. نحن نمزج التعاون مع الأساليب المثبتة لتحويل التحديات إلى انتصارات",
    "team-description4": "تجربة مستقبل النجاح الرقمي مع فريق النخبة",
    // Contact Section
    "contact-title": "احجز مكالمة مجانية الان مع عمر",
    "contact-description":
      "بحلول نهاية هذا المكالمة التوضيحية، ستكون قد حصلت على فهم شامل للخطوات العملية التي يمكن لعملك تنفيذها لتحقيق نتائج ثابتة وموثوقة عبر الإنترنت من خلال التسويق الرقمى الاستراتيجي. سنستكشف استخدام القنوات الفعّالة والإعلان المدفوع، مزودين إياك بخارطة طريق واضحة لتعزيز استراتيجيات التسويق الرقمى الخاصة بك",
    "contact-items-title": "من تناسب هذه المكالمة ؟",
    "contact-item1":
      "الشركات التي ترغب في تحويل موقعها الإلكتروني إلى قمع تحويل عالي باستخدام التسويق الرقمي",
    "contact-item2":
      "الشركات التقليدية المستعدة للانتقال إلى العالم الرقمي بإستراتيجيات تسويق رقمي فعالة",
    "contact-item3":
      "الشركات التي تهدف إلى زيادة الإيرادات من خلال قمع المبيعات وتحسين معدلات التحويل",
    "contact-item4":
      "الأشخاص الذين يتطلعون إلى تحسين معدلات التحويل وقيمة الطلب من خلال الإعلانات المدفوعة المستهدفة",
    "contact-item5":
      "الشركات التي تبحث عن وكالة موثوقة ذات خبرة في التسويق الرقمي والإعلان المدفوع",
    "contact-card-btn": "احجز مكالمة الان",
    // Opinions Section
    "opinion-title": "آراء العملاء",
    "opinion-card1": "تجربة ممتازة في التعامل مع هذه الشركة",
    "opinion-card2": "تجربة ممتازة في التعامل مع هذه الشركة",
    "opinion-card3": "تجربة ممتازة في التعامل مع هذه الشركة",
    "opinion-card4": "تجربة ممتازة في التعامل مع هذه الشركة",
    // Services Page
    "services-title": "1",
    "services-item1": "1",
    "services-item2": "1",
    "services-item3": "1",
    "services-item4": "1",
    "services-item5": "1",
    "services-item1-title": "1",
    "services-item1-description1": "1",
    "services-item1-description2": "1",
    "services-item1-description3": "1",
    "services-item1-description4": "1",
    "services-item1-description5": "1",
    "services-item1-description6": "1",
    "services-item2-title": "1",
    "services-item2-description1": "1",
    "services-item2-description2": "1",
    "services-item2-description3": "1",
    "services-item2-description4": "1",
    "services-item2-description5": "1",
    "services-item2-description6": "1",
    "services-item3-title": "1",
    "services-item3-description1": "1",
    "services-item3-description2": "1",
    "services-item3-description3": "1",
    "services-item3-description4": "1",
    "services-item3-description5": "1",
    "services-item3-description6": "1",
    "services-item4-title": "1",
    "services-item4-description1": "1",
    "services-item4-description2": "1",
    "services-item4-description3": "1",
    "services-item4-description4": "1",
    "services-item4-description5": "1",
    "services-item4-description6": "1",
    "services-item5-title": "1",
    "services-item5-description1": "1",
    "services-item5-description2": "1",
    "services-item5-description3": "1",
    "services-item5-description4": "1",
    "services-item5-description5": "1",
    "services-item5-description6": "1",
    // Contact Page
    "contact-title": "تواصل معنا خلال ",
    "contact-whatsapp": "الواتس اب",
    "contact-whatsappdescription": "اسهل طريقة للتواصل مع الفريق لحجز موعد",
    "contact-form-notice": "( ترشيحنا لمقابلة أكثر احترافية )",
    "contact-form-title": "هل تخبرنا المزيد عنك ؟",
    "contact-form-description": "باختصار، قدم نفسك من خلال تلك الحقول التالية",
    "contact-field1-title": "بيانات شخصية",
    "contact-field1-input1": "الاسم",
    "contact-field1-input2": "رقم الهاتف",
    "contact-field1-input3": "البريد الإلكتروني",
    "contact-field1-input4": "اسم المستخدم انستغرام ( إختياري )",
    "contact-field2-title": "بيانات الشركة / المؤسسة",
    "contact-field2-input1": "اسم الشركة",
    "contact-field2-input2": "عدد الموظفين",
    "contact-field2-input2-option1": "1 موظف",
    "contact-field2-input2-option2": "1 موظف",
    "contact-field2-input2-option3": "1 موظف",
    "contact-field2-input2-option4": "1 موظف",
    "contact-field2-input3": "تخصص الشركة",
    "contact-field2-input4": "اخر المبيعات",
    "contact-field2-input4-option1": "1 موظف",
    "contact-field2-input4-option2": "1 موظف",
    "contact-field2-input4-option3": "1 موظف",
    "contact-field2-input4-option4": "1 موظف",
    "contact-field2-input5": "اختر الدولة",
    "contact-field2-input6": "رابط موقع الشركة ( إختياري )",
    "contact-field2-input7": "اسم المستخدم انستغرام ( إختياري )",
    "contact-field2-input8": "هل الشركة مسجلة ؟",
    "contact-field2-input8-option1": "لا",
    "contact-field2-input8-option2": "نعم",
    "contact-checkbox-title": "اختر الخدمات التي تبحث عنها !",
    "contact-checkbox-description": "يمكنك اختيار أكثر من خدمة",
    "contact-date-title": "اختر التاريخ الذي ترغب في اللقاء فيه",
    "contact-date-description": "أدخل تاريخ بناءً على الجدول الزمني الخاص بك",
    "contact-form-btn": "تأكيد حجز المقابلة",
    "contact-team-title": "هل تريد معرفة المزيد عن فريقنا !",
    "contact-member1":
      "العميل نفسه، سيكون العميل قادرا على متابعة adipiscing للشركة. أن يتم التنصل من الملذات. هل هناك أي شيء ينتج، بل أقل منا، أن الذنب المضني يُرفض بكلمات الراحة، ويختاره العقل، ويتحمله ألم من يمدحه، ولا شيء يعميه التدريب المتكرر، ويتحمله الحكماء ؟ هل سيبذل المهندس المعماري جهدًا لشرح نتيجة المشروع؟",
    "contact-member2":
      "العميل نفسه، سيكون العميل قادرا على متابعة adipiscing للشركة. أن يتم التنصل من الملذات. هل هناك أي شيء ينتج، بل أقل منا، أن الذنب المضني يُرفض بكلمات الراحة، ويختاره العقل، ويتحمله ألم من يمدحه، ولا شيء يعميه التدريب المتكرر، ويتحمله الحكماء ؟ هل سيبذل المهندس المعماري جهدًا لشرح نتيجة المشروع؟",
    "contact-member3":
      "العميل نفسه، سيكون العميل قادرا على متابعة adipiscing للشركة. أن يتم التنصل من الملذات. هل هناك أي شيء ينتج، بل أقل منا، أن الذنب المضني يُرفض بكلمات الراحة، ويختاره العقل، ويتحمله ألم من يمدحه، ولا شيء يعميه التدريب المتكرر، ويتحمله الحكماء ؟ هل سيبذل المهندس المعماري جهدًا لشرح نتيجة المشروع؟",
    "contact-member4":
      "العميل نفسه، سيكون العميل قادرا على متابعة adipiscing للشركة. أن يتم التنصل من الملذات. هل هناك أي شيء ينتج، بل أقل منا، أن الذنب المضني يُرفض بكلمات الراحة، ويختاره العقل، ويتحمله ألم من يمدحه، ولا شيء يعميه التدريب المتكرر، ويتحمله الحكماء ؟ هل سيبذل المهندس المعماري جهدًا لشرح نتيجة المشروع؟",
    "contact-member5":
      "العميل نفسه، سيكون العميل قادرا على متابعة adipiscing للشركة. أن يتم التنصل من الملذات. هل هناك أي شيء ينتج، بل أقل منا، أن الذنب المضني يُرفض بكلمات الراحة، ويختاره العقل، ويتحمله ألم من يمدحه، ولا شيء يعميه التدريب المتكرر، ويتحمله الحكماء ؟ هل سيبذل المهندس المعماري جهدًا لشرح نتيجة المشروع؟",
    // Hire Page
    "hire-title": "1",
    "hire-description": "1",
    "hire-input1": "1",
    "hire-input2": "1",
    "hire-input3": "1",
    "hire-input3-option1": "1",
    "hire-input3-option2": "1",
    "hire-input4": "1",
    "hire-input5": "1",
    "hire-input5-option1": "1",
    "hire-input5-option2": "1",
    "hire-input5-option3": "1",
    "hire-input5-option4": "1",
    "hire-input5-option5": "1",
    "hire-btn": "1",
    // Footer
    "footer-title": "لنفعل الكثير سويا",
    "footer-description":
      "إذا أردت التحدث مع فريقنا يمكنك التواصل معنا عبر الايميل : oiamediaofficial@gmail.com",
    "footer-btn1-text": "تواصل مع الفريق",
    "footer-btn1-description": "رتب استشارة مجانية الان",
    "footer-divider": "أو",
    "footer-btn2-text": "احصل علي وظيفة",
    "footer-btn2-description": "انضم الينا الان",
    "footer-number": "رقم الشركة ",
    "footer-rights": "© جميع الحقوق محمية ومحفوظة",
  },
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[lang][key];
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

// Scroll UP
let scroll_up = document.getElementById("scroll-up");

scroll_up.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll_up.style.opacity = 1;
  } else {
    scroll_up.style.opacity = 0;
  }
}
window.addEventListener("scroll", scrollFunction);

// Scroll Indicator
function scrollIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
window.addEventListener("scroll", scrollIndicator);

// Prevent Inspector Tools

//- Disable right-click
// document.addEventListener("contextmenu", (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//   if (
//     event.keyCode === 123 ||
//     ctrlShiftKey(e, "I") ||
//     ctrlShiftKey(e, "J") ||
//     ctrlShiftKey(e, "C") ||
//     (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
//   )
//     return false;
// };
