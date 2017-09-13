# curdo-app2
Version 2 de la aplicacion de curdo

**INSTALL**

npm install --save sequelize
npm install --save pg pg-hstore
npm install --save pubnub
npm install --save bluebird
npm install --save promise

## How to run the app locally

**Builds Steps**
ng build
nodemon

0. Optional: install a local Postgres

```
CREATE DATABASE xxx
CREATE LOGIN xxx WITH PASSWORD = 'xxxx';
USE xxxxx;
CREATE USER xxx FOR LOGIN xxxx;
ALTER ROLE db_owner ADD MEMBER xxx;
```

1. Clone this repo then define following environment variables  

Define the following environment variables pointing to your local MS SQL Server or your dev DB  

```
export ARTIFACTORY_RESOLVE_URL="http://10.235.240.104:8081/artifactory/gradle-dev"
export JDBC_URL="jdbc:sqlserver://localhost:1433;databaseName=planes"
export JDBC_USER=planes
export JDBC_PASSWORD=planes.1234
export API_FILE_NEGATIVO=http://10.235.7.240/crdForm/crdrequests/fn/
```

2. Start the app  

```
ng build nodemon ó ng start
```

3. App should be running here  
http://localhost:3000

## Environments (Pivotal)

#### Dev


#### QA


#### Prod
Directly to 


## POSTGRES Server Databases

#### Dev
jdbc:sqlserver://CLMOSQL2k1201D.istchl.bns:1433;databaseName=FDcalculadora
#### QA
jdbc:sqlserver://CLCVDWH2014U.uatchl.bns:1433;databaseName=FDcalculadora
#### Prod
PENDING