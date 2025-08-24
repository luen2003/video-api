const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');  // Import cors package

// Enable CORS for all origins
app.use(cors());

// Sample video posts data (to simulate a database)
const posts = [
    {
        "postId": "9e20ef0d-17fe-4317-a2f8-5d601d507761",
        "creator": {
          "name": "luen2003",
          "id": "e70c3bbb-eec9-4a44-82ca-d69d5ce2a213",
          "handle": "luen2003",
          "pic": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/logo.png"
        },
        "comment": {
          "count": 2,
          "commentingAllowed": true
        },
        "reaction": {
          "count": 31,
          "voted": false
        },
        "submission": {
          "title": "Random Title",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
          "mediaUrl": "https://github.com/luen2003/python-code/raw/refs/heads/main/sample-video.mp4",
          "thumbnail": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/sample-image.png",
          "hyperlink": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/sample-image.png",
          "placeholderUrl": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/sample-image.png"
        }
      },
      {
        "postId": "c1860001-deea-48de-bfc8-bd63774293a8",
        "creator": {
          "name": "luen2003",
          "id": "356a706b-164b-4b7a-b384-2774b9be5cca",
          "handle": "luen2003",
          "pic": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/logo.png"
        },
        "comment": {
          "count": 1,
          "commentingAllowed": true
        },
        "reaction": {
          "count": 3,
          "voted": false
        },
        "submission": {
          "title": "Random Title",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet enim nec libero faucibus imperdiet. Nam auctor commodo nulla nec finibus. Etiam gravida mauris at neque scelerisque, eu euismod ex sodales. In at risus at ipsum blandit ultricies a a ipsum. Integer euismod consectetur dignissim. ",
          "mediaUrl": "https://github.com/luen2003/python-code/raw/refs/heads/main/sample-video-9.mp4",
          "thumbnail": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/sample-image-9.png",
          "hyperlink": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/sample-image-9.png",
          "placeholderUrl": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/sample-image-9.png"
        }
      }
];

app.get('/videos', (req, res) => {
  // Get page number from query string, default to 0 if not provided
  const page = parseInt(req.query.page) || 0;
  const postsPerPage = 2;  // Number of posts per page

  // Calculate the starting index for pagination
  const startIndex = page * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  // Paginate the posts array
  const paginatedPosts = posts.slice(startIndex, endIndex);

  // Response structure
  const response = {
    message: "Success",
    data: {
      posts: paginatedPosts,
      page: page,  // Page number starts from 0
      offset: page + 1,  // Offset starts from 1 for page 0
    }
  };

  // Send the response as JSON
  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
