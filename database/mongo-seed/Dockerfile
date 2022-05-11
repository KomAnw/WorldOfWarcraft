FROM mongo

COPY collections/Classes.json /collections/Classes.json

CMD mongoimport --host mongo --db World_of_Warcraft_DB --collection Classes --type json --file /collections/Classes.json --jsonArray