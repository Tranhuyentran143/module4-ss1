// Cho một chuỗi s chỉ chứa các ký tự '(', ')', '{', '}', '[', ']', viết một hàm xác định xem chuỗi đầu vào s có hợp lệ hay không.
// Một chuỗi đầu vào s được coi là hợp lệ nếu:
// Dấu mở ngoặc phải được đóng phải cùng một loại ngoặc.
// Dấu mở ngoặc phải được đóng theo thứ tự chính xác.
// Mỗi dấu đóng ngoặc phải có một dấu mở ngoặc tương ứng cùng loại.
// Ví dụ 1:
// Input: s = "()"
// Output: true
// Giải thích: Chuỗi này hợp lệ vì cặp ngoặc đơn giản được đóng đúng thứ tự.

const checkChar = (str: string): boolean => {
    const res: string[] = [];
    const character: { [key: string]: string } = {')': '(', '}': '{', ']': '['};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char in character) {
            const topElement: string = res.pop() || '#';
            if (character[char] !== topElement) {
                return false;
            }
        } else {
            res.push(char);
        }
    }
    return res.length === 0;
}

console.log(checkChar("()"));        
console.log(checkChar("()[]{}"));
console.log(checkChar("(]"));
