import StoryCard from "./StoryCard";

  const stories=[
    {
        name:'Deepika Padukone',
        src:'https://tinyurl.com/54urb6ra',
        profile:'https://tinyurl.com/2sc6fyc9'
    },
    {
        name:'Hrithik Roshan',
        src:'https://tinyurl.com/pub4cmbw',
        profile:'https://tinyurl.com/y3emdhyp'
    },
    {
        name:'Mortal',
        src:'https://tinyurl.com/55dx9tkt',
        profile:'https://tinyurl.com/z39fbhhb'
    },
    {
        name:'Marvel',
        src:'https://tinyurl.com/3dc8buvr',
        profile:'https://tinyurl.com/3dc8buvr'
    },
    {
        name:'Gal Gadot',
        src:'https://tinyurl.com/sswfh64z',
        profile:'https://tinyurl.com/t8zmb44t'
    }
];
function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story)=>(
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>
    )
}

export default Stories
