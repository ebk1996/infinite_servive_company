# Matrix Services - Photo Gallery App

A modern React application featuring the Matrix Services website with an integrated Unsplash photo gallery and Express.js backend.

## Features

- 🎨 **Enhanced Styling**: Modern, responsive design with beautiful animations
- 📷 **Unsplash Integration**: Dynamic photo gallery with search functionality
- 🚀 **Express.js Server**: Backend API for handling Unsplash requests
- 📱 **Responsive Design**: Mobile-first approach with Tailwind-like styling
- 🔍 **Photo Search**: Search and browse photos by categories
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in the root directory and add your Unsplash API key:

```env
UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
PORT=5000
```

To get your Unsplash API key:
1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Register for a developer account
3. Create a new application
4. Copy the "Access Key" and paste it in your `.env` file

### 2. Installation

Install all dependencies:

```bash
npm install
```

### 3. Development

#### Option A: Run frontend and backend together (Recommended)
```bash
npm run dev:full
```

This will start:
- Vite development server on `http://localhost:5173`
- Express.js API server on `http://localhost:5000`

#### Option B: Run servers separately

Frontend only:
```bash
npm run dev
```

Backend only:
```bash
npm run dev:server
```

### 4. Production

Build the application:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## API Endpoints

### GET /api/photos/random
Get random photos from Unsplash.

**Query Parameters:**
- `query` (optional): Search term (default: "nature")
- `count` (optional): Number of photos (default: 1)

### GET /api/photos/search
Search for photos on Unsplash.

**Query Parameters:**
- `query` (optional): Search term (default: "nature")
- `page` (optional): Page number (default: 1)
- `perPage` (optional): Photos per page (default: 12)

## Project Structure

```
my-matrix-app/
├── src/
│   ├── App.jsx           # Main app component with Matrix Services
│   ├── App.css           # Enhanced styling
│   ├── PhotoGallery.jsx  # Photo gallery component
│   ├── PhotoGallery.css  # Gallery-specific styles
│   └── main.jsx          # App entry point
├── server.js             # Express.js backend server
├── .env                  # Environment variables (create this)
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## Technologies Used

- **Frontend**: React 19, Vite, Modern CSS
- **Backend**: Express.js, Node.js
- **APIs**: Unsplash API for photos
- **Styling**: Custom CSS with modern design principles
- **Build Tool**: Vite for fast development and building

## Photo Gallery Features

- **Dynamic Search**: Search for photos by keywords
- **Quick Categories**: Pre-defined category buttons for quick browsing
- **Responsive Grid**: Adaptive photo grid that works on all devices
- **Beautiful Animations**: Smooth transitions and hover effects
- **Background Images**: Dynamic background from Unsplash
- **Attribution**: Proper attribution to photographers and Unsplash

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, please contact the development team or create an issue in the repository.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
