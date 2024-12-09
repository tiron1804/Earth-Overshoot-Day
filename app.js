const countdownElement = document.getElementById('countdown');
const passedMessageElement = document.getElementById('passedMessage');

// Set the date for Earth Overshoot Day (update this every year)
const earthOvershootDay = new Date('2024-08-01'); // Example date

function updateCountdown() {
  const now = new Date();
  const timeRemaining = earthOvershootDay - now;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left until Earth Overshoot Day 🌎`;
    passedMessageElement.textContent = '';
  } else {
    const overshootDate = `${earthOvershootDay.getFullYear()}-${String(earthOvershootDay.getMonth() + 1).padStart(2, '0')}-${String(earthOvershootDay.getDate()).padStart(2, '0')}`;
    countdownElement.textContent = 'Earth Overshoot Day has passed for this year.';
    passedMessageElement.textContent = `It occurred on ${overshootDate}. Let's aim to delay it next year! 🌱`;
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
