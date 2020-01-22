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
    "Housekeeping Services",
    "Kids Zone",
    "Matrimonial Services",
    "Meat Providers",
    "Pandith Services",
    "Photography",
    "Professionals",
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
        if(val == "7: Decoration Services" || val == "Decoration Services"){
          list=["Florist",
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
                "Personal Fitness Trainer",
                "Swimming Coach"
              ];
        }
        if(val == "11: Gifting and Printing Services" || val == "Gifting and Printing Services"){
          list=["Gift Shops",
                "Wedding Card Printers",
                "Handloom Gift Item Makers",
                "Flex Printing Services"
                ];
        }
        if(val == "12: Housekeeping Services" || val == "Housekeeping Services"){
          list=["Individual Maids",
                "Housekeeping Staff Contractor"
                ];
        }
        if(val == "13: Kids Zone" || val == "Kids Zone"){
          list=["Magicians",
                "Gaming Equipment Providers",
                "Stage Show Artist"
                ];
        }
        if(val == "14: Matrimonial Services" || val == "Matrimonial Services"){
          list=["All types of Martrimonial Services"
        ];
        }
        if(val == "15: Meat Providers" || val == "Meat Providers"){
          list=["Chicken",
                "Mutton",
                "Fish",
                "Other"
                ];
        }
        if(val == '16: Pandith Services' || val == 'Pandith Services'){
          list=['Wedding',
                'Funeral'
                ];
        }
        if(val == "17: Photography" || val == "Photography"){
          list=["Photoshoot",
                "Event",
                "All Types of Photography"
                ];
        }
        if(val == "18: Professionals" || val == "Professionals"){
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
        if(val == "19: Registration Agents" || val == "Registration Agents"){
          list=["Company Registration Agents",
                "GST Registration Agents"
              ];
        }
        if(val == "20: Repair and Fix" || val == "Repair and Fix"){
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
        if(val == "21: Security Services" || val == "Security Services"){
          list=[
              "Bouncers",
              "All type of Security Services"
                ];  
        }
        if(val == '22: Space Providers' || val == 'Space Providers'){
          list=["Hotel/Lodge",
                "Resorts",
                "Farmhouse",
                "Banquet Halls",
                "Convertion Center/Function Halls",
                "PGs/Hostels for Men and Women"
            ];
        }
        if(val == "23: Transportation" || val == "Transportation"){
          list=["Packers and Movers",
                "Vehicle for Events",
                "Self Driving Cars"
                ];
        }
        if(val == "24: Vegetables/Fruits Store" || val == "Vegetables/Fruits Store"){
          list=["Vegetables",
                "Fruits"
                ];
        }
        if(val == "25: Water Tanker Suppliers" || val == "Water Tanker Suppliers"){
          list=["Water Tankers",
                "Water Bottles"
                ];
        }
      return list;
      }

export enum countryCodes{
  "Australia"=	"61",
  "Bangladesh"=	"880",
  "Belgium"=	"32",
  "Bhutan"=	"975",
  "China"=	"86",
  "Afghanistan"=	"93",
  "Costa Rica"=	"506",
  "Germany"=	"49",
  "Hong Kong"=	"852",
  "India"=	"91",
  "Japan"=	"81",
  "Kenya"=	"254",
  "Malaysia"=	"60",
  "Maldives"=	"960",
  "Nepal"=	"977",
  "Netherlands"=	"31",
  "New Zealand"=	"64",
  "Nigeria"=	"234",
  "North Korea"=	"850",
  "Pakistan"=	"92",
  "Peru"=	"51",
  "Philippines"=	"63",
  "Russia"=	"7",
  "Saudi Arabia"=	"966",
  "Singapore"=	"65",
  "South Africa"=	"27",
  "South Korea"=	"82",
  "Sri Lanka"=	"94",
  "Switzerland"=	"41",
  "Thailand"=	"66",
  "Turkey"=	"90",
  "United Kingdom"=	"44",
  "United Arab Emirates"=	"971",
  "USA"	="1",
  "Zimbabwe"=	"263"
}

export enum phoneType{
  "OFFICE",
  "HOME",
  "MOBILE"
}