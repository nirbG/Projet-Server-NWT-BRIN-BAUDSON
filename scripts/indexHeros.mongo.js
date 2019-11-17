db.getCollection('heros').createIndex({ name: 1, id: 1 }, { unique: true });
