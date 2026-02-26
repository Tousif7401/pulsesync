#!/bin/bash

# DevSync AI API Test Script

echo "╔════════════════════════════════════════════════╗"
echo "║       🧪 DevSync AI API Test                   ║"
echo "╚════════════════════════════════════════════════╝"
echo ""

BASE_URL="http://localhost:5000"

echo "Testing DevSync AI API..."
echo ""

# Test 1: Health Check
echo "1️⃣  Health Check"
echo "GET $BASE_URL/health"
curl -s "$BASE_URL/health" | json_pp 2>/dev/null || curl -s "$BASE_URL/health"
echo -e "\n"

# Test 2: Get Posts
echo "2️⃣  Get All Posts"
echo "GET $BASE_URL/posts"
curl -s "$BASE_URL/posts" | json_pp 2>/dev/null || curl -s "$BASE_URL/posts"
echo -e "\n"

# Test 3: Get Stats
echo "3️⃣  Get Statistics"
echo "GET $BASE_URL/posts/stats"
curl -s "$BASE_URL/posts/stats" | json_pp 2>/dev/null || curl -s "$BASE_URL/posts/stats"
echo -e "\n"

# Test 4: Webhook Health
echo "4️⃣  Webhook Health Check"
echo "GET $BASE_URL/webhook/health"
curl -s "$BASE_URL/webhook/health" | json_pp 2>/dev/null || curl -s "$BASE_URL/webhook/health"
echo -e "\n"

echo "✅ Tests complete!"
echo ""
echo "To test the webhook:"
echo "  1. Set up ngrok: ngrok http 5000"
echo "  2. Add the ngrok URL to GitHub webhook"
echo "  3. Make a commit with keywords like 'feature', 'fix', 'release'"
echo ""
