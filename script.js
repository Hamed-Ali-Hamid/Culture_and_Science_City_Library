// كتب تجريبية
const books=[
  {title:"موسيقى",author:"جبران خليل جبران",category:"فنون",pdf:"https://foulabook.com/book/downloading/586998032",img:"https://foulabook.com/storage/photo/87363.2018-02-25.1519564759.PNG"},
  {title:"أينشتين والنسبية",author:"مصطفى محمود",category:"العلوم والطبيعة",pdf:"https://foulabook.com/book/downloading/168642777",img:"https://foulabook.com/storage/photo/27167.2018-03-26.1522081649.jpg"},
  {title:"رجال من التاريخ - المجلد الاول",author:"علي الطنطاوي",category:"تاريخ وجغرافيا",pdf:"https://foulabook.com/book/downloading/946528417",img:"https://foulabook.com/storage/photo/91655.2018-09-29.1538234945.jpg"},
  {title:"الإسلام: ما هو؟",author:"مصطفى محمود",category:"كتب دينية",pdf:"https://foulabook.com/book/downloading/575705456",img:"https://foulabook.com/storage/photo/67895.2018-03-27.1522169651.jpg"},
  {title:"وأخيراً اكتشفت السعادة",author:"عائض القرني",category:"تنمية بشرية",pdf:"https://foulabook.com/book/downloading/835416964",img:"https://foulabook.com/storage/photo/53626.2018-03-06.1520368092.jpg"},
  {title:"السيميائية وفلسفة اللغة",author:"أمبرتو إيكو",category:"لغة",pdf:"https://foulabook.com/book/downloading/480529598",img:"https://foulabook.com/storage/photo/12429.2018-09-27.1538044228.gif"},
  {title:"كلمة وكلمتين",author:"ساجد العبدلي",category:"صحافة وإعلام",pdf:"https://foulabook.com/book/downloading/528034006",img:"https://foulabook.com/storage/photo/20864.2019-06-25.1561487974.jpg"},
  {title:"البيم و البرمجة",author:"عمر سليم",category:"كتب علوم الهندسة",pdf:"https://foulabook.com/book/downloading/922454137",img:"https://foulabook.com/storage/photo/72071.2023-01-10.1673364017.png"},
  {title:"الطب النبوي",author:"شمس الدين ابن قيم الجوزية",category:"صحة وطب",pdf:"https://foulabook.com/book/downloading/979621345",img:"https://foulabook.com/storage/photo/57765.2018-12-18.1545138830.png"},
  {title:"آفاق الفن",author:"جبرا إبراهيم جبرا",category:"فنون",pdf:"https://foulabook.com/book/downloading/114659076",img:"https://foulabook.com/storage/photo/90397.2019-02-28.1551354662.jpg"},
  {title:"الثقوب السوداء",author:"ستيفن هوكينج",category:"العلوم والطبيعة",pdf:"https://foulabook.com/book/downloading/358949125",img:"https://foulabook.com/storage/photo/36129.2019-05-05.1557077283.jpg"},
  {title:"الحرب والسلام",author:"ليو تولستوي",category:"تاريخ وجغرافيا",pdf:"https://foulabook.com/book/downloading/558927366",img:"https://foulabook.com/storage/photo/37592.2018-09-11.1536672135.png"},
  {title:"رحلتي من الشك إلى الإيمان",author:"مصطفى محمود",category:"كتب دينية",pdf:"https://foulabook.com/book/downloading/853958219",img:"https://foulabook.com/storage/photo/23925.2018-03-26.1522079647.jpg"},
  {title:"مفتاح النجاح",author:"عائض القرني",category:"تنمية بشرية",pdf:"https://foulabook.com/book/downloading/463228902",img:"https://foulabook.com/storage/photo/62580.2018-03-06.1520368704.jpg"},
  {title:"أن نقول الشيء نفسه تقريباً",author:"أمبرتو إيكو",category:"لغة",pdf:"https://foulabook.com/book/downloading/615539355",img:"https://foulabook.com/storage/photo/75337.2018-09-27.1538044264.jpg"},
  {title:"حوارات من أجل المستقبل",author:"طه عبد الرحمن",category:"صحافة وإعلام",pdf:"https://foulabook.com/book/downloading/677774034",img:"https://foulabook.com/storage/photo/63068.2019-06-16.1560696041.jpg"},
  {title:"معايير تصميم المساجد",author:"مجموعة من المؤلفين",category:"كتب علوم الهندسة",pdf:"https://foulabook.com/book/downloading/383454261",img:"https://foulabook.com/storage/photo/78416.2023-02-22.1677024466.png"},
  {title:"الشفاء",author:"ابن سينا",category:"صحة وطب",pdf:"https://foulabook.com/book/downloading/221846557",img:"https://foulabook.com/storage/photo/32279.2019-06-30.1561893324.jpg"},
];

let favorites=[],currentUser=null;
const defaultAvatar="https://i.ibb.co/Qc7G9bM/default-avatar.png";
const sections=["login","signup","home","profile","favorites"];

function showSection(id){
  sections.forEach(s=>{
    const el=document.getElementById(s);
    if(el) el.style.display=(s===id?"block":"none");
  });
  if(id==="favorites") renderFavorites();
}
function validEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);}
function validAge(a){a=parseInt(a,10);return!isNaN(a)&&a>=10&&a<=100;}

function showSignup(){showSection("signup");}
function showLogin(){showSection("login");}

