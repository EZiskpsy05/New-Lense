#1. Job
    #talk to the DB for feedback related actions
    #keeps DB code out of the endpoints and services
#2. Functions
    #create_feedback : inserts feedback into DB
    #get feedback for analysis : returns all feedback on a given analysis
    #stats for model eval : aggrerates thumbs up and down / correctness / comments
#3. Connection
    #Frontend calls POST /api/v1/feedback --> endpoint users schema to validate --> service to apply logic --> repo saves it 