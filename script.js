function updateClock() {
  const currentTime = document.getElementById('current-time');
  const currentDay = document.getElementById('current-day');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[now.getDay()];

  currentDay.textContent = `Day: ${dayOfWeek}`
  currentTime.textContent = `Time: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

updateClock();
