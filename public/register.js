document.getElementById('volunteerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();
  const responseEl = document.getElementById('responseMessage');

  // Clear previous message and style
  responseEl.textContent = '';
  responseEl.className = '';
  responseEl.innerHTML = ''; // Also clears any previously added button

  // Client-side validation
  if (!name || !email || !phone || !message) {
    responseEl.textContent = 'Please fill in all fields.';
    responseEl.classList.add('error');
    return;
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!emailRegex.test(email)) {
    responseEl.textContent = 'Please enter a valid email address.';
    responseEl.classList.add('error');
    return;
  }

  if (!phoneRegex.test(phone)) {
    responseEl.textContent = 'Phone number must be 10 digits and start with 6–9.';
    responseEl.classList.add('error');
    return;
  }

  // If valid, send data to backend
  const data = { name, email, phone, message };

  try {
    const res = await fetch('/api/volunteers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (res.ok && !result.error) {
      responseEl.textContent = result.message || 'Thank you for registering!';
      responseEl.classList.add('success');
      form.reset();

      // ✅ Create "Back to Home" button dynamically
      const backBtn = document.createElement('a');
      backBtn.href = 'index.html';
      backBtn.textContent = '⬅ Back to Home';
      backBtn.style.display = 'inline-block';
      backBtn.style.marginTop = '1rem';
      backBtn.style.padding = '0.6rem 1.2rem';
      backBtn.style.backgroundColor = '#0077cc';
      backBtn.style.color = 'white';
      backBtn.style.borderRadius = '8px';
      backBtn.style.textDecoration = 'none';
      backBtn.style.fontWeight = 'bold';

      responseEl.appendChild(document.createElement('br'));
      responseEl.appendChild(backBtn);
    } else {
      responseEl.textContent = result.error || 'Submission failed.';
      responseEl.classList.add('error');
    }
  } catch (err) {
    responseEl.textContent = 'Something went wrong. Please try again.';
    responseEl.classList.add('error');
  }
});
