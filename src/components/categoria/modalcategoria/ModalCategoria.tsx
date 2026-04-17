import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import FormCategoria from "../formcategoria/FormCategoria";

function ModalCategoria() {
  return (
    <Popup
      trigger={
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/8 hover:bg-emerald-500/18 hover:border-emerald-500/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35),0_0_0_1px_rgba(16,185,129,0.4)] transition-all duration-300 cursor-pointer min-h-45">
          <span className="text-4xl text-emerald-500/60 hover:text-emerald-500 hover:scale-115 transition-all duration-300 leading-none">
            +
          </span>
          <span className="text-emerald-500/60 text-xs font-semibold uppercase tracking-widest hover:text-emerald-500 transition-colors duration-300">
            Nova Categoria
          </span>
        </div>
      }
      modal
      contentStyle={{
        borderRadius: '1rem',
        padding: '0',
        background: '#27272a',
        border: '1px solid rgba(255,255,255,0.07)',
        width: '700px'  // era 520px, aumenta conforme precisar
      }}
      overlayStyle={{
        background: 'rgba(0,0,0,0.7)'
      }}
    >
      <FormCategoria />
    </Popup>
  )
}

export default ModalCategoria;
