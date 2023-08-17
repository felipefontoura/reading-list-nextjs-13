import React from "react";
import { HiArrowTopRightOnSquare, HiOutlineBookOpen } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="mb-8 flex gap-8">
      <div>
        <h1 className="mb-2">Boa Leitura, Felipe</h1>
        <p className="lead mb-2">
          Parabéns, você tem evoluído muito bem na sua meta!
        </p>
        <a href="#" className="btn">
          Explorar
          <HiArrowTopRightOnSquare />
        </a>
      </div>
      <HiOutlineBookOpen className="block h-20 w-20 text-gray-500 md:hidden" />
    </section>
  );
}
