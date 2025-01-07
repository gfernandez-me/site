import Image from "next/image";

import GabrielFullPose from "/public/images/gabriel-full-pose.jpeg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={GabrielFullPose}
              alt="Full pose of Gabriel"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here&apos;s my story:
          </Typography>
          <Typography>
            With over a decade of experience as a software engineer, I have
            advanced from hands-on development to leading technical teams and
            delivering complex, high-impact solutions. My career spans diverse
            industries and countries, where I’ve tackled unique challenges and
            built scalable, secure, and innovative software systems.
          </Typography>
          <Typography>
            I’ve worked across the globe, leading and contributing to projects
            that required adaptability to any technology stack or programming
            language. My expertise includes full-stack development, API design,
            cloud-based solutions, and mentoring teams to achieve their best.
          </Typography>
          <Typography>
            Highlights include transforming IT teams, resolving critical system
            issues, implementing CI/CD pipelines, and integrating advanced
            e-commerce, social media, and data-driven solutions. My ability to
            work with legacy systems and cutting-edge technologies showcases my
            versatility and problem-solving prowess.
          </Typography>
          <Typography>
            I’m passionate about delivering quality software and fostering
            collaboration, creating sustainable systems that drive business
            success.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Bachelor’s in Computer Science and Engineering
              </Typography>
              <Typography component="li">
                Started as a web designer, transitioned to development
              </Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Enthusiast for AI and emerging technologies
              </Typography>
              <Typography component="li">
                Love mountain biking and exploring nature trails
              </Typography>
            </ul>
          </div>
          <Typography>
            I’m currently available for freelance work! Whether you need help
            bringing your ideas to life or solving tough technical challenges,
            let’s collaborate to make it happen. 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
