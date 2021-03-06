import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class PostsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">
                Posts
                <span className="icon" style={{ marginLeft: 10 }}>
                  <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="fa-xs" icon={faRss} />
                  </a>
                </span>
              </h1>
            </div>
            {posts.map(({ node: post }) => this.renderBlurb(post))}
          </div>
        </section>
      </Layout>
    );
  }

  renderBlurb(post) {
    return (
      <div
        className="content"
        style={{
          border: '1px solid transparent',
          borderImage: 'linear-gradient(to right, #eee, #bbb) 100',
          borderImageSlice: 1,
          padding: '2em 4em',
        }}
        key={post.id}
      >
        <p>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          <span> &bull; </span>
          <small>{post.frontmatter.date}</small>
        </p>
        <p>
          {post.frontmatter.description ? post.frontmatter.description : post.excerpt}
          <br />
          <br />
          <Link className="button is-small" to={post.fields.slug}>
            Keep Reading →
          </Link>
        </p>
      </div>
    );
  }
}

PostsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" }, published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            published
            description
          }
        }
      }
    }
  }
`;
