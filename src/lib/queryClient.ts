import { QueryClient } from "@tanstack/react-query";

// Criando uma nova instância do QueryClient com opções personalizadas
export const queryClient = new QueryClient({
  // Configurando as opções padrão para todas as consultas
  defaultOptions: {
    // Configurações para todas as consultas
    queries: {
      // Não retentar automaticamente em caso de falha
      retry: false,
      // Não recarregar automaticamente as consultas quando a janela ganha foco
      refetchOnWindowFocus: false,
    },
  },
});
