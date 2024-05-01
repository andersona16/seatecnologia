import { create } from "./create";
import { getAll } from "./getAll";
import { deleteEmployee } from "./delete";

export const employeesService = {
  getAll,
  deleteEmployee,
  create,
};
