NGO Volunteer Management Web App 
A simple full-stack web application for NGOs to manage volunteer registrations and view applicants. 
  Tech Stack 
    • Frontend: HTML, CSS, JavaScript 
    • Backend: Node.js, Express.js 
    • Database: MongoDB Atlas 
    • Deployment: Render (Backend) + Netlify (Frontend) 
  Folder Structure 
    NGO_Volunteer_Management/ 
    ngo-volunteer-management/ 
    │ 
    ├── ngo-backend/ 
    │ ├── server.js 
    │ ├── package.json 
    │ ├── controllers/ 
    │ ├── models/ 
    │ ├── routes/ 
    │ └── .env (local only) 
    │ 
    └── public/  (#Front-end) 
    ├── index.html 
    ├── register.html 
    ├── view.html 
    ├── style.css 
    ├── register.js 
    └── view.js 
  Setup Instructions 
    Backend Setup 
      1) >> cd ngo-backend 
         >> npm install 
      2) Create a .env file: 
         >> MONGO_URI=your_mongodb_connection_string 
      3) Run the backend: 
         >> node server.js 
      Your backend will be accessible locally at http://localhost:5000. 
    Frontend Setup 
      • Update API URLs inside register.js and view.js: 
      • fetch('https://ngo-backend-fsxy.onrender.com/api/volunteers') 
      • Then open index.html or host it via Netlify. 
  Live Deployment 
    Backend (Render): 
      1. Push ngo-backend/ to GitHub 
      2. Go to https://render.com 
      3. Click New > Web Service 
      4. Connect your GitHub repo 
      5. Configure: 
          • Build Command: npm install 
          • Start Command: node server.js 
          • Environment Variables: Add MONGO_URI from MongoDB Atlas 
      6. Deploy → You'll get a backend URL like: 
          https://ngo-backend-fsxy.onrender.com 
    Frontend (Netlify): 
      1.  Push public/ folder or ngo-frontend/ to GitHub or 
      2.  Visit https://app.netlify.com/drop 
      3.  Drag and drop the folder containing: 
          • index.html 
          • register.html 
          • view.html and assets 
      4. Netlify will generate a live URL like: 
          https://dulcet-chebakia-dad0b2.netlify.app 
  Features 
      • Volunteer registration form 
      • Admin view of volunteer list 
      • Connected to cloud MongoDB via REST API 
      • Basic client + server validation 
  Future Enhancements 
      • Admin login system 
      • Email confirmations 
      • Dashboard and analytics 
      • Pagination, filters, and search bar 
  Screenshots (Add Manually) 
      • Home Page 
         ![Home](Screenshots/Home.PNG)
      • Registration Form 
         ![Register](Screenshots/Volunteer_registration.PNG)
         ![Register](Screenshots/volunteer_registration_back_to_home.PNG)
      • Admin Panel (Volunteers List) 
         ![Admin](Screenshots/admin_view.PNG)
         ![Admin](Screenshots/admin_view_back_to_home.PNG)
