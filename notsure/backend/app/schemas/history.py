#1.Jobs 
    #defines the response for previous analyses (history page)
    #history return a summary list
    #frontend clicks one item --> GET/history/{analysis_id} for full detail 
#2. Pydanitc Models : used by the endpoints
    #Hisotry List (many items, lightweight)
    #History detail (one item, full tab data)
    #contains 
        #History Query
            #Limit : int(should be about 20)
            #Offset : int (should be 0) OR Cursor : str | None
            #q : str | None (search by title / domain)
            #source_type : Literal["url", "text", "pdf"] | None
            #date_from : datetime | None
            #date_to : datetime | None
            #min_credibility : float | None
            #sort : Literal["newest", "oldest", "credibility_high", "credibility_low"]
        #List itme : what frontend shows in history table
            #analysis_id: str
            #created_at: datetime
            #source_type: str (url/text/pdf)
            #title: str | None (if URL)
            #domain: str | None
            #preview: str (first ~140 chars)
            #credibility_score: float
            #bias_level: str (none/slight/moderate/extreme)
            #flags: list[str] (e.g., ["satire_possible", "high_disinfo_risk"])
        #List response (paged)
            #items: list[HistoryItem]
            #total: int (optional if you compute it)
            #limit: int
            #offset: int (or next_cursor)
        #Detail response (when user clicks one history item)
            #analysis_id: str
            #created_at: datetime
            #input_summary (url/title/domain/preview)
            #results (the full 6-tab object you also return from /analyze)
            #raw_text_available: bool (if you didn’t store full text)