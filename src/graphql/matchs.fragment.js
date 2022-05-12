import { graphql } from "gatsby";

export const query = graphql`
    fragment Matchs on Match {
        id
        date(formatString: "DD MMMM, YYYY, hh:mm:ss A")
        title
        slug
        playerNumber
        teamNubmber
        winningPrize
        registeredTeams
        liveStreaming {
            id
            link
            images {
                alt
                src {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
        teams {
            name
            logo {
                alt
                src {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            slug
            teamPlayer {
                id
                name
                images {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
            socials {
                id
                title
                link
                icon
            }
        }
        quoteText
        content {
            id
            section
            items {
                id
                desc
            }
        }
    }
`;
