# Community Social Media Mobile Application
### Overview

This project is a feature-rich social media mobile application built using React Native, with a focus on community-driven content, user stories, and posts. It includes a scalable UI, seamless navigation, and advanced state management. The backend is developed with Express.js, providing robust API endpoints for data handling and integration with the frontend.

### Features

Community Management: Users can search for, join, or create new communities. Duplicate community names are automatically detected and handled.

User Posts & Stories: Users can create posts with images and share their stories within communities. Infinite scrolling and pagination are implemented for smooth content loading.

Image Uploads: Integrated image picker for users to select and upload profile and post images directly from their device.

Dynamic UI Scaling: The app employs custom scaling functions to ensure a consistent user experience across different screen sizes and devices.

Navigation: Utilizes React Navigation for managing screen transitions and routing between different app sections.

State Management: Uses Context API for managing global state related to selected communities, posts, and user stories.

### Technology Stack

Frontend: React Native

Backend: Express.js, Node.js

Database: MongoDB (Cloud Version)

State Management: Context API, React Hooks (useState, useEffect)

Networking: Axios for API requests

UI/UX: Custom scaling functions, dynamic styles, and responsive design principles

### Installation

Clone the repository:

`git clone https://github.com/yourusername/social-media-app.git`

Navigate to the project directory:

`cd social-media-app`

Install dependencies:

`npm install`

Run the mobile application:

`npx react-native run-android`

or

`npx react-native run-ios`


### Usage

Community: Search for a community or create a new one.

Create Post: Add posts with images, and view posts and stories in an infinite scroll format.

Profile Management: Upload and manage your profile image.

### Backend Setup

The backend is developed using Express.js and handles API requests for communities, posts, and user stories. To set up the backend:

Navigate to the server directory:

`cd server`

Install backend dependencies:

`npm install`

Start the server:

`npm run start`

### Contributing

Contributions are welcome! Please fork the repository and create a pull request for any feature additions, bug fixes, or improvements.
