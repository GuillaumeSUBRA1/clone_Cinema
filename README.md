### pour créer la base de donnée, installez docker pour créez un conteneur avec la commande suivante
```shell=
docker run --name cinema -p 5432:5432 -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=cinema_db -d postgres
```
