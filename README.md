This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# EFEDC-AS2-WEB2 My App

## Overview

This project is a web application that displays a list of students with their information. It is built using React and utilizes a context provider to manage the state of the student data.

## Features

- Display a list of students with their ID, name, date of birth, and grade.
- Responsive design with a grid layout for student cards.
- Context API for state management.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/EFEDC-AS2-WEB2.git
    ```
2. Navigate to the project directory:
    ```bash
    cd EFEDC-AS2-WEB2/my-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- `components/`: Contains the React components used in the application.
  - `StudentList.js`: Component to display the list of students.
- `context/`: Contains the context provider for managing student data.
- `public/`: Contains static assets such as images and icons.
- `styles/`: Contains the CSS files for styling the application.
- `pages/`: Contains the main pages of the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License.
