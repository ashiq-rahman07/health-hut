# Medicare Plus – Doctor Appointment App

Welcome to **Medicare Plus**, a modern, feature-rich web application for booking doctor appointments online. Built with Next.js, Tailwind CSS, and a robust backend, Medicare Plus makes healthcare accessible, efficient, and user-friendly for patients, doctors, and administrators.

---

<p align="center">
  <img src="public/logo.png" alt="Medicare Plus Banner" width="180"/>
</p>

---

## 🚀 Features

✨ **User Authentication** – Secure sign-up and sign-in for patients, doctors, and admins  
🔎 **Doctor Discovery** – Browse and search doctors by specialty, view detailed profiles  
📅 **Appointment Booking** – Real-time slot selection, instant booking, and appointment management  
🩺 **Doctor Dashboard** – Manage availability, view appointments, earnings, and verification status  
🛡️ **Admin Panel** – Approve doctors, manage payouts, and oversee platform activity  
🎥 **Video Consultations** – Integrated video call system for remote appointments  
📱 **Responsive Design** – Fully mobile-friendly and accessible UI  
🌙 **Theme Support** – Modern dark mode by default, with seamless theme switching  
🔔 **Notifications** – Alerts for appointment status, verification, and payouts  
💳 **Secure Payments** – Credit management and payout system for doctors

---

## 🖥️ Tech Stack

- **Frontend**: Next.js (App Router), React, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM, PostgreSQL
- **Authentication**: NextAuth.js
- **UI Components**: shadcn/ui, Radix UI
- **Video Calls**: WebRTC (custom or third-party integration)

---

## 📦 Project Structure

```
health-hut/
├── app/                # Next.js app directory (pages, layouts, routes)
├── components/         # Reusable UI and section components
├── actions/            # Server actions for business logic
├── hooks/              # Custom React hooks
├── lib/                # Utilities, Prisma, and data helpers
├── prisma/             # Prisma schema and migrations
├── public/             # Static assets (images, icons)
├── styles/             # Global and component styles
├── package.json        # Project metadata and scripts
└── ...
```

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/medicare-plus.git
cd medicare-plus
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
- Copy `.env.example` to `.env` and fill in your database and secret keys.

### 4. Set Up the Database
```bash
npx prisma migrate dev --name init
```

### 5. Run the Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## ✨ Screenshots & Demo

Showcase your app’s features and UI! Add screenshots or GIFs below:

<p align="center">
  <img src="public/demo-1.png" alt="Home Page Demo" width="600"/>
  <br/>
  <em>Home Page</em>
</p>

<p align="center">
  <img src="public/demo-2.png" alt="Doctor Profile Demo" width="600"/>
  <br/>
  <em>Doctor Profile & Booking</em>
</p>

> To add your own screenshots:
> 1. Take a screenshot (Win+Shift+S or Mac Cmd+Shift+4).
> 2. Save it in the `public/` folder (e.g., `public/demo-1.png`).
> 3. Reference it in the markdown as shown above.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center"><b>Made with 💗 by RoadsideCoder and contributors.</b></p>
