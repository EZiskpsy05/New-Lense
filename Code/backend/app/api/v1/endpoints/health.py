#1. GET /health : confirms the backend is alive
    #something breaks --> /health answers if the server is running in the simplest possible way without touching any file
    #allow us to check if the backend is down or backend is up but a specific feature is failing
#2. verify the frontend can reach the backend
    # when React app calls API --> fails
    # this file assess if the problem is CORS misconfig / wrong base URL and proxy setup / network or deployment routing issues
#3. used by deployment platforms / load balancers / monitoring
    #(Docker, Render, Fly, AWS, etc.) services often need a “ping” endpoint to:
        #decide whether an instance is healthy
        #restart it if it’s stuck
        #stop sending traffic to a broken instance
#4. helps debugging ML pipeline safely
    #can check uptime / verify realeases / confirm API router wiring correctly
