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
        "postId": "996a8249-0266-4340-8721-fb2566bed5ba",
        "creator": {
          "name": "luen2003",
          "id": "f1268fe7-5cd2-4b2c-9011-c17ea743473e",
          "handle": "luen2003",
          "pic": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/logo.png"
        },
        "comment": {
          "count": 0,
          "commentingAllowed": true
        },
        "reaction": {
          "count": 15,
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
        "postId": "6f3925c7-d013-4724-a93f-c8bd4e00fd74",
        "creator": {
          "name": "luen2003",
          "id": "e990de72-7920-4615-8551-9cc6b8cd906b",
          "handle": "luen2003",
          "pic": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/logo.png"
        },
        "comment": {
          "count": 0,
          "commentingAllowed": true
        },
        "reaction": {
          "count": 12,
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
        "postId": "28d47ea0-f229-4dbd-81c3-28675c18fb4e",
        "creator": {
          "name": "luen2003",
          "id": "4c56e63f-5524-4724-9382-8f930e128ba3",
          "handle": "luen2003",
          "pic": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/logo.png"
        },
        "comment": {
          "count": 0,
          "commentingAllowed": true
        },
        "reaction": {
          "count": 4,
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
        "postId": "84d07450-7d1b-45a0-8f87-dc8dc69c1f40",
        "creator": {
          "name": "luen2003",
          "id": "ed4de405-097d-48c6-aab0-1965897f3c89",
          "handle": "luen2003",
          "pic": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/logo.png"
        },
        "comment": {
          "count": 0,
          "commentingAllowed": true
        },
        "reaction": {
          "count": 2,
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
        "postId": "c2c4672d-5b85-47d9-a683-3db3be8fe979",
        "creator": {
          "name": "luen2003",
          "id": "08b2a12b-6e46-4a9f-a2f9-04d2f2879d42",
          "handle": "luen2003",
          "pic": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/logo.png"
        },
        "comment": {
          "count": 2,
          "commentingAllowed": true
        },
        "reaction": {
          "count": 6,
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
        "postId": "83dde137-509d-4083-a1bd-5164b87809d3",
        "creator": {
          "name": "luen2003",
          "id": "c4e99a92-8805-434d-8e40-41d2fe720cfc",
          "handle": "luen2003",
          "pic": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/logo.png"
        },
        "comment": {
          "count": 0,
          "commentingAllowed": true
        },
        "reaction": {
          "count": 7,
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
        "postId": "7ada02c7-2dd0-4af9-b3b1-e6c4aa4242ef",
        "creator": {
          "name": "luen2003",
          "id": "37754f3a-a7ae-454c-bb48-757139559e8e",
          "handle": "luen2003",
          "pic": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/logo.png"
        },
        "comment": {
          "count": 0,
          "commentingAllowed": true
        },
        "reaction": {
          "count": 2,
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
        "postId": "742f3324-8c8e-4f34-af38-4652478c1f5a",
        "creator": {
          "name": "luen2003",
          "id": "874e37cb-8e25-4762-8a76-3b2a2197b443",
          "handle": "luen2003",
          "pic": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/logo.png"
        },
        "comment": {
          "count": 0,
          "commentingAllowed": true
        },
        "reaction": {
          "count": 10,
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
          "mediaUrl": "https://github.com/luen2003/python-code/raw/refs/heads/main/sample-video.mp4",
          "thumbnail": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/sample-image.png",
          "hyperlink": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/sample-image.png",
          "placeholderUrl": "https://raw.githubusercontent.com/luen2003/python-code/refs/heads/main/sample-image.png"
        }
      }
  // Add more posts here following the same structure...
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
