function showSection(sectionId) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}
function renderFiles() {
  const fileList = JSON.parse(localStorage.getItem('madzz_files')) || [];
  const container = document.getElementById('fileList');
  container.innerHTML = '';

  fileList.forEach(file => {
    const ext = file.name.split('.').pop().toLowerCase();
    const wrapper = document.createElement('div');
    wrapper.style.margin = '1rem 0';

    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif' || ext === 'webp') {
      const img = document.createElement('img');
      img.src = file.data;
      img.alt = file.name;
      img.style.maxWidth = '100%';
      img.style.borderRadius = '10px';
      wrapper.appendChild(img);
    } else if (ext === 'mp4' || ext === 'webm' || ext === 'ogg') {
      const video = document.createElement('video');
      video.src = file.data;
      video.controls = true;
      video.style.maxWidth = '100%';
      video.style.borderRadius = '10px';
      wrapper.appendChild(video);
    } else {
      const link = document.createElement('a');
      link.href = file.data;
      link.textContent = `📄 ${file.name}`;
      link.download = file.name;
      link.style.display = 'block';
      wrapper.appendChild(link);
    }

    container.appendChild(wrapper);
  });
}
window.addEventListener("DOMContentLoaded", () => {
  const videoList = document.getElementById("videoList");
  const storedFiles = JSON.parse(localStorage.getItem("madzz_files")) || [];

  storedFiles.forEach(file => {
    if (file.type.startsWith("video/")) {
      videoList.innerHTML += `<video controls style="width: 100%; justify-content:center; border: 3px solid cyan; border-radius: 10px;"><source src="${file.data}" type="${file.type}"></video>`;
    } else if (file.type.startsWith("image/")) {
      videoList.innerHTML += `<img src="${file.data}" style="width:100%;margin-top:1rem;border-radius:10px;">`;
    } else {
      videoList.innerHTML += `<a href="${file.data}" download="${file.name}" style="display:block;color:lime;margin-top:1rem">📄 ${file.name}</a>`;
    }
  });
});
function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');

  const navButtons = document.querySelectorAll('nav button');
  navButtons.forEach(button => button.classList.remove('active'));
  const activeButton = document.querySelector(`nav button[onclick="showSection('${sectionId}')"]`);
  activeButton.classList.add('active');
}
function dc() {
  Swal.fire({
    title: '<span style="font-family: r; font-size:25px;text-shadow:1px 1px 1px black;">Sevenday Roleplay</span>',
    html: '<span style="font-family: ob;">Bergabunglah dan bermain Di server Kami.</span>',
    imageUrl: 'sdrp.png',
    imageWidth: 400,
    imageHeight: 200,
    color: '#fff', // warna teks
    showCancelButton: true,
    confirmButtonText: 'Gabung',
    cancelButtonText: 'Batal',
  }).then((result) => {
    if (result.isConfirmed) {
      window.open('https://discord.gg/qMHyMVzp')
    }
  })
}
function tt() {
  Swal.fire({
    title: '<i class="fab fa-tiktok" style="font-size:80px;border:5px solid white;border-radius:50%; width:90px; height:80px; background:black; padding:10px;"></i>',
    html: 'cooming Soon',
    color: '#fff', // warna teks
    showCancelButton: true,
    confirmButtonText: 'Follow',
    cancelButtonText: 'Batal',
  }).then((result) => {
    if (result.isConfirmed) {
      alert('cooming soon')
    }
  })
}
function yt() {
  Swal.fire({
    title: '<i class="fab fa-youtube" style="color:white; font-size:80px;border:5px solid white;border-radius:50%; width:90px; height:80px; background:red; padding:10px;"></i>',
    html: 'cooming Soon',
    color: '#fff', // warna teks
    showCancelButton: true,
    confirmButtonText: 'Follow',
    cancelButtonText: 'Batal',
  }).then((result) => {
    if (result.isConfirmed) {
      alert('cooming soon')
    }
  })
}
