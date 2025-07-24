// Simplified JavaScript for CMSC UI Stock Summit 2025 website

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');

      // Toggle icon
      const icon = menuToggle.querySelector('i');
      if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }
  // dark mode
  function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

  // Header scroll effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Simple form validation for registration
  const registrationForm = document.getElementById('registration-form');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simple validation
      let isValid = true;
      const requiredFields = registrationForm.querySelectorAll('[required]');

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }
      });

      // Handle form submission
      if (isValid) {
        // For demo purposes, just show success message
        const successMessage = document.getElementById('form-success');
        if (successMessage) {
          successMessage.style.display = 'block';
          registrationForm.reset();

          // Hide the message after 5 seconds
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        }
      }
    });
  }

  // Animation on scroll
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

  function checkIfInView() {
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  }

  // Initial check and add scroll listener
  checkIfInView();
  window.addEventListener('scroll', checkIfInView);
});

// === Chatbot Widget Logic ===
let chatbotFirstOpen = true;
window.toggleChatbot = function() {
  const widget = document.getElementById('chatbot-widget');
  widget.classList.toggle('chatbot-open');
  widget.classList.toggle('chatbot-closed');
  if (widget.classList.contains('chatbot-open') && chatbotFirstOpen) {
    const messages = document.getElementById('chatbot-messages');
    messages.innerHTML += `<div class="bot"><b>CMSC Assistant:</b> Hai! 👋 Aku CMSC Assistant, siap bantu info seputar Creative Marketing School Club UI. Mau tanya apa nih?\nKetik 'keluar' untuk tutup chat ya!`;
    messages.scrollTop = messages.scrollHeight;
    chatbotFirstOpen = false;
  }
}

