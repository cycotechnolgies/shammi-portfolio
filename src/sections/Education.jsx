import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Highlights } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Education = () => {
  const text = `I acquire deep, practical knowledge
to build skills that empower growth,
not just checkboxes`;

  const highlightRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });

  useGSAP(() => {
    highlightRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="services" className="min-h-screen bg-white rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Knowledge in Action, Milestones in Progress"}
        title={"Highlights"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      {Highlights.map((service, index) => (
        <div
          ref={(el) => (highlightRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-black bg-white border-t-2 border-black/20"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(Highlights.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>

              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-black/60 text-pretty">
                {service.description}
              </p>

              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-black/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-black/30">
                        0{itemIndex + 1}
                      </span>
                      <p className="flex flex-col gap-2 ml-12 text-base font-light lg:text-lg text-black/60">
                        <span className=" text-2xl text-black">{item.title}</span>
                        {item.description}
                      </p>
                    </h3>

                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-black/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
