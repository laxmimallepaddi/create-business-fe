export class Business {
    constructor(
        public businessId: string,
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
    "Space Providers",
    "Pandith Services",
    "Fashion Services",
    "Gifting and Printing Services",
    "Matrimonial Services",
    "Cartering Services",
    "Event Organizers",
    "Beauty Services",
    "Bakers",
    "Band Baaja Services",
    "Photography",
    "Security Services",
    "Kid Zone",
    "Housekeeping Services",
    "Transportation",
    "Decoration Department",
    "Cooks",
    "Meat Providers"
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
        public primaryCountry?: string,
        public primaryState?: string,
        public primaryCity?: string,
        public businessType?: string,
        public primaryZipCode?: string
        

    ){}
    }    

export class BusinessLogin {
    constructor(
        public userName: string,
        public password: string
    ){}
    }    


export function mapBusinessTypes(val: string){
        let list=[];
        if(val == '1: Space Providers' || val == 'Space Providers'){
          list=["Hotel/Lodge",
                "Resorts",
                "Farmhouse",
                "Banquet Halls",
                "Convertion Center/Function Halls"
            ];
        }
        if(val == '2: Pandith Services' || val == 'Pandith Services'){
          list=['Wedding',
                'Funeral'
                ];
        }
        if(val == "3: Fashion Services" || val == "Fashion Services"){
          list=["Bride Dress Designer",
                "Groom Dress Designers",
                "Clothing Stores",
                "Footwear Stores",
                "Jewelry Stores",
                "Cosmetic Stores",
                "Fashion Designers"
                ];
        }
        if(val == "4: Gifting and Printing Services" || val == "Gifting and Printing Services"){
          list=["Gift Shops",
                "Wedding Card Printers",
                "Handloom Gift Item Makers"
                ];
        }
        if(val == "5: Matrimonial Services" || val == "Matrimonial Services"){
          list=["Martrimonial"
        ];
        }
        if(val == "6: Cartering Services" || val == "Cartering Services"){
          list=["With food",
                "With Catering Boys"
                ];
        }
        if(val == "7: Event Organizers"|| val == "Event Organizers"){
          list=["Birthday",
                "All types of Events"
                ];
        }
        if(val == "8: Beauty Services" || val == "Beauty Services"){
          list=["For Individual",
                "For both Men and Women"
                ];
        }
        if(val == "9: Bakers" || val == "9: Bakers"){
          list=["Specialist for Birthday Cakes",
                "Specialist for Wedding Cakes",
                "All Types of Services"
                ];
        }
        if(val == "10: Band Baaja Services" || val == "Band Baaja Services"){
          list=["DJ",
                "Sunny Mela Services",
                "Bharat Bandh Services"
                ];
        }
        if(val == "11: Photography" || val == "Photography"){
          list=["Photoshoot",
                "Wedding",
                "Party",
                "Event",
                "All Types of Photography"
                ];
        }
        if(val == "12: Security Services" || val == "Security Services"){
          list=["All type of Security Services"
                ];  
        }
        if(val == "13: Kids Zone" || val == "Kids Zone"){
          list=["Magicians",
                "Games",
                "Mimicry and Stage Show"
                ];
        }
        if(val== "14: Housekeeping Services" || val== "Housekeeping Services"){
          list=["All types of Housekeeping"
               ];
        }
        if(val == "15: Transportation" || val == "Transportation"){
          list=["Packers and Movers",
                "Vehicle for Events"
                ];
        }
        if(val == "16: Decoration Department" || val == "Decoration Department"){
          list=["Flowerist",
                "Stage Organisers",
                "Mobile Bar Organisers"
                ];
        }
        if(val== "17: Cooks" ||  val== "Cooks"){
          list=["For all food types",
                "Veg",
                "Non-Veg",
                "Jain",
                "Punjabi",
                "North Indian"
                ];
        }
        if(val == "18: Meat Providers" || val == "Meat Providers"){
          list=["Chicken",
                "Mutton",
                "Fish",
                "Sea Food",
                "Other"
                ];
        }
        
      return list;
      }