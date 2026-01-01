#1. Orchestrates the whole pipeline
    #ingest → clean → run models → build tab outputs → store result
#2. Ensures every tab returns
    #score/level + evidence + explanation
#3. Calls AI for paragraph
    #Call OpenAI once to generate explanations for all tabs
    #cheaper + simpler than 6 separate calls