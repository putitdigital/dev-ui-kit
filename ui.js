var UI_CONFIG = null;

export async function loadUIConfig(url) {
    try {
        const res = await fetch(url);
        UI_CONFIG = await res.json();
        return UI_CONFIG;
    } catch (err) {
        console.error("Config load error:", err);
    }

}