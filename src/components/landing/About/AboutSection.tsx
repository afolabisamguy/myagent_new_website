import { Container } from '../../layout/Container';
import { SectionHeading } from '../../ui/SectionHeading';
import { aboutCopy, aboutItems } from '../../../data/about';
import { AboutItems } from './AboutItems';

export function AboutSection() {
  return (
    <Container>
      <SectionHeading
        id="about-title"
        title={aboutCopy.title}
        subtitle={aboutCopy.description}
        align="center"
        className="mx-auto max-w-3xl"
      />
      <AboutItems items={aboutItems} />
    </Container>
  );
}
