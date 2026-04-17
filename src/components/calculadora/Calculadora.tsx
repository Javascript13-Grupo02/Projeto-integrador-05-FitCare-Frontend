import { useState } from "react";

function CalculadoraImc() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState<number | null>(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularImc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pesoNum = parseFloat(peso.replace(",", "."));
    const alturaNum = parseFloat(altura);

    if (pesoNum && alturaNum) {
      const alturaEmMetros = alturaNum / 100;
      const calculo = pesoNum / (alturaEmMetros * alturaEmMetros);
      setImc(calculo);

      if (calculo < 18.5) setClassificacao("Abaixo do peso");
      else if (calculo < 24.9) setClassificacao("Peso normal");
      else if (calculo < 29.9) setClassificacao("Sobrepeso");
      else if (calculo < 34.9) setClassificacao("Obesidade Grau I");
      else if (calculo < 39.9) setClassificacao("Obesidade Grau II");
      else setClassificacao("Obesidade Grau III");
    } else {
      alert("Por favor, preencha os campos de peso e altura corretamente.");
    }
  };

  const limparCampos = () => {
    setPeso("");
    setAltura("");
    setImc(null);
    setClassificacao("");
  };

  return (
    <div className="w-full max-w-md flex flex-col rounded-2xl overflow-hidden bg-zinc-800 border border-white/[0.07] shadow-2xl hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35),0_0_0_1px_rgba(16,185,129,0.3)] transition-all duration-300">
      
      <div className="h-0.5 bg-linear-to-r from-emerald-500 to-transparent" />

      <div className="flex items-center justify-between px-6 py-4 border-b border-white/6">
        <h3 className="text-white font-bold uppercase tracking-widest text-lg">
          Calculadora de IMC
        </h3>
        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
      </div>

      <form onSubmit={calcularImc} className="flex flex-col gap-4 p-6">
        <div>
          <label className="block text-white/55 text-sm font-medium mb-1">Peso (kg)</label>
          <input
            type="text"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 75.5"
            className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
          />
        </div>

        <div>
          <label className="block text-white/55 text-sm font-medium mb-1">Altura (cm)</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 175"
            className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
          />
        </div>

        <div className="flex gap-3 mt-2">
          <button
            type="button"
            onClick={limparCampos}
            className="flex-1 py-3 px-4 rounded-lg text-white/40 text-xs font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors border border-white/5"
          >
            Limpar
          </button>
          <button
            type="submit"
            className="flex-1 py-3 px-4 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-semibold uppercase tracking-widest border border-emerald-500/20 hover:bg-emerald-500 hover:text-zinc-900 transition-all duration-300"
          >
            Calcular
          </button>
        </div>
      </form>

      {imc !== null && (
        <div className="border-t border-white/6 bg-zinc-900/30 px-6 py-5 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-white/55 text-sm mb-1 uppercase tracking-wider">Seu IMC é</p>
          <p className="text-3xl font-bold text-emerald-500 mb-2">
            {imc.toFixed(2)}
          </p>
          <p className="text-white text-sm font-medium bg-emerald-500/10 inline-block px-3 py-1 rounded-full border border-emerald-500/20">
            {classificacao}
          </p>
        </div>
      )}

    </div>
  );
}

export default CalculadoraImc;