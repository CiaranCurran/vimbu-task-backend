# vimbu-task-backend
This repository contains the back-end code for the vimbu recruitment task.

It consists of a node.js express server, written in typescript, which exposes a graphql endpoint that interfaces, via TypeORM, with a Postgres DB deployed on AWS RDS.
 The server is itself deployed as a single container cluster on AWS ECS.
 
 I took the oppurtunity to learn some new tech which happens to be in the Vimbu stack, namely GraphQL and TypeORM.

The database consists of a list of ski resorts and for each resort, a list of ski instructors who work at that resort.

You can checkout the GraphiQL interface and list of available queries at <http://18.203.159.34:8888/graphql>
