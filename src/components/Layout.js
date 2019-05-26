import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" className="has-navbar-fixed-top" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/lumberjack.png" />
          <link rel="icon" type="image/png" href="/img/lumberjack.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/lumberjack.png" sizes="16x16" />

          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
          <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-75783400-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-75783400-1');
            </script>
        </Helmet>
        <Navbar />
        <div>{children}</div>
      </div>
    )}
  />
);

export default TemplateWrapper;
