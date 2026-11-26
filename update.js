(() => {
  if (!("serviceWorker" in navigator) || !location.protocol.startsWith("http")) return;

  const notice = document.createElement("div");
  notice.style.cssText = [
    "position:fixed","left:12px","right:12px","bottom:16px","z-index:99999",
    "background:#ff7900","color:#111","padding:16px","border-radius:14px",
    "display:none","box-shadow:0 4px 20px #0008","font:600 15px system-ui"
  ].join(";");
  notice.innerHTML = '<div id="gymUpdateMessage" style="margin-bottom:10px">GYM EVOLUTION: nueva actualización disponible.</div><button id="gymUpdateButton" style="background:#101010;color:white;border:0;border-radius:9px;padding:12px 16px;font-weight:800">ACTUALIZAR AHORA</button>';

  let registrationRef = null;
  let reloading = false;
  const button = () => document.getElementById("gymUpdateButton");
  const message = value => { const el=document.getElementById("gymUpdateMessage"); if(el)el.textContent=value; };
  const showNotice = () => { if(!notice.isConnected)document.body.appendChild(notice); notice.style.display="block"; };

  const activate = worker => {
    if(!worker)return false;
    message("Activando actualización…");
    const b=button(); if(b){b.disabled=true;b.textContent="ACTUALIZANDO…";}
    worker.postMessage({type:"SKIP_WAITING"});
    return true;
  };

  const activateWhenInstalled = registration => {
    if(registration.waiting)return activate(registration.waiting);
    const worker=registration.installing;
    if(!worker)return false;
    worker.addEventListener("statechange",()=>{
      if(worker.state==="installed" && registration.waiting)activate(registration.waiting);
      else if(worker.state==="redundant"){message("No se pudo instalar. Pulsa para reintentar.");const b=button();if(b){b.disabled=false;b.textContent="REINTENTAR";}}
    });
    return true;
  };

  const start = async () => {
    document.body.appendChild(notice);
    navigator.serviceWorker.addEventListener("controllerchange",()=>{
      if(reloading)return;
      reloading=true;
      location.reload();
    });

    button().addEventListener("click",async()=>{
      const b=button();b.disabled=true;b.textContent="COMPROBANDO…";
      message("Buscando e instalando la actualización…");
      try{
        const registration=registrationRef||await navigator.serviceWorker.getRegistration();
        if(!registration)throw new Error("No hay registro de actualización");
        registrationRef=registration;
        if(registration.waiting){activate(registration.waiting);return;}
        await registration.update();
        if(registration.waiting){activate(registration.waiting);return;}
        if(registration.installing){activateWhenInstalled(registration);return;}
        message("Recargando la aplicación para comprobar la versión publicada…");
        location.reload();
      }catch(error){
        message("No se pudo completar la actualización. Comprueba tu conexión e inténtalo de nuevo.");
        b.disabled=false;b.textContent="REINTENTAR ACTUALIZACIÓN";
      }
    });

    try{
      registrationRef=await navigator.serviceWorker.register("./sw.js",{updateViaCache:"none"});
      registrationRef.addEventListener("updatefound",()=>{
        const worker=registrationRef.installing;
        if(!worker)return;
        worker.addEventListener("statechange",()=>{
          if(worker.state==="installed" && navigator.serviceWorker.controller){
            showNotice();
            if(registrationRef.waiting)activate(registrationRef.waiting);
          }
        });
      });
      if(registrationRef.waiting && navigator.serviceWorker.controller){
        showNotice();
        activate(registrationRef.waiting);
      }
      await registrationRef.update();
      if(registrationRef.waiting && navigator.serviceWorker.controller){
        showNotice();
        activate(registrationRef.waiting);
      }
    }catch(error){
      // La app sigue disponible online aunque falle el registro del Service Worker.
    }
  };

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});
  else start();
})();