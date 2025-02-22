class User{
    constructor(email, password){
        this.email=email;
        this.password =password
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value    }


    get password(){
        return `${this._password}patrick`
    }
    set password(value){
            this._password = value    }
}

const patrick = new User("patrick@g.ai", "pratik")
console.log(patrick.email);