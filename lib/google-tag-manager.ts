/** Return no markup until a real GTM container ID has been configured. */
export function getGoogleTagManagerConfig(value: string | undefined) {
  const id = value?.trim() ?? "";
  const isContainerId = /^GTM-[A-Z0-9]+$/.test(id);
  const isPlaceholder = /^GTM-(?:X+|0+|EXAMPLE|PLACEHOLDER|YOURID|YOURGTMID|REPLACE.*)$/.test(id);

  if (!isContainerId || isPlaceholder) return null;

  return {
    id,
    noScriptUrl: `https://www.googletagmanager.com/ns.html?id=${id}`,
    // Google's asynchronous bootstrap. The strict ID check above keeps this
    // interpolation safe and prevents GA4 measurement IDs from being used here.
    script: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',${JSON.stringify(id)});`,
  };
}
