import NavigationBar from '@/components/NavigationBar';
import Section from '@/components/Section';
import AudioPlayer from '@/components/AudioPlayer';
import ThemeToggle from '@/components/ThemeToggle';
import SEO from '@/components/SEO';

export default function Home() {
  return (
    <div className="relative">
      <SEO />
      <NavigationBar />
      <ThemeToggle />
      <AudioPlayer />
      <Section id="home" title="Welcome to RetroCoin">
        <p>The coolest memecoin on Solana!</p>
      </Section>
      <Section id="about" title="About Us">
        <p>Learn more about our funky project.</p>
      </Section>
      <Section id="features" title="Features">
        <p>Check out the amazing features of RetroCoin.</p>
      </Section>
      <Section id="roadmap" title="Roadmap">
        <p>Our plans for the future.</p>
      </Section>
      <Section id="contact" title="Contact Us">
        <p>Get in touch with our team.</p>
      </Section>
    </div>
  );
}
