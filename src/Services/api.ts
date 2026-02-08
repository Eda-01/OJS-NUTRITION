const BASE_URL = "https://fe1111.projects.academy.onlyjs.com/api/v1"; 

export const getFullImageUrl = (path: string) => {
  if (!path || typeof path !== 'string') {
    return "https://fe1111.projects.academy.onlyjs.com/assets/img/placeholder.png";
  }
  if (path.startsWith('http')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `https://fe1111.projects.academy.onlyjs.com${cleanPath}`;
};

const mapProduct = (item: any) => {
  if (!item) return null;

  const pi = item.price_info || {};
  const mainPrice = pi.total_price || item.total_price || 0;
  const discountedPrice = pi.discounted_price || item.discounted_price || null;
  const hasDiscount = Boolean(discountedPrice && discountedPrice < mainPrice);

  return {
    ...item,
    id: item.id || Math.random().toString(),
    name: item.name || "İsimsiz Ürün",
    image: getFullImageUrl(item.photo_src || item.image),
    price: mainPrice,    
    discountedPrice: discountedPrice, 
    hasDiscount: hasDiscount,
    shortDescription: item.short_explanation || item.short_description || "",
    rating: item.average_star || 5,
    comments: item.comment_count || 0
  };
};

export const api = {
  getBestSellers: async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/best-sellers`);
      const json = await response.json();
      const rawData = json.data?.results || json.data || json;
      const list = Array.isArray(rawData) ? rawData : [];
      return list.map(mapProduct).filter(Boolean);
    } catch (error) {
      return [];
    }
  },

  getAllProducts: async (page: number = 1, limit: number = 12) => {
    const offset = (page - 1) * limit; 
    
    try {
      const response = await fetch(`${BASE_URL}/products?limit=${limit}&offset=${offset}`);
      const json = await response.json();
      
      const results = json.data?.results || json.data || [];
      return {
        data: Array.isArray(results) ? results.map(mapProduct).filter(Boolean) : [],
        count: json.data?.count || 0
      };
    } catch (error) {
      return { data: [], count: 0 };
    }
  },

  getProductDetail: async (slug: string) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${slug}`);
      const json = await response.json();
      let rawData = json.data || json;
      if (Array.isArray(rawData)) rawData = rawData[0];
      return mapProduct(rawData);
    } catch (error) {
      return null;
    }
  }
};