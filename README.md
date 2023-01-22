# GraphQLServer
A basic resolver for mock db data using graphql api

Traditional rest apis perform
1. Authentication of incoming requests
2. Basic CRUD operations
3. Business logic
4. Pagination in case response contains large records
5. Filtering, sorting for the above point
6. Combining of two data sources and filling the response

All these can be done using graphQL also and Graphql queries from front end has following benefits
1. Response contains only the data the the request contains, not forcefully sending unwanted data
2. Response can combine data from multiple data sources using resolvers, this facilitates the use of 
   achieving data fetching with a single api call instead of multiple api calls.
3. All the above points in the REST can be achieved + graphQL is blazingly faster for complex repetitive api calls scenario

API can be queried using graphiql or postman
