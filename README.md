# Community Social Media Mobile Application

## Overview

This project is a feature-rich social media mobile application developed using React Native, designed to facilitate community-driven content, user stories, and posts. The application features a scalable UI, seamless navigation, and advanced state management. The backend, built with Express.js, provides robust API endpoints for data handling and integration with the frontend.


## Screen Recording:





## Features

- **Community Management:**
  - Search for, join, or create new communities with automatic detection of duplicate community names.

- **User Posts & Stories:**
  - Create posts with images and share stories within communities. Includes infinite scrolling and pagination for smooth content loading.

- **Image Uploads:**
  - Integrated image picker for selecting and uploading profile and post images from the device.

- **Dynamic UI Scaling:**
  - Custom scaling functions ensure a consistent user experience across various screen sizes and devices.

- **Navigation:**
  - Utilizes React Navigation for managing screen transitions and routing between different app sections.

- **State Management:**
  - Uses Context API for managing global state related to selected communities, posts, and user stories.

## Technology Stack

- **Frontend:** React Native
- **Backend:** Express.js, Node.js
- **Database:** MongoDB (Cloud Version)
- **State Management:** Context API, React Hooks (`useState`, `useEffect`)
- **Networking:** Axios for API requests
- **UI/UX:** Custom scaling functions, dynamic styles, and responsive design principles

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/social-media-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd social-media-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the mobile application:

    ```bash
    npx react-native run-android
    ```

    or

    ```bash
    npx react-native run-ios
    ```

## Usage

- **Community:** Search for or create new communities.
- **Create Post:** Add posts with images and view posts and stories with infinite scrolling.
- **Profile Management:** Upload and manage your profile image.

## Backend Setup

The backend is built with Express.js and handles API requests for communities, posts, and user stories. To set up the backend:

1. Navigate to the server directory:

    ```bash
    cd server
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm run start
    ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any feature additions, bug fixes, or improvements.

