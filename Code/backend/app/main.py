#1. Creates the FastAPI application instances
#2. Attaches middleware (CORS, logging, rate limiting)
#3. Runs startup logic like loading ML models once
#4. Initialize the DB client so /analyze is fast