import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import dynamic from "next/dynamic";
import Container from "@/components/ui/container";

const SliceZone = dynamic(() => import('@prismicio/react').then((module) => module.SliceZone));

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About: FC<AboutProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <SliceZone />
        <div className="px-8 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-2xl md:text-4xl font-heading leading-tight tracking-tight mb-4">
                {slice.primary.links.map(({ about, label }) => (
                  <PrismicNextLink className="font-bold" key={label} field={about}>
                    {label}
                  </PrismicNextLink>
                ))}
              </div>
              <div
                className="text-xl xl:text-xl font-heading max-w-full text-neutral-600"
                style={{ maxWidth: '800px' }}
              >
                <PrismicRichText field={slice.primary.history} />
              </div>
            </div>
            <div className="text-start md:text-left flex justify-end">
              <div
                className="text-xl xl:text-xl font-heading max-w-full text-neutral-600"
                style={{ maxWidth: '800px' }}
              >
                <PrismicRichText field={slice.primary.caption} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
