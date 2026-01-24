import { Container } from '../Container';
import { footerLinks } from '../../../data/footer';
import { FooterBrand } from './FooterBrand';
import { FooterLinks } from './FooterLinks';
import { FooterNewsletter } from './FooterNewsletter';
import { FooterBottom } from './FooterBottom';
import { Reveal } from '../../motion/Reveal';

export function Footer() {
  return (
    <footer aria-labelledby="footer-title" className="bg-white">
      <Reveal variant="fadeUp">
        <Container>
          <h2 id="footer-title" className="sr-only">
            Footer
          </h2>
          <div className="grid gap-10 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-4">
            <FooterBrand />
            <FooterLinks title="Quick Links" links={footerLinks.quickLinks} />
            <FooterLinks title="Support" links={footerLinks.support} />
            <FooterNewsletter />
          </div>
          <div className="border-t border-gray-200 py-6">
            <FooterBottom />
          </div>
        </Container>
      </Reveal>
    </footer>
  );
}
