import { Container } from '../../layout/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { landlordFeatures } from '../../../data/landlordFeatures';
import { LandlordFeaturesGrid } from './LandlordFeaturesGrid';
import { LandlordFeaturesCTA } from './LandlordFeaturesCTA';

export function LandlordFeaturesSection() {
  return (
    <Container>
      <SectionHeading
        id="for-landlords-heading"
        title="Built for Smart Landlords"
        subtitle="Find quality tenants faster and manage your properties with confidence using our landlord-focused tools"
        align="center"
        className="mx-auto max-w-3xl"
      />
      <LandlordFeaturesGrid features={landlordFeatures} />
      <LandlordFeaturesCTA />
    </Container>
  );
}
