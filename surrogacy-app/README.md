# Surrogacy Platform Application

This is a web application for a surrogacy platform that connects intended parents, surrogates, doctors, and lawyers. It provides different dashboards for each user role to manage their part of the surrogacy process.

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
    cd surrogacy-app
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command:

```sh
npm start
```

This will open the application in your default browser at [http://localhost:3000](http://localhost:3000). The page will reload if you make edits.

### Available Scripts

In the project directory, you can run:

-   `npm test`: Launches the test runner in the interactive watch mode.
-   `npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
-   `npm run eject`: **Note: this is a one-way operation. Once you `eject`, you can’t go back!** If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Project Structure

The application is structured as follows:

-   `src/components`: Contains reusable UI components.
    -   `src/components/admin`: Components specific to the Admin Dashboard.
    -   `src/components/doctor`: Components specific to the Doctor Panel.
    -   `src/components/intended-parents`: Components specific to the Intended Parents Dashboard.
    -   `src/components/matching`: Components specific to the Matching System Dashboard.
    -   `src/components/surrogate`: Components specific to the Surrogate Mother Dashboard.
-   `src/pages`: Contains the main pages of the application, which correspond to the different user dashboards.
-   `src/assets`: Contains static assets like images and icons.
-   `src/services`: Intended for modules that handle API calls or other business logic.
-   `src/hooks`: For custom React hooks.
-   `src/contexts`: For React context providers.
-   `src/utils`: For utility functions.
