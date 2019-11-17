db.getCollection('comics').createIndex({ title: 1, isbn: 1 }, { unique: true });
