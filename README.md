# Launch — React Conversion

This is a React (Vite) conversion of the Colorlib "Launch" HTML landing page template.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

## What changed vs. the static HTML

- **Structure**: every section is its own component under `src/components/` (Navbar, Hero,
  FeaturesIntro, FeaturesTabSlider, ServiceGrid, Pricing, Advantages, TestimonialsSlider, About,
  News, Contact, Footer).
- **Interactivity** is now React state instead of vanilla JS / Bootstrap JS:
  - Mobile menu, the sign in / register modal, and dark mode all live in `src/UIContext.jsx`
    (a small context so the navbar, mobile menu, and fixed corner toggle can share state).
  - Password show/hide toggle -> `PasswordField.jsx`.
  - Pricing monthly/yearly switch -> local state in `Pricing.jsx`.
  - The image carousel + synced "tab" list, the testimonials carousel, and the features
    carousel use the **Swiper React** components (`swiper/react`) instead of vanilla Swiper.
  - The video thumbnail uses the **glightbox** npm package the same way the original did.
  - The "About" counters animate up using an `IntersectionObserver` instead of a scroll-trigger
    jQuery plugin.
  - AOS (scroll animations) is initialized once in `App.jsx`; all the original `data-aos`
    attributes were kept as-is.
- **Styling**: `index.html` still links the original theme's compiled CSS/icon fonts directly
  from `preview.colorlib.com` so the visual design matches exactly without re-authoring a large
  stylesheet. If you want everything self-hosted, download `style.css` plus the `icomoon` and
  `flaticon` icon font folders from the original template and drop them into `public/`, then
  update the `<link>` tags in `index.html` to point at local paths instead.

## Notes

- The contact form and the auth forms are wired to local component state with `onSubmit`
  handlers you can swap for your real backend / auth provider / form service.
- Social/footer/nav links that pointed to `#` in the original template were left as-is - update
  them to real routes as needed.
