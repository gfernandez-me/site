import Image from "next/image";
import { MapPin } from "lucide-react";

import GabrielHeadShot from "/public/images/gabriel-head-shot.jpeg";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={GabrielHeadShot}
              alt="Head shot of Gabriel"
              priority={false}
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hello
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <div className="flex flex-col gap-4">
              <Typography>
                I'm Gabriel, a seasoned full-stack developer with a strong focus
                on React.js and Node.js. I thrive on building modern,
                high-performance web applications that are fast, accessible, and
                visually engaging.
              </Typography>

              <Typography>
                While my expertise lies in React and Node, I also have
                experience with languages like PHP and Vue.js, which I use for
                side projects or when the situation calls for it. With over{" "}
                {Math.floor(
                  (new Date().getTime() - new Date("2007-04-01").getTime()) /
                    (1000 * 60 * 60 * 24 * 365.25)
                )}{" "}
                years in web development, I&apos;ve worked with a variety of
                technologies, including C, C++, VB6, Python, Kotlin, and Java,
                as well as major database languages like PL/SQL, PL/pgSQL and
                T-SQL.
              </Typography>

              <Typography>
                I&apos;ve also worked extensively with web services and backend
                integrations, ensuring seamless communication between
                applications. In recent years, I&apos;ve taken on roles as a
                tech lead and team leader, guiding projects from start to finish
                while mentoring junior developers along the way.
              </Typography>

              <Typography>
                I&apos;m passionate about clean, maintainable code and always
                eager to tackle new challenges with fresh energy.
              </Typography>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Toronto, Canada</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
