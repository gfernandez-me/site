"use client";

import { useState } from "react";
import { Copy, Mail, Phone } from "lucide-react";
// import Link from 'next/link';

import SocialIcons from "@/components/data-display/social-icons";
import Tag from "@/components/data-display/tag";
import IconButton from "@/components/general/icon-button";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import useWindowSize from "@/hooks/use-window-size";
import { copyTextToClipboard } from "@/lib/utils";

// Email and phone parts split and encoded in base64
const emailParts = [
  "Y29udGFjdA==", // contact
  "bWU=", // me
  "Z2FicmllbA==", // gabriel
  "ZmVybmFuZGV6", // fernandez
  "QGdtYWlsLmNvbQ==", // @gmail.com
];

const phoneParts = [
  "KzE=", // +1
  "NjQ3", // 647
  "NTYz", // 563
  "OTY4OA==", // 9688
];

type CopyValue = "email" | "phone";

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  // Decode base64 for copying
  const getDecodedEmail = () => {
    return emailParts
      .map((part, index) => {
        const decoded = atob(part);
        if (index < emailParts.length - 2) {
          return decoded + ".";
        }
        return decoded;
      })
      .join("");
  };

  const getDecodedPhone = () => {
    return phoneParts
      .map((part) => atob(part))
      .join(" ")
      .replace(" ", "-");
  };

  const handleCopyClick = async (type: CopyValue) => {
    try {
      const textToCopy =
        type === "email"
          ? getDecodedEmail()
          : getDecodedPhone().replace(/\s/g, "");
      await copyTextToClipboard(textToCopy);
      setIsCopied(true);
      setCopiedValueType(type);
      let timeoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timeoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          What&apos;s next? Feel free to reach out to me if you are looking for
          a developer, have a query, or simply want to connect.
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <Mail className="h-6 w-6 md:h-8 md:w-8" />
            <Typography variant="h2">
              {emailParts.map((part, index) => (
                <span key={index}>
                  {atob(part)}
                  {index < emailParts.length - 2 ? "." : ""}
                </span>
              ))}
            </Typography>
            <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick("email")}
              showTooltip={isCopied && copiedValueType === "email"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
          <div className="flex items-center gap-4 md:gap-5">
            <Phone className="h-6 w-6 md:h-8 md:w-8" />
            <Typography variant="h2">
              {phoneParts.map((part, index) => (
                <span key={index}>
                  {atob(part)}
                  {index < phoneParts.length - 1 ? " " : ""}
                </span>
              ))}
            </Typography>
            <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick("phone")}
              showTooltip={isCopied && copiedValueType === "phone"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
