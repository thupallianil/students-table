import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function DownloadExcel({ students }) {

  const download = () => {

    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const data = new Blob([excelBuffer], {
      type: "application/octet-stream"
    });

    saveAs(data, "students.xlsx");
  };

  return (
    <button className="download-btn" onClick={download}>
      Download Excel
    </button>
  );
}

export default DownloadExcel;