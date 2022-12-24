function computerChoice() {
  let com = Math.random();
  
  if (com <= 0.34) return 'batu';
  if (com >= 0.34 && com <= 0.67) return 'kertas';
  return 'gunting';
}

function ovrResult(com, user) {
  if (user == com) return (additionalLog.innerHTML = '> Poin tidak dikurangi maupun ditambah', 'Seri');
  if (user == 'kertas') return (com == 'batu') ? (additionalLog.innerHTML = '> Poin telah ditambahkan sebanyak ' + 20) && (point += 20, ovrPoints.textContent = point, 'Menang'):(additionalLog.innerHTML = '> Poin telah dikurangi sebanyak ' + 20) && (point-= 20, ovrPoints.textContent = point, 'Kalah');
  if (user == 'gunting') return (com == 'batu') ? (additionalLog.innerHTML = '> Poin telah dikurangi sebanyak ' + 20) && (point-= 20, ovrPoints.textContent = point, 'Kalah') : (additionalLog.innerHTML = '> Poin telah ditambahkan sebanyak ' + 20) && (point += 20, ovrPoints.textContent = point, 'Menang');
  if (user == 'batu') return (com == 'kertas') ? (additionalLog.innerHTML = '> Poin telah dikurangi sebanyak ' + 20) && (point -= 20, ovrPoints.textContent = point, 'Kalah') : (additionalLog.innerHTML = '> Poin telah ditambahkan sebanyak ' + 20) && (point += 20, ovrPoints.textContent = point, 'Menang');
}

const ovrPoints = document.querySelector('.points');
const additionalLog = document.querySelector('.additional');

let point = 0;

const results = document.querySelector('.result');
const player = document.querySelector('.player');
const computer = document.querySelector('.com');


const allChoice = document.querySelectorAll(".items-info button");
allChoice.forEach(function(c) {
  c.addEventListener("click", function() {
  const comChoice = computerChoice();
  const pChoice = c.className;
  const result = ovrResult(comChoice, pChoice);
  player.innerHTML = '> Kamu memilih ' + pChoice;
  computer.innerHTML = '> A.I memilih ' + comChoice;
  results.innerHTML = '> Hasilnya ' + result;
  });
});


const clear = document.querySelector('.clear');
const logWrap = document.querySelector('.log-wrapper');

clear.onclick = function() {
  player.innerHTML = '';
  computer.innerHTML = '';
  results.innerHTML = '';
  additionalLog.innerHTML = '';
  logWrap.style.height = '160px';
};