export class Customer {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public userName: string,
        public password: string,
        public confirmPassword: string,
        public extension: string,
        public phoneNumber: string
    ){}

}
export class CustomerLogin {
    constructor(
        public userName: string,
        public password: string
    ){}
    }    
