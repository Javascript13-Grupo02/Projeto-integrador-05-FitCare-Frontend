import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import FormExercicio from "../formexercicio/FormExercicio";

function ModalExercicio() {
  return (
    <Popup
      trigger={
        <div className="flex flex-col rounded-2xl overflow-hidden border border-emerald-500/25 bg-emerald-500/8 hover:bg-emerald-500/18 hover:border-emerald-500/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35),0_0_0_1px_rgba(16,185,129,0.4)] transition-all duration-300 cursor-pointer justify-between h-full">
          <div className="flex flex-col flex-1">

            <div className="h-0.5 bg-linear-to-r from-emerald-500 to-transparent" />

            <div className="w-full h-48 border-b border-white/6 bg-emerald-500/5 flex items-center justify-center">
              <span className="text-5xl text-emerald-500/40 leading-none">+</span>
            </div>

            <div className="px-6 py-5 flex flex-col flex-1 items-center justify-center gap-2">
              <span className="text-emerald-500/60 text-xs font-semibold uppercase tracking-widest">
                Novo Exercício
              </span>
            </div>

          </div>
        </div>
      }
      modal
      contentStyle={{
        borderRadius: '1rem',
        padding: '0',
        background: '#27272a',
        border: '1px solid rgba(255,255,255,0.07)',
        width: '700px'
      }}
      overlayStyle={{
        background: 'rgba(0,0,0,0.7)'
      }}
    >
      <FormExercicio />
    </Popup>
  )
}

export default ModalExercicio;
