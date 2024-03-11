if (document.getElementById("contactPage")) {
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
      13: "هل تخبرنا المزيد عنك ؟",
      14: "باختصار، قدم نفسك من خلال تلك الحقول التالية",
      15: "بيانات شخصية",
      16: "الاسم",
      17: "رقم الهاتف",
      18: "البريد الإلكتروني",
      19: "اسم المستخدم انستغرام ( إختياري )",
      20: "بيانات الشركة / المؤسسة",
      21: "اسم الشركة",
      22: "عدد الموظفين",
      23: "1 موظف",
      24: "2 - 5 موظفين",
      25: "2 - 5 موظفين",
      26: "2 - 5 موظفين",
      27: "تخصص الشركة",
      28: "اخر المبيعات",
      29: "1 موظف",
      30: "2 - 5 موظفين",
      31: "2 - 5 موظفين",
      32: "2 - 5 موظفين",
      33: "اختر الدولة",
      34: "رابط موقع الشركة ( إختياري )",
      35: "اسم المستخدم انستغرام ( إختياري )",
      36: "هل الشركة مسجلة ؟",
      37: "لا",
      38: "نعم",
      39: "اختر الخدمات التي تبحث عنها !",
      40: "يمكنك اختيار أكثر من خدمة",
      41: "التسويق الإلكتروني",
      42: "العلامة التجارية",
      43: "تصميم الويب",
      44: "إدارة منصات التواصل",
      45: "صناعة المحتوي",
      46: "اختر التاريخ الذي ترغب في اللقاء فيه",
      47: "أدخل تاريخ بناءً على الجدول الزمني الخاص بك",
      48: "هل تريد معرفة المزيد عن فريقنا !",
      49: "العميل نفسه، سيكون العميل قادرا على متابعة adipiscing للشركة. أن يتم التنصل من الملذات. هل هناك أي شيء ينتج، بل أقل منا، أن الذنب المضني يُرفض بكلمات الراحة، ويختاره العقل، ويتحمله ألم من يمدحه، ولا شيء يعميه التدريب المتكرر، ويتحمله الحكماء ؟ هل سيبذل المهندس المعماري جهدًا لشرح نتيجة المشروع؟",
      50: "العميل نفسه، سيكون العميل قادرا على متابعة adipiscing للشركة. أن يتم التنصل من الملذات. هل هناك أي شيء ينتج، بل أقل منا، أن الذنب المضني يُرفض بكلمات الراحة، ويختاره العقل، ويتحمله ألم من يمدحه، ولا شيء يعميه التدريب المتكرر، ويتحمله الحكماء ؟ هل سيبذل المهندس المعماري جهدًا لشرح نتيجة المشروع؟",
      51: "العميل نفسه، سيكون العميل قادرا على متابعة adipiscing للشركة. أن يتم التنصل من الملذات. هل هناك أي شيء ينتج، بل أقل منا، أن الذنب المضني يُرفض بكلمات الراحة، ويختاره العقل، ويتحمله ألم من يمدحه، ولا شيء يعميه التدريب المتكرر، ويتحمله الحكماء ؟ هل سيبذل المهندس المعماري جهدًا لشرح نتيجة المشروع؟",
      52: "العميل نفسه، سيكون العميل قادرا على متابعة adipiscing للشركة. أن يتم التنصل من الملذات. هل هناك أي شيء ينتج، بل أقل منا، أن الذنب المضني يُرفض بكلمات الراحة، ويختاره العقل، ويتحمله ألم من يمدحه، ولا شيء يعميه التدريب المتكرر، ويتحمله الحكماء ؟ هل سيبذل المهندس المعماري جهدًا لشرح نتيجة المشروع؟",
      53: "العميل نفسه، سيكون العميل قادرا على متابعة adipiscing للشركة. أن يتم التنصل من الملذات. هل هناك أي شيء ينتج، بل أقل منا، أن الذنب المضني يُرفض بكلمات الراحة، ويختاره العقل، ويتحمله ألم من يمدحه، ولا شيء يعميه التدريب المتكرر، ويتحمله الحكماء ؟ هل سيبذل المهندس المعماري جهدًا لشرح نتيجة المشروع؟",
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
      13: "Would you let us know more about you ?",
      14: "Briefly, Introduce yourself through those next fields",
      15: "Personal information",
      16: "Name",
      17: "Phone Number",
      18: "Email",
      19: "Instagram username ( optional )",
      20: "About your company / organization",
      21: "Company name",
      22: "Company Scale",
      23: "1 Employee",
      24: "2 -5 Employee",
      25: "2 -5 Employee",
      26: "2 -5 Employee",
      27: "Company Industry",
      28: "Company Recent Sales",
      29: "1 Employee",
      30: "2 -5 Employee",
      31: "2 -5 Employee",
      32: "2 -5 Employee",
      33: "Choose your country",
      34: "Website URL ( optional )",
      35: "Instagram username ( optional )",
      36: "Is your company registered ?",
      37: "No",
      38: "Yes",
      39: "Pick the services you are looking for !",
      40: "You can choose more than one service ",
      41: "Digital Marketing",
      42: "Branding",
      43: "Web Design",
      44: "Social Media Management",
      45: "Content Creation",
      46: "Pick a date you'd like to meet on",
      47: "Enter a subtitle date based on your schedule",
      48: "Wanna know more about our team !",
      49: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae. Aliquid consequatur minus quidem nostrum amet laboriosam culpa aspernatur commodi dicta, ratione delectus dolore tenetur laudantium, nihil obcaecati saepe exercitationem, pariatur eaque sapiente? Expedita architecto dolore explicabo rem consequuntur suscipit?",
      50: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae. Aliquid consequatur minus quidem nostrum amet laboriosam culpa aspernatur commodi dicta, ratione delectus dolore tenetur laudantium, nihil obcaecati saepe exercitationem, pariatur eaque sapiente? Expedita architecto dolore explicabo rem consequuntur suscipit?",
      51: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae. Aliquid consequatur minus quidem nostrum amet laboriosam culpa aspernatur commodi dicta, ratione delectus dolore tenetur laudantium, nihil obcaecati saepe exercitationem, pariatur eaque sapiente? Expedita architecto dolore explicabo rem consequuntur suscipit?",
      52: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae. Aliquid consequatur minus quidem nostrum amet laboriosam culpa aspernatur commodi dicta, ratione delectus dolore tenetur laudantium, nihil obcaecati saepe exercitationem, pariatur eaque sapiente? Expedita architecto dolore explicabo rem consequuntur suscipit?",
      53: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, repudiandae. Aliquid consequatur minus quidem nostrum amet laboriosam culpa aspernatur commodi dicta, ratione delectus dolore tenetur laudantium, nihil obcaecati saepe exercitationem, pariatur eaque sapiente? Expedita architecto dolore explicabo rem consequuntur suscipit?",
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
    .getElementById("contact_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      btn.innerHTML = "Sending...";

      const serviceID = "default_service";
      const templateID = "template_z92j09i";

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          btn.innerHTML = "Confirm Your Meeting";
          alert("Your schedule meeting request was sent successfully");
        },
        (err) => {
          btn.innerHTML = "Confirm Your Meeting";
          alert(JSON.stringify(err));
        }
      );
    });

  let d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  let current_date = [year, month, day].join("-");

  document.getElementById("date").setAttribute("min", current_date + "T00:00");
}
