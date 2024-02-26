// Cho một chuỗi s chỉ chứa các ký tự '(', ')', '{', '}', '[', ']', viết một hàm xác định xem chuỗi đầu vào s có hợp lệ hay không.
// Một chuỗi đầu vào s được coi là hợp lệ nếu:
// Dấu mở ngoặc phải được đóng phải cùng một loại ngoặc.
// Dấu mở ngoặc phải được đóng theo thứ tự chính xác.
// Mỗi dấu đóng ngoặc phải có một dấu mở ngoặc tương ứng cùng loại.
// Ví dụ 1:
// Input: s = "()"
// Output: true
// Giải thích: Chuỗi này hợp lệ vì cặp ngoặc đơn giản được đóng đúng thứ tự.
var checkChar = function (str) {
    var res = [];
    var character = { ')': '(', '}': '{', ']': '[' };
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char in character) {
            var topElement = res.pop() || '#';
            if (character[char] !== topElement) {
                return false;
            }
        }
        else {
            res.push(char);
        }
    }
    return res.length === 0;
};
// Ví dụ:
console.log(checkChar("()")); // Output: true
console.log(checkChar("()[]{}")); // Output: true
console.log(checkChar("(]")); // Output: false
