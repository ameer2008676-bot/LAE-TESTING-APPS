let isSignedIn = false; // Track login status


// Example sign-in function
function signIn() {
    isSignedIn = true;
    renderTasks();
}

function renderTasks() {
    const taskContainer = document.getElementById("taskList");
    taskContainer.innerHTML = "";

    tasks.forEach(task => {
        const taskEl = document.createElement("div");
        taskEl.classList.add("task-card");

        // Task number always visible
        let html = `<h3>${task.number} - ${task.title}</h3>`;

        // Show due date + manhours ONLY if signed in
        if (isSignedIn) {
            html += `
                <p><strong>Due:</strong> ${task.dueDate}</p>
                <p><strong>Man-hours:</strong> ${task.manhours}</p>
            `;
        }

        taskEl.innerHTML = html;
        taskContainer.appendChild(taskEl);
    });
}
// Example of adding/updating a task
db.collection("tasks").add({
    taskNumber: "TC-001",
    title: "Inspect Landing Gear",
    status: "Open",
    dueDate: "2025-08-20", // must be stored
    manhours: 5            // must be stored
});

function renderTasks(taskArray) {
    const container = document.getElementById("taskList");
    container.innerHTML = "";

    taskArray.forEach(task => {
        const card = document.createElement("div");
        card.classList.add("task-card");

        // Always show number + title
        let cardHTML = `<h3>${task.number} - ${task.title}</h3>`;

        // Show manhours & due date only if signed in
        if (isSignedIn) {
            cardHTML += `
                <p><strong>Due:</strong> ${task.dueDate}</p>
                <p><strong>Man-hours:</strong> ${task.manhours}</p>
            `;
        }

        card.innerHTML = cardHTML;
        container.appendChild(card);
    });

tasks.forEach(task => {
    const card = document.createElement("div");
    card.classList.add("task-card");

    card.innerHTML = `
        <h3>${task.taskNumber} - ${task.title}</h3>
        <p><strong>Status:</strong> ${task.status}</p>
        <p><strong>Due Date:</strong> ${task.dueDate || "Not set"}</p>
        <p><strong>Man-hours:</strong> ${task.manhours || 0}</p>
    `;

    document.getElementById("taskCardsContainer").appendChild(card);
});

}
signIn() {
    isSignedIn = true;
    renderTasks(tasks); // Re-render with manhours & due
}
// Example task data (will be loaded after sign-in in real app)
const tasks = [
    { number: "TC-001", title: "Inspect Landing Gear", dueDate: "2025-08-15", manhours: 4 },
    { number: "TC-002", title: "Check Hydraulic Lines", dueDate: "2025-08-20", manhours: 3 },
    { number: "TC-003", title: "Replace Brake Pads", dueDate: "2025-08-14", manhours: 2 }
];
{
    number: "TC-001",
    title: "Inspect Landing Gear",
    dueDate: "2025-08-15",
    manhours: 4
}

// Initial render (no sign-in yet)
renderTasks();
