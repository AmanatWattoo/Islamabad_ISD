import { FaFacebookF,FaWhatsapp,FaSearchLocation } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';

export interface FooterDataType {
  name: string;
  description: string;
  icon?: React.ComponentType; // Change the type to React.ComponentType
  url:string
}
export interface BranchesDataType{
    name:string,
    address:string,
    email:string,
    phone:number,
    icon?: React.ComponentType;
}
export const FooterData: FooterDataType[] = [
  {
    name: 'Facebook',
    description: 'Like & follow us on Facebook',
    icon: FaFacebookF,
    url: 'https://web.facebook.com/profile.php?id=100068702464315',
  },
  {
    name: 'Youtube',
    description: 'Subscribe us on Youtube',
    icon: AiFillYoutube,
    url:'https://www.youtube.com/@metaverseweb3.0revolution8/featured'
  },
  {
    name: 'Whatsapp',
    description: 'Join us on Whatsapp',
    icon: FaWhatsapp,
    url: 'https://wa.me/+923156535123',
  },
  // You can add more data
];
export const Branches:BranchesDataType[] = [
    {
        name:"Lahore",
        address:"8-km Main Multan Road Lahore",
        email:"info@wattoostorelahore.com",
        phone:+924200000,
        icon:FaSearchLocation,
    },
    {
        name:"Islamabad",
        address:"Centross Mall Islamabad",
        email:"info@wattoostoreisd.com",
        phone:+925100000,
        icon:FaSearchLocation,
    },
    {
        name:"Faislabad",
        address:"Laalpur golria Mall Faislabad city",
        email:"info@wattoostoreisd.com",
        phone:+924900000,
        icon:FaSearchLocation,
    },
    {
        name:"Head office",
        address:"Wattoo Place Chunian, kasur",
        email:"info@wattoostores.com",
        phone:+924900000,
        icon:FaSearchLocation,
    },
    {
        name:"Karachi",
        address:"Ary Lagona Mall Karachi",
        email:"info@wattoostoreskci.com",
        phone:+9231500000,
        icon:FaSearchLocation,
    },
]