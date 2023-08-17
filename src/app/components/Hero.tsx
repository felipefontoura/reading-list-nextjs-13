import React from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="mb-8">
      <h1 className="mb-2">Boa Leitura, Felipe</h1>
      <p className="lead mb-2">
        Parabéns, você tem evoluído muito bem na sua meta!
      </p>
      <a href="" className="btn">
        Explorar
        <HiArrowTopRightOnSquare />
      </a>
    </section>
  );
}
