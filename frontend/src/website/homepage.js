import AnimationRevealPage from 'helpers/AnimationRevealPage';
import React from 'react';
import tw from 'twin.macro';
import Hero from 'components/hero/Hero-Section-Homepage';
import Slider from 'components/cards/Homepage-Slider';
import Features from 'components/features/Homepage-Sponsors-Preview';
import Footer from 'components/footers/Home-Footer';
import imgLogo from '../images/old-logo.png';
import Counter from '../components/features/Counter';


const CenteredContent = tw.div`flex flex-col items-center justify-center h-full`;

function Home() {
  const HighlightedText = tw.span`bg-gradient-to-r from-green-300 via-yellow-300 to-blue-200 px-4 text-teal-700  transform -skew-x-12 inline-block font-Philosopher`;
  const DescriptionText = tw.p`text-lg text-teal-700 font-Philosopher`; // 

  return (
    <AnimationRevealPage >
      <Hero
        heading={<>The <HighlightedText>MUN</HighlightedText> of IIT Jodhpur</>}
        description={
          <CenteredContent>
            <DescriptionText style={{ fontFamily: 'Lato', color: 'teal' }}>
            Aaftaab is a commemoration of the magnificence, variety, and comprehensiveness of literature. The event fosters a melange of students from various educational institutions, cultural backgrounds, and experiences. It guarantees an enchanting experience through captivating poets, and influential writers, enthralling literary conversations, and enjoyable activities such as open mics, quizzes, word games, live music, and theatrical performances.
            </DescriptionText>
          </CenteredContent>
        }
        imageSrc={imgLogo}
      />
      {/* <Slider /> */}
      {/* <Counter /> */}
      <Features />
      <Footer />
    </AnimationRevealPage>
  );
}

export default Home;
