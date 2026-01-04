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
          <Typography variant="h3">Curious about me? Here's a quick story:</Typography>

          <Typography>
            I'm a senior full-stack engineer (17+ years) focused on TypeScript, React/Next.js, and
            Node/NestJS. I build user-facing products and backend services that are simple, fast,
            and reliable.
          </Typography>

          <Typography>
            Most of my work is end-to-end: shaping the solution with product/design, building the
            feature, shipping safely, and supporting it in production. I'm strong with integrations
            and operational work (queues, retries, webhooks, background jobs), and I care a lot
            about tests, docs, and clean code.
          </Typography>

          <Typography>
            Systems I've built:
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex gap-2 before:content-['•'] before:text-gray-900">
                <span>
                  <span className="font-medium text-gray-900">E-commerce & Wholesale:</span>{" "}
                  Shopify storefronts and internal tools that support real operations.
                </span>
              </li>
              <li className="flex gap-2 before:content-['•'] before:text-gray-900">
                <span>
                  <span className="font-medium text-gray-900">Manufacturing & ERP workflows:</span>{" "}
                  Inventory, sales, assembly, and reporting systems focused on speed and accuracy.
                </span>
              </li>
              <li className="flex gap-2 before:content-['•'] before:text-gray-900">
                <span>
                  <span className="font-medium text-gray-900">Public sector:</span>{" "}
                  Large systems with strict requirements and long-term maintenance.
                </span>
              </li>
            </ul>
          </Typography>

          <Typography>
            What people usually notice when working with me: steady delivery, clear communication,
            high review standards, and mentoring support for developers.
          </Typography>

          <Typography>Finally, some quick bits about me.</Typography>

          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Bachelor's of Technology</Typography>
              <Typography component="li">
                Started as a web designer, transitioned to software development
              </Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Use AI tools with strong review/testing guardrails</Typography>
              <Typography component="li">Love mountain biking and exploring nature trails</Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
