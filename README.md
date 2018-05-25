# Oppgave
Du skal lage en webside som presenterer ulike kategorier og artikler innenfor de kategoriene. Du står fritt til å velge layout og design selv. Websiden bør fungere på ulike skjermstørrelser. Dataene som skal presenteres serves gjennom en backend som kjører i et Docker image. En beskrivelse av hvordan du kjører opp backenden finner du lengre ned. Oppgaven skal leveres gjennom at repoet forkes, index.html og andre assets legges til og nytt image bygges og deles på valgfri måte.

# Bygging av backend docker image
    docker build -t backend .

# Kjøring av backend docker image
    docker run --name backend -p 8080:80 -d backend
