import type { FC, JSX, PropsWithChildren } from 'react';
import React from 'react';
import AboutArt from '../../assets/images/about-art.svg';
import AboutPhoto from '../../assets/images/about-photo.svg';
import {
  CONDENSED_FONT,
  DARK_FONT,
  FONT_SIZE,
  LIGHT_FONT,
} from '../../constants';
import { useUIContext } from '../../state/ui-context';
import { ColoredText } from '../colored-text';

interface IAboutSections {
  title: string;
  description: string | JSX.Element;
}

const AboutSections: IAboutSections[] = [
  {
    title: "WHERE I'M FROM",
    description:
      "I was born and raised in Mumbai, India. I am glad that I was raised in Mumbai, a city in a multicultural country. There is a lot to eat, and the food is definitely better than where you're from.",
  },
  {
    title: 'WHAT I USED TO DO',
    description:
      'In high school, I used to participate in inter-school competitions for painting and singing. My TECH career started in 2017 as a UI Developer. Then, when COVID-19 happened, I started working from home and learned JavaScript frameworks, which helped me to get other jobs.',
  },
  {
    title: 'WHAT I DO NOW',
    description: (
      <div>
        Today, I&apos;m a
        <ColoredText color="accent"> UI/UX Designer</ColoredText> and
        <ColoredText color="accent"> Front-End Developer</ColoredText>. More
        than just designing interfaces, I sculpt experiences that resonate.
      </div>
    ),
  },
  {
    title: "WHERE I'M AT NOW",
    description:
      "Today, I live in Toronto, Canada. When I'm not working, you can usually find me with my paintbrush, sometimes in the park on a swing!",
  },
  {
    title: "WHAT I'M LOOKING FOR",
    description:
      'Impactful, purposeful work with a diverse team of talented people.',
  },
];

interface IArtSections {
  title: string;
  imgSrc: string;
}

const ArtSections: IArtSections[] = [
  {
    title: 'The Art',
    imgSrc: AboutArt,
  },
  {
    title: 'The Artist',
    imgSrc: AboutPhoto,
  },
];

const About: FC<PropsWithChildren> = () => {
  const { isMobileView } = useUIContext();
  return (
    <>
      {AboutSections.map(({ title, description }, index) => (
        <div
          key={title}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'start',
            letterSpacing: 0,
            ...(index > 0 && { marginTop: `calc(${FONT_SIZE} / 1.5)` }),
          }}
        >
          <div
            style={{
              textTransform: 'uppercase',
              fontFamily: LIGHT_FONT,
              fontSize: `calc(${FONT_SIZE} / 4)`,
              marginBottom: `calc(${FONT_SIZE} / 4.5)`,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              fontFamily: DARK_FONT,
              fontSize: `calc(${FONT_SIZE} / 3)`,
            }}
          >
            {description}
          </div>
        </div>
      ))}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobileView ? 'column' : 'row',
          justifyContent: 'space-between',
          marginTop: '64px',
          ...(isMobileView && { flex: 1, width: '100%' }),
        }}
      >
        {ArtSections.map(({ title, imgSrc }, index) => (
          <div
            key={title}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              ...(index === 0 && {
                marginRight: '30px',
              }),
              ...(isMobileView && {
                flex: 1,
                marginRight: 0,
                marginBottom: '30px',
              }),
            }}
          >
            <span
              style={{
                fontSize: `calc(${FONT_SIZE} / 1.5)`,
                lineHeight: `calc((${FONT_SIZE} / 1.5) + 2)`,
              }}
            >
              <ColoredText
                color="accent"
                styleProps={{ fontFamily: CONDENSED_FONT }}
              >
                {title}
              </ColoredText>
            </span>
            <img
              src={imgSrc}
              alt={title}
              style={{
                height: '382px',

                ...(isMobileView && { width: '100%', height: 'auto' }),
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export { About };
