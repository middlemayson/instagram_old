import PhotoArray from "./photoArray";

const profile = [
    {
        author: 'johnappleseed',
        name: 'Mayson Appleseed',
        avatar: PhotoArray.avatar_3,
        desc: 'Hello world!',
        photosCount: '5',
        followers: '6',
        following: '10',
        photo: [
            {
                location: 'Los Angeles',
                photo: PhotoArray.photo_1,
                desc: 'Hello world!',
                likes: '5',
                timePublish: '3',
                id: 0,
                comments: [
                    {
                        author: "edwardgorn",
                        text: "Hello my little pony",
                        id: 0
                    },
                    {
                        author: "janedoe",
                        text: "How are you today?",
                        id: 1
                    },
                    {
                        author: "johnsmith",
                        text: "I love coding!",
                        id: 2
                    },
                    {
                        author: "alicewonderland",
                        text: "Down the rabbit hole we go.",
                        id: 3
                    },
                    {
                        author: "bobthebuilder",
                        text: "Can we fix it? Yes we can!",
                        id: 4
                    },
                    {
                        author: "harrypotter",
                        text: "You're a wizard, Harry.",
                        id: 5
                    },
                    {
                        author: "spongebobsquarepants",
                        text: "I'm ready, I'm ready!",
                        id: 6
                    },
                    {
                        author: "lunalovegood",
                        text: "Nargles are everywhere.",
                        id: 7
                    },
                    {
                        author: "peterpan",
                        text: "Second star to the right and straight on till morning.",
                        id: 8
                    },
                    {
                        author: "dumbledore",
                        text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
                        id: 9
                    }
                ],
                
            },
            {
                
                photo: PhotoArray.photo_2,
                desc: 'Hello world!',
                likes: '5',
                timePublish: '3',
                id: 1,
                comments: [
                    {
                        author: "edwardgorn",
                        text: "Hello my little pony",
                        id: 0
                    },
                    {
                        author: "donbalabol",
                        text: "Hey there, magical equine friend!",
                        id: 1
                    },
                    {
                        author: "megusta",
                        text: "Greetings, oh majestic creature of the enchanted realm!",
                        id: 2
                    },
                    {
                        author: "barbarrra",
                        text: "Salutations, dear pony companion!",
                        id: 3
                    },
                    {
                        author: "johnsnow",
                        text: "Ahoy, my diminutive equine acquaintance!",
                        id: 4
                    }
                ],
                
            },
            {
                location: 'New York',
                photo: PhotoArray.photo_3,
                desc: 'Exploring the Big Apple!',
                likes: '20',
                timePublish: '1',
                id: 2,
                comments: [
                    {
                        author: "nyclover",
                        text: "New York, New York! The city that never sleeps.",
                        id: 0
                    },
                    {
                        author: "bigapplefan",
                        text: "Concrete jungle where dreams are made of!",
                        id: 1
                    },
                    {
                        author: "brooklyndude",
                        text: "Greetings from Brooklyn!",
                        id: 2
                    }
                ],
            },
            {
                location: 'Paris',
                photo: PhotoArray.photo_4,
                desc: 'Bonjour, Paris!',
                likes: '50',
                timePublish: '2',
                id: 3,
                comments: [
                    {
                        author: "parislover",
                        text: "Paris, je t'aime!",
                        id: 0
                    },
                    {
                        author: "eiffeltowerfan",
                        text: "Views from the top of the Eiffel Tower are breathtaking!",
                        id: 1
                    },
                    {
                        author: "frenchfoodie",
                        text: "Enjoying some delicious croissants and café au lait!",
                        id: 2
                    }
                ],
            },
            {
                location: 'Tokyo',
                photo: PhotoArray.photo_5,
                desc: 'Konnichiwa from Tokyo!',
                likes: '35',
                timePublish: '4',
                id: 4,
                comments: [
                    {
                        author: "tokyolover",
                        text: "Tokyo, where tradition meets modernity.",
                        id: 0
                    },
                    {
                        author: "sushifanatic",
                        text: "Sushi here is out of this world!",
                        id: 1
                    },
                    {
                        author: "animegeek",
                        text: "Visiting Akihabara, the anime capital of the world!",
                        id: 2
                    }
                ],
            },
            {
                location: 'London',
                photo: PhotoArray.photo_6,
                desc: 'Greetings from London!',
                likes: '40',
                timePublish: '5',
                id: 5,
                comments: [
                    {
                        author: "londonlover",
                        text: "London calling!",
                        id: 0
                    },
                    {
                        author: "britishcharm",
                        text: "Tea and biscuits anyone?",
                        id: 1
                    },
                    {
                        author: "royalfan",
                        text: "Buckingham Palace looks majestic as always!",
                        id: 2
                    }
                ],
            },
            {
                location: 'Sydney',
                photo: PhotoArray.photo_7,
                desc: 'Sunny days in Sydney!',
                likes: '25',
                timePublish: '6',
                id: 6,
                comments: [
                    {
                        author: "sydneylover",
                        text: "Sydney, where every day feels like a vacation.",
                        id: 0
                    },
                    {
                        author: "surfingenthusiast",
                        text: "Catching some waves at Bondi Beach!",
                        id: 1
                    },
                    {
                        author: "operahousefan",
                        text: "Sydney Opera House is an architectural marvel.",
                        id: 2
                    }
                ],
            },
            {
                location: 'Rome',
                photo: PhotoArray.photo_8,
                desc: 'Ciao from Rome!',
                likes: '30',
                timePublish: '7',
                id: 7,
                comments: [
                    {
                        author: "romelover",
                        text: "Rome, the eternal city!",
                        id: 0
                    },
                    {
                        author: "italianfoodlover",
                        text: "Indulging in some authentic Italian cuisine!",
                        id: 1
                    },
                    {
                        author: "historybuff",
                        text: "The Colosseum is truly awe-inspiring.",
                        id: 2
                    }
                ],
            }
        ],
        id: 0
    }
];

export {profile}