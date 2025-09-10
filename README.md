# Toppers Clubs

A modern educational platform connecting students with MBBS toppers for personalized mentorship and guidance.

## Overview

Toppers Clubs is a React-based web application that provides students with direct access to top-performing MBBS mentors, including AIR-1 rank holders. The platform offers structured batch programs, personalized mentorship sessions, and comprehensive educational support for medical entrance exam preparation.

## Features

- **Expert Mentorship**: Connect with MBBS toppers and AIR-1 rank holders
- **Interactive UI**: Smooth animations and responsive design using Framer Motion
- **Batch Programs**: Limited-seat batches for focused learning
- **3D Mentor Profiles**: Engaging mentor showcase with interactive elements
- **WhatsApp Integration**: Quick contact feature for instant communication
- **Responsive Design**: Fully optimized for all devices using Tailwind CSS
- **Multi-Section Layout**: Organized content sections including Home, Features, Batches, Mentors, and Contact

## Tech Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 5.2
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.3
- **UI Components**:
  - React Icons 5.2
  - Swiper 11.1 for carousels
  - React Slick 0.30 for sliders
- **Utilities**:
  - clsx & tailwind-merge for class management
  - React Locomotive Scroll for smooth scrolling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/toppersclubs.git
cd toppersclubs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
toppersclubs/
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── MultiCardCarousel.jsx
│   │   └── Services.jsx
│   ├── pages/          # Page components
│   │   ├── Home2.jsx
│   │   ├── Features.jsx
│   │   ├── Batches.jsx
│   │   ├── Mentors_3d.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Project dependencies

```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is proprietary and confidential.

## Contact

For more information about Toppers Clubs and enrollment details, visit our platform or contact us through the integrated WhatsApp feature.
