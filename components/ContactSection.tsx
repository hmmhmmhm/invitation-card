import { IconMessageCircle2, IconPhoneCall } from "@tabler/icons-react";
import Link from "next/link";

export interface ContactSectionProps {
  primaryContacts: {
    title: string;
    phoneNumber: string;
    highlightColor: string;
  }[];
  leftFamilyContacts: {
    title: string;
    name: string;
    phoneNumber: string;
    highlightColor: string;
  }[];
  rightFamilyContacts: {
    title: string;
    name: string;
    phoneNumber: string;
    highlightColor: string;
  }[];
}

export default function ContactSection({
  primaryContacts,
  leftFamilyContacts,
  rightFamilyContacts,
}: ContactSectionProps) {
  return (
    <section
      className="flex justify-center items-center w-full flex-col font-bold text-5xl text-center text-[#483A33] gap-14 mt-36"
      aria-label="연락처"
    >
      {primaryContacts.map((contact, index) => (
        <ContactItem
          key={index}
          title={contact.title}
          phoneNumber={contact.phoneNumber}
          highlightColor={contact.highlightColor}
        />
      ))}

      <div
        className="w-full h-40 bg-[#FBE2E4] text-[#665743] text-4xl flex justify-center items-center"
        aria-hidden
      >
        혼주에게 연락하기
      </div>

      <div className="w-full flex flex-row" aria-label="혼주에게 연락하기">
        <div className="w-1/2 flex flex-col gap-16" aria-label="신랑 측 혼주">
          <p aria-hidden>신랑 측 혼주</p>
          {leftFamilyContacts.map((contact, index) => (
            <TinyContactItem
              key={index}
              title={contact.title}
              name={contact.name}
              phoneNumber={contact.phoneNumber}
              highlightColor={contact.highlightColor}
            />
          ))}
        </div>
        <div className="w-1/2 flex flex-col gap-16" aria-label="신부 측 혼주">
          <p aria-hidden>신부 측 혼주</p>
          {rightFamilyContacts.map((contact, index) => (
            <TinyContactItem
              key={index}
              title={contact.title}
              name={contact.name}
              phoneNumber={contact.phoneNumber}
              highlightColor={contact.highlightColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const ContactItem = ({
  title,
  phoneNumber,
  highlightColor,
}: {
  title: string;
  phoneNumber: string;
  highlightColor?: string;
}) => {
  return (
    <div className="flex flex-row gap-8 items-center">
      <span className="text-5xl mr-4" aria-hidden>
        {title}에게 연락하기
      </span>
      <Link href={`tel:${phoneNumber}`} prefetch={false}>
        <button
          type="button"
          className="flex justify-center items-center gap-2 w-36 h-36 bg-[#6EBD52] rounded-full shadow-lg"
          style={{ backgroundColor: highlightColor }}
        >
          <IconPhoneCall
            size="5rem"
            stroke={1.5}
            color="transparent"
            fill="white"
            aria-label={`${title}에게 전화하기`}
          />
        </button>
      </Link>
      <Link href={`sms:${phoneNumber}`} prefetch={false}>
        <button
          type="button"
          className="flex justify-center items-center gap-2 w-36 h-36 bg-[#6EBD52] rounded-full shadow-lg"
          style={{ backgroundColor: highlightColor }}
        >
          <IconMessageCircle2
            size="5rem"
            stroke={1.5}
            color="transparent"
            fill="white"
            aria-label={`${title}에게 문자 보내기`}
          />
        </button>
      </Link>
    </div>
  );
};

export const TinyContactItem = ({
  title,
  name,
  phoneNumber,
  highlightColor,
}: {
  title: string;
  name: string;
  phoneNumber: string;
  highlightColor?: string;
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div aria-hidden>
          <span className="text-4xl">{title}</span>{" "}
          <span className="text-5xl">{name}</span>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <Link href={`tel:${phoneNumber}`} prefetch={false}>
            <button
              type="button"
              className="flex justify-center items-center gap-2 w-36 h-36 bg-[#6EBD52] rounded-full shadow-lg"
              style={{ backgroundColor: highlightColor }}
            >
              <IconPhoneCall
                size="5rem"
                stroke={1.5}
                color="transparent"
                fill="white"
                aria-label={`${title} ${name}에게 전화하기`}
              />
            </button>
          </Link>
          <Link href={`sms:${phoneNumber}`} prefetch={false}>
            <button
              type="button"
              className="flex justify-center items-center gap-2 w-36 h-36 bg-[#6EBD52] rounded-full shadow-lg"
              style={{ backgroundColor: highlightColor }}
            >
              <IconMessageCircle2
                size="5rem"
                stroke={1.5}
                color="transparent"
                fill="white"
                aria-label={`${title} ${name}에게 문자 보내기`}
              />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
