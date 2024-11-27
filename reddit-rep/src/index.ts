import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'


const app = new Hono()


//our database 
const comments = [
  { id: 1, postId: 101, username: 'user1', text: 'This is a great post!',  profilePhoto: 'Icons/chicken.png' },
  { id: 2, postId: 101, username: 'user2', text: 'Love the details!', profilePhoto: 'Icons/chicken.png' },
  { id: 3, postId: 102, username: 'user3', text: 'Thanks for sharing!', profilePhoto: 'Icons/chicken.png' },
];
app.use("/*" , serveStatic({
  root: "./static",
}))

app.get('/api/comments', (c) => {
  console.log("fetching and returning comments")
  return c.json(comments)
})

const port = 3000
console.log(`Server is running on http://localhost:${port}/post.html`)

serve({
  fetch: app.fetch,
  port
})