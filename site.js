// site.js - utilidades globales del sitio
// Handler delegado para el botón "Volver"
(function(){
  function handleBackClick(e){
    var btn = e.target.closest && e.target.closest('.volver-btn');
    if (!btn) return;
    e.preventDefault();
    try{
      if (history.length > 1) history.back();
      else location.href = 'index.html';
    } catch(err){
      location.href = 'index.html';
    }
  }

  // Delegación en el documento
  document.addEventListener('click', handleBackClick);

  // Exponer en window por si se quiere invocar directamente
  window.site = window.site || {};
  window.site.goBack = function(){ if (history.length>1) history.back(); else location.href='index.html'; };
})();
