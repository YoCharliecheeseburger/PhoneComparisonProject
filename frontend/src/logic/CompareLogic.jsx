export const addToCompare = (id) => {
    const stored = JSON.parse(localStorage.getItem("comparePhones")) || [];
    if (!stored.includes(id)) {
        stored.push(id);
    }
    localStorage.setItem("comparePhones", JSON.stringify(stored));
    window.dispatchEvent(new Event("compareUpdated"));
};

export const removeFromCompare = (id) => {
    const stored = JSON.parse(localStorage.getItem("comparePhones")) || [];
    const updated = stored.filter(p => p !== id);
    localStorage.setItem("comparePhones", JSON.stringify(updated));
    window.dispatchEvent(new Event("compareUpdated"));
};

export const clearCompare = () => {
    localStorage.removeItem("comparePhones");
    window.dispatchEvent(new Event("compareUpdated"));
};

export const getComparePhones = () => {
    return JSON.parse(localStorage.getItem("comparePhones")) || [];
};