#1. Job
    #Builds cross-reference recommendations
        #similar coverage
        #different framing
        #primary/fact-check sources
#Ways
    #Non-ML approach
        #use Search API (NewsAPI / GDELT / SerpAPI / Bing Web Search)
        #Query using:
            #article title
            #key named entitles (ppl / places / orgs)
            #key phrases
        #then --> filter results
            #prefer reputable domains
            #remove duplicates
            #pick: 
                #same topic : similar stance 
                #same topic : different stance 
                #fact check sources
                #primary source : gov / uni / etc..
    #ML approach <-- later development 
        #use embeddings + vector search for semantic similarity 
