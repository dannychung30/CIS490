class Storage {
  constructor(dbName) {
    this.dbName = dbName;
    this.initializeDatabase();
  }

  getAll() {
    let db = JSON.parse(localStorage.getItem(this.dbName));
    return db;
  }

  initializeDatabase() {
    if (!localStorage.getItem(this.dbName)) {
      localStorage.setItem(this.dbName, JSON.stringify([]));
    }
  }

  insertMany(data, name) {
    data.forEach((d) => {
      this.insert(d, name);
    });
  }

  insert(data, name = '') {
    let db = JSON.parse(localStorage.getItem(this.dbName));
    // db.push({ id: crypto.randomUUID(), data });
    if (name) {
      const entry = {};
      entry.id = crypto.randomUUID();
      entry[name] = data;
      db.push(entry);
    } else {
      db.push(data);
    }
    localStorage.setItem(this.dbName, JSON.stringify(db));
  }

  find(query) {
    let db = JSON.parse(localStorage.getItem(this.dbName));
    let result = db.filter((doc) => {
      for (let key in query) {
        if (doc[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });

    return result;
  }

  findOne(query) {
    let db = JSON.parse(localStorage.getItem(this.dbName));
    let result = db.filter((doc) => {
      for (let key in query) {
        if (doc[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });

    return result[0];
  }

  update(query, data) {
    let db = JSON.parse(localStorage.getItem(this.dbName));
    db.data.forEach((doc) => {
      let match = true;
      for (let key in query) {
        if (doc[key] !== query[key]) {
          match = false;
          break;
        }
      }
      if (match) {
        for (let key in data) {
          doc[key] = data[key];
        }
      }
    });
    localStorage.setItem(this.dbName, JSON.stringify(db));
  }

  remove(query) {
    let db = JSON.parse(localStorage.getItem(this.dbName));
    db.data = db.data.filter((doc) => {
      for (let key in query) {
        if (doc[key] !== query[key]) {
          return true;
        }
      }
      return false;
    });
    localStorage.setItem(this.dbName, JSON.stringify(db));
  }

  clear() {
    localStorage.setItem(this.dbName, '[]');
  }
}
