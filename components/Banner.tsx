"use client";
import { items } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import faceboock from './../public/assets/icons/facebook.svg';
import whatsapp from './../public/assets/icons/whatsapp.svg';
import x from './../public/assets/icons/x.svg';

function Banner() {
  const router = useRouter();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const proximoRef = useRef<HTMLButtonElement | null>(null);
  const anteriorRef = useRef<HTMLButtonElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  

  useEffect(() => {
    if(typeof window !== "undefined"){
    const sliderItems = sliderRef.current?.querySelectorAll(".slider .list .item");
    
    if (!sliderItems || sliderItems.length === 0) return;
  
    let itemAtivo = 0;
  
    const showSlader = async () => {
      sliderItems.forEach((item, index) => item.classList.toggle("ative", index === itemAtivo));
    };
  
    const proximo = async () => {
      itemAtivo = (itemAtivo + 1) % sliderItems.length;
      await showSlader();
    };
  
    const anterior = async () => {
      itemAtivo = (itemAtivo - 1 + sliderItems.length) % sliderItems.length;
      await showSlader();
    };
  
    // Criar variáveis locais para capturar os elementos
    const proximoBtn = proximoRef.current;
    const anteriorBtn = anteriorRef.current;
  
    proximoBtn?.addEventListener("click", proximo);
    anteriorBtn?.addEventListener("click", anterior);
  
    // Corrigindo o setInterval para realmente chamar a função
    intervalRef.current = setInterval(proximo, 9000);
  
    return () => {
      // Usando as variáveis locais na limpeza para evitar problemas de referência
      proximoBtn?.removeEventListener("click", proximo);
      anteriorBtn?.removeEventListener("click", anterior);
  
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }
  }, []);


  return (
    <div ref={sliderRef} className="relative flex w-full max-h-[100vh] h-[100vh] slider">
      <div className="flex flex-col h-full w-full list">
        {items.map((item, index) => (
          <div key={item.id} className={`relative flex w-full h-full item ${index === 0 ? "ative" : ""}`}>
            <Image
              src={item.image}
              alt="sliderImage"
              fill
              sizes="100%"
              className="object-cover w-[100%] h-[100%] brightness-[.4]"
            />
            <div className="content">
              <p className="font-mono lg:text-2xl md:text-xl text-base text-green-2 tracking-widest font-bold uppercase sub">
                {item.sub}
              </p>
              <h2 className="lg:text-6xl md:text-5xl text-3xl font-bold text-green-1 titulo">
                <span className="lg:text-6xl md:text-5xl text-3xl font-bold text-white">Tecn</span>Agro
              </h2>
              <p className="text-gray-300 line-clamp-3 lg:text-xl md:text-base text-sm italic tracking-tight leading-normal whitespace-normal font-bold desc">
                {item.desc}
              </p>
              <div className="flex flex-col gap-2 sm:flex-row mt-3">
                <button onClick={() => router.push("/solicitar-produto")} className="btn">
                  <span className="text-white flex">Solicitar produto</span>
                </button>
                <button onClick={() => router.push("/solicitar-produto")} className="btn btn_outline">
                  <span className="text-white flex">Solicitar serviço</span>
                </button>
              </div>
              <div className="mediaSocial">
                <Link href="#" className="hover:scale-110 transition-transform">
                  <Image src={faceboock} alt="Facebook" width={24} height={24} className="animate-mediaAnimation" />
                </Link>
                <Link href="#" className="hover:scale-110 transition-transform">
                  <Image src={whatsapp} alt="WhatsApp" width={24} height={24} className="animate-mediaAnimation" />
                </Link>
                <Link href="#" className="hover:scale-110 transition-transform">
                  <Image src={x} alt="X" width={24} height={24} className="animate-mediaAnimation" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="setas hidden lg:flex space-x-6">
        <button ref={proximoRef} title="próximo" className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122Z" />
          </svg>
        </button>
        <button ref={anteriorRef} title="anterior" className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Banner;
