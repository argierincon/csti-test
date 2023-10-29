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

function exportCSVFile(
  headers: Elements,
  items: Elements[],
  fileTitle: string
) {
  if (headers) {
    items.unshift(headers);
  }

  // Convert Object to JSON
  const jsonObject = JSON.stringify(items);

  const csv = this.convertToCSV(jsonObject);

  const exportedFilename = fileTitle + ".csv" || "export.csv";

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

interface Elements {
  model: string;
  chargers: string;
  cases: string;
  earphones: string;
  scratched?: string;
}

const headers: Elements = {
  model: "Phone Model",
  chargers: "Chargers",
  cases: "Cases",
  earphones: "Earphones",
};

const itemsNotFormatted: Elements[] = [
  {
    model: "Samsung S7",
    chargers: "55",
    cases: "56",
    earphones: "57",
    scratched: "2",
  },
  {
    model: "Pixel XL",
    chargers: "77",
    cases: "78",
    earphones: "79",
    scratched: "4",
  },
  {
    model: "iPhone 7",
    chargers: "88",
    cases: "89",
    earphones: "90",
    scratched: "6",
  },
];

const itemsFormatted: any[] = [];

// format the data
itemsNotFormatted.forEach((item) => {
  itemsFormatted.push({
    model: item.model.replace(/,/g, ""), // remove commas to avoid errors,
    chargers: item.chargers,
    cases: item.cases,
    earphones: item.earphones,
  });
});

const fileTitle = "empleados"; // or 'my-unique-title'

exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
