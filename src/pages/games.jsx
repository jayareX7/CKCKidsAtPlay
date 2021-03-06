import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import FunfactArea from "../container/home/funfact";
import GamesArea from "../container/games-page/popular-game";

const MatchPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Games" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="ALL CKC GAMES"
            />
            <GamesArea
                data={{
                    items: data.allGames.nodes,
                }}
            />
        </Layout>
    );
};

MatchPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allGames: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query gamesPageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
                footer2 {
                    ...Footer2
                }
                footer3 {
                    ...Footer3
                }
                footer4 {
                    ...Footer4
                }
            }
        }
        page(title: { eq: "home" }, pageType: { eq: homepage }) {
            content {
                ...PageContentAll
            }
        }
        allGames(sort: { order: DESC, fields: date }) {
            nodes {
                ...Games
            }
        }
    }
`;

export default MatchPage;