window.sendMessage = function() {
  const input = document.getElementById('chatbot-input');
  const messages = document.getElementById('chatbot-messages');
  const userMsg = input.value.trim();
  if (!userMsg) return;
  messages.innerHTML += `<div class="user"><b>Kamu:</b> ${userMsg}</div>`;
  input.value = '';

  let botReply = '';
  const msg = userMsg.toLowerCase();

  if (msg === 'keluar') {
    botReply = 'Sip, sampai ketemu lagi di CMSC UI! Jangan lupa follow IG @cmsc.ui ya! 👋';
  } else if (msg.includes('cmsc') && (msg.includes('apa') || msg.includes('itu'))) {
    botReply = 'CMSC UI (Creative Marketing School Club) itu komunitas kece di UI buat kamu yang suka marketing, kreatif, dan event seru! Yuk join bareng kita! ✨';
  } else if (msg.includes('divisi')) {
    botReply = 'Di CMSC ada 4 divisi: Content Creator, Marketing, Event, dan Partnership. Mau tau detailnya?';
  } else if (msg.includes('content creator')) {
    botReply = 'Divisi Content Creator fokus bikin konten kreatif buat sosmed CMSC. Cocok buat kamu yang suka desain, nulis, atau editing!';
  } else if (msg.includes('marketing')) {
    botReply = 'Divisi Marketing tugasnya promosiin event dan branding CMSC. Suka campaign dan networking? Ini tempatnya!';
  } else if (msg.includes('event')) {
    botReply = 'Divisi Event ngurusin acara-acara seru CMSC, dari workshop sampai gathering. Paling rame dan solid!';
  } else if (msg.includes('partnership')) {
    botReply = 'Divisi Partnership cari relasi dan sponsor buat CMSC. Buat kamu yang suka negosiasi dan komunikasi!';
  } else if (msg.includes('daftar') || msg.includes('gabung') || msg.includes('join')) {
    botReply = 'Mau daftar CMSC? Gampang! Isi form pendaftaran di link bio IG @cmsc.ui atau DM aja ke Instagram kami. Ditunggu ya! 😉';
  } else if (msg.includes('kontak') || msg.includes('hubungi') || msg.includes('cp')) {
    botReply = 'Bisa DM Instagram @cmsc.ui atau email ke cmsc@ui.ac.id. Fast response kok!';
  } else if (msg.includes('jadwal') || msg.includes('acara') || msg.includes('event')) {
    botReply = 'Jadwal acara CMSC update terus! Cek info terbaru di IG @cmsc.ui biar nggak ketinggalan. 📅';
  } else if (msg.includes('instagram') || msg.includes('ig')) {
    botReply = 'Follow Instagram kita di @cmsc.ui buat info, konten, dan event seru lainnya!';
  } else if (msg.includes('siapa') || msg.includes('nama') || msg.includes('admin') || msg.includes('member') || msg.includes('staf')) {
    botReply = 'Maaf, aku nggak bisa share data pribadi staf/member CMSC. Kalau mau kenalan, join aja acaranya!';
  } else if (msg.includes('email')) {
    botReply = 'Email resmi CMSC: cmsc@ui.ac.id. Jangan ragu buat tanya-tanya!';
  } else if (msg.includes('terima kasih') || msg.includes('makasih')) {
    botReply = 'Sama-sama! Senang bisa bantu 😊';
  }  else if (msg.includes('cmsc') && (msg.includes('apa') || msg.includes('itu'))) {
  botReply = 'CMSC UI (Creative Marketing School Club) itu komunitas kece di UI buat kamu yang suka marketing, kreatif, dan event seru! Yuk join bareng kita! ✨';
} else if (msg.includes('apa itu acara stock summit cmsc ui')) {
  botReply = 'Stock Summit CMSC UI adalah seminar edukatif seputar pasar modal, investasi, dan financial literacy dari praktisi langsung!';
} else if (msg.includes('apa tujuan utama dari stock summit cmsc ui')) {
  botReply = 'Tujuan utama dari Stock Summit adalah untuk meningkatkan literasi finansial mahasiswa dan masyarakat umum tentang pasar modal.';
} else if (msg.includes('siapa saja pembicara dalam acara stock summit cmsc ui')) {
  botReply = 'Pembicara berasal dari investor profesional, analis keuangan, hingga content creator yang ahli di bidang pasar modal.';
} else if (msg.includes('kapan dan dimana stock summit cmsc ui diadakan')) {
  botReply = 'Stock Summit 2025 diadakan pada bulan september sampai dengan November.';
} else if (msg.includes('apakah peserta stock summit dapat sertifikat')) {
  botReply = 'Ya, peserta akan mendapatkan e-certificate resmi dari CMSC UI jika mengikuti perlombaannya.';
} else if (msg.includes('berapa biaya pendaftaran untuk ikut stock summit')) {
  botReply = 'Tenang, Stock Summit biasanya tidak dipungut biaya alias gratis!';
} else if (msg.includes('bagaimana cara mendaftar acara stock summit cmsc ui')) {
  botReply = 'Cukup kunjungi link di bio IG @cmsc.ui dan isi formulir pendaftaran yang tersedia.';
} else if (msg.includes('apakah acara stock summit terbuka untuk umum atau hanya mahasiswa ui')) {
  botReply = 'Acara ini terbuka untuk umum, jadi siapa pun bisa ikut walau bukan dari UI!';
} else if (msg.includes('apakah bisa ikut stock summit jika tidak punya pengetahuan tentang saham')) {
  botReply = 'Tentu bisa! Acara ini cocok untuk pemula maupun yang sudah paham tentang investasi.';
} else if (msg.includes('apakah stock summit akan diadakan secara online')) {
  botReply = 'Ya, Stock Summit juga tersedia secara online melalui Zoom untuk peserta luar daerah.';
} else if (msg.includes('apakah ada sesi tanya jawab di stock summit')) {
  botReply = 'Tentu! Akan ada sesi Q&A di akhir setiap materi yang disampaikan.';
} else if (msg.includes('berapa lama durasi stock summit cmsc ui berlangsung')) {
  botReply = 'Acara ini biasanya berlangsung selama 2-3 jam tergantung sesi dan pembicara.';
} else if (msg.includes('apakah bisa mendapatkan materi presentasi setelah acara')) {
  botReply = 'Iya, peserta akan mendapatkan file materi atau rangkuman melalui email atau grup peserta.';
} else if (msg.includes('apakah harus menyalakan kamera saat ikut stock summit online')) {
  botReply = 'Tidak wajib, tapi disarankan untuk menciptakan interaksi yang lebih aktif.';
} else if (msg.includes('apakah tersedia doorprize atau hadiah di stock summit')) {
  botReply = 'Ya! Ada kuis dan doorprize menarik untuk peserta yang aktif.';
} else if (msg.includes('apakah saya akan diundang ke grup setelah mendaftar stock summit')) {
  botReply = 'Benar, kamu akan diundang ke grup WhatsApp peserta untuk info dan koordinasi.';
} else if (msg.includes('apakah ada dresscode untuk mengikuti stock summit')) {
  botReply = 'Disarankan memakai outfit rapi dan sopan, terutama jika ikut sesi offline.';
} else if (msg.includes('apakah boleh mengajak teman kampus lain untuk ikut stock summit')) {
  botReply = 'Boleh banget! Acara ini terbuka untuk siapa saja, bukan cuma mahasiswa UI.';
} else if (msg.includes('apakah tersedia aftermovie dari acara stock summit')) {
  botReply = 'Ya! CMSC UI akan membagikan dokumentasi dan aftermovie melalui sosial media.';
} else if (msg.includes('bagaimana cara mendapatkan update terbaru tentang stock summit')) {
  botReply = 'Follow Instagram @cmsc.ui untuk info dan update seputar acara Stock Summit.';
} else if (msg.includes('cmsc') && (msg.includes('apa') || msg.includes('itu'))) {
  botReply = 'CMSC UI (Creative Marketing School Club) itu komunitas kece di UI buat kamu yang suka marketing, kreatif, dan event seru! Yuk join bareng kita! ✨';
}else if (msg.includes('apa tema besar stock summit tahun ini')) {
  botReply = 'Tema tahun ini adalah "Investasi Cerdas di Era Digital" yang membahas tren dan peluang di pasar modal modern.';
} else if (msg.includes('bagaimana cara mendapatkan e-sertifikat setelah ikut stock summit')) {
  botReply = 'Cukup ikuti seluruh sesi dan isi form feedback yang akan dibagikan di akhir acara.';
} else if (msg.includes('apakah stock summit cocok untuk mahasiswa non-ekonomi')) {
  botReply = 'Cocok banget! Materi disampaikan dengan bahasa yang mudah dipahami oleh semua jurusan.';
} else if (msg.includes('apakah stock summit akan membahas analisis teknikal dan fundamental')) {
  botReply = 'Ya! Materi akan membahas dasar-dasar analisis teknikal dan fundamental saham.';
} else if (msg.includes('apa perbedaan stock summit tahun ini dengan tahun sebelumnya')) {
  botReply = 'Tahun ini lebih banyak sesi interaktif dan pembicara baru dari berbagai sektor industri finansial.';
} else if (msg.includes('apakah ada sesi networking dengan pembicara di stock summit')) {
  botReply = 'Tentu! Kamu bisa tanya langsung atau berinteraksi melalui sesi Q&A dan breakout room.';
} else if (msg.includes('apakah bisa mendapat insight investasi jangka panjang di stock summit')) {
  botReply = 'Bisa! Salah satu topik utama Stock Summit membahas strategi investasi jangka panjang.';
} else if (msg.includes('bagaimana cara mengakses link zoom untuk stock summit')) {
  botReply = 'Link Zoom akan dibagikan melalui email atau grup WhatsApp peserta menjelang hari-H.';
} else if (msg.includes('apakah ada sesi khusus pemula dalam stock summit')) {
  botReply = 'Ya, akan ada sesi pengantar investasi bagi peserta yang baru mulai belajar tentang pasar modal.';
} else if (msg.includes('apakah saya bisa bertanya langsung ke pembicara saat stock summit')) {
  botReply = 'Tentu bisa! Setiap sesi akan menyediakan waktu khusus untuk pertanyaan dari peserta.';
} else if (msg.includes('apakah akan ada moderator dalam setiap sesi stock summit')) {
  botReply = 'Iya, tiap sesi akan dipandu oleh moderator dari CMSC UI agar diskusi lebih terarah.';
} else if (msg.includes('apakah boleh membagikan materi stock summit ke teman yang tidak ikut')) {
  botReply = 'Materi hanya untuk peserta terdaftar, tapi kamu bisa ajak temanmu ikut tahun depan!';
} else if (msg.includes('berapa jumlah peserta yang ikut stock summit tahun ini')) {
  botReply = 'Tahun ini kami menargetkan lebih dari 500 peserta dari seluruh Indonesia.';
} else if (msg.includes('apakah stock summit akan membahas saham syariah')) {
  botReply = 'Ya! Salah satu pembicara akan mengangkat topik investasi syariah di pasar modal.';
} else if (msg.includes('apakah ada sesi diskusi kelompok di stock summit')) {
  botReply = 'Ada breakout room untuk diskusi dan networking dengan sesama peserta.';
} else if (msg.includes('apakah stock summit cocok untuk investor berpengalaman')) {
  botReply = 'Ya, kami menghadirkan insight mendalam yang juga menarik untuk investor berpengalaman.';
} 
  else {
    botReply = 'Wah, aku belum punya info itu. Coba diliat di bagian info lomba dan seminar, dan jika masih ada yang ingin ditanyakan bisa menghubungi kami melalui email stocksummit.ui@gmail.com dan Instagram kami @cmsc.ui';
    
  }
  setTimeout(() => {
    messages.innerHTML += `<div class=\"bot\"><b>CMSC Assistant:</b> ${botReply}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }, 400);
}
function openChatbot() {
    document.getElementById('chatbot-body').style.display = 'flex';
    document.getElementById('close-btn').style.display = 'block';
}

function closeChatbot() {
    document.getElementById('chatbot-body').style.display = 'none';
    document.getElementById('close-btn').style.display = 'none';
}

function sendMessage() {
    console.log("Pesan dikirim");
}

