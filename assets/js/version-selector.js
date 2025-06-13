document.addEventListener('DOMContentLoaded', function() {
  // Find all version selector links
  const versionLinks = document.querySelectorAll('.dropdown-item[href^="https://paigecalvert.github.io/hugo-docsy-test"]');
  
  versionLinks.forEach(link => {
    link.addEventListener('click', async function(e) {
      e.preventDefault();
      const targetUrl = this.href;
      
      try {
        // Try to fetch the target page
        const response = await fetch(targetUrl, { method: 'HEAD' });
        
        if (response.ok) {
          // If page exists, navigate to it
          window.location.href = targetUrl;
        } else {
          // If page doesn't exist, redirect to the version's docs home
          const url = new URL(targetUrl);
          const pathParts = url.pathname.split('/');
          const versionIndex = pathParts.indexOf('v1.0');
          if (versionIndex !== -1) {
            // For v1.0, go to /v1.0/docs/
            url.pathname = '/hugo-docsy-test/v1.0/docs/';
          } else {
            // For main, go to /docs/
            url.pathname = '/hugo-docsy-test/docs/';
          }
          window.location.href = url.toString();
        }
      } catch (error) {
        // If fetch fails, redirect to docs home
        const url = new URL(targetUrl);
        const pathParts = url.pathname.split('/');
        const versionIndex = pathParts.indexOf('v1.0');
        if (versionIndex !== -1) {
          url.pathname = '/hugo-docsy-test/v1.0/docs/';
        } else {
          url.pathname = '/hugo-docsy-test/docs/';
        }
        window.location.href = url.toString();
      }
    });
  });
}); 