import data from '../data/catalog.json';

export const ORIGIN = 'https://www.geopathic-stress-solutions.com';
export const { site, navigation, categories, products } = data;

export const storeUrl = (path) => ORIGIN + path;
export const money = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(n);

// Scraped images are 120px thumbnails. Ask the CDN for a larger size and
// keep the thumbnail as fallback (see ProductCard / product page onerror).
export const largeImage = (url) => url.replace('.120.120.', '.500.659.');

export const productsIn = (slug) => products.filter((p) => p.categories.includes(slug));
export const countIn = (slug) => productsIn(slug).length;

// Pages that were in the original nav but not scraped yet.
export const staticPages = [
  { slug: 'about-us', title: 'About us', original: '/about-us/' },
  { slug: 'shipping-and-returns', title: 'Shipping & returns', original: '/shippingandreturns' },
  { slug: 'energy-testing', title: 'Energy testing', original: '/pages/Newsletter.html' },
  { slug: 'testimonials', title: 'Testimonials', original: '/testimonials/' },
  { slug: 'contact-us', title: 'Contact us', original: '/pages/Contact-Us.html' },
  { slug: 'gift-certificates', title: 'Gift certificates', original: '/giftcertificates.php' },
];
