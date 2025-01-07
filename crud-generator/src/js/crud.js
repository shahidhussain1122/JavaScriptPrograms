class LocalStorageCRUD {
    constructor(namespace) {
        this.namespace = namespace || "crud_data";
        if (!localStorage.getItem(this.namespace)) {
            localStorage.setItem(this.namespace, JSON.stringify([]));
        }
    }

    create(item) {
        const data = this._getData();
        item.id = Date.now();
        data.push(item);
        this._saveData(data);
        return item;
    }

    read(id = null) {
        const data = this._getData();
        return id === null ? data : data.find((item) => item.id === id) || null;
    }

    update(id, updatedItem) {
        const data = this._getData();
        const index = data.findIndex((item) => item.id === id);
        if (index === -1) throw new Error(`Item with ID ${id} not found.`);
        data[index] = { ...data[index], ...updatedItem };
        this._saveData(data);
        return data[index];
    }

    delete(id) {
        const data = this._getData();
        const newData = data.filter((item) => item.id !== id);
        this._saveData(newData);
        return true;
    }

    _getData() {
        return JSON.parse(localStorage.getItem(this.namespace)) || [];
    }

    _saveData(data) {
        localStorage.setItem(this.namespace, JSON.stringify(data));
    }
}

export default LocalStorageCRUD;
