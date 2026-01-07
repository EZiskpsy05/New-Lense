#1. Filters risky or fringe recommendations
    #need to develop safety requirements for recommendation websites
    #need to avoid extremist / fringe / heuristic
#2. Prevents the recommendations tab from accidentally amplifying harmful content
#3. Ways
    #Non-ML
        #Doamin allowlist / denylist
            #allow known mainstream + fact check sites
            #deny known misinfo sites
        #reputation signals
            #avoid newly registered domains
            #avoid domains w/ excessive ads and low content quality (heuristics)
        #content checks
            #if page title contains violent / hate keyword --> reject
            #if snippet is spammy --> reject 
        #category blocking
            #don't recommend extremist propaganda sites
            #don't recommend explicit adult content