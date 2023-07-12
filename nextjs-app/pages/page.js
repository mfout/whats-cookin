import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'node-fetch'

function Page({ data }) {
    //render data
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/server/')
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {props: { data } }
}

export default Page