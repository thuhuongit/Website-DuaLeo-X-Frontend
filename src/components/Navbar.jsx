import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-lime-600 text-white">
        <div className="flex max-w-7xl mx-auto justify-between px-6 py-4">
      {/* Menu */}
      <ul className="flex gap-6 font-medium">
        <li><Link to="/" className="bg-orange-500 px-3 py-1 rounded">Trang chủ</Link></li>
        <li><Link to="/products" className="hover:underline">Sản phẩm</Link></li>
        <li><Link to="/news" className="hover:underline">Tin tức</Link></li>
        <li><Link to="/about" className="hover:underline">Giới thiệu</Link></li>
        <li><Link to="/contact" className="hover:underline">Liên hệ</Link></li>
        <li><Link to="/demo" className="hover:underline">Demo Tuỳ chọn</Link></li>
      </ul>

      {/* Tìm kiếm */}
      <div className="relative">
        <input
          type="text"
          placeholder="Tìm sản phẩm"
          className="rounded-full px-4 py-1 text-black"
        />
        <span className="absolute right-2 top-1.5"><i class="fa-solid fa-magnifying-glass"></i> </span>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
