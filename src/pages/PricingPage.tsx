import React from 'react';
import Pricing from '../components/sections/Pricing';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

const PricingPage: React.FC = () => {
  useDocumentMetadata({
    title: 'Investment Plans & Pricing | Axoraa Software Engineering',
    description: 'Explore custom pricing plans for websites, custom application development, workflow automation, and specialized AI integrations engineered by Axoraa.',
    canonical: 'https://axoraa.tech/pricing'
  });

  return (
    <div className="min-h-screen pt-20">
      <Pricing />
    </div>
  );
};

export default PricingPage;
