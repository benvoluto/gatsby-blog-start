import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Layout } from '../components/Layout';

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;
const Image = styled(Img)`
  border-radius: 5px;
`;

export default ({ data }) => {
  return (
    <div>
      <Layout>
        <IndexWrapper>
          {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
            <PostWrapper key={id}>
              <Link to={fields.slug}>
                {!!frontmatter.featuredImage ? (
                    <Image sizes={frontmatter.featuredImage.childImageSharp.fluid} />
                  ) : null}
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </PostWrapper>
          ))}
        </IndexWrapper>
      </Layout>
    </div>
  );
};


export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;