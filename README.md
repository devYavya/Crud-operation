# CRUD Application with React and MongoDB

This project is a full-stack CRUD application that demonstrates how to build a web application using React for the front-end and MongoDB for the back-end. The app allows users to Create, Read, Update, and Delete records through a simple user interface.

## Features

- **Create**: Add new records to the MongoDB database via a user-friendly React form.
- **Read**: Display a list of records fetched from MongoDB.
- **Update**: Edit existing records using a React form.
- **Delete**: Remove records from MongoDB with a single click.

## Technologies Used

- **React**: For building the user interface
- **MongoDB**: NoSQL database for data storage
- **Express.js**: Back-end framework to create a RESTful API
- **Node.js**: JavaScript runtime environment for server-side code

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use a cloud instance like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/devYavya/crud-app-react-mongodb.git
    cd crud-app-react-mongodb
    ```

2. **Set up the back-end:**

    ```bash
    cd server
    npm install
    ```

    - Create a `.env` file in the `server` directory and add your MongoDB connection string:

      ```
      MONGO_URI=your_mongodb_connection_string
      ```

    - Start the server:

      ```bash
      npm start
      ```

3. **Set up the front-end:**

    ```bash
    cd ../client
    npm install
    ```

    - Start the React app:

      ```bash
      npm start
      ```

    The React app should now be running on `http://localhost:3000`.

## Usage

- **Add a Record**: Use the form on the main page to create a new record.
- **View Records**: The list of records will be displayed automatically.
- **Edit a Record**: Click on the "Edit" button next to a record to update it.
- **Delete a Record**: Click on the "Delete" button next to a record to remove it.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Contact

For any questions or feedback, please reach out to yavya.sharma21@gmail.com.
