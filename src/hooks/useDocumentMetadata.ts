import { useEffect } from 'react';

interface MetadataOptions {
  title: string;
  description?: string;
  canonical?: string;
}

export const useDocumentMetadata = ({ title, description, canonical }: MetadataOptions) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      // Also update og:description
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
      
      // Also update twitter:description
      let twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) {
        twitterDesc.setAttribute('content', description);
      }
    }

    // Set canonical link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);
};
