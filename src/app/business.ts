export class Business {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public businessType: string,
        public businessEstDate: string,
        public businessName: string,
        public websiteUrl: string,
        public businessDescription: string,
        
        public servicesProvided: servicesProvided,
        // public address: address,
        // public phone: phoneNumber,

        

        public addressType: string,
        public addressLine1: string,
        public pincode: number,
        public country: string,
        public state: string,
        public city: string,
        public secondary_addressType: string,
        public secondary_addressLine1: string,
        public secondary_pincode: number,
        public secondary_country: string,
        public secondary_state: string,
        public secondary_city: string,

        public extension1: number,
        public phoneType1: string,
        public phoneNumber1: number,
        public extension2: number,
        public phoneType2: string,
        public phoneNumber2: number,
        public extension3: number,
        public phoneType3: string,
        public phoneNumber3: number,

        public userName: string,
        public password: string,
        public confirmPassword: string,
        public agreeTandC: string,

        public addressLine2?: string,
        public landmark?: string,
        public secondary_addressLine2?: string,
        public secondary_landmark?: string
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
export class phoneNumber {
    constructor(
        public extension: string,
        public phoneType: string,
        public phoneNumber: string,
    ){}
}
export class address {
    constructor(
        public addressType: string,
        public addressLine1: string,
        public pincode: number,
        public country: string,
        public state: string,
        public city: string,
        public addressLine2?: string,
        public landmark?: string
    ){}
}
export class servicesProvided {
    constructor(
        public serviceName: string
        //public serviceDetails: string,
    ){}
}

export class BusinessFilter {
    constructor(
        public country?: string,
        public state?: string,
        public city?: string,
        public businessType?: string,
        public zipCode?: string
        

    ){}
    }    

export enum SubBusinessType{    
    HOTEL = "Hotel",
    RESORTS = "Resorts",
    FARMHOUSE = "Farmhouse",
    BANQUETS = "Banquets",
    CONVENTIONCENTER = "Convetion Center",
    FUNCTIONHALLS = "Function Halls",
    WEDDING = "Wedding",
    FUNERAL = "Funeral",

}