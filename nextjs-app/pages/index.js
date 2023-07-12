import React from 'react';
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Easy Recipe Finder - What's Cookin?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header">
        <h1 className="title">
          What's Cookin?
        </h1>
    
        <p className="description">
          Explore new recipes
        </p>
      </div>

      <div className="left">
        <h2>Enter ingredients: </h2>
        <p className="description">"Food products"<br/>"Herbs and spices"<br/>"Liquids"</p>
      </div>

      <div className="right">
        <div className="box">
          
        </div>
      </div>

      <footer>
       
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
        }

        .header {
          margin-top: 1rem;
          text-align: center;
          align-items: center;
        }

        .right {
          margin-top: 5rem;
          width: 75%;
          float: right;
        }

        .left {
          margin-top: 5rem;
          width: 25%;
          float: left;
        }

        .description {
          font-style: italic;
          font-size: 1rem;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
       
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
