export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Moritz Theis',
    subtitle: 'Software-Developer & Co-Founder at Snapp X',
    description: 'This is my personal website where I share my thoughts, projects, and public speaking engagements.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Public Speaking',
            href: '/publicSpeaking'
        },
        {
            text: 'Experience',
            href: '/experience'
        },
    ],
    footerNavLinks: [
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/m-theis'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/moritz-theis-43366b109/'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/MoritzTheis'
        }
    ],
    hero: {
        title: 'Hello there',
        text: "I'm <b>Moritz Theis</b>, a software developer and co-founder at Snapp X, where we build exceptional apps using Flutter technology. With over a decade of experience, I specialize in leading diverse teams and crafting solutions for start-ups, major banks, and international clients. My work spans from developing mobile banking solutions in Africa to creating innovative apps for renowned brands like LAMY. <br><br>I’m passionate about the intersection of technology, product-led growth, and intuitive design. As a Google Developer Expert in Flutter, I actively contribute to the developer community, co-organize the <a href='https://www.meetup.com/de-DE/flutter-munich/'>Flutter Munich Meetup</a>, and speak at international conferences. <br><br>Feel free to explore some of my projects on <a href='https://github.com/m-theis'>GitHub</a> or connect with me on <a href='https://www.linkedin.com/in/moritz-theis-43366b109/'>LinkedIn</a> and <a href='https://x.com/MoritzTheis'>Twitter/X</a>.",
        image: {
            src: '/fluttercon.webp',
            alt: 'A person presenting a conference talk'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
