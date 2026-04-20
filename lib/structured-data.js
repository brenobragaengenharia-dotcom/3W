const SITE_URL = 'https://3w-entretenimento.com';

export const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: '3W Entretenimento',
  alternateName: '3W',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/logo.png`,
    width: 300,
    height: 60,
  },
  description: 'Portal de entretenimento brasileiro com cobertura de filmes, séries, música, jogos e eventos.',
  inLanguage: 'pt-BR',
  areaServed: { '@type': 'Country', name: 'Brasil' },
  sameAs: [
    'https://www.instagram.com/3wentretenimento',
    'https://www.facebook.com/3wentretenimento',
    'https://twitter.com/3wentretenimento',
    'https://www.youtube.com/@3wentretenimento',
  ],
};

export const schemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: '3W Entretenimento',
  url: SITE_URL,
  description: 'Seu Universo de Entretenimento',
  inLanguage: 'pt-BR',
  publisher: { '@id': `${SITE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/busca?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

export function schemaBreadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function schemaNewsArticle({ headline, description, image, url, publishedAt, modifiedAt, author, section }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: headline.substring(0, 110),
    description,
    url: `${SITE_URL}${url}`,
    image: { '@type': 'ImageObject', url: image.startsWith('http') ? image : `${SITE_URL}${image}`, width: 1200, height: 630 },
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: { '@type': 'Person', name: author || 'Redação 3W' },
    publisher: { '@id': `${SITE_URL}/#organization` },
    articleSection: section || 'Entretenimento',
    inLanguage: 'pt-BR',
  };
}

export function schemaMovie({ name, description, image, url, director, actors = [], genre = [], datePublished, ratingValue, ratingCount }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name,
    description,
    url: `${SITE_URL}${url}`,
    image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
    director: director ? { '@type': 'Person', name: director } : undefined,
    actor: actors.map(a => ({ '@type': 'Person', name: a })),
    genre,
    datePublished,
    inLanguage: 'pt-BR',
    ...(ratingValue && {
      aggregateRating: { '@type': 'AggregateRating', ratingValue, ratingCount: ratingCount || 1, bestRating: 10, worstRating: 0 },
    }),
  };
}

export function schemaEvent({ name, description, image, url, startDate, endDate, location, organizer, offers = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    url: `${SITE_URL}${url}`,
    image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
    startDate,
    endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: { '@type': 'Place', name: location?.name, address: { '@type': 'PostalAddress', addressLocality: location?.city, addressCountry: 'BR' } },
    organizer: organizer ? { '@type': 'Organization', name: organizer } : undefined,
    offers: offers.map(o => ({ '@type': 'Offer', name: o.name, price: o.price, priceCurrency: 'BRL', url: o.url, availability: 'https://schema.org/InStock' })),
    inLanguage: 'pt-BR',
  };
}

export function schemaFAQ(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

// ─── TVSeries ────────────────────────────────────────────────────────────────
export function schemaTVSeries({ name, description, image, url, creators = [], actors = [], genre = [], datePublished, numberOfSeasons, numberOfEpisodes, ratingValue, ratingCount }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TVSeries',
    name,
    description,
    url: `${SITE_URL}${url}`,
    image: image?.startsWith('http') ? image : `${SITE_URL}${image}`,
    creator: creators.map(c => ({ '@type': 'Person', name: c })),
    actor: actors.map(a => ({ '@type': 'Person', name: a })),
    genre,
    datePublished,
    numberOfSeasons,
    numberOfEpisodes,
    inLanguage: 'pt-BR',
    ...(ratingValue && {
      aggregateRating: { '@type': 'AggregateRating', ratingValue, ratingCount: ratingCount || 1, bestRating: 10, worstRating: 0 },
    }),
  };
}

// ─── Book (livros e mangás) ──────────────────────────────────────────────────
export function schemaBook({ name, description, image, url, author, publisher, datePublished, isbn, genre = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name,
    description,
    url: `${SITE_URL}${url}`,
    image: image?.startsWith('http') ? image : `${SITE_URL}${image}`,
    author: author ? { '@type': 'Person', name: author } : undefined,
    publisher: publisher ? { '@type': 'Organization', name: publisher } : undefined,
    datePublished,
    isbn,
    genre,
    inLanguage: 'pt-BR',
  };
}

// ─── Product (HQs, mangás, produtos esportivos com link de afiliado) ─────────
export function schemaProduct({ name, description, image, url, brand, sku, offers }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url: `${SITE_URL}${url}`,
    image: image?.startsWith('http') ? image : `${SITE_URL}${image}`,
    brand: brand ? { '@type': 'Brand', name: brand } : undefined,
    sku,
    ...(offers && {
      offers: {
        '@type': 'Offer',
        url:           offers.url,
        priceCurrency: offers.priceCurrency || 'BRL',
        price:         offers.price,
        availability:  offers.availability || 'https://schema.org/InStock',
        seller: offers.seller ? { '@type': 'Organization', name: offers.seller } : undefined,
      },
    }),
  };
}