// إنشاء حساب
function signup(){
  const f=document.getElementById('firstName').value.trim();
  const l=document.getElementById('lastName').value.trim();
  const a=document.getElementById('age').value.trim();
  const e=document.getElementById('email').value.trim();
  const p=document.getElementById('password').value;
  const c=document.getElementById('confirmPassword').value;

  if(!f||!l||!a||!e||!p||!c){alert("أكمل كل البيانات");return;}
  if(!validAge(a)){alert("العمر من 10 إلى 100");return;}
  if(!validEmail(e)){alert("إيميل غير صحيح");return;}
  if(p!==c){alert("كلمتا المرور غير متطابقتين");return;}

  const user={firstName:f,lastName:l,age:a,email:e,pass:p,profileImg:null};
  localStorage.setItem("user",JSON.stringify(user));
  alert("تم إنشاء الحساب");
  showLogin();
}

// تسجيل الدخول
function login(){
  const e=document.getElementById('loginEmail').value.trim();
  const p=document.getElementById('loginPass').value;
  const user=JSON.parse(localStorage.getItem("user")||"null");

  if(user&&user.email===e&&user.pass===p){
    currentUser=user;
    showSection("home");
    document.getElementById("navProfileImg").src=user.profileImg||defaultAvatar;
    displayBooks(books);
    enableSearch();
  }else alert("بيانات الدخول غير صحيحة");
}

// تسجيل الخروج
function logout(){
  currentUser=null;
  document.getElementById("navProfileImg").src=defaultAvatar;
  showSection("login");
}

// عرض الكتب
function displayBooks(list){
  const box=document.getElementById("bookList");
  box.innerHTML="";
  if(!list.length){box.innerHTML="<p>لا توجد نتائج.</p>";return;}
  list.forEach((b,i)=>{
    box.innerHTML+=`
      <div class="book">
        <img src="${b.img}">
        <h3>${b.title}</h3>
        <p>${b.author}</p>
        <button class="download" onclick="window.open('${b.pdf}')">تحميل PDF</button>
        <button class="fav" onclick="addFavorite(${i})">❤</button>
      </div>`;
  });
}

// تصفية حسب الفئة
function filterBooks(cat){
  if(cat==="all")displayBooks(books);
  else displayBooks(books.filter(b=>b.category===cat));
}

// المفضلة
function addFavorite(i){
  const b=books[i];
  if(!favorites.includes(b)){favorites.push(b);alert("أضيفت للمفضلة");}
  else alert("موجودة بالفعل");
}
function renderFavorites(){
  const box=document.getElementById("favList");
  box.innerHTML="";
  if(!favorites.length){box.innerHTML="<p>لا توجد كتب في المفضلة.</p>";return;}
  favorites.forEach((b,i)=>{
    box.innerHTML+=`
      <div class="book">
        <img src="${b.img}">
        <h3>${b.title}</h3>
        <p>${b.author}</p>
        <button class="download" onclick="window.open('${b.pdf}')">تحميل</button>
        <button class="remove" onclick="removeFavorite(${i})">حذف</button>
      </div>`;
  });
}
function removeFavorite(i){
  favorites.splice(i,1);
  renderFavorites();
}

// الملف الشخصي
function showProfile(){
  if(!currentUser){
    const u=localStorage.getItem("user");
    if(u)currentUser=JSON.parse(u);
  }
  if(!currentUser){alert("سجّل الدخول أولاً");return;}

  document.getElementById("pFirstName").value=currentUser.firstName||"";
  document.getElementById("pLastName").value=currentUser.lastName||"";
  document.getElementById("pAge").value=currentUser.age||"";
  document.getElementById("pEmail").value=currentUser.email||"";
  document.getElementById("pPassword").value=currentUser.pass||"";
  document.getElementById("profileImgPreview").src=currentUser.profileImg||defaultAvatar;

  showSection("profile");
}

function saveProfile(){
  if(!currentUser){alert("خطأ في المستخدم");return;}

  const f=document.getElementById("pFirstName").value.trim();
  const l=document.getElementById("pLastName").value.trim();
  const a=document.getElementById("pAge").value.trim();
  const e=document.getElementById("pEmail").value.trim();
  const p=document.getElementById("pPassword").value;

  if(!f||!l||!a||!e||!p){alert("أكمل كل الحقول");return;}
  if(!validAge(a)){alert("العمر من 10 إلى 100");return;}
  if(!validEmail(e)){alert("إيميل غير صحيح");return;}

  currentUser={...currentUser,firstName:f,lastName:l,age:a,email:e,pass:p};
  localStorage.setItem("user",JSON.stringify(currentUser));
  document.getElementById("navProfileImg").src=currentUser.profileImg||defaultAvatar;
  alert("تم الحفظ");
}

// صورة البروفايل
function changeProfileImage(ev){
  const file=ev.target.files[0];
  if(!file)return;
  const r=new FileReader();
  r.onload=e=>{
    const imgData=e.target.result;
    document.getElementById("profileImgPreview").src=imgData;
    if(!currentUser){
      const u=localStorage.getItem("user");
      currentUser=u?JSON.parse(u):{};
    }
    currentUser.profileImg=imgData;
    localStorage.setItem("user",JSON.stringify(currentUser));
    document.getElementById("navProfileImg").src=imgData;
  };
  r.readAsDataURL(file);
}

// بحث
function enableSearch(){
  const s=document.getElementById("search");
  if(!s)return;
  s.addEventListener("input",function(){
    const q=this.value.trim().toLowerCase();
    displayBooks(books.filter(b=>b.title.toLowerCase().includes(q)));
  });
}
