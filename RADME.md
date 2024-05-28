# DiscuitBot

## Introduction
DiscuitBot is a JavaScript class designed to interact with the Discuit API, allowing users to perform various actions such as authentication, fetching recent posts, retrieving post details, fetching comments, creating posts, and commenting on posts.

## Installation
You can install DiscuitBot via npm:

```bash
npm install discuit.js
```

## Usage
1. Import the `DiscuitBot` class:

```javascript
const DiscuitBot = require('discuit.js');
```

2. Create an instance of `DiscuitBot` by providing the API URL:

```javascript
const bot = new DiscuitBot('https://discuit.net/api');
```

3. Authenticate using your username and password:

```javascript
await bot.login('your-username', 'your-password');
```

4. Use the available methods to interact with the Discuit API. Here's an example scenario:

```javascript
// Fetch recent posts
const { posts, next } = await bot.getRecentPosts();
console.log('Recent Posts:', posts);

// Fetch a specific post
const postId = 'kisobRvs';
const post = await bot.getPost(postId);
console.log('Post Details:', post);

// Fetch comments for a specific post
const comments = await bot.getComments(postId);
console.log('Comments:', comments);

// Create a new post
const newPost = await bot.createPost('text', 'New Post Title', 'This is the content of the new post.', 'community-name');
console.log('New Post:', newPost);

// Comment on a post
const comment = await bot.commentOnPost(postId, null, 'This is a comment on the post.');
console.log('Comment:', comment);
```

## Real-world Example
Let's say you want to create a script that fetches recent posts from the Discuit platform, displays the titles of the posts, and then creates a new post with a comment.

```javascript
const DiscuitBot = require('discuit.js');

(async () => {
  const bot = new DiscuitBot('https://discuit.net/api');

  try {
    await bot.login('your-username', 'your-password');

    // Fetch recent posts
    const { posts } = await bot.getRecentPosts();

    // Display titles of recent posts
    console.log('Recent Posts:');
    for (const post of posts) {
      console.log(`- ${post.title}`);
    }

    // Create a new post
    const newPost = await bot.createPost('text', 'New Post Title', 'This is the content of the new post.', 'community-name');

    // Comment on the new post
    const comment = await bot.commentOnPost(newPost.id, null, 'This is a comment on the new post.');
    console.log('Comment:', comment);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
```

## API Reference
For detailed information about the methods and parameters, please refer to the [API Reference](#api-reference) section in this README.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
