const messages = [
    "Are you sure you're not excited?",
    "Really sure?? 🎂",
    "Come on, it's your birthday soon!",
    "There's going to be cake! 🍰",
    "And presents! 🎁",
    "And maybe a surprise party! 🎉",
    "Please be excited... 🥺",
    "Everyone’s waiting to celebrate you! 💖",
    "Okay okay, I’ll stop asking... maybe...",
    "Just kidding, you HAVE to be excited! 🥳"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}