import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <>
              <img
                src="/assets/images/stoneridge.png"
                alt="Stoneridge Logo"
                width={200}
                height={200}
              ></img>
            </>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Welcome Stone Ridge Family Medicine Patients\n'}
            <span className="text-primary-500">
              We are so glad you're here.{' '}
            </span>
          </>
        }
        description="Pledze is an evidence-based lifestyle transformation program designed to help you lose weight, get fit, and feel great."
        button={
          <Link href="https://forms.gle/5YrzhmAvnmRVpG5YA">
            <a>
              <Button xl>Sign up for Info Session</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
