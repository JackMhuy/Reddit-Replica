import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'


const app = new Hono()


//our database 
const comments = [
  { id: 1, postId: 101, username: 'User1', text: 'Awesome!',  profilePhoto: 'Icons/chicken.png' },
  { id: 2, postId: 101, username: 'User2', text: 'Dope!', profilePhoto: 'Icons/chicken.png' },
  { id: 3, postId: 102, username: 'User3', text: 'Please share the pattern!', profilePhoto: 'Icons/chicken.png' },
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
console.log(`Server is running on http://localhost:${port}/post.html`)

serve({
  fetch: app.fetch,
  port
})