# Professional Profile App

A React Native mobile application showcasing your professional profile with Bio, Skills, Projects, and Contact Information.

## Features

- **Bio Section**: Display your professional summary and background
- **Skills Section**: Showcase your technical and soft skills
- **Projects Section**: Highlight your portfolio projects
- **Contact Information**: Share your contact details and social links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (will be installed with dependencies)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your device:
   - Install the Expo Go app on your iOS or Android device
   - Scan the QR code from the terminal

### Running on Emulator/Simulator

- **Android**: `npm run android`
- **iOS**: `npm run ios` (macOS only)
- **Web**: `npm run web`

## Project Structure

```
Profile/
├── App.js                 # Main application entry point
├── components/            # Reusable components
│   ├── Bio.js
│   ├── Skills.js
│   ├── Projects.js
│   └── Contact.js
├── data/                  # Profile data
│   └── profileData.js
├── package.json
└── README.md
```

## Customization

Edit `data/profileData.js` to update your personal information, skills, projects, and contact details.

## Technologies Used

- React Native
- Expo
- React Native Safe Area Context
- Expo Vector Icons
