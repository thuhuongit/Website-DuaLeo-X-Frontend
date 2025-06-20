const Feekback = () => {
    return (
        <section class="py-12 text-center">
           <div class="relative flex items-center justify-center my-10">
              <div class="absolute w-full h-0.5 bg-orange-500"></div>
              <h2 class="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-bold text-lg relative z-10">
                 PHẢN HỒI CỦA KHÁCH
              </h2>
            </div>

           <p class="italic mt-2 text-gray-600">Phản hồi của những khách hàng đã và đang sử dụng sản phẩm trong suốt những năm qua</p>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    
        <div class="bg-white rounded-xl shadow-md p-6">
            <img src="/media/media3.png" alt="Ngọc Trinh" class="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
            <h3 class="font-semibold">Người mẫu - Ngọc Trinh</h3>
            <p class="text-sm text-gray-600 mt-2">Là một người khá kỹ tính, tôi luôn luôn lựa chọn những thực phẩm sạch nhất...</p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6">
            <img src="/media/media4.png" alt="Phương Trinh" class="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
            <h3 class="font-semibold">Diễn viên - Phương Trinh</h3>
            <p class="text-sm text-gray-600 mt-2">Là một người khá kỹ tính, tôi luôn luôn lựa chọn những thực phẩm sạch nhất...</p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6">
            <img src="/media/media5.png" alt="Hoàng Yến" class="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
            <h3 class="font-semibold">Ca sĩ - Hoàng Yến</h3>
            <p class="text-sm text-gray-600 mt-2">Là một người khá kỹ tính, tôi luôn luôn lựa chọn những thực phẩm sạch nhất...</p>
        </div>
     </div>
  </section>

 

  

    ); 

};
export default Feekback;