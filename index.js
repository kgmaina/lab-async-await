const { useColors, list } = require("mocha/lib/reporters/base");

// Write your code here!
function displayPosts(posts) {
    posts.forEach(post => {
       const tagOne = document.createElement('li');
       const tagTwo = document.createElement('h1');
       tagTwo.textContent = '${title}';
       const tagThree = document.createElement('p');
       tagThree.textContent = '${body}';
       tagOne.appendChild(tagTwo, tagThree);
       'post-list'.appendChild(tagOne);
        
    });
}
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    console.log(posts);
    displayPosts(posts);
    })
.catch(error => {
    console.error('Error fetching user data:', error);
});
async function fetchAndDisplayPosts() {
    try {
        const response = await
        fetch('https://jsonplaceholder.typicode.com/posts');
        const user = await response.json();
        displayPosts(posts);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
}
fetchAndDisplayPosts();