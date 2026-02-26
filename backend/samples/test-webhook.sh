#!/bin/bash

# Test GitHub webhook locally
# Usage: ./test-webhook.sh

echo "Sending test webhook to local server..."
echo ""

curl -X POST http://localhost:5000/webhook/github \
  -H "Content-Type: application/json" \
  -d @samples/webhook-payload.json

echo -e "\n"
echo "✅ Webhook sent!"
echo ""
echo "Check the server logs to see if the post was generated."
echo "Then fetch the posts with: curl http://localhost:5000/posts"
