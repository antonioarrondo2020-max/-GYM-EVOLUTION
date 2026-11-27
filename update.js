(() => {
  if (!("serviceWorker" in navigator) || !location.protocol.startsWith("http")) return;

  const messages = {
    es: {
      notice:"GYM EVOLUTION: nueva actualización disponible.", update:"ACTUALIZAR AHORA",
      activating:"Activando actualización…", updating:"ACTUALIZANDO…", retry:"REINTENTAR",
      checking:"COMPROBANDO…", searching:"Buscando e instalando la actualización…",
      reload:"Recargando la aplicación para comprobar la versión publicada…",
      failed:"No se pudo completar la actualización. Comprueba tu conexión e inténtalo de nuevo.",
      retryUpdate:"REINTENTAR ACTUALIZACIÓN", installFailed:"No se pudo instalar. Pulsa para reintentar."
    },
    en: {
      notice:"GYM EVOLUTION: a new update is available.", update:"UPDATE NOW",
      activating:"Activating update…", updating:"UPDATING…", retry:"RETRY",
      checking:"CHECKING…", searching:"Checking for and installing the update…",
      reload:"Reloading the app to check the published version…",
      failed:"The update could not be completed. Check your connection and try again.",
      retryUpdate:"RETRY UPDATE", installFailed:"Could not install. Tap to retry."
    },
    fr: {
      notice:"GYM EVOLUTION : une nouvelle mise à jour est disponible.", update:"METTRE À JOUR",
      activating:"Activation de la mise à jour…", updating:"MISE À JOUR…", retry:"RÉESSAYER",
      checking:"VÉRIFICATION…", searching:"Recherche et installation de la mise à jour…",
      reload:"Rechargement de l’application pour vérifier la version publiée…",
      failed:"La mise à jour a échoué. Vérifiez votre connexion et réessayez.",
      retryUpdate:"RÉESSAYER LA MISE À JOUR", installFailed:"Installation impossible. Appuyez pour réessayer."
    },
    de: {
      notice:"GYM EVOLUTION: Ein neues Update ist verfügbar.", update:"JETZT AKTUALISIEREN",
      activating:"Update wird aktiviert…", updating:"AKTUALISIERUNG…", retry:"ERNEUT VERSUCHEN",
      checking:"WIRD GEPRÜFT…", searching:"Update wird gesucht und installiert…",
      reload:"App wird neu geladen, um die veröffentlichte Version zu prüfen…",
      failed:"Das Update konnte nicht abgeschlossen werden. Prüfe deine Verbindung und versuche es erneut.",
      retryUpdate:"UPDATE ERNEUT VERSUCHEN", installFailed:"Installation fehlgeschlagen. Zum erneuten Versuch tippen."
    },
    it: {
      notice:"GYM EVOLUTION: è disponibile un nuovo aggiornamento.", update:"AGGIORNA ORA",
      activating:"Attivazione dell’aggiornamento…", updating:"AGGIORNAMENTO…", retry:"RIPROVA",
      checking:"CONTROLLO…", searching:"Ricerca e installazione dell’aggiornamento…",
      reload:"Ricaricamento dell’app per verificare la versione pubblicata…",
      failed:"Impossibile completare l’aggiornamento. Controlla la connessione e riprova.",
      retryUpdate:"RIPROVA AGGIORNAMENTO", installFailed:"Installazione non riuscita. Tocca per riprovare."
    },
    pt: {
      notice:"GYM EVOLUTION: está disponível uma nova atualização.", update:"ATUALIZAR AGORA",
      activating:"A ativar a atualização…", updating:"A ATUALIZAR…", retry:"TENTAR NOVAMENTE",
      checking:"A VERIFICAR…", searching:"A procurar e instalar a atualização…",
      reload:"A recarregar a aplicação para verificar a versão publicada…",
      failed:"Não foi possível concluir a atualização. Verifica a ligação e tenta novamente.",
      retryUpdate:"TENTAR ATUALIZAR NOVAMENTE", installFailed:"Não foi possível instalar. Toca para tentar novamente."
    }
  };
  const current = () => messages[window.GymI18n?.language || "es"] || messages.es;
  const notice = document.createElement("div");
  notice.style.cssText = [
    "position:fixed","left:12px","right:12px","bottom:16px","z-index:99999",
    "background:#ff7900","color:#111","padding:16px","border-radius:14px",
    "display:none","box-shadow:0 4px 20px #0008","font:600 15px system-ui"
  ].join(";");
  notice.innerHTML = '<div id="gymUpdateMessage" style="margin-bottom:10px"></div><button id="gymUpdateButton" style="background:#101010;color:white;border:0;border-radius:9px;padding:12px 16px;font-weight:800"></button>';

  let registrationRef = null;
  let reloading = false;
  const button = () => document.getElementById("gymUpdateButton");
  const message = key => { const el=document.getElementById("gymUpdateMessage"); if(el){el.textContent=current()[key]||current().notice;el.dataset.messageKey=key;} };
  const refreshText = () => {
    const m=current(), el=document.getElementById("gymUpdateMessage"), b=button();
    if(el){const key=el.dataset.messageKey||"notice";el.textContent=m[key]||m.notice;}
    if(b){const key=b.dataset.labelKey||"update";b.textContent=m[key]||m.update;}
  };
  const showNotice = () => { if(!notice.isConnected)document.body.appendChild(notice); notice.style.display="block"; refreshText(); };

  const activate = worker => {
    if(!worker)return false;
    message("activating");
    const b=button(); if(b){b.disabled=true;b.textContent=current().updating;b.dataset.labelKey="updating";}
    worker.postMessage({type:"SKIP_WAITING"});
    return true;
  };

  const activateWhenInstalled = registration => {
    if(registration.waiting)return activate(registration.waiting);
    const worker=registration.installing;
    if(!worker)return false;
    worker.addEventListener("statechange",()=>{
      if(worker.state==="installed" && registration.waiting)activate(registration.waiting);
      else if(worker.state==="redundant"){message("installFailed");const b=button();if(b){b.disabled=false;b.textContent=current().retry;b.dataset.labelKey="retry";}}
    });
    return true;
  };

  const start = async () => {
    document.body.appendChild(notice);
    refreshText();
    window.addEventListener("gym-language-change",refreshText);
    navigator.serviceWorker.addEventListener("controllerchange",()=>{
      if(reloading)return;
      reloading=true;
      location.reload();
    });

    button().addEventListener("click",async()=>{
      const b=button();b.disabled=true;b.textContent=current().checking;b.dataset.labelKey="checking";
      message("searching");
      try{
        const registration=registrationRef||await navigator.serviceWorker.getRegistration();
        if(!registration)throw new Error("No service worker registration");
        registrationRef=registration;
        if(registration.waiting){activate(registration.waiting);return;}
        await registration.update();
        if(registration.waiting){activate(registration.waiting);return;}
        if(registration.installing){activateWhenInstalled(registration);return;}
        message("reload");
        location.reload();
      }catch(error){
        message("failed");
        b.disabled=false;b.textContent=current().retryUpdate;b.dataset.labelKey="retryUpdate";
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
      // La aplicación sigue disponible online aunque falle el registro del Service Worker.
    }
  };

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});
  else start();
})();