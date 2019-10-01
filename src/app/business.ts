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
        
        public primaryAddressType: string,
        public primaryAddressLine1: string,
        public primaryZipCode: number,
        public primaryCountry: string,
        public primaryState: string,
        public primaryCity: string,
        public secondaryAddressType: string,
        public secondaryAddressLine1: string,
        public secondaryZipCode: number,
        public secondaryCountry: string,
        public secondaryState: string,
        public secondaryCity: string,

        public primaryExtension: number,
        public primaryPhoneType: string,
        public primaryPhoneNumber: number,
        public secondaryExtension: number,
        public secondaryPhoneType: string,
        public secondaryPhoneNumber: number,
        public thirdExtension: number,
        public thirdPhoneType: string,
        public thirdPhoneNumber: number,

        public userName: string,
        public password: string,
        public confirmPassword: string,
        public agreeTandC: string,

        public primaryAddressLine2?: string,
        public primaryLandmark?: string,
        public secondaryAddressLine2?: string,
        public secondaryLandmark?: string
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

export class BusinessLogin {
    constructor(
        public userName: string,
        public password: string
    ){}
    }    
