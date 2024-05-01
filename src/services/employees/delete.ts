import api from "../api";

export async function deleteEmployee(employeeId: string) {
  try {
    await api.delete(`/employees/${employeeId}`);
    return { success: true };
  } catch (error) {
    console.error("Erro ao excluir funcionário:", error);
    return { success: false, error };
  }
}
