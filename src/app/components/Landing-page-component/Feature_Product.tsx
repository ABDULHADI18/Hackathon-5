import Image from "next/image";
import { Product } from "../../types";
import ProductCard from "@/app/components/Landing-page-component/product-card";

const Feature_Products: React.FC = () => {
  const products: Product[] = [
    {
      image: "/feature1.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature2.png",
      name: "Web Design",
      department: "Marketing Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature3.png",
      name: "Logo Design",
      department: "Branding Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature4.png",
      name: "UI/UX Design",
      department: "Product Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature5.png",
      name: "Branding Design",
      department: "Creative Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature6.png",
      name: "App Design",
      department: "Tech Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature7.png",
      name: "Product Strategy",
      department: "Sales Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/feature8.png",
      name: "Marketing Strategy",
      department: "Sales Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center mt-28 mb-7 overflow-x-hidden">
      <div>
        <h3 className="text-[#737373] text-[20px]">Featured Products</h3>
        <h2 className="text-[#252B42] text-[24px] font-bold mt-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-[#737373] text-[14px] mt-2">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Product Cart Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-6 w-full">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Feature_Products;