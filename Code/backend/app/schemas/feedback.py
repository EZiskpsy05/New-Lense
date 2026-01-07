#1. Jobs
    #defines what the frontend is allowed to send as feedback and what it received back
    #prevents garbage data and security issues
        #super long comments
        #missing analysis_id
        #invalid vote
#2. Functions
    #FeedbackCreate (request)
        #analysis_id
        #vote : thumbs up / down
        #optional comment
        #optional category : user disagrees with the result
    #FeedbackOut (response)
        #feedback_id
        #created_at