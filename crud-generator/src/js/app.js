import LocalStorageCRUD from "./crud.js";
import { generateForm } from "./form.js";
import { generateTable } from "./table.js";

const crud = new LocalStorageCRUD("myAppData");

const formFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "age", label: "Age", type: "number" },
];

function init() {
    generateForm(formFields, (data) => {
        const id = document.getElementById("recordId").value;
        if (id) {
            crud.update(Number(id), data);
        } else {
            crud.create(data);
        }
        document.getElementById("recordForm").reset();
        refreshTable();
    });

    refreshTable();
}

function refreshTable() {
    const records = crud.read();
    generateTable(
        records,
        (id) => {
            const record = crud.read(Number(id));
            document.getElementById("recordId").value = record.id;
            formFields.forEach((field) => {
                document.getElementById(field.name).value = record[field.name];
            });
        },
        (id) => {
            crud.delete(Number(id));
            refreshTable();
        }
    );
}

init();
