var charCount = function (str) {
    // 1. Tạo 1 đối tượng để hứng kết quả trả về
    var res = {};
    //2. Duyệt qua toàn bộ ký tự trong chuỗi
    for (var i = 0; i < str.length; i++) {
        //2.1 Nếu ký tự chưa tồn tại trong đối tượng trả về
        //    thiết lập 1 key mới trong đối tượng trả về
        //    set value = 1
        if (!res[str[i]]) {
            res[str[i]] = 1;
            // 2.2 nếu ký tự đã tồn tại
            //    set giá trị của key đó trong res tăng lên 1
        }
        else {
            res[str[i]] += 1;
        }
    }
    return res;
};
console.log(charCount("hello"));
