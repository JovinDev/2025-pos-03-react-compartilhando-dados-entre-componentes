import { useState } from "react";

interface ModalTarefaProps {
  adicionarTarefa: (titulo: string) => void;
  fecharModal: () => void;
}

const ModalTarefa: React.FC<ModalTarefaProps> = ({
  adicionarTarefa,
  fecharModal,
}) => {
  const [titulo, setTitulo] = useState("");

  const handleAdicionar = () => {
    if (titulo.trim() !== "") {
      adicionarTarefa(titulo);
      setTitulo("");
      fecharModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h2 className="text-xl mb-4">Nova Tarefa</h2>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Digite a tarefa"
          className="border w-full p-2 mb-4 rounded"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={fecharModal}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={handleAdicionar}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTarefa;
