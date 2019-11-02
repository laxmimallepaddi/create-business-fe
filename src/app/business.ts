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
        public newPassword: string,

        public primaryAddressLine2?: string,
        public primaryLandmark?: string,
        public secondaryAddressLine2?: string,
        public secondaryLandmark?: string
    ){}
    }    


export enum BusinessType{
    "Bakers",
    "Band Baaja Services",
    "Beauty Services",
    "Catering Services",
    "Cleaning Service Providers",
    "Cooks",
    "Decoration Services",
    "Event Organizers",
    "Fashion Services",
    "Fitness",
    "Gifting and Printing Services",
    "Grocery Store",
    "Housekeeping Services",
    "Insurance Agents",
    "Kids Zone",
    "Matrimonial Services",
    "Meat Providers",
    "Pandith Services",
    "Pan Shop",
    "Photography",
    "Professionals",
    "Real Estate Brokers",
    "Registration Agents",
    "Repair and Fix",
    "Security Services",
    "Space Providers",
    "Transportation",
    "Vegetables/Fruits Store",
    "Water Tanker Suppliers"
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
        if(val == "1: Bakers" || val == "Bakers"){
          list=["Specialist for Birthday Cakes",
                "Specialist for Wedding Cakes",
                "All Types of Services"
                ];
        }
        if(val == "2: Band Baaja Services" || val == "Band Baaja Services"){
          list=["DJ",
                "Sunny Mela Services",
                "Bharat Bandh Services"
                ];
        }
        if(val == "3: Beauty Services" || val == "Beauty Services"){
          list=["For Mens only",
                "For Women only",
                "For both Men and Women"
                ];
        }
        if(val == "4: Catering Services" || val == "Catering Services"){
          list=["With food",
                "With Catering Boys"
                ];
        }
        if(val == "5: Cleaning Service Providers" || val == "Cleaning Service Providers"){
          list=["Bathroom Cleaning",
                "Dry Cleaning",
                "Car Cleaning Services",
                "Housekeeping Staff Contractor",
                "Pest Control Service providers"
              ];
        }
        if(val== "6: Cooks" ||  val== "Cooks"){
          list=["For all food combinations",
                "For Veg",
                "For Non-Veg",
                "For Jain",
                "For Punjabi",
                "For North Indian"
                ];
        }
        if(val == "7: Decoration Department" || val == "Decoration Department"){
          list=["Flowerist",
                "Stage decoration",
                "Fireworks Providers",
                "Lighting Providers"
                ];
        }
        if(val == "8: Event Organizers"|| val == "Event Organizers"){
          list=["Birthday Party",
                "Wedding Events",
                "Corporate Events",
                "All types of Events"
                ];
        }
        if(val == "9: Fashion Services" || val == "Fashion Services"){
          list=["Bride Dress Designer",
                "Groom Dress Designers",
                "Clothing Stores",
                "Footwear Stores",
                "Jewelry Stores",
                "Cosmetic Stores",
                "Fashion Designers"
                ];
        }
        if(val == "10: Fitness" || val == "Fitness"){
          list=["Yoga Teacher",
                "Personal Fitness Trainer"
              ];
        }
        if(val == "11: Gifting and Printing Services" || val == "Gifting and Printing Services"){
          list=["Gift Shops",
                "Wedding Card Printers",
                "Handloom Gift Item Makers",
                "Flex Printing Services"
                ];
        }
        if(val == "12: Grocery Store" || val == "Grocery Store"){
          list=["Kirana Supplies",
                "Medical Supplies"
                ];
        }
        if(val == "13: Housekeeping Services" || val == "Housekeeping Services"){
          list=["Individual Maids",
                "Housekeeping Staff Contractor"
                ];
        }
        if(val == "14: Insurance Agents" || val == "Insurance Agents"){
          list=["All Types of Insurances",
                "Life/Personal Insurance",
                "Property Insurance",
                "Health Insurance",
                "Car/Bike",
                "Other Insurances"
              ];
        }
        if(val == "15: Kids Zone" || val == "Kids Zone"){
          list=["Magicians",
                "Gaming Equipment Providers",
                "Stage Show Artist"
                ];
        }
        if(val == "16: Matrimonial Services" || val == "Matrimonial Services"){
          list=["All types of Martrimonial Services"
        ];
        }
        if(val == "17: Meat Providers" || val == "Meat Providers"){
          list=["Chicken",
                "Mutton",
                "Fish",
                "Other"
                ];
        }
        if(val == '18: Pandith Services' || val == 'Pandith Services'){
          list=['Wedding',
                'Funeral'
                ];
        }
        if(val == '19: Pan Shop' || val == 'Pan Shop'){
          list=['Speciality Pans'
                ];
        }
        if(val == "20: Photography" || val == "Photography"){
          list=["Photoshoot",
                "Event",
                "All Types of Photography"
                ];
        }
        if(val == "21: Professionals" || val == "Professionals"){
          list=["Electrician",
                "Plumber",
                "Mechanic",
                "Architect",
                "Interior Designer",
                "Painters",
                "Application Developer",
                "Web Designer",
                "Charted Accountants(CAs)"
              ];
        }
        if(val == "22: Real Estate Brokers" || val == "Real Estate Brokers"){
          list=["Home",
                "Open Plots",
                "Agriculture Land"
              ];
        }
        if(val == "23: Registration Agents" || val == "Registration Agents"){
          list=["Company Registration Agents",
                "GST Registration Agents"
              ];
        }
        if(val == "24: Repair and Fix" || val == "Repair and Fix"){
          list=["AC",
                "Air Cooler",
                "Mobiles",
                "Chimney",
                "Laptop/Computers",
                "Electric Geyser/Water Heater",
                "Refirigerator",
                "Washing Machine",
                "D2H Installation",
                "Mixer-Grinder",
                "Water Purifers",
                "TV Repair",
                "Furniture Making and Repair"
              ];
        }
        if(val == "25: Security Services" || val == "Security Services"){
          list=[
              "Bouncers",
              "All type of Security Services"
                ];  
        }
        if(val == '26: Space Providers' || val == 'Space Providers'){
          list=["Hotel/Lodge",
                "Resorts",
                "Farmhouse",
                "Banquet Halls",
                "Convertion Center/Function Halls",
                "PGs/Hostels for Men and Women"
            ];
        }
        if(val == "27: Transportation" || val == "Transportation"){
          list=["Packers and Movers",
                "Vehicle for Events",
                "Self Driving Cars"
                ];
        }
        if(val == "28: Vegetables/Fruits Store" || val == "Vegetables/Fruits Store"){
          list=["Vegetables",
                "Fruits"
                ];
        }
        if(val == "29: Water Tanker Suppliers" || val == "Water Tanker Suppliers"){
          list=["Water Tankers",
                "Water Bottles"
                ];
        }
      return list;
      }