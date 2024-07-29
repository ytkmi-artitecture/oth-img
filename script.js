document.getElementById('redirectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('numberInput').value;
    const url = `https://character-images.othellonia.com/main/${number}.png`;
    window.location.href = url;
});