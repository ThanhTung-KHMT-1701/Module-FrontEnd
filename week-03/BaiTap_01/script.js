/*
    - TẠO TRANG WEB HỎI NGƯỜI DÙNG SỐ THIẾT BỊ ĐIỆN CÓ TRONG NHÀ CỦA CÁC EM (ĐÈN, QUẠT, ĐIỀU HOÀ, ....)
        => prompt hỏi số thiết bị
*/

let NumberDevice = "ThanhTung"

// if (new RegExp((/^[0-9]+$/)).test(NumberDevice) === false)
// {
//     NumberDevice = prompt("Bạn hãy nhập vào số thiết bị điện có trong gia đình")
// }

NumberDevice = 3

class ThietBi
{
    ten
    congsuat
    namsanxuat
    thoigianbaohanh
    url

    constructor (ten, congsuat, namsanxuat, thoigianbaohanh, url)
    {
        this.ten = ten;
        this.congsuat = congsuat;
        this.namsanxuat = namsanxuat
        this.thoigianbaohanh = thoigianbaohanh
        this.url = url
    }
}

function isOutOfDate (DateX)
{
    let CurrentTime = new Date().getTime()
    let DeltaTime = CurrentTime - DateX.getTime()

    if (DeltaTime > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isURL (text)
{
    try 
    {
        new URL(text)
    }
    catch
    {
        return false;
    }

    return true;
}

function PROMPT_REQUEST_TYPE (message, type)
{
    let data
    
    switch(type)
    {
        case "String":
            {
                data = prompt(message)

                break;
            }

        case "Number":
            {
                data = "ThanhTung"

                while (isNaN(Number(data)))
                {
                    data = prompt(message)
                }
    
                data = Number(data)
    
                break;
            }
        
        case "Date":
            {
                data = "ThanhTung"

                while (new Date(data).toString() === `Invalid Date`)
                {
                    data = prompt(message)
                }
    
                data = new Date(data)
    
                break;
            }

        case "URL":
            {
                data = "ThanhTung"

                while (isURL(data) !== true)
                {
                    data = prompt(message)
                }
    
                data = new URL(data)
    
                break;
            }

        default:
            console.error(`PROMPT_REQUEST_TYPE (message, type)`)
            console.error(`PROMPT_REQUEST_TYPE (${message}, ${type})`)                
    }

    return data
}

/*
    - NHẬP VÀO CHI TIẾT CÁC THIẾT BỊ BAO GỒM:
        + Tên thiết bị
        + Công suất
        + Năm sản suất
        + Thời gian bảo hành
        + Hình ảnh thiết bị
        => hỏi 5 thuộc tính prompt
        => tạo đối tượng và đẩy vào mảng thiết bị
*/

let List_ThietBi = [null]

for (let i = 1; i <= NumberDevice; ++i)
{
    let ThietBi_ten = PROMPT_REQUEST_TYPE("Bạn hãy nhập vào tên của thiết bị", "String")
    let ThietBi_congsuat = PROMPT_REQUEST_TYPE("Bạn hãy nhập vào công-suất của thiết bị (W)", "Number")
    let ThietBi_namsanxuat = PROMPT_REQUEST_TYPE("Bạn hãy nhập vào ngày-sản-xuất của thiết bị", "Date")
    let ThietBi_thoigianbaohanh = PROMPT_REQUEST_TYPE("Bạn hãy nhập vào thời-gian-bảo-hành của thiết bị (theo ngày)", "Number")
    let ThietBi_url = PROMPT_REQUEST_TYPE("Bạn hãy nhập vào đường-dẫn chứa hình ảnh của thiết bị", "URL")

    List_ThietBi.push(new ThietBi(ThietBi_ten, ThietBi_congsuat, ThietBi_namsanxuat, ThietBi_thoigianbaohanh, ThietBi_url))
}

/* 
    - TÍNH TỔNG LƯỢNG TIÊU THỤ CỦA TẤT CẢ CÁC THIẾT BỊ ĐIỆN
        => duyệt mảng thiết bị => cộng công suất
*/
let TotalConsumption = 0
{
    for (let i = 1; i <= NumberDevice; ++i)
    {
        TotalConsumption += List_ThietBi[i].congsuat
    }
}

alert(`Tổng công suất tiệu của tất cả các thiết bị trong gia đình bạn là ${TotalConsumption}`)

/*
    - IN RA TẤT CẢ THIẾT BỊ HẾT HẠN BẢO HÀNH
    * IN RA THIẾT BỊ KÈM HÌNH ẢNH
        => sử dụng thư viện Date của JS lấy năm hiện tại
        => tính năm sản xuất + thời hạn bảo hành
        so sánh với năm hiện tại
*/
document.writeln(`<p>Thiết bị hết hạn bảo hành</p>`)

for (let i = 1; i <= NumberDevice; ++i)
{
    let ExpirationDate = new Date(List_ThietBi[i].namsanxuat.getTime() + List_ThietBi[i].thoigianbaohanh * 24 * 60 * 60 * 1e3)
    
    /* DEBUG */
    {
        console.log(`Ngày hết hạn của ${List_ThietBi[i].ten} là ${ExpirationDate}`)
    }

    if (isOutOfDate(ExpirationDate))
    {
        document.writeln(`<img src="${List_ThietBi[i].url}" alt="${List_ThietBi[i].ten}">`)
        document.writeln(`<p class="title">Hình ảnh ${List_ThietBi[i].ten}</p>`)
    }
}

/* 
    - IN RA THIẾT BỊ CÔNG SUẤT LỚN NHẤT
    * IN RA KÈM HÌNH ẢNH
    => Math.max => tìm công suất lớn nhất
    => for mảng đối tượng để tìm công suất lớn nhất
*/
document.writeln(`<p>Thiết bị có công suất lớn nhất</p>`)

let position = 1;
let MAX = List_ThietBi[1].congsuat

for (let i = 2; i <= NumberDevice; ++i)
{
    if (List_ThietBi[i].congsuat >= MAX)
    {
        position = i;
        MAX = List_ThietBi[i].congsuat
    }
}

document.writeln(`<img src="${List_ThietBi[position].url}" alt="${List_ThietBi[position].ten}">`)
document.writeln(`<p class="title">Hình ảnh ${List_ThietBi[position].ten}</p>`)