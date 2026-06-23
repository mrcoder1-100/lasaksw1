import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const SEO = ({
    title: propTitle,
    description: propDescription,
    canonical: propCanonical,
    ogType = 'website',
    ogImage: propOgImage = '/og-image.png',
    twitterHandle = '@lasaktech',
    schemaData
}) => {
    const location = useLocation();
    const [dbSEO, setDbSEO] = useState(null);
    const siteTitle = 'Lasak Tech';
    const siteUrl = 'https://lasak.in';

    useEffect(() => {
        const fetchSEO = async () => {
            try {
                const q = query(collection(db, 'page_seo'), where('path', '==', location.pathname));
                const snap = await getDocs(q);

                if (!snap.empty) {
                    setDbSEO(snap.docs[0].data());
                }
            } catch (err) {
                console.error('SEO Fetch Error:', err);
            }
        };
        fetchSEO();
    }, [location.pathname]);

    // Priority: DB values > Prop values > Defaults
    const title = dbSEO?.title || propTitle;
    const description = dbSEO?.description || propDescription || 'Lasak Tech provides innovative design and engineering solutions including Mechanical Design, Web Development, and AI solutions.';
    const canonical = dbSEO?.canonical || propCanonical;
    const ogImage = dbSEO?.og_image || propOgImage;

    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : (propCanonical ? `${siteUrl}${propCanonical}` : `${siteUrl}${location.pathname}`);

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
            <meta property="og:url" content={fullCanonical} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
            {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}

            {/* Structured Data */}
            {schemaData && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
