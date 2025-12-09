# MedCare247 Website

Professional website for MedCare247 - Private Ambulance and Events Specialist Services.

## Features

- Modern, responsive design
- Home page with hero section and services overview
- About Us page with company information
- Contact Us page with contact form
- Work For Us page with job opportunities
- Professional logo and branding

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To build the website for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
medcare247/
├── public/
│   └── logo.svg          # Logo file
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Logo.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── WorkForUs.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

- Update contact information in the Footer and Contact pages
- Modify colors in `src/index.css` (CSS variables)
- Update content in individual page components
- Replace logo.svg in the `public` folder with your own logo

## Deployment

The website can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any web hosting service

Simply build the project and upload the `dist` folder contents.

## License

© 2024 MedCare247. All rights reserved.

