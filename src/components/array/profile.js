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
                
            }
        ],
        id: 0
    }
];

export {profile}