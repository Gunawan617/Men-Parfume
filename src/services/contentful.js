import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

// Fallback mock products untuk development/demo
const mockProducts = [
  {
    sys: { id: '1' },
    fields: {
      name: 'Urban Legend',
      description: 'Wewangian dengan aroma fresh citrus yang energik. Sempurna untuk pria urban yang dinamis dan percaya diri.',
      price: 'Rp 450.000',
    },
  },
  {
    sys: { id: '2' },
    fields: {
      name: 'Midnight Elegance',
      description: 'Aroma woody yang sophisticated dan mysterious. Menciptakan kesan maskulin dan elegan di setiap kesempatan.',
      price: 'Rp 550.000',
    },
  },
  {
    sys: { id: '3' },
    fields: {
      name: 'Spice Revolution',
      description: 'Kombinasi sempurna antara spicy dan oriental. Wewangian yang berani untuk pria yang tidak takut bersedih.',
      price: 'Rp 500.000',
    },
  },
  {
    sys: { id: '4' },
    fields: {
      name: 'Modern Gentleman',
      description: 'Aroma floral yang elang dengan sentuhan lavender premium. Cocok untuk formal dan casual occasion.',
      price: 'Rp 475.000',
    },
  },
  {
    sys: { id: '5' },
    fields: {
      name: 'Desert Storm',
      description: 'Aroma oud dan amber yang kaya. Menciptakan kesan power dan dominance untuk pria sejati.',
      price: 'Rp 600.000',
    },
  },
  {
    sys: { id: '6' },
    fields: {
      name: 'Ocean Blue',
      description: 'Aroma aquatic yang fresh dan bersih. Sempurna untuk climate tropis seperti Indonesia.',
      price: 'Rp 425.000',
    },
  },
];

export const getProducts = async () => {
  try {
    const response = await client.getEntries({
      content_type: process.env.REACT_APP_CONTENTFUL_CONTENT_TYPE || 'perfumes',
      limit: 100,
    });
    console.log('✅ Products loaded from Contentful:', response.items.length);
    return response.items;
  } catch (error) {
    console.warn('⚠️ Could not fetch from Contentful, using demo products instead');
    console.warn('Error details:', error.message);
    console.info('📝 To set up Contentful:');
    console.info('1. Go to https://www.contentful.com/');
    console.info('2. Create a Content Type named "perfumes"');
    console.info('3. Add fields: name, description, price, image (Asset)');
    console.info('4. Create content entries with perfume data');
    // Return fallback mock products
    return mockProducts;
  }
};

export default client;
