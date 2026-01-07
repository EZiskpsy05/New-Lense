#1. Job
    #ML inference output is messy / model - specific
        #raw logits / probabilities
        #variable fields depending on model
    #guarantees the ML output into same JSON structure every time
    #keeps frontend stable even if the models changes 
#2. Functions
    #AnalyzeRequest
        #allows exactly one input source : text / url / file
        #validates : not empty / max length / url format
    #AnalyzeResponse
        #returns the 6 tabs as consistent objects
            #score : 0-1 or 0-100
            #label / level : none / slight / extreme
            #evidence spans
            #explanation text
            #recommendations list
            #metadata (language / model version / timestamp)    
