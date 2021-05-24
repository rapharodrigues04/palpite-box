import React from "react";
import Link from "next/link";
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <PageTitle title='Contato - PalpiteBox' />
      <h1>Contato</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
      </div>
    </div>
  );
};

export default Contato
