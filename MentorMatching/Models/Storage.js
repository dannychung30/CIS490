class Storage {
  constructor(dbName) {
    this.dbName = dbName;
    this.initializeDatabase();
  }

  getAll() {
    let db = JSON.parse(localStorage.getItem(this.dbName));
    return db.data;
  }

  initializeDatabase() {
    if (!localStorage.getItem(this.dbName)) {
      localStorage.setItem(this.dbName, JSON.stringify({ data: [] }));
    }
  }

  insertMany(data) {
    data.forEach((d) => {
      this.insert(d);
    });
  }

  insert(data) {
    let db = JSON.parse(localStorage.getItem(this.dbName));
    db.data.push({ id: crypto.randomUUID(), data });
    localStorage.setItem(this.dbName, JSON.stringify(db));
  }

  find(query) {
    let db = JSON.parse(localStorage.getItem(this.dbName));
    let result = db.data.filter((doc) => {
      for (let key in query) {
        if (doc[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });

    return result;
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
}
