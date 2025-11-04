import { StaticImageData } from 'next/image';


export type Product = {
    id: number;
    name: string;
    slug: string;
    price: string;
    description: string;
    features: string;
    image: string | StaticImageData;
    gallery: string[];
    includes: { quantity: number; item: string }[];
    others: {
        slug: string;
        name: string;
        image: string;
    }[];
};

export const products: Product[] = [
    {
        id: 1,
        name: "XX99 Mark II Headphones",
        slug: 'xx99-mark-ii-headphones',
        price: "2,999",
        includes: [
            { quantity: 1, item: "Headphone Unit" },
            { quantity: 2, item: "Replacement Earcups" },
            { quantity: 1, item: "User Manual" },
            { quantity: 1, item: "3.5mm 5m Audio Cable" },
            { quantity: 1, item: "Travel Bag" },
        ],
        description: `The new XX99 Mark II headphones is the pinnacle of pristine audio. 
         It redefines your premium headphone experience by reproducing
        the balanced depth and precision of studio- quality sound.`,
        features: [
            "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
            "The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
        ].join("\n\n")
        ,
        image: "/ProductPage/mark-headphones.png",
        gallery: [
            "/LandingPage/male-model.png",
            "/ProductPage/headphone-lap.png",
            "/ProductPage/headphone-3.png"
        ],
        others: [
            {
                slug: 'XX99-i-headphones',
                name: "XX99 MARK I",
                image: "/ProductPage/xx99.png"
            },
            {
                slug: 'XX59-headphones',
                name: "XX59 ",
                image: "/ProductPage/white-headset.png"
            },
            {
                slug: "ZX9-Speaker",
                name: "ZX9 SPEAKER",
                image: "/ProductPage/zx9.png"
            }
        ],

    },
    {
        id: 2,
        name: "ZX9 Speaker",
        slug: "ZX9-Speaker",
        price: "4,500",
        includes: [
            { quantity: 2, item: "Speaker unit" },
            { quantity: 2, item: "Speaker Cloth Panel" },
            { quantity: 1, item: "User Manual" },
            { quantity: 1, item: "3.5mm 5m Audio Cable" },
            { quantity: 1, item: "Travel Bag" },
        ],
        description: `Upgrade your sound system with the all new ZX9 active speaker.
                  It’s a bookshelf speaker system that offers truly wireless connectivity --
                  creating new possibilities for more pleasing and practical audio setups.`,
        features: [
            "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
            "Discover clear, more natural sounding highs than the competition with ZX9's signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5\" aluminum alloy bass unit. You'll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
        ].join("\n\n"),
        image: "/ProductPage/zx9.png",
        gallery: [
            "/ProductPage/speaker-1.png",
            "/ProductPage/speaker-2.png",
            "/ProductPage/speaker-3.png"
        ],
        others: [
            {
                slug: "ZX7-Speaker",
                name: "ZX7 Speaker",
                image: "/ProductPage/speaker-front.png"
            },
            {
                slug: 'XX99-i-headphones',
                name: "XX99 MARK I",
                image: "/LandingPage/xx99.png"
            },
            {
                slug: 'XX59-headphones',
                name: "XX59",
                image: "/ProductPage/white-headset.png"
            }
        ],
    },
    {
        id: 3,
        name: "ZX7 Speaker",
        slug: "ZX7-Speaker",
        price: "3,500",
        includes: [
            { quantity: 2, item: "Speaker unit" },
            { quantity: 2, item: "Speaker Cloth Panel" },
            { quantity: 1, item: "User Manual" },
            { quantity: 1, item: "3.5mm 5m Audio Cable" },
            { quantity: 1, item: "7.5m Optical Cable" },
        ],
        description: `Stream high quality sound wirelessly with minimal to no loss. 
                        The ZX7 speaker uses high-end audiophile components that represents the top
                        of the line powered speakers for home or studio use.`,
        features: [
            "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
            "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimizes acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your fingertips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
        ].join("\n\n"),

        image: "/ProductPage/speaker-front.png",
        gallery: [
            "/ProductPage/zx7-1.png",
            "/ProductPage/zx7-2.png",
            "/ProductPage/zx7-3.png"
        ],
        others: [
            {
                slug: "ZX9-Speaker",
                name: "ZX9 SPEAKER",
                image: "/ProductPage/zx9.png"
            
            },
            {
                slug: 'XX99-i-headphones',
                name: "XX99 MARK I",
                image: "/ProductPage/xx99.png"
            },
            {
                slug: 'XX59-headphones',
                name: "XX59",
                image: "/ProductPage/white-headset.png"
            }
        ],

    },
    {
        id: 4,
        name: "YX1 WIRELESS EARPHONES",
        slug: "YX1-WIRELESS-EARPHONES",
        price: "599",
        includes: [
            { quantity: 2, item: "Earphone Unit" },
            { quantity: 6, item: "Multi-size Earplugs" },
            { quantity: 1, item: "User Manual" },
            { quantity: 1, item: "USB-C Charging Cable" },
            { quantity: 1, item: "Travel Pouch" },
        ],
        description: `Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
                      Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.`,
        features: [
            "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
            "The YX1 Wireless Earphones feature customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash-resistant design is now available in an all-new white and grey color scheme as well as the popular classic black."
        ].join("\n\n"),

        image: "/LandingPage/earbuds.png",
        gallery: [
            "/ProductPage/yx-1.png",
            "/LandingPage/image-earphones.jpg",
            "/ProductPage/yx-3.png"
        ],
        others: [
            {
                slug: 'XX99-i-headphones',
                name: "XX99 MARK I",
                image: "/LandingPage/xx99.png"
            },
            {
                slug: 'XX59-headphones',
                name: "XX59 ",
                image: "/ProductPage/white-headset.png"
            },
            {
                slug: "ZX9-Speaker",
                name: "ZX9 SPEAKER",
                image: "/ProductPage/zx9.png"
            }
        ],
    },
    {
        id: 5,
        name: "XX59 Headphones",
        slug: 'XX59-headphones',
        price: "599",
        includes: [
            { quantity: 1, item: "Headphone Unit" },
            { quantity: 2, item: "Replacement Earcups" },
            { quantity: 1, item: "User Manual" },
            { quantity: 1, item: "3.5mm 5m Audio Cable" },
        ],
        description: `Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.
                      The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.`,
        features: [
            "These headphones have been created from durable, high - quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
            "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30 - hour battery life that can be rapidly recharged via USB-C."
        ].join("\n\n"),
        image: "/ProductPage/white-headset.png",
        gallery: [
            "/ProductPage/xx59-1.png",
            "/ProductPage/xx59-2.png",
            "/ProductPage/xx59-3.png"
        ],
        others: [
            {
                slug: 'xx99-mark-ii-headphones',
                name: "XX99 MARK II",
                image: "/ProductPage/mark-headphones.png"
            
            },
            {
                slug: 'XX99-i-headphones',
                name: "XX99 MARK I",
                image: "/LandingPage/xx99.png"
            },
            {
                slug: "ZX9-Speaker",
                name: "ZX9 SPEAKER",
                image: "/ProductPage/zx9.png"
            }
        ],

    },
    {
        id: 6,
        name: "XX99 I Headphones",
        slug: 'XX99-i-headphones',
        price: "1,750",
        includes: [
            { quantity: 1, item: "Headphone Unit" },
            { quantity: 2, item: "Replacement Earcups" },
            { quantity: 1, item: "User Manual" },
            { quantity: 1, item: "3.5mm 5m Audio Cable" },
        ],
        description: `As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate
                     audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios
                      and on the go. `,
        features: [
            "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
            "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
        ].join("\n\n"),
        image: "/LandingPage/xx99.png",
        gallery: [
            "/ProductPage/xx99-1.png",
            "/ProductPage/xx99-2.png",
            "/ProductPage/xx99-3.png"
        ],
        others: [
            {
                slug: 'xx99-mark-ii-headphones',
                name: "XX99 MARK II",
                image: "/ProductPage/mark-headphones.png"

            },
            {
                slug: 'XX59-headphones',
                name: "XX59",
                image: "/ProductPage/white-headset.png"
            },
            {
                slug: "ZX9-Speaker",
                name: "ZX9 SPEAKER",
                image: "/ProductPage/zx9.png"
            }
        ],

    }
];
