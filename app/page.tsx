import Head from 'next/head';
import React from 'react';
import styles from '@styles/index/index.module.sass';

const getData = async () => {
  return (await fetch('http://localhost:3000/api/hello')).json();
};

export default async function Home() {
  const userData = await getData();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>NextJS 13</h1>
        {userData && <p>Hello {userData.name}</p>}
      </main>

      <footer className={styles.footer}>
        Created by &nbsp; <strong> Adam Mackay</strong>
      </footer>
    </div>
  );
}
