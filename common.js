export const PRODUCTS_101_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

export const getJSONData = (URL) =>
    fetch(URL).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
    });


export const fullAsset = (path) =>
    path.startsWith("html")
        ? path
        : `https://japceibal.github.io/emercado-api/${path}`;


const K = "sesionIniciada";
const U = "usuario";

export const sesionActiva = () => sessionStorage.getItem(K) === "true";

export const iniciarSesion = (user) => {
    sessionStorage.setItem(K, "true");
    sessionStorage.setItem(U, user || "");
};


export const cerrarSesion = () => {
    sessionStorage.removeItem(K);
    sessionStorage.removeItem(U);
    location.href = "index.html";
};


export const requerirSesion = () => {
    if (!sesionActiva()) {
        location.href = "index.html";
    }
};

