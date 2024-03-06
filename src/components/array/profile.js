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
                comments: [
                    {
                        author: "edwardgorn",
                        text: "Hello my little pony"
                    },
                    {
                        author: "janedoe",
                        text: "How are you today?"
                    },
                    {
                        author: "johnsmith",
                        text: "I love coding!"
                    },
                    {
                        author: "alicewonderland",
                        text: "Down the rabbit hole we go."
                    },
                    {
                        author: "bobthebuilder",
                        text: "Can we fix it? Yes we can!"
                    },
                    {
                        author: "harrypotter",
                        text: "You're a wizard, Harry."
                    },
                    {
                        author: "spongebobsquarepants",
                        text: "I'm ready, I'm ready!"
                    },
                    {
                        author: "lunalovegood",
                        text: "Nargles are everywhere."
                    },
                    {
                        author: "peterpan",
                        text: "Second star to the right and straight on till morning."
                    },
                    {
                        author: "dumbledore",
                        text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light."
                    }
                ],
                timePublish: '3',
            }
        ],
        id: 0
    }
];

export {profile}