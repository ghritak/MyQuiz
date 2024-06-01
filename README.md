# My Quiz App

It is an engaging and interactive quiz app designed to test your knowledge across various topics.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm or Yarn
- Expo CLI (you can install it globally via \`npm install -g expo-cli\`)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/ghritak/MyQuiz.git
   ```

2. Navigate into the project directory:

   ```
   cd MyQuiz
   ```

3. Install dependencies:

   ```
   npm install
   ```

   # or

   ```
   yarn install
   ```

4. Start the development server:

   ```
   npx expo start
   ```

   # or

   ```
   yarn start
   ```

   This will start the Expo development server.

5. Use your mobile device to scan the QR code displayed in the terminal or in the Expo DevTools. This will open the app on your device via the Expo Go app.

6. Set up a firebase app with the following credentials in a .env file

```bash
    EXPO_PUBLIC_API_KEY='<you_private_keys>'
    EXPO_PUBLIC_AUTH_DOMAIN='<you_private_keys>'
    EXPO_PUBLIC_PROJECT_ID='<you_private_keys>'
    EXPO_PUBLIC_STORAGE_BUCKET='<you_private_keys>'
    EXPO_PUBLIC_MESSAGING_SENDER_ID='<you_private_keys>'
    EXPO_PUBLIC_APP_ID='<you_private_keys>'
    EXPO_PUBLIC_MEASUREMENT_ID='<you_private_keys>'
```
