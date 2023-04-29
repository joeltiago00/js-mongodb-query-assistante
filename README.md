### MongoDB Aggregate Query Assistant - WIP

This package is a helper to help you create complex aggregate queries in a simple and abstracted way using functions.

Usage examples:

```
const query = QueryBuilder;

query.match({name: "john"});

/** OUTPUT
    [
        {
            "$match": {
                "name": "john"
            }
        }
    ]
 */
```

Condition usage:

```
const query = QueryBuilder;

query.match({name: "john"})
    .when(orderByEmailAsc /** true condition */, (query) => query.sort({email: 1}));

/** OUTPUT
    [
        {
            "$match": {
                "name": "john"
            }
        },
        {
            "$sort": {
                "email": 1
            }
        }
    ]
 */
```