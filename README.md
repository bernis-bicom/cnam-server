# CNAM Server

## Project Description
The CNAM Server is a simple API that provides Caller ID Name (CNAM) lookup functionality. Given a phone number, it returns a hardcoded name associated with that number.

## Features
-   **CNAM Lookup API:** Exposes a GET endpoint `/api/cnam/[phone]` to retrieve a caller's name.
-   **Hardcoded Data:** Currently uses a hardcoded list of phone numbers and names for demonstration purposes.

## Technologies Used
-   [Next.js](https://nextjs.org/) (v15.3.3) - React framework for building web applications.
-   [React](https://react.dev/) (v19.0.0) - JavaScript library for building user interfaces.
-   [Tailwind CSS](https://tailwindcss.com/) (v4) - A utility-first CSS framework for rapid UI development.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have Node.js installed on your machine. It is recommended to use the latest LTS version.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/cnam-server.git
    cd cnam-server
    ```
    (Note: Replace `https://github.com/your-username/cnam-server.git` with the actual repository URL if different.)

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To run the application in development mode with hot-reloading:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the default Next.js welcome page.

### Building for Production

To build the application for production:

```bash
npm run build
```

### Running the Production Server

To start the production server after building:

```bash
npm start
```

## Usage

The primary functionality of this project is exposed via its API endpoint.

### CNAM Lookup API Endpoint

-   **URL:** `/api/cnam/[phone]`
-   **Method:** `GET`
-   **URL Parameters:** `phone` (required) - The phone number to look up.
-   **Example Request:**
    ```bash
    curl http://localhost:3000/api/cnam/1234567890
    ```
-   **Example Success Response (JSON):**
    ```json
    {
        "name": "John Doe",
        "phone": "1234567890"
    }
    ```
-   **Example Not Found Response (JSON):**
    ```json
    {
        "name": "Unknown Caller",
        "phone": "9876543210"
    }
    ```

## Deployment

This Next.js application can be easily deployed to [Vercel](https://vercel.com/), the creators of Next.js.

You can deploy your own instance of this application with a single click using the button found on the default homepage when running the development server.
