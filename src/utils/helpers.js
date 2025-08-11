// This file contains utility functions that are used throughout the application.

// Calculates the number of working days (excluding Sundays) between two dates.
export function calculateWorkingDays(startDate, endDate) {
    let count = 0;
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        if (dayOfWeek !== 0) { // Exclude Sunday
            count++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return count;
}

// Displays a temporary message to the user.
export function showMessage(message, type) {
    return { message, type };
}