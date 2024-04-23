/* DeSo - 01 | Bai 01 */
{
    document.writeln(`<hr>`)
    document.writeln(`Đề số 01 | Bài số 0`)
    document.writeln(`<hr>`)

    const LuongCoSo = 1.860e6
    const HeSoLuong = [6.20, 6.56, 6.92, 7.28, 7.64, 8.00]

    let data = "ThanhTung"

    while (isNaN(Number(data)))
    {
        data = prompt(`Nhập vào bậc lương của viên chức`)
    }

    data = Number(data)

    document.writeln(`<li>Bậc lương đã nhập là: ${data}</li>`)
    document.writeln(`<li>Lương phải trả cho viên chức đó là: ${HeSoLuong[data - 1] * LuongCoSo}</li>`)
}

function isInteger (N)
{
    return (Math.floor(N) === Math.ceil(N));
}

function isSquare (N)
{
    return isInteger(Math.sqrt(N))
}

/* DeSo - 01 | Bai 02 */
{
    document.writeln(`<hr>`)
    document.writeln(`Đề số 01 | Bài số 02`)
    document.writeln(`<hr>`)

    let ListNumber = [2, 8, 1, 4, 100, 67, 78, 99, 120, 81, 178, 121, 57, 7, 19, 23, 47]
    
    let task_01, task_02, task_03
    let count

    /* task_01: Tính tổng các số chia hết cho 7 trong mảng và phải là số dương (> 0) */
    task_01 = 0
    for (let x of ListNumber)
    {
        if (x % 7 === 0 && x > 0)
        {
            task_01 += x;
        }
    }
    document.writeln(`<li>•	Tính tổng các số chia hết cho 7 trong mảng và phải là số dương (> 0) là: ${task_01}</li>`)

    /* task_02: Tính trung bình cộng các số chia hết cho 2 */
    task_02 = 0
    count = 0
    for (let x of ListNumber)
    {
        if (x % 2 === 0)
        {
            ++count
            task_02 += x
        }
    }
    task_02 = task_02 / count

    document.writeln(`<hr>`)
    document.writeln(`<li>Trung bình cộng của các số chia hết cho 2 là: ${task_02}</li>`)

    /* task_03: Đếm số các số chính phương trong mảng */
    task_03 = 0
    for (let x of ListNumber)
    {
        if (isSquare(x))
        {
            ++task_03
        }
    }

    document.writeln(`<hr>`)
    document.writeln(`<li>Số lượng các số chính phương có trong mảng là: ${task_03}</li>`)
}


/* DeSo - 02 | Bai 01*/
{
    document.writeln(`<hr>`)
    document.writeln(`Đề số 02 | Bài số 01`)
    document.writeln(`<hr>`)

    let BMI = 65 / Math.pow(170 * 1e-2, 2)

    if (BMI < 16)
    {
        document.writeln(`Bạn thuộc diện: Gầy độ III`)
    }
    else if (BMI < 17)
    {
        document.writeln(`Bạn thuộc diện: Gầy độ II`)
    }
    else if (BMI < 18.5)
    {
        document.writeln(`Bạn thuộc diện: Gầy độ I`)
    }
    else if (BMI < 23)
    {
        document.writeln(`Bạn thuộc diện: Bình thường`)
    }
    else if (BMI < 25)
    {
        document.writeln(`Bạn thuộc diện: Thừa cân`)
    }
    else if (BMI < 30)
    {
        document.writeln(`Bạn thuộc diện: Béo phì độ I`)
    }
    else if (BMI < 35)
    {
        document.writeln(`Bạn thuộc diện: Béo phì độ II`)
    }
    else 
    {
        document.writeln(`Bạn thuộc diện: Béo phì độ III`)
    }
}

/* DeSo - 02 | Bai 02 */
{
    document.writeln(`<hr>`)
    document.writeln(`Đề số 02 | Bài số 02`)
    document.writeln(`<hr>`)

    let ListNumber = [1, -10, 2, 199, 7, 74, 88, 49, 110, 18, 21, 81, 57, 7, 98, 23, 47, -5, 8]
    
    let task_01, task_02, task_03
    let count

    /* task_01: Tổng các số chia hết cho 5 trong mảng và phải là số âm(< 0) */
    task_01 = 0
    for (let x of ListNumber)
    {
        if (x % 5 === 0 && x < 0)
        {
            task_01 += x;
        }
    }
    document.writeln(`<li>Tổng các số chia hết cho 5 trong mảng và phải là số âm(< 0) là: ${task_01}</li>`)

    /* task_02: Tính trung bình cộng các số lẻ */
    task_02 = 0
    count = 0
    for (let x of ListNumber)
    {
        if (x % 2 !== 0)
        {
            ++count
            task_02 += x
        }
    }
    task_02 = task_02 / count

    document.writeln(`<hr>`)
    document.writeln(`<li>Trung bình cộng của các số lẻ trong mảng là: ${task_02}</li>`)

    /* task_03: Đếm số các số chính phương trong mảng */
    task_03 = 0
    for (let x of ListNumber)
    {
        if (isSquare(x))
        {
            ++task_03
        }
    }

    document.writeln(`<hr>`)
    document.writeln(`<li>Số lượng các số chính phương có trong mảng là: ${task_03}</li>`)
}

/* DeSo - 03 | Bai 01*/
{
    document.writeln(`<hr>`)
    document.writeln(`Đề số 03 | Bài số 01`)
    document.writeln(`<hr>`)

    const LuongCoBan = 4.2e6
    const SoGioLamViec = 20
    const Luong1H = 18e3
    const KieuNgay = 0 // ngay thuong

    let HeSo
    switch(KieuNgay)
    {
        case 0: // ngay binh thuong
            {
                HeSo = 1.5
                break
            }
        case 1: // Thu 7 va Chu Nhat
            {
                HeSo = 2.0
                break
            }
        case 2:
            {
                HeSo = 3.0
                break                
            }
    }

    document.writeln(`<li>Tiền lương của công nhân là: ${LuongCoBan + HeSo * Luong1H * SoGioLamViec} (VNĐ)</li>`)
}

/* DeSo - 03 | Bai 02*/
{
    document.writeln(`<hr>`)
    document.writeln(`Đề số 03 | Bài số 02`)
    document.writeln(`<hr>`)

    let ListNumber = [1, -20, 2, 199, 7, 74, 88, 130, 16, 25, 15, 21, 57, 7, 99, 22, 45, -15, 7]
    
    let task_01, task_02, task_03
    let count

    /* task_01: Tổng các số chia hết cho 3 trong mảng và phải là số dương(> 0) */
    task_01 = 0
    for (let x of ListNumber)
    {
        if (x % 3 === 0 && x > 0)
        {   
            task_01 += x;
        }
    }
    document.writeln(`<li>Tổng các số chia hết cho 3 trong mảng và phải là số dương(> 0) là: ${task_01}</li>`)

    /* task_02: Tính trung bình cộng của các số chia hết cho 4 trong mảng */
    task_02 = 0
    count = 0
    for (let x of ListNumber)
    {
        if (x % 4 === 0)
        {
            ++count
            task_02 += x
        }
    }
    task_02 = task_02 / count

    document.writeln(`<hr>`)
    document.writeln(`<li>Trung bình cộng của các số chia hết cho 4 trong mảng là: ${task_02}</li>`)

    /* task_03: Đếm số các số chính phương trong mảng */
    task_03 = 0
    for (let x of ListNumber)
    {
        if (isSquare(x))
        {
            ++task_03
        }
    }

    document.writeln(`<hr>`)
    document.writeln(`<li>Số lượng các số chính phương có trong mảng là: ${task_03}</li>`)
}