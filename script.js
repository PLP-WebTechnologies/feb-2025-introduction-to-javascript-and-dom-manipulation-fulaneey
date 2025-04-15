// Change text content dynamically
function changeText() {
    const textEl = document.getElementById('dynamic-text');
    textEl.textContent = 'The text has been successfully changed!';
}

// Modify CSS styles via JavaScript
function changeStyle() {
    const box = document.getElementById('style-box');
    box.style.backgroundColor = '#007BFF';
    box.style.color = 'white';
    box.style.padding = '15px';
    box.style.borderRadius = '8px';
    box.style.fontWeight = 'bold';
}

// Add or remove an element on button click
function toggleElement() {
    const container = document.getElementById('element-container');
    const existing = document.getElementById('new-element');

    if (existing) {
        container.removeChild(existing);
    } else {
        const newEl = document.createElement('p');
        newEl.id = 'new-element';
        newEl.textContent = '🎉 A new element has been added dynamically!';
        container.appendChild(newEl);
    }
}
