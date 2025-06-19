const Topbar = () => {
  return (
    <div className="bg-lime-600 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
        <div className="flex gap-4">
          <span> <i class="fa-solid fa-phone"></i> Hotline: <strong>0912117494</strong></span>
          <span> <i class="fa-solid fa-location-dot"></i> Địa chỉ: 268 Cầu Giấy, Quận Cầu Giấy, Hà Nội, Vietnam</span>
        </div>
        <div>
          <i class="fa-solid fa-user"></i> <a href="#" className="hover:underline">Đăng nhập hoặc Đăng ký</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
