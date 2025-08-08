# Surrogacy Matching & Management Application

This web application is a comprehensive platform designed to facilitate matching and management services for surrogacy. It connects intended parents, surrogates, medical professionals, and legal experts through a set of tailored user interfaces.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installing

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd surrogacy-app/surrogacy-app
    ```
    *(Note: The project is in a nested directory due to an environment issue during setup.)*

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command:

```sh
npm start
```

This will open the application in your default browser at [http://localhost:3000](http://localhost:3000).

### Available Scripts

-   `npm test`: Launches the test runner.
-   `npm run build`: Builds the app for production.
-   `npm run eject`: Ejects from `create-react-app`.

## Project Structure

The application follows a feature-sliced design pattern to keep the codebase organized and scalable.

-   `src/api`: Contains mock API calls.
-   `src/auth`: Intended for authentication logic.
-   `src/store`: For global state management using Zustand.
-   `src/components`: Contains reusable UI components.
    -   `src/components/common`: Basic, reusable components like buttons, cards, etc.
    -   `src/components/layout`: Components for the main application layout (Header, Sidebar).
-   `src/pages`: Contains the main pages for each user dashboard.
    -   `src/pages/admin`: Components and pages related to the Admin Panel.
    -   `src/pages/doctor`: Pages for the Doctor's Panel.
    -   ...and so on for each user role.
-   `src/hooks`: For custom React hooks.
-   `src/utils`: For utility functions.
