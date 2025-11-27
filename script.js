const books = [
  { title: "الخيميائي", author: "باولو كويلو", category: "روايات", pdf: "link1.pdf", img: "https://i.ibb.co/3RkCfsM/book1.jpg" },
  { title: "نظرية كل شيء", author: "ستيفن هوكينج", category: "علمي", pdf: "link2.pdf", img: "https://i.ibb.co/bFJbT1C/book2.jpg" },
  { title: "رجال من التاريخ", author: "علي الطنطاوي", category: "تاريخي", pdf: "link3.pdf", img: "https://i.ibb.co/QNkLB8K/book3.jpg" },
  { title: "فقه السيرة", author: "محمد الغزالي", category: "ديني", pdf: "link4.pdf", img: "https://i.ibb.co/sgFVKF8/book4.jpg" },
  { title: "عالم صوفي", author: "جوستاين غاردر", category: "روايات", pdf: "link5.pdf", img: "https://i.ibb.co/3z1xZbW/book5.jpg" }
];

let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

function showSignup() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('signup').style.display = 'block';
}

function showLogin() {
  document.getElementById('signup').style.display = 'none';
  document.getElementById('login').style.display = 'block';
}

function signup() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;

  if (email && pass) {
    localStorage.setItem('user', JSON.stringify({ email, pass }));
    alert('تم إنشاء الحساب بنجاح!');
    showLogin();
  } else {
    alert('يرجى إدخال جميع البيانات');
  }
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.email === email && user.pass === pass) {
    window.location.href = "home.html";
  } else {
    alert('بيانات الدخول غير صحيحة!');
  }
}

function displayBooks(list) {
  const container = document.getElementById('bookList');
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>لا توجد نتائج.</p>";
    return;
  }

  list.forEach((b, i) => {
    container.innerHTML += `
      <div class="book">
        <img src="${b.img}" alt="book">
        <h3>${b.title}</h3>
        <p>${b.author}</p>
        <button class="download" onclick="window.open('${b.pdf}')">تحميل PDF</button>
        <button class="fav" onclick="addFavorite(${i})">❤️</button>
      </div>
    `;
  });
}

function filterBooks(cat) {
  if (cat === 'all') displayBooks(books);
  else {
    const filtered = books.filter(b => b.category === cat);
    displayBooks(filtered);
  }
}

function addFavorite(index) {
  const book = books[index];
  // use a stable unique field for check (pdf)
  if (!favorites.find(f => f.pdf === book.pdf)) {
    favorites.push(book);
    localStorage.setItem('favorites', JSON.stringify(favorites)); // persist
    alert('تمت الإضافة إلى المفضلة ❤️');
  } else {
    alert('الكتاب موجود بالفعل في المفضلة');
  }
}

function showFavorites() {
  window.location.href = "favorites.html";
}

function removeFavorite(i) {
  favorites.splice(i, 1);
  localStorage.setItem('favorites', JSON.stringify(favorites)); // update storage
  renderFavorites();
}

function renderFavorites() {
  favorites = JSON.parse(localStorage.getItem('favorites') || '[]'); // reload in case page change
  const favList = document.getElementById('favList');
  if (!favList) return; // not on the favorites page

  favList.innerHTML = '';

  if (favorites.length === 0) {
    favList.innerHTML = "<p style='text-align:center;'>لا توجد كتب في المفضلة.</p>";
    return;
  }

  favorites.forEach((b, i) => {
    favList.innerHTML += `
      <div class="book">
        <img src="${b.img}" alt="book">
        <h3>${b.title}</h3>
        <p>${b.author}</p>
        <button class="download" onclick="window.open('${b.pdf}')">تحميل</button>
        <button class="remove" onclick="removeFavorite(${i})">حذف</button>
      </div>
    `;
  });
}

function backHome() {
  window.location.href = "home.html";
}

function enableSearch() {
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', function () {
    const query = this.value.trim().toLowerCase();
    const results = books.filter(b => b.title.toLowerCase().includes(query));
    displayBooks(results);
  });
}

