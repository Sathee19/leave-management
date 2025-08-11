# Employee Leave Management System

This project is a web application for managing employee leave requests. It allows employees to submit leave requests and view their leave history, while HR can manage and approve these requests.

## Project Structure

```
employee-leave-management
├── public
│   └── index.html          # Main HTML file for the React application
├── src
│   ├── components          # Contains all React components
│   │   ├── AppContainer.jsx            # Main container for the application
│   │   ├── LoginSection.jsx             # Handles user login
│   │   ├── EmployeeSection.jsx          # Employee's section with leave form and requests
│   │   ├── EmployeeLeaveForm.jsx        # Form for submitting leave requests
│   │   ├── EmployeeRequestsTable.jsx    # Displays employee's leave requests
│   │   ├── HRSection.jsx                # HR dashboard for managing leave requests
│   │   ├── HRRequestsTable.jsx          # Displays all leave requests for HR
│   │   ├── MessageModal.jsx             # Displays temporary messages to users
│   │   └── LogoutButton.jsx             # Logout button component
│   ├── App.jsx                        # Main application component
│   ├── index.js                      # Entry point for the React application
│   ├── styles
│   │   └── main.css                  # CSS styles for the application
│   └── utils
│       └── helpers.js                # Utility functions for the application
├── package.json                      # npm configuration file
└── README.md                         # Project documentation
```

## Features

- **User Authentication**: Employees can log in using their credentials.
- **Leave Request Submission**: Employees can submit leave requests with details such as dates, purpose, and type of leave.
- **Leave Request Management**: HR can view, filter, and approve or reject leave requests.
- **Notifications**: Users receive notifications for the status of their leave requests.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd employee-leave-management
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.