import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'


const app = new Hono()


//our database 
const comments = [
  {
    id: 1,
    postId: 101,
    username: 'Dilyna',
    profilePhoto: 'images/profile1.jpg',
    text: 'The angle makes it look like Hello Kitty waiting on a face.',
    timestamp: '2024-11-26T14:00:00Z',
  },
  {
    id: 2,
    postId: 101,
    username: 'CrochetFanatic',
    profilePhoto: 'images/profile2.jpg',
    text: 'Amazing work! Love the creativity!',
    timestamp: '2024-11-26T14:10:00Z',
  },
  {
    id: 3,
    postId: 102,
    username: 'User123',
    profilePhoto: 'images/profile3.jpg',
    text: 'Wow, I would love to learn this technique.',
    timestamp: '2024-11-26T14:20:00Z',
  },
];
app.use("/*" , serveStatic({
  root: "./static",
}))

app.get('/api/comments', (c) => {
  console.log("fetching and returning comments")
  return c.json(comments)
})

const port = 3000
console.log(`Server is running on http://localhost:${port}/homepage.html`)
console.log(`Server is running on http://localhost:${port}/post2.html`)

serve({
  fetch: app.fetch,
  port
})