# DevSync AI Backend

GitHub commit → AI-generated social media content → API

## Features

- GitHub webhook integration for push events
- Commit message keyword detection
- AI-powered content generation using Google Gemini
- PostgreSQL database for storage
- RESTful API to fetch generated posts

## Tech Stack

- Node.js + Express.js
- PostgreSQL (local via pgAdmin)
- Google Gemini Pro API
- GitHub Webhooks

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
# Server
PORT=5000
NODE_ENV=development

# Gemini AI (Get from: https://makersuite.google.com/app/apikey)
GEMINI_API_KEY=your_actual_api_key_here

# PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_NAME=devsync
DB_USER=postgres
DB_PASSWORD=your_postgres_password
```

### 3. Create PostgreSQL Database

Using pgAdmin or psql:

```sql
CREATE DATABASE devsync;
```

The `posts` table will be created automatically when the server starts.

### 4. Start the Server

```bash
# Development mode (auto-reload)
npm run dev

# Production mode
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /health
```

### Webhook
```
POST /webhook/github
```
Configure this URL in your GitHub repository webhook settings.

### Posts
```
GET /posts              # Get all posts
GET /posts/stats        # Get statistics
GET /posts/:id          # Get single post
DELETE /posts/:id       # Delete post
```

Query parameters for `GET /posts`:
- `limit` - Number of posts (default: 50)
- `offset` - Pagination offset (default: 0)
- `unpublished` - Filter unpublished posts (true/false)

## Setting Up GitHub Webhook

1. Go to your GitHub repository
2. Settings → Webhooks → Add webhook
3. Configure:
   - Payload URL: `http://your-server-ip:5000/webhook/github`
   - Content type: `application/json`
   - Events: Just "Push" events
   - Secret: (optional) Add to `.env` as `GITHUB_WEBHOOK_SECRET`

For local testing, use a tool like [ngrok](https://ngrok.com) to expose your local server:

```bash
ngrok http 5000
```

## Testing the API

```bash
# Health check
curl http://localhost:5000/health

# Get all posts
curl http://localhost:5000/posts

# Get stats
curl http://localhost:5000/posts/stats
```

## Commit Keywords That Trigger Content Generation

The system generates posts for commits containing:
- feature, release, launch, ship
- update, upgrade, improve, enhance
- fix, patch, hotfix
- add, create, implement, integrate
- breaking, major, migrate

## Database Schema

```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY,
  commit_message TEXT,
  commit_id VARCHAR(255),
  commit_url TEXT,
  author_name VARCHAR(255),
  author_email TEXT,
  repository VARCHAR(255),
  commit_type VARCHAR(50),
  linkedin_post TEXT,
  twitter_post TEXT,
  instagram_post TEXT,
  hashtags TEXT[],
  generated_at TIMESTAMP,
  created_at TIMESTAMP,
  is_published BOOLEAN DEFAULT false
);
```

## Project Structure

```
backend/
├── server.js              # Express server
├── package.json
├── .env.example           # Environment template
├── config/
│   └── database.js        # PostgreSQL connection
├── models/                # (Future: ORM models)
├── controllers/
│   ├── webhookController.js
│   └── postController.js
├── services/
│   ├── geminiService.js   # AI content generation
│   └── postService.js     # Database operations
├── routes/
│   ├── webhook.js         # Webhook routes
│   └── posts.js           # Post API routes
└── utils/
    └── keywords.js        # Keyword detection logic
```

## Example Response

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "commit_message": "feature: added user authentication",
  "commit_type": "feature",
  "linkedin_post": "🚀 Exciting news! We've just shipped user authentication...",
  "twitter_post": "🚀 Just shipped: user authentication\n\n1/ Secure login...",
  "instagram_post": "🚀 New feature alert! You can now sign up securely...",
  "hashtags": ["#GitHub", "#DevLife", "#Coding", "#Tech", "#Developer"],
  "created_at": "2024-02-21T10:30:00Z"
}
```

## Troubleshooting

### PostgreSQL Connection Error
- Verify PostgreSQL is running
- Check credentials in `.env`
- Ensure database `devsync` exists

### Gemini API Error
- Verify API key is correct
- Check you have access to Gemini Pro

### Webhook Not Receiving
- Use ngrok for local testing
- Check GitHub webhook delivery logs
- Verify your firewall allows incoming connections

## License

MIT
