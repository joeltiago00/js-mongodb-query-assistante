module.exports = new class QueryBuilder {
  #query = [];

  match(params) {
    this.#query.push({ "$match": params });

    return this;
  }

  addToSet(params) {
    this.#query.push({"$addToSet": params});

    return this;
  }

  addFields(params) {
    this.#query.push({"$addFields": params});

    return this;
  }

  and(...params) {
    this.#query.push({"$and": [...params]});

    return this;
  }

  arrayElemAt(params) {
    this.#query.push({"$arrayElemAt": [params]});

    return this;
  }

  facet(params) {
    this.#query.push({"$facet": params});

    return this;
  }

  filter(params) {
    this.#query.push({"$filter": params});

    return this;
  }

  push(params) {
    this.#query.push({"$push": params});

    return this;
  }

  first(params) {
    this.#query.push({"$first": params});

    return this;
  }

  last(params) {
    this.#query.push({"$last": params});

    return this;
  }

  max(params) {
    this.#query.push({"$max": params});

    return this;
  }

  min(params) {
    this.#query.push({"$min": params});

    return this;
  }

  sum(params) {
    this.#query.push({"$sum": params});

    return this;
  }

  limit(params) {
    this.#query.push({"$limit": params});

    return this;
  }

  mergeObjects(params) {
    this.#query.push({"$mergeObjects": params});

    return this;
  }

  lookup(from, localField, foreignField, as) {
    this.#query.push({"$lookup": {
      from: foreignField,
      localField: localField,
      foreignField: foreignField,
      as: as
    }});

    return this;
  }

  skip(params) {
    this.#query.push({"$skip": params});

    return this;
  }

  unwind(params) {
    this.#query.push({"$unwind": params});

    return this;
  }

  project(params) {
    this.#query.push({"$project": params});

    return this;
  }

  group(params) {
    this.#query.push({"$group": params});

    return this;
  }

  sort(params) {
    this.#query.push({"$sort": params});

    return this;
  }

  when(condition, query) {
    if (condition === true) {
        query(this)
    }

    return this;
  }

  get() {
    return this.#query;
  }
}
