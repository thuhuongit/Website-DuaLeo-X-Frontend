const Media = () => {
    return (
        <section class="py-12 text-center">
          <div class="relative flex items-center justify-center my-10">
              <div class="absolute w-full h-0.5 bg-orange-500"></div>
              <h2 class="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-bold text-lg relative z-10">
                 TIN CẬP NHẬT 
              </h2>
            </div>
          <p class="italic mt-2 text-gray-600">Tin tức vệ sinh an toàn thực phẩm cập nhật mới nhất mỗi ngày cho bạn</p>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
   
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
         <img src="/media/media6.png" alt="trái cây" class="w-full h-52 object-cover" />
         <div class="p-4">
            <h3 class="font-semibold text-gray-800">Tự chế món thạch sữa chua thanh long lung linh sắc màu</h3>
            <p class="text-sm text-gray-600 mt-2">Thạch sữa chua thanh long là món ăn tráng miệng tuyệt vời cho các mẹ... </p>
            <button class="mt-4 bg-green-600 hover:bg-green-600 text-white py-1 px-4 rounded-full text-sm">Chi tiết</button>
        </div>
      </div>

        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="/media/media7.png" alt="rau sạch" class="w-full h-52 object-cover" />
          <div class="p-4">
             <h3 class="font-semibold text-gray-800">Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản</h3>
             <p class="text-sm text-gray-600 mt-2">Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của nhiều gia đình...</p>
             <button class="mt-4 bg-green-600 hover:bg-green-600 text-white py-1 px-4 rounded-full text-sm">Chi tiết</button>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md overflow-hidden">
          <img src="/media/media8.png" alt="hoa quả Việt" class="w-full h-52 object-cover" />
          <div class="p-4">
              <h3 class="font-semibold text-gray-800">Vì sao hoa quả Việt thất thế trước “cơn lốc” hàng nhập ngoại?</h3>
              <p class="text-sm text-gray-600 mt-2">Rau củ quả Việt Nam đang dần khẳng định tên tuổi của mình trên thị trường quốc tế...</p>
              <button class="mt-4 bg-green-600 hover:bg-green-600 text-white py-1 px-4 rounded-full text-sm">Chi tiết</button>
         </div>
       </div>
     </div>
   </section>
    
    )
};

export default Media;