import { useEffect } from 'react';

const RegisterMetaInfo = () => {
  useEffect(() => {
    const meta = {
      title: 'Register | The Cricket Nerd | Join the Cricket Community',
      description:
        'Sign up on The Cricket Nerd to join the community of cricket enthusiasts. Stay updated with the latest news, match analysis, and exclusive cricket content.',
      keywords:
        'Cricket registration, Cricket nerd community, Sign up for cricket news, Cricket enthusiasts, Nepal cricket registration, The Cricket Nerd account',
      canonical: 'https://www.thecricnerd.com/auth/register',
      openGraph: {
        title: 'Register | The Cricket Nerd | Join the Cricket Community',
        description:
          'Sign up on The Cricket Nerd to join the community of cricket enthusiasts. Stay updated with the latest news, match analysis, and exclusive cricket content.',
        type: 'website',
        image: 'https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png',
        url: 'https://www.thecricnerd.com/auth/register',
        locale: 'en_US',
      },
      robots: { index: true, follow: true },
    };

    // Set document title
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
    const setOgMeta = (property, content) => {
      let metaOg = document.querySelector(`meta[property="${property}"]`);
      if (!metaOg) {
        metaOg = document.createElement('meta');
        metaOg.setAttribute('property', property);
        document.head.appendChild(metaOg);
      }
      metaOg.content = content;
    };

    setOgMeta('og:title', meta.openGraph.title);
    setOgMeta('og:description', meta.openGraph.description);
    setOgMeta('og:type', meta.openGraph.type);
    setOgMeta('og:image', meta.openGraph.image);
    setOgMeta('og:url', meta.openGraph.url);
    setOgMeta('og:locale', meta.openGraph.locale);

    // Meta robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = meta.robots.index ? 'index, follow' : 'noindex, nofollow';
  }, []);

  return null;
};

export default RegisterMetaInfo;
