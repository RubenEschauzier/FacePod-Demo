import React from 'react';

export const About: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', color: '#334155' }}>
      <div className="card" style={{ padding: '40px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
        
        <h1 style={{ color: '#1e293b', marginBottom: '1.5rem' }}>About FacePod</h1>
        
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          FacePod is a decentralized social network explorer designed to demonstrate the power of 
          <strong> Solid</strong> and <strong>Link Traversal Query Processing (LTQP)</strong>.
          The source code is available on {' '}
            <a
            href="https://github.com/RubenEschauzier/FacePod-Demo"
            target="_blank"
            rel="noopener noreferrer"
            >
            GitHub
            </a>{' '}
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '2rem 0' }} />

        <div style={{ display: 'grid', gap: '2rem' }}>
          
          <section>
            <h3 style={{ color: '#2563eb', marginBottom: '0.5rem' }}>Decentralized Data</h3>
            <p style={{ lineHeight: '1.6' }}>
              Unlike traditional social networks where data is stored in a central database, 
              FacePod retrieves data directly from <strong>Solid Pods</strong>. 
              We utilize the <em>SolidBench</em> dataset to simulate a realistic network of 
              interconnected user profiles, forums, and messages.
            </p>
          </section>

        <section>
        <h3 style={{ color: '#2563eb', marginBottom: '0.5rem' }}>Link Traversal</h3>
        <p style={{ lineHeight: '1.6' }}>
            When you visit a profile or forum, FacePod does not query a central API.
            Instead, it uses the <strong>Comunica</strong> engine to dynamically traverse
            links between documents in real time to answer your query.
            <br /><br />
            We rely on the default{' '}
            <a
            href="https://github.com/comunica/comunica-feature-link-traversal"
            target="_blank"
            rel="noopener noreferrer"
            >
            comunica-feature-link-traversal
            </a>{' '}
            implementation. Most queries use the{' '}
            <a
            href="https://github.com/comunica/comunica-feature-link-traversal/blob/master/engines/config-query-sparql-link-traversal/config/config-solid-default.json"
            target="_blank"
            rel="noopener noreferrer"
            >
            default configuration
            </a>
            . When a query is guaranteed to stay within a single pod, we use a{' '}
            <a
            href="https://www.npmjs.com/package/@rubeneschauzier/query-sparql-link-traversal-solid-limit-depth"
            target="_blank"
            rel="noopener noreferrer"
            >
            configuration that limits traversal depth
            </a>
            .
        </p>
        </section>
          <section>
            <h3 style={{ color: '#2563eb', marginBottom: '0.5rem' }}>Live Topology Visualization</h3>
            <p style={{ lineHeight: '1.6' }}>
              The toggleable panel on the right visualizes the query engine's path through the 
              decentralized web. Every node represents a document (a Pod, a Profile, or a Post) 
              that the engine has discovered and dereferenced. These graphs are <em>truncated</em> 
              to ensure a smooth experience, in reality when interactiveness is not a requirement,
              these graphs can contains thousands of nodes.
            </p>
          </section>

        </div>

        {/* <div style={{ marginTop: '3rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', fontSize: '0.9rem', color: '#64748b' }}>
          <strong>Tech Stack:</strong> React, Comunica, Cytoscape.js, SolidBench.
        </div> */}
      </div>
    </div>
  );
};