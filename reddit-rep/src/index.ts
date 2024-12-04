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
    profilePhoto: 'Icons/bear1.png',
    text: 'Awesome crochet project',
    timestamp: '2024-11-29',
  },
  {
    id: 2,
    postId: 101,
    username: 'Wozers',
    profilePhoto: 'Icons/bear2.png',
    text: 'Cute plushie!',
    timestamp: '2024-12-26',
  },
  {
    id: 3,
    postId: 102,
    username: 'crocheter',
    profilePhoto: 'Icons/bear1.png',
    text: 'So squishy',
    timestamp: '2024-01-28',
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