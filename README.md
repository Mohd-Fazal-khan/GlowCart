# GlowCart

GlowCart is a modern e-commerce mobile application built with React Native, designed to provide a seamless shopping experience for users on both Android and iOS platforms.

GlowCart aims to deliver a fast, intuitive, and visually appealing interface for online shopping. With a focus on user experience, the app integrates essential e-commerce features such as product browsing, secure authentication, wishlist management, and personalized offers. The project is structured for scalability and maintainability, making it ideal for both learning and real-world deployment.

GlowCart leverages the power of TypeScript for robust code quality, and includes custom UI components to ensure a unique look and feel. Whether you are a developer looking to extend its functionality or a user seeking a smooth shopping journey, GlowCart provides a solid foundation for modern mobile commerce.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Scripts](#scripts)
- [Testing](#testing)
- [Assets](#assets)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (Login/Register)
- Product listing and details
- Wishlist management
- Profile management
- Onboarding experience
- Offers and promotions
- Custom UI components
- Responsive design

## Screenshots

_Add screenshots of the app here (e.g., Home Screen, Product Details, Login/Register, Wishlist, etc.)_

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm or yarn
- React Native CLI
- Android Studio/Xcode (for running on devices/emulators)

### Steps

1. Clone the repository:
   ```powershell
   git clone https://github.com/Mohd-Fazal-khan/GlowCart.git
   cd GlowCart
   ```
2. Install dependencies:
   ```powershell
   npm install
   # or
   yarn install
   ```
3. Install pods for iOS (macOS only):
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the App

### Android

```powershell
npx react-native run-android
```

### iOS

```bash
npx react-native run-ios
```

## Project Structure

```
GlowCart/
├── app.json
├── App.tsx
├── babel.config.js
├── index.js
├── package.json
├── tsconfig.json
├── __tests__/
│   └── App.test.tsx
├── android/
│   └── ...
├── ios/
│   └── ...
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── componets/
│   │   ├── CustomButton.tsx
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   └── ReviewsList.tsx
│   ├── constants/
│   │   ├── Colors.tsx
│   │   └── Font.tsx
│   └── screens/
│       ├── HomeScreen.tsx
│       ├── LoginScreen.tsx
│       ├── OfferScreen.tsx
│       ├── OnboardingScreen.tsx
│       ├── ProductDetailScreen.tsx
│       ├── ProfileScreen.tsx
│       ├── RegisterScreen.tsx
│       └── WishlistScreen.tsx
└── ...
```

## Tech Stack

- **React Native**: Mobile app framework
- **TypeScript**: Type safety
- **Jest**: Testing
- **Prettier & ESLint**: Code formatting and linting
- **Metro**: Bundler

## Scripts

- `npm start` — Start Metro bundler
- `npm run android` — Run app on Android
- `npm run ios` — Run app on iOS
- `npm test` — Run tests
- `npm run lint` — Run ESLint
- `npm run prettier` — Format code

## Testing

Unit tests are located in the `__tests__` directory. Run tests with:

```powershell
npm test
```

## Assets

- **Fonts**: Located in `src/assets/fonts/`
- **Images**: Located in `src/assets/images/`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
