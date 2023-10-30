import { IEmployee } from "../store/interfaces/employee.interface";

function convertToCSV(array: any[]) {
  let str = "";

  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (const index in array[i]) {
      if (line != "") line += ",";
      line += array[i][index];
    }

    str += line + "\r\n";
  }

  return str;
}

const headers: IEmployee = {
  id: 0,
  nombre: "Nombre",
  correo: "Correo",
  cargo: "Nombre cargo",
  departamento: "Departamento",
  oficina: "Oficina",
  estadoCuenta: "Cuenta",
};

export function exportCSVFile(items: IEmployee[]) {
  items.unshift(headers);

  const csv = convertToCSV(items);

  const exportedFilename = "export.csv";

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  const link = document.createElement("a");
  if (link.download !== undefined) {
    // feature detection
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", exportedFilename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
