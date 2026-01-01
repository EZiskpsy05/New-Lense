#1. Jobs
    #turn model signals into UI ready evidence highlights the frontend can display
        #model signals : scores, sentence IDs, token importances, detected cues
    #standardize evidence across all tabs --> Bias/Satire/Misinfo/Disinfo return the same structure --> Frontend can render them the same way 
    #reduce noise by selecting the most relevant snippets
        #avoid overlaps
        #attach short human readable reasons 
#2. Input : 
    #clean_text
        #final text after URL / PDF cleaning
    #ML output / signals
        #category
        #score
        #sentence level signals / token level signals / cue or tactic signals
#3. Output : 
    #return evidence in a consistent structure
        #list[EvidenceSpan] per category : each item includes
            #start / end character
            #quote
            #reason
            #categorhy
            #strength
#4. Specific Functions
    #build_evidence(clean_text: str, signal_by_category: dict, *, max_evidence: int = 5) -> dict[str, list[EvidenceSpan]]
        #main entry point called by analysis_service.py
        #loops through each category and returns evidence lists
    #split_sentence_with_spans(text: str) -> list[tuple[str, int, int]]
        #splits text into sentences while preserving character start/end offsets
    #map_candidate_to_span(clean_text: str, cadidate:dict, sentence: list) -> tuple[int, int, str]
        #converts model candidate
        #sentence id / token region --> start / end / quote 
    #label_reason(candidate: dict, category: str) -> str
        #produces a short reason string for the UI <-- from fixed dictionary
        #Ex. if cue includes "loaded_language" → reason = “Emotionally loaded phrasing”
        #Ex. if cue includes "no_sources" → reason = “Claim lacks sourcing”
    #merge_and_dedupe(spans: list[EvidenceSpan]) -> list[EvidenceSpan]
        #removes near-duplicates and merges overlapping spans
        #keeps evidence readable and non-repetitive
    #clip_span(text: str, start: int, end: int, *, max_chars: int = 240) -> tuple[int, int, str]
        #ensures the quote is not too long for UI
        #shrinks or centers the span around the most relevant phrase
    #fallback_evidence(clean_text: str, category: str, cues: list[str]) -> list[EvidenceSpan]
        #if model gives no usable signal --> returns minimal evidence:
            #none
            #few heurisic highlights based on cures/keywords