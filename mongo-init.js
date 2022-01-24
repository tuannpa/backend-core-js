print('------- Initializing database -------');

// TODO: Find a way to use environment variables from config files

db = db.getSiblingDB('dev_db');
db.createUser(
    {
        user: 'api_user',
        pwd: 'Huong150894',
        roles: [{ role: 'readWrite', db: 'dev_db' }]
    }
);

db.createUser(
    {
        user: 'admin_user',
        pwd: 'Huong150894@',
        roles: [{ role: 'dbAdmin', db: 'dev_db' }]
    }
);

db.createUser(
    {
        user: 'owner_user',
        pwd: 'Huong150894@@',
        roles: [{ role: 'dbOwner', db: 'dev_db' }]
    }
);
db.createCollection('users');

print('------- Finish database initialization  -------');