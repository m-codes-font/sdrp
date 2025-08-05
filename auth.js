const w = document.getElementById('web');
const ip = document.getElementById('port');

function start() {
  const webValue = w.value.trim();
  const portValue = ip.value.trim();
  const msg = document.getElementById('msg');

  if (webValue === '') {
    msg.innerText = 'Halaman wajib di isi';
  } else if (portValue === '') {
    msg.innerText = 'Port wajib di isi';
  } else {
    // Arahkan ke halaman blokir dengan parameter URL
    window.location.href = 'Websitebanned.html?site=' + encodeURIComponent(webValue);
  }
}

function buka() {
  const webValue = w.value.trim();
  const msg = document.getElementById('msg');

  if (webValue === '') {
    msg.innerText = 'Silahkan Isi Web yang di blokir';
  } else {
    try {
      const url = new URL(webValue.startsWith('http') ? webValue : 'http://' + webValue);
      window.open(url.href, '_blank');
    } catch (error) {
      msg.innerText = 'URL tidak valid';
    }
  }
}