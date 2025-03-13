# Real Estate Listing Web Application

## Overview
This is a Real Estate Listing Web Application that allows users to browse, search, filter, and save favorite properties. The project fetches property data from an external API and provides a user-friendly interface with sorting, filtering, and local storage functionality.

## Features

- **User Authentication**: Simple login functionality (without Firebase or NextAuth.js for now).
- **Property Listings**: Fetch and display real estate properties from [DummyJSON API](https://dummyjson.com/products).
- **Sorting**: Users can sort properties by price, location, or type.
- **Search & Filtering**: Includes a search bar and category filters for better property discovery.
- **Favorites & Local Storage**: Users can mark properties as favorites, and the selections are stored locally.
- **Responsive UI**: Ensures a mobile-friendly experience for seamless browsing on all devices.
- **Dark Mode Toggle**: Users can switch between light and dark themes for better accessibility.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Icons**: React Icons
- **State Management**: useState, Local Storage
- **API**: DummyJSON API for property listings

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/real-estate-listing.git
   cd real-estate-listing
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

4. Use Login details as email: saadshaikh139@gmail.com and password: 1234
## Usage

- Browse the property listings on the homepage.
- Use the search bar to find properties based on keywords.
- Sort properties by price, location, or type.
- Mark properties as favorites, and they will be saved in local storage.
- Toggle between light and dark mode for a customized experience.

## Future Improvements

- Implement Firebase Authentication or NextAuth.js for secure login/signup.
- Enhance filtering options (e.g., filter by price range, property size, etc.).
- Optimize API handling with caching and pagination.
- Add a detailed property view with more information.

## Contributing
Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).

