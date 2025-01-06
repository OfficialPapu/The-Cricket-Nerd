import { useEffect } from 'react';

const MetaInfo = ({ Name }) => {
    const getMetaInfo = (Name) => {

        return {
            title: `${Name} | The Cricket Nerd | Nepal Cricket News, Matches, Players`,
            description:
                'The Cricket Nerd brings you the latest news, insights, and updates on Nepal Cricket. Dive into match previews, player analysis, and expert opinions.',
            keywords:
                'Nepal Cricket, cricket news Nepal, cricket updates, cricket analysis, Nepal cricket matches, cricket blog Nepal',
            canonical: 'https://www.thecricketnerd.com/',
            openGraph: {
                title: 'The Cricket Nerd | Nepal Cricket News, Matches, Players',
                description:
                    'The Cricket Nerd brings you the latest news, insights, and updates on Nepal Cricket. Dive into match previews, player analysis, and expert opinions.',
                type: 'website',
                image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
                url: 'https://www.thecricketnerd.com/',
                locale: 'en_US',
            },
            robots: { index: true, follow: true },
        };
    };

    useEffect(() => {
        const meta = getMetaInfo(Name);

        document.title = meta.title;

        // Meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = meta.description;

        // Meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = meta.keywords;

        // Canonical link
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.href = meta.canonical;

        // Open Graph meta tags
        let metaOgTitle = document.querySelector('meta[property="og:title"]');
        if (!metaOgTitle) {
            metaOgTitle = document.createElement('meta');
            metaOgTitle.setAttribute('property', 'og:title');
            document.head.appendChild(metaOgTitle);
        }
        metaOgTitle.content = meta.openGraph.title;

        let metaOgDescription = document.querySelector('meta[property="og:description"]');
        if (!metaOgDescription) {
            metaOgDescription = document.createElement('meta');
            metaOgDescription.setAttribute('property', 'og:description');
            document.head.appendChild(metaOgDescription);
        }
        metaOgDescription.content = meta.openGraph.description;

        let metaOgType = document.querySelector('meta[property="og:type"]');
        if (!metaOgType) {
            metaOgType = document.createElement('meta');
            metaOgType.setAttribute('property', 'og:type');
            document.head.appendChild(metaOgType);
        }
        metaOgType.content = meta.openGraph.type;

        let metaOgImage = document.querySelector('meta[property="og:image"]');
        if (!metaOgImage) {
            metaOgImage = document.createElement('meta');
            metaOgImage.setAttribute('property', 'og:image');
            document.head.appendChild(metaOgImage);
        }
        metaOgImage.content = meta.openGraph.image;

        let metaOgUrl = document.querySelector('meta[property="og:url"]');
        if (!metaOgUrl) {
            metaOgUrl = document.createElement('meta');
            metaOgUrl.setAttribute('property', 'og:url');
            document.head.appendChild(metaOgUrl);
        }
        metaOgUrl.content = meta.openGraph.url;

        let metaOgLocale = document.querySelector('meta[property="og:locale"]');
        if (!metaOgLocale) {
            metaOgLocale = document.createElement('meta');
            metaOgLocale.setAttribute('property', 'og:locale');
            document.head.appendChild(metaOgLocale);
        }
        metaOgLocale.content = meta.openGraph.locale;

        // Meta robots
        let metaRobots = document.querySelector('meta[name="robots"]');
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.setAttribute('name', 'robots');
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = meta.robots.index ? 'index, follow' : 'noindex, nofollow';

    }, [Name]);


    return null;
};

export default MetaInfo;
