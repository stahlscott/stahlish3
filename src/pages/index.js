import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Avatar from '../components/Avatar';

export const HomePageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <div className="columns">
                <a href="https://github.com/stahlscott" target="_blank" rel="noopener noreferrer">
                  <Avatar imageInfo={image} />
                </a>
                <h2
                  className="title is-size-3 has-text-weight-bold is-bold-light"
                  style={{ alignSelf: 'center', marginLeft: 30, marginTop: 20 }}
                >
                  {title}
                </h2>
              </div>
              <br />
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const HomePage = ({ data }) => {
  const { node: post } = data.allMarkdownRemark.edges[0];
  return (
    <Layout>
      <HomePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;

/* http://localhost:8000/___graphql */

export const homePageQuery = graphql`
  query HomePage {
    allMarkdownRemark(filter: { frontmatter: { home: { eq: true } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
