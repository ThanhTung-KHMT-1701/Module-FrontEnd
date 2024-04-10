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
        case "Hải Dương":
            poem =
                `Đất Hải Dương ôi đẹp biết bao,
                Sông Thái Bình uốn lượn quanh co.
                Cánh đồng lúa xanh ngát mênh mông,
                Bát ngát hương lúa chín vàng ươm.
                
                Cánh đồng lúa chín như biển vàng,
                Nón trắng lấp lánh giữa trời quang.
                Tiếng chim hót líu lo vang lừng,
                Bầu trời xanh biếc, mây trắng lững lờ.
                
                Chợ Cầu nổi tiếng khắp nơi,
                Bánh gai, bánh đậu, ôi chao!
                Nhớ thương quê mẹ biết bao,
                Mong ngày trở lại, ôi chao!
                
                Hải Dương quê hương đẹp biết bao,
                Con người thân thiện, mến thương.
                Mong sao quê hương luôn đổi mới,
                Phát triển giàu đẹp, muôn đời rạng ngời.`
            break;  
        case "Cao Bằng":
            poem = 
                `Cao Bằng ơi, mảnh đất địa đầu
                Non nước hữu tình, đẹp tựa tranh vẽ
                Núi cao hùng vĩ, mây trời lãng đãng
                Sông Quây hiền hòa, uốn lượn quanh co.
                
                Đồng bào Tày, Nùng, Dao, Mông
                Cùng nhau chung sống, mến thương đùm bọc
                Bản làng yên bình, tiếng khèn réo rắt
                Làn điệu then lấp, say đắm lòng người.
                
                Phố cổ Nguyên Bình, nét đẹp cổ kính
                Dấu ấn thời gian, nhuốm màu rêu phong
                Làng đá Khuổi Ky, ẩn mình trong núi
                Kiến trúc độc đáo, khiến lòng ngỡ ngàng.
                
                Thác Bản Giốc, dòng nước trắng xóa
                Tạo nên bức tranh, hùng vĩ tráng quan
                Ngũ Chỉ Sơn, sừng sững uy nghi
                Biểu tượng cho khí phách, của người Cao Bằng.
                
                Cao Bằng ơi, mãi mãi trong tim
                Mảnh đất địa đầu, nghĩa tình sâu nặng
                Con người chân chất, thật thà, mến khách
                Hẹn ngày trở lại, thăm Cao Bằng ơi!`
            break;
        case "Nghệ An":
            poem = 
                `Nghệ An đất mẹ hiền hòa,
                Nơi có dòng Lam hiền hòa chảy xuôi.
                Cánh đồng lúa xanh mượt mà,
                Bà con tảo tần sớm hôm vun trồng.
                
                Non xanh nước biếc mênh mông,
                Cửa Lò biển hát mênh mông sóng vỗ.
                Nhì Cầm đẹp tựa tranh thơ,
                Cửa Hiền thơ mộng, ơ hờ, vấn vương.
                
                Con người Nghệ An chan hòa,
                Cần cù, chịu khó, thiết tha, mặn nồng.
                Tình làng nghĩa xóm mênh mông,
                Lá rách đùm lá, tấc lòng cao xa.
                
                Nghệ An quê mẹ chan hòa,
                Dẫu đi xa vẫn thiết tha, vấn vít.
                Nhớ về quê mẹ, nhớ về,
                Nhớ cánh đồng lúa, nhớ bờ tre xanh.`
            break;
        case "Thanh Hóa":
            poem = 
                `Non xanh nước biếc hữu tình,
                Thanh Hóa quê hương đẹp xinh muôn đời.
                Sông Mã uốn lượn êm đềm,
                Cánh đồng lúa chín mênh mông, đẹp tuyệt.
                
                Bến En bến Đắng xa xôi,
                Lịch sử hào hùng vang dội non sông.
                Lam Kinh, Hàm Rồng di tích,
                Còn ghi dấu ấn chiến công hiển hách.
                
                Sầm Sơn biển hát mênh mông,
                Cát trắng trải dài, sóng vỗ rì rào.
                Du khách muôn nơi tìm đến,
                Tận hưởng cảnh đẹp, phiêu bồng, êm ái.
                
                Ẩm thực Thanh Hóa phong phú,
                Bánh gai Tứ Triện, nem chua, bánh khoái.
                Gỏi cá nhệch, chả tôm, canh đắng,
                Món ngon nức tiếng, say đắm lòng người.
                
                Người Thanh Hóa hiền hòa, chân chất,
                Cần cù lao động, chan hòa tình nghĩa.
                Đến đây du khách mến thương,
                Nhớ mãi quê hương, vấn vương không nguôi.
                
                Thanh Hóa mảnh đất địa linh,
                Nhân kiệt anh tài, rạng danh non nước.
                Tiếng thơm muôn thuở còn vang,
                Dáng hình quê mẹ, vấn vương trong lòng.`
            break;
        default:
            poem = "Not found"
    }

    return poem
}