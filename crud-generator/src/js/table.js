export function generateTable(records, onEdit, onDelete) {
    const tableBody = document.querySelector("#recordTable tbody");
    tableBody.innerHTML = "";

    records.forEach((record) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${record.id}</td>
            <td>${record.name}</td>
            <td>${record.age}</td>
            <td>
                <button class="edit" data-id="${record.id}">Edit</button>
                <button class="delete" data-id="${record.id}">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    tableBody.querySelectorAll(".edit").forEach((btn) =>
        btn.addEventListener("click", () => onEdit(btn.dataset.id))
    );

    tableBody.querySelectorAll(".delete").forEach((btn) =>
        btn.addEventListener("click", () => onDelete(btn.dataset.id))
    );
}
