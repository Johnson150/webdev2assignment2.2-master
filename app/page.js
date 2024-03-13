"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from './components/Navbar';

import Footer from './components/Footer';

export default function Home() {

  return (

        
    <main class="flex flex-col h-screen justify-between"> 
      
      <Head>
        <title>Students</title>
      </Head>

      <Navbar />

      {/*<StudentList /> {/* Use StudentList component */}

      <Footer />

    </main>
    
  );
};
