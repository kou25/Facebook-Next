import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon,VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";
const contacts=[
    {
        name:'Deepika Padukone',
        src:'https://tinyurl.com/2sc6fyc9'
    },
    {
        name:'Hrithik Roshan',
        src:'https://tinyurl.com/y3emdhyp'
    },
    {
        name:'Mortal',
        src:'https://tinyurl.com/z39fbhhb'
    },
    {
        name:'Marvel',
        src:'https://tinyurl.com/3dc8buvr'
    },
    {
        name:'Gal Gadot',
        src:'https://tinyurl.com/t8zmb44t'
    } 
]

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mb-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
               <h2 className="text-xl">Contacts</h2> 
               <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6"/>
                    <SearchIcon className="h-6"/>
                    <DotsHorizontalIcon className="h-6"/>
               </div>
            </div>
            {contacts.map(contact=>(
                <Contact key={contact.src} src={contact.src} name={contact.name}/>
            ))}
        </div>
    )
}

export default Widgets
