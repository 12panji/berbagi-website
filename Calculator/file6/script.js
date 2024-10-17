function calculateHours() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    if (!startTime || !endTime) {
        document.getElementById('result').innerText = 'Please enter both start and end times.';
        return;
    }

    const start = new Date(`1970-01-01T${startTime}Z`);
    const end = new Date(`1970-01-01T${endTime}Z`);

    if (end < start) {
        document.getElementById('result').innerText = 'End time must be after start time.';
        return;
    }

    const diffInMs = end - start;
    const diffInHours = diffInMs / (1000 * 60 * 60);

    document.getElementById('result').innerText = `Total hours: ${diffInHours.toFixed(2)}`;
}
