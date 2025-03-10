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
            My career spans diverse industries and countries, where I&apos;ve
            tackled unique challenges and built scalable, secure, and innovative
            software systems.
          </Typography>
          <Typography>
            Industries I&apos;ve worked in:
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex gap-2 before:content-['•'] before:text-gray-900">
                <span>
                  <span className="font-medium text-gray-900">
                    Textile Industry:
                  </span>{" "}
                  Developed and maintained ERP systems for a large-scale
                  factory.
                </span>
              </li>
              <li className="flex gap-2 before:content-['•'] before:text-gray-900">
                <span>
                  <span className="font-medium text-gray-900">
                    Retail & Wholesale:
                  </span>{" "}
                  Built and optimized solutions for grocery stores and wholesale
                  distribution.
                </span>
              </li>
              <li className="flex gap-2 before:content-['•'] before:text-gray-900">
                <span>
                  <span className="font-medium text-gray-900">
                    Vape Industry:
                  </span>{" "}
                  Managed B2B and B2C platforms for vape production,
                  distribution, and assembly.
                </span>
              </li>
              <li className="flex gap-2 before:content-['•'] before:text-gray-900">
                <span>
                  <span className="font-medium text-gray-900">
                    Government (Education Sector):
                  </span>{" "}
                  Developed/Maintained software for public schools and
                  universities.
                </span>
              </li>
              <li className="flex gap-2 before:content-['•'] before:text-gray-900">
                <span>
                  <span className="font-medium text-gray-900">
                    Government (Finance Department):
                  </span>{" "}
                  Developed/Maintained financial management systems.
                </span>
              </li>
              <li className="flex gap-2 before:content-['•'] before:text-gray-900">
                <span>
                  <span className="font-medium text-gray-900">
                    Federal Court of Justice:
                  </span>{" "}
                  Developed/Maintained legal and judicial software solutions.
                </span>
              </li>
              <li className="flex gap-2 before:content-['•'] before:text-gray-900">
                <span>
                  <span className="font-medium text-gray-900">
                    Government (Environmental Sector):
                  </span>{" "}
                  Developed/Maintained tools for environmental monitoring and
                  regulation.
                </span>
              </li>
            </ul>
          </Typography>
          <Typography>
            Highlights include transforming IT teams, resolving critical system
            issues, implementing CI/CD pipelines, and integrating advanced
            e-commerce, social media, and data-driven solutions. My ability to
            work with legacy systems and cutting-edge technologies showcases my
            versatility and problem-solving prowess.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Bachelor&apos;s of Technology
              </Typography>
              <Typography component="li">
                Started as a web designer, transitioned to software development
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
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
