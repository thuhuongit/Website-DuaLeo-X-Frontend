
const HeaderMiddle = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-xl w-full mx-auto px-6 py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-55 h-15" />
      </div>

      {/* Thông tin tiện ích */}
      <div className="flex gap-8 text-sm text-gray-800">
        <div className="flex items-center gap-2">
          <i class="fa-solid fa-truck-fast"></i> <div>Miễn phí vận chuyển<br />Bán kính 100 km</div>
        </div>
        <div className="flex items-center gap-2">
          <i class="fa-solid fa-envelope"></i> <div>Hỗ trợ 24/7<br />Hotline: 19001009</div>
        </div>
        <div className="flex items-center gap-2">
          <i class="fa-solid fa-clock"></i> <div>Giờ làm việc<br />T2 - T7 Giờ hành chính</div>
        </div>
      </div>

      {/* Giỏ hàng */}
      <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
        <i class="fa-solid fa-cart-shopping"></i> Giỏ hàng (0)
      </button>
    </div>
  );
};

export default HeaderMiddle;
