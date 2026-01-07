#1. Jobs
    #6 tabs share common shapes : Evidence highlight / recommendation item
    #prevents duplicating those definitions in 6 different files
    #defines what an evidence item looks like in JSON
    #like a blueprint / type definition so the frontend knows what to expect
#2. Functions
    #Create Evidence Span from EvidenceSpan objects created by services/evidence_serivce.py
        #start and end : character offsets for highlighting
        #quote : short snippet
        #reason : why it was flagged 
        #type : bias / satire / misinfo / disinfo
    #RecommendationItem
        #title / url / source / stance(similar / difference)
        #reason : why recommended 
        #reliability hint label