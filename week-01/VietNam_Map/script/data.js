function GET_DATA (hometown)
{
    let poem

    switch (hometown)
    {
        case "Hà Nội":
            poem = 
                `Hà Nội mùa thu, trời trong xanh
                Lá vàng rải rác, gió lung linh
                Hồ Gươm lấp lánh, bóng mây in
                Phố cổ rêu phong, nét thanh bình
                
                Hương cốm thoang thoảng, nồng nàn bay
                Hoa sữa nồng nàn, quyện vào mây
                Tiếng rao hàng rong, vang xa xôi
                Kẻ chợ tấp nập, tiếng cười tươi
                
                Bên Hồ Tây lãng mạn, thơ mộng
                Dạo bước đường Phan Đình Phùng, rợp bóng cây
                Ngắm nhìn Tháp Rùa, cổ kính, uy nghi
                Cảm nhận Hà Nội, đẹp mê ly
                
                Mùa thu Hà Nội, đẹp say lòng
                Kẻ si tình say đắm, ngỡ ngàng
                Nhớ về Hà Nội, nhớ bâng khuâng
                Ký ức đẹp đẽ, mãi vấn vương.`
            break;
        case "Huế":
            poem =
                `Nhớ Huế thương về dòng Hương Giang
                Nước xanh biếc chảy dọc con đàng
                Cầu Trường Tiền cong cong soi bóng
                Nét đẹp cố đô vấn vương lòng.
                
                Nghe tiếng rao buồn ai oán
                Câu hò mái nhì ngân nga
                Dạ thầm thương nhớ Huế xa
                Cung đình xưa giờ phôi pha.
                
                Kinh Kỳ mộng mơ đẹp lộng lẫy
                Tím ngát hoàng hôn phủ mây bay
                Dấu chân lịch sử hằn sâu
                Bao thăng trầm vẫn ngự đây.
                
                Cố đô Huế đẹp say đắm
                Dáng người con gái dịu dàng
                Nón bài thơ trắng tinh khôi
                Hồn Huế mãi trong tim tôi.`
            break;
        case "Hải Phòng":
            poem = 
                `Thành phố hoa phượng đỏ rực trời
                Cảng biển sầm uất, tiếng còi vang
                Sông Cấm cuộn chảy, nước mênh mông
                Bến Do, Bến Bính, chở thương hàng.
                
                Đường phố rợp bóng cây xanh tươi
                Hàng Bè, Cầu Đất, tiếng rao vui
                Chợ Đổ sầm uất, bán mua tấp nập
                Hương nếp, hương hoa, quyện vào nhau.
                
                Hải Phòng mến thương, đẹp biết bao
                Dân ta chan hòa, nghĩa tình sâu
                Cát Bà, Đồ Sơn, cảnh đẹp muôn màu
                Hòn Dáu, Bạch Long, du khách say mê.
                
                Hải Phòng kiên cường, chống giặc thù
                Lịch sử oai hùng, vang dội muôn thuở
                Dân ta đoàn kết, một lòng giữ nước
                Hải Phòng mãi mãi, rạng ngời vinh quang.`
            break;
        default:
            poem = "Not found"
    }

    return poem
}