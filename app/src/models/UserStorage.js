"use strict";

class UserStorage {
    static #users = {
        id : ["test","test2"],
        psword : [1234, 12345],
        name : ["test1", "test2"]
    }

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;