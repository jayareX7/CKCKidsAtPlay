import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";
import HeroImage from "../../../data/images/hero/hero-bg1.webp";
import featureImage from "../../../../static/images/hero.png";

const HeroArea = ({ data }) => {
    return (
        <>
            <section
                className="relative img h-540 md:h-650 lg:h-780 xl:h-940 bg-no-repeat bg-center bg-cover flex items-center"
                style={{
                    backgroundImage: `url(${featureImage})`,
                }}
                alt={"Dashboard"}
            >
                <div className="container px-4 z-10">
                    <div className="text-primary mt-16">
                        {data?.headings?.[0] && (
                            <h1 className="mb-6 sm:mb-10 text-shadow uppercase max-w-3xl">
                                {data.headings[0].content}
                            </h1>
                        )}
                        {data?.texts?.[0] && (
                            <p className="text-base  lg:text-md font-bold mb-6 sm:mb-10 ">
                                {data.texts[0].content}
                            </p>
                        )}
                        {data?.buttons &&
                            data.buttons.map(({ id, content, ...props }) => (
                                <Button
                                    key={id}
                                    {...props}
                                    className="text-white"
                                >
                                    {content}
                                    <StaticImage
                                        className="align-middle ml-3 transition-all group-hover:ml-5"
                                        src="../../../data/images/icons/arrrow-icon.webp"
                                        alt=""
                                    />
                                </Button>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};
HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        texts: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            })
        ),
    }),
};
export default HeroArea;
