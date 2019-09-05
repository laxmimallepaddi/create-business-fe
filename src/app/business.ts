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


export enum BusinessType{
        STORAGESPACEPROVIDERS= "Storage Space Providers",
        PANDITHSERVICES = "Pandith Services",
        FASHIONDESIGNERSERVICES = "Fashion Designers Services",
        FLEXIPRINTINGSERVICES = "Flex Printing Services",
        GIFTSSHOP="Gifts Shop",
        MATRIMONIALSERVICES="Matrimonial Services",
        EVENTORGANIZERS="Event Organizers",
        JEWELRYSTORES="Jewelery Stores",
        BRIDALBEAUTYPRODUCTS = "Bridal Beauty Products",
        ACOUSTICSINGERSBANDS="Acoustic Singer Bands",
        BRIDALHAIRCARE="Bridal Haircare",
        BRIDALSKINCARE="Bridal Skincare",
        CAKESBAKES="Cakes n Bakes",
        CATERING="Cartering",
        GENERALCLEANINGSERVICES="General Cleaining Services",
        CORPORATEEVENTVENUE="Corporate Event Venue",
        DJSENTERTAINMENTAGENCY="DJ Entertainment Agency",
        EVENTPHOTOGRAPHY="Event Photography",
        EVENTSECURITY="Event Security",
        FOODTRUCK="Food Truck",
        GRAPHICDESIGNER="Graphic Designer",
        FIREWORKS="Fireworks",
        INVITATIONCARDPRINT="Invitation Card Printing",
        KIDSPARTYHOST="Kids party Host",
        MAGICIANS="Magicians",
        MOBILEBAR="Mobile Bar",
        PARTYEVENTCLEANING="Party Event Cleaning",
        PETSITTING="Pet Sitting",
        WEDDINGPHOTOGRAPHY="Wedding Photography",
        WEDDINGTRANSPORTATION="Wedding Transportation",
        WEDDINGVENUES="Wedding Venues",
        WEDDINGSEVENTFLORISTS="Wedding Event Florists"
}

export class BusinessPasswordChange {
    constructor(
        public password: string,
        public newPassword: string,
        public confirmNewPassword: string
    ){}
}