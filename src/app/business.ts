export class Business {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public businessType: string,
        public businessName: string,
        public businessDescription: string,
        public servicesProvided: string,

        public addressType1: string,
        public addressLine11: string,
        public pincode1: number,
        public country1: string,
        public state1: string,
        public city1: string,

        public addressType2: string,
        public addressLine21: string,
        public pincode2: number,
        public country2: string,
        public state2: string,
        public city2: string,

        public phoneNumberType1: string,
        public phoneNumber1: number,
        public phoneNumberType2: string,
        public phoneNumber2: number,
        public phoneNumberType3: string,
        public phoneNumber3: number,

        public username: string,
        public password: string,
        public confirmPassword: string,
        public agreeTandC: string,

        public addressLine12?: string,
        public landmark1?: string,
        public addressLine22?: string,
        public landmark2?: string,
    ){}
    }    

