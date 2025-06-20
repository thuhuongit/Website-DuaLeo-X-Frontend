const Footer = () => {
  return (
    <footer className="bg-lime-600 text-white text-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Cột 1: Liên hệ */}
        <div>
          <h3 className="font-bold text-lg mb-3">LIÊN HỆ</h3>
          <p>Chúng tôi chuyên cung cấp các sản phẩm thực phẩm sạch an toàn cho sức khỏe con người</p>
          <p className="mt-2"><i class="fa-solid fa-location-dot"></i> 268 Cầu Giấy, Quận Cầu Giấy, Hà Nội, Vietnam</p>
          <p className="mt-1"><i class="fa-solid fa-phone"></i> 0912117494</p>
          <p><i class="fa-solid fa-clock"></i> Thứ 2 - Chủ nhật: 9:00 - 18:00</p>
          <p className="mt-1"><i class="fa-solid fa-envelope"></i> dualeo-x@gmail.com</p>
        </div>

        {/* Cột 2: Danh mục */}
        <div>
          <h3 className="font-bold text-lg mb-3">DANH MỤC</h3>
          <ul className="space-y-1">
            <li>● Trang chủ</li>
            <li>● Sản phẩm</li>
            <li>● Tin tức</li>
            <li>● Giới thiệu</li>
            <li>● Liên hệ</li>
            <li>● Demo Tuỳ chọn</li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ khách hàng */}
        <div>
          <h3 className="font-bold text-lg mb-3">HỖ TRỢ KHÁCH HÀNG</h3>
          <ul className="space-y-1">
            <li>● Trang chủ</li>
            <li>● Sản phẩm</li>
            <li>● Tin tức</li>
            <li>● Giới thiệu</li>
            <li>● Liên hệ</li>
            <li>● Demo Tuỳ chọn</li>
          </ul>
        </div>

        {/* Cột 4: Kết nối */}
        <div>
          <h3 className="font-bold text-lg mb-3">KẾT NỐI VỚI DUALEO</h3>
          <img
            src="/facebook-widget.png"
            alt="Facebook Haravan"
            className="w-full h-auto border border-white"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-lime-700 text-white">
        <div className="flex max-w-7xl mx-auto justify-between px-6 py-4">
        <p>© Bản quyền thuộc về <strong>DuaLeo-X</strong> | Powered by Haravan</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Tìm kiếm</a>
          <a href="#" className="hover:underline">Chính sách</a>
          <a href="#" className="hover:underline">Điều khoản</a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
