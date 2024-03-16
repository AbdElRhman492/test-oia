const translations = {
  ar: {
    // Landing Page
    1: "قائمة",
    2: "الصفحة الرئيسية",
    3: "من نحن ؟",
    4: "المميزات",
    5: "عملاؤنا",
    6: "تعرف علي الفريق",
    7: "احجز مكالمة",
    8: "الأراء",
    9: "قدم معنا",
    10: "كن متواصل",
    11: "تواصل معنا",
    12: "منصات التواصل الإجتماعي",
    13: "هل تريد أن تصبح عضو من الفريق الخاص بنا ؟",
    14: "قم بملئ البيانات للإنضمام لدينا",
    15: "الاسم",
    16: "تاريخ الميلاد",
    17: "الجنس",
    18: "ذكر",
    19: "انثي",
    20: "التخصص",
    21: "عدد سنين الخبرة",
    22: "أقل من سنة",
    23: "سنة واحدة",
    24: "سنتان",
    25: "3 سنوات",
    26: "أكثر من 3 سنوات",
    63: "لنفعل الكثير سويا",
    64: "إذا أردت التحدث مع فريقنا يمكنك التواصل معنا عبر الايميل : oiamediaofficial@gmail.com",
    65: "تواصل مع الفريق",
    66: "رتب استشارة مجانية الان",
    67: "أو",
    68: "احصل على وظيفة",
    69: "انضم إلينا الان",
    70: "جميع الحقوق محفوظة",
    71: "خدماتنا",
  },
  en: {
    // Landing Page
    1: "menu",
    2: "home",
    3: "about",
    4: "features",
    5: "our clients",
    6: "our team",
    7: "meet us",
    8: "opinions",
    9: "get hired",
    10: "get in touch",
    11: "contact us",
    12: "get social",
    13: "Become a member of our team now !",
    14: "Fill the form below to join our team",
    15: "Name",
    16: "Date Of Birth ",
    17: "Gender",
    18: "Male",
    19: "Female",
    20: "Your Profession",
    21: "Years Of Experience",
    22: "Less than 1 year",
    23: "1 year",
    24: "2 years",
    25: "3 years",
    26: "More than 3 years",
    63: "We do grant things together !",
    64: "If you want to speak to our expert team kindly reach us via email at: oiamediaofficial@gmail.com",
    65: "CONTACT THE TEAM",
    66: "Schedule a FREE call now",
    67: "or",
    68: "GET HIRED",
    69: "Join our team now",
    70: "All rights reserved",
    71: "Services",
  },
};

function switchLanguage(lang) {
  for (let i = 1; i <= 71; i++) {
    if (document.getElementById(i)) {
      document.getElementById(i).innerHTML = translations[lang][i];
    }
  }
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

const btn = document.getElementById("send");

emailjs.init("IsjXiWaK0vV30HFsm");

document
  .getElementById("hire_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.innerHTML = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_z92j09i";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.innerHTML = "Confirm Your Request";
        alert("Your job request was sent successfully");
      },
      (err) => {
        btn.innerHTML = "Confirm Your Request";
        alert(JSON.stringify(err));
      }
    );
  });
