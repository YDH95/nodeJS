"use strict";

const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const {id, psword} = await UserStorage.getUsersInfo(client.id);

        if (id) {
            if (id == client.id && psword == client.psword) {
                return { success : true};
            }
            return { success : false, msg : "비밀번호 틀림" };
        }
        return { success : false, msg : "아이디 틀림" };
    }

    register() {
        UserStorage.save(this.client);
    }

}

module.exports = User;