(() => {
  if (!("serviceWorker" in navigator)) return;

  const notice = document.createElement("div");

  notice.style.cssText = `
    position:fixed;
    left:12px;
    right:12px;
    bottom:16px;
    z-index:99999;
    background:#ff7900;
    color:#111;
    padding:16px;
    border-radius:14px;
    display:none;
    box-shadow:0 4px 20px #0008;
    font:600 15px system-ui;
  `;

  notice.innerHTML = `
    <div style="margin-bottom:10px">
      GYM EVOLUTION: nueva actualización disponible.
    </div>
    <button id="gymUpdateButton"
      style="background:#101010;color:white;border:0;
      border-radius:9px;padding:12px 16px;font-weight:800">
      ACTUALIZAR AHORA
    </button>
  `;

  function showNotice() {
    if (!notice.isConnected) document.body.appendChild(notice);
    notice.style.display = "block";
  }

  function start() {
    document.body.appendChild(notice);

    document.getElementById("gymUpdateButton").addEventListener("click", async () => {
      const button = document.getElementById("gymUpdateButton");
      button.textContent = "ACTUALIZANDO...";

      const registration = await navigator.serviceWorker.getRegistration();

      if (registration && registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      } else {
        location.reload();
      }
    });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      location.reload();
    });

    navigator.serviceWorker.getRegistration().then(registration => {
      if (!registration) return;

      if (registration.waiting && navigator.serviceWorker.controller) {
        showNotice();
      }

      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        if (!worker) return;

        worker.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            showNotice();
          }
        });
      });

      registration.update().catch(() => {});
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
