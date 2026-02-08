import { createBrowserRouter, type LoaderFunctionArgs } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import { ProductPage } from "./Components/ProductDetail/ProductPage";
import { AboutPage } from "./Components/About/AboutPage";
import { api } from "./Services/api";
import { ContactPage } from "./Components/Contact/ContactPage";
import { FAQPage } from "./Components/FAQ/FAQPage";
import { CheckoutPage } from "./Components/Checkout/CheckoutPage"; 
import { OrderSuccessPage } from "./Components/Checkout/OrderSuccessPage"; 
import { ProfilePage } from "./Components/Profile/ProfilePage"; 
import { AuthPage } from "./Components/Navbar/AuthPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    hydrateFallbackElement: <div className="h-screen flex items-center justify-center font-black italic">YÜKLENİYOR...</div>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const bestSellers = await api.getBestSellers();
          return { bestSellers };
        },
      },
      {
        path: "urunler",
        element: <AllProducts />,
        loader: async () => {
          const productsData = await api.getAllProducts(1);
          return { products: productsData };
        },
      },
      {
        path: "urun/:slug",
        element: <ProductPage />,
        loader: async ({ params }: LoaderFunctionArgs) => {
          const product = await api.getProductDetail(params.slug as string);
          if (!product) throw new Response("Ürün Bulunamadı", { status: 404 });
          return { product };
        },
      },
      {
        path: "checkout",
        element: <CheckoutPage onSuccess={() => window.location.href = '/success'} />,
      },
      {
        path: "success",
        element: <OrderSuccessPage onReturnHome={() => window.location.href = '/'} />,
      },
      {
        path: "profile",
        element: <ProfilePage user={null} onLogout={() => window.location.href = '/'} />,
      },
      {
        path: "auth",
        element: <AuthPage />,
      },

      {
        path: "hakkimizda",
        element: <AboutPage />,
      },
      {
        path: "iletisim",
        element: <ContactPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      }
    ],
  },
]);