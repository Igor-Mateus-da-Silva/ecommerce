"use client";
import { Produto } from "@/core";
import { useEffect, useState } from "react";

export default function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function obterProdutos(): Promise<Produto[]> {
    const resp = await fetch(
      "https://automatic-waddle-q5wxv49459q2xp5-3005.app.github.dev/produtos"
    );
    const produtos = await resp.json();
    return produtos;
  }

  useEffect(() => {
    obterProdutos().then(setProdutos);
  }, []);

  return {
    produtos,
  };
}
