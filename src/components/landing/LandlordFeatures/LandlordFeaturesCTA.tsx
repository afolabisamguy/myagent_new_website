import { Button } from '../../ui/Button';
import { Reveal } from '../../motion/Reveal';

export function LandlordFeaturesCTA() {
  return (
    <Reveal variant="fadeUp" delay={0.15}>
      <div className="mt-10 flex flex-col items-center gap-3">
        <Button variant="primary" size="md">
          List Your Property
        </Button>
        <p className="text-sm text-gray-500">
          Join thousands of landlords already using MyAgent
        </p>
      </div>
    </Reveal>
  );
}
