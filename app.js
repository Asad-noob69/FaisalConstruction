document.addEventListener('DOMContentLoaded', () => {
    const accessKey = '62ZmU8IPB8NLti8UqPsIx5aB4pbQurqhBdl5ACV_ryo';
    const query = 'construction'; // Desired search keyword
    const width = 720;  // Desired width
    const height = 600; // Desired height
    const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${query}&w=${width}&h=${height}`;

    fetch(url)                          
        .then(response => response.json())
        .then(data => {
            const imgElement = document.getElementById('randomImage1');
            imgElement.src = data.urls.regular;  // Use the image URL from the API response
            imgElement.alt = data.alt_description || 'Random Unsplash Image';
        })
        .catch(error => console.error('Error fetching image:', error));
});