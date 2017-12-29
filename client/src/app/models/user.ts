export class User {
    id: number | null;
    name: string | null;
    token: string | null;
    email: string | null;
    password: string | null;
    constructor(
       name: string | null,
       email: string | null,
       password = null,
       id = null,
       token = null) {
        this.id = id;
        this.name = name;
        this.token = token;
        this.email = email;
        this.password = password;
    }
}

