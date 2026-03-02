const EXTERNAL_URL = "https://fe1111.projects.academy.onlyjs.com/api/v1";


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
  const imageSource = item.photo_src || (item.photos && item.photos[0]?.url) || item.image;
  const rawPrice = item.price || item.total_price || 0;
  const mainPrice = Number(rawPrice);
  const rawDiscount = item.discounted_price || item.price_info?.discounted_price || null;
  const discPrice = rawDiscount ? Number(rawDiscount) : null;

  return {
    ...item,
    id: item.id?.toString() || Math.random().toString(),
    name: item.name || "İsimsiz Ürün",
    image: getFullImageUrl(imageSource),
    price: mainPrice,
    discountedPrice: discPrice,
    hasDiscount: Boolean(discPrice && discPrice < mainPrice && discPrice > 0),
    rating: Number(item.rating || item.average_star) || 5,
    comments: Number(item.comment_count || 0)
  };
};

export const api = {
  // LOGIN/REGISTER: Backend olmadığı için simüle ediyoruz
  login: async (credentials: any) => {
    console.log("Login isteği (Simüle):", credentials);
    // Gerçek bir backend yoksa geçici olarak başarılı dönüyoruz
    const mockUser = { token: "fake-jwt-token", name: credentials.email.split('@')[0] };
    localStorage.setItem('token', mockUser.token);
    return mockUser;
  },

  register: async (userData: any) => {
    console.log("Register isteği (Simüle):", userData);
    return { success: true };
  },

  // ÜRÜNLER (Fetch ile gerçek API'dan çekiliyor)
  getAllProducts: async (page: number = 1, limit: number = 12) => {
    const offset = (page - 1) * limit;
    try {
      const response = await fetch(`${EXTERNAL_URL}/products?limit=${limit}&offset=${offset}`);
      const data = await response.json();
      const results = data.results || data.data?.results || data.data || data;
      
      return {
        data: Array.isArray(results) ? results.map(mapProduct).filter(Boolean) : [],
        count: data.count || 0
      };
    } catch (error) {
      console.error("Ürünler çekilemedi:", error);
      return { data: [], count: 0 };
    }
  },

  getBestSellers: async () => {
    try {
      const response = await fetch(`${EXTERNAL_URL}/products/best-sellers`);
      const data = await response.json();
      const list = data.results || data.data?.results || data;
      return Array.isArray(list) ? list.map(mapProduct).filter(Boolean) : [];
    } catch (error) {
      return [];
    }
  },

  getProductDetail: async (slug: string) => {
    try {
      const response = await fetch(`${EXTERNAL_URL}/products/${slug}`);
      const data = await response.json();
      const product = data.data || data;
      return mapProduct(Array.isArray(product) ? product[0] : product);
    } catch (error) {
      return null;
    }
  }
};