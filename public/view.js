document.addEventListener('DOMContentLoaded', async () => {
  const listEl = document.getElementById('volunteerList');

  // Simple admin access check
  const password = prompt("Enter admin password to view volunteers:");
  if (password !== "admin123") {
    alert("Access denied.");
    window.location.href = "index.html";
    return;
  }

  try {
    const res = await fetch('/api/volunteers');
    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      listEl.innerHTML = "<p>No volunteers found.</p>";
      return;
    }

    data.forEach(vol => {
      const card = document.createElement('div');
      card.className = 'volunteer-card';
      card.innerHTML = `
        <h3>${vol.name}</h3>
        <p><strong>Email:</strong> ${vol.email}</p>
        <p><strong>Phone:</strong> ${vol.phone}</p>
        <p><strong>Message:</strong> ${vol.message}</p>
      `;
      listEl.appendChild(card);
    });

    // Back to Home Button
    const backBtn = document.createElement('a');
    backBtn.href = 'index.html';
    backBtn.textContent = '⬅ Back to Home';
    backBtn.className = 'back-home-btn';
    listEl.appendChild(backBtn);

  } catch (err) {
    console.error('Error fetching data:', err);
    listEl.innerHTML = "<p>Error loading volunteers.</p>";
  }
});
