// Sample data for PDFs and Audios
const pdfFiles = [
    { name: "Introduction to Programming", url: "path/to/intro.pdf" },
    { name: "Advanced JavaScript", url: "path/to/advanced-js.pdf" },
    { name: "Data Structures", url: "path/to/data-structures.pdf" },
];

const audioFiles = [
    { name: "Lecture 1: Introduction", url: "path/to/lecture1.mp3" },
    { name: "Lecture 2: Variables", url: "path/to/lecture2.mp3" },
    { name: "Lecture 3: Functions", url: "path/to/lecture3.mp3" },
];

// Dynamically load PDFs
const pdfList = document.getElementById("pdf-list");
pdfFiles.forEach((file) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = file.url;
    a.textContent = file.name;
    a.download = file.name;
    li.appendChild(a);
    pdfList.appendChild(li);
});

// Dynamically load Audios
const audioList = document.getElementById("audio-list");
audioFiles.forEach((file) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = file.url;
    a.textContent = file.name;
    a.download = file.name;
    li.appendChild(a);
    audioList.appendChild(li);
});

// Filter PDFs
function filterPDFs() {
    const searchTerm = document.getElementById("pdf-search").value.toLowerCase();
    const pdfItems = pdfList.getElementsByTagName("li");
    Array.from(pdfItems).forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? "block" : "none";
    });
}

// Filter Audios
function filterAudios() {
    const searchTerm = document.getElementById("audio-search").value.toLowerCase();
    const audioItems = audioList.getElementsByTagName("li");
    Array.from(audioItems).forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? "block" : "none";
    });
}

// Video Conferencing Integration (Jitsi Meet Example)
document.getElementById("join-meeting").addEventListener("click", () => {
    const meetingId = document.getElementById("meeting-id").value;
    if (!meetingId) {
        alert("Please enter a meeting ID.");
        return;
    }

    const meetingContainer = document.getElementById("meeting-container");
    meetingContainer.innerHTML = `
        <iframe src="https://meet.jit.si/${meetingId}" 
                width="100%" 
                height="500px" 
                allow="camera; microphone; fullscreen; display-capture">
        </iframe>
    `;

    document.getElementById("leave-meeting").disabled = false;
});

document.getElementById("leave-meeting").addEventListener("click", () => {
    const meetingContainer = document.getElementById("meeting-container");
    meetingContainer.innerHTML = "";
    document.getElementById("leave-meeting").disabled = true;
});