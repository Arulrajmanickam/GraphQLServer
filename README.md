# GraphQLServer
A basic resolver for mock db data using graphql api

Traditional rest apis perform
1. Authentication of incoming requests
2. Basic CRUD operations
3. Business logic
4. Pagination in case the response contains large records
5. Filtering and sorting for the above point
6. Combining two data sources and filling the response

All these can be done using graphQL, and graphQL queries from the front end have the following benefits:
1. The response contains only the data that the request contains, without forcefully sending unwanted data.
2. Response can combine data from multiple data sources using resolvers; this facilitates the use of
achieving data fetching with a single API call instead of multiple API calls.
3. All the above points in the REST can be achieved, and graphQL is blazingly faster for complex, repetitive API calls.

APIs can be queried using graphiql or postman.
