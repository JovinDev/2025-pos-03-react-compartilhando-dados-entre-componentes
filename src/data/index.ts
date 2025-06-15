export type TarefaInterface = {
	id: number;
	title: string;
	completed: boolean;
	userId?: number; // Adicionando campo opcional para compatibilidade
  };
  
  const dados: Array<TarefaInterface> = [
	{ id: 1, title: "Estudar Django", completed: false },
	{ id: 2, title: "acordar", completed: false },
	{ id: 3, title: "malhar", completed: true },
	{ id: 4, title: "contemplar a vida", completed: false },
	{ id: 5, title: "chorar", completed: true },
  ];
  
  const carregar = (): Promise<TarefaInterface[]> => {
	return new Promise((resolve, reject) => {
	  const sucesso = true;
  
	  if (sucesso) {
		resolve(dados);
	  } else {
		reject(new Error("Erro 500: Falha ao carregar dados da API"));
	  }
	});
  };
  
  export { carregar };
  export default dados;