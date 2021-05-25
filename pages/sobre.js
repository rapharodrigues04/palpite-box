import React from "react";
import Link from "next/link";
import PageTitle from '../components/pageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre - PalpiteBox' />
      <h1>Sobre</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contato">
          <a>Contato</a>
        </Link>
      </div>
    </div>
  );
};

export default Sobre;
