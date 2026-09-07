# Discrete Math Offline Reference

A deliberately simple, mobile-first navigation and quick-reference app based on the organization of Oscar Levin's *Discrete Mathematics: An Open Introduction, 4th Edition*.

## Features

- Chapter → section navigation
- Local topic search
- Quick-reference cards for common notation and formulas
- Responsive phone-friendly layout
- Automatic dark mode
- Progressive Web App manifest
- Service worker for offline use after first load
- No framework, database, backend, API, or AI dependency

## Run locally

Because service workers require HTTP/HTTPS, do not test offline mode by double-clicking `index.html` directly.

From the project folder, you can run a simple local server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

1. Create a GitHub repository.
2. Upload all files in this folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Deploy from the `main` branch/root folder.
5. Open the generated GitHub Pages address once while online.
6. Add it to your phone's home screen. After the service worker finishes caching, the reference can load offline.

## Source and license

Source text: © 2013–2025 Oscar Levin, *Discrete Mathematics: An Open Introduction, 4th Edition*.

Source: https://discrete.openmathbooks.org/

Licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0):
https://creativecommons.org/licenses/by-nc-sa/4.0/

This adaptation/reference aid is distributed under the same license.
