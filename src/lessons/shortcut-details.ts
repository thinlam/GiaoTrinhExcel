import type { ShortcutDetail } from "../types/shortcut.types";

export const SHORTCUT_DETAILS: Record<string, ShortcutDetail> = {

  "Ctrl + N": {

    description: "Tạo một Workbook (sổ làm việc) Excel mới.",

    steps: [

      "Mở Microsoft Excel.",

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím N."

    ],

    result: "Một Workbook Excel trống mới được tạo.",

    tip: "Có thể tạo nhiều Workbook cùng lúc, mỗi Workbook mở trong một cửa sổ Excel riêng."

  },

  "Ctrl + O": {

    description: "Mở một Workbook Excel đã có trên máy, OneDrive hoặc vị trí lưu khác.",

    steps: [

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím O.",

      "Chọn file .xlsx cần mở trong hộp thoại Open."

    ],

    result: "Workbook được mở để xem hoặc chỉnh sửa.",

    tip: "Excel ghi nhớ danh sách file mở gần đây (Recent) để mở nhanh hơn."

  },

  "Ctrl + S": {

    description: "Lưu Workbook hiện tại.",

    steps: [

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím S.",

      "Nếu là lần lưu đầu tiên, đặt tên file và chọn định dạng .xlsx."

    ],

    result: "Toàn bộ dữ liệu và định dạng hiện tại được ghi vào file.",

    tip: "Nên lưu thường xuyên, đặc biệt trước khi nhập công thức phức tạp hoặc đóng Excel."

  },

  "Ctrl + P": {

    description: "Mở màn hình in (Print) của Workbook hiện tại.",

    steps: [

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím P."

    ],

    result: "Màn hình xem trước khi in (Print Preview) hiện ra cùng các tuỳ chọn máy in, khổ giấy, vùng in.",

    tip: "Kiểm tra Print Area trước khi in để tránh in tràn nhiều trang không cần thiết."

  },

  "Ctrl + C": {

    description: "Sao chép (Copy) vùng ô hoặc dữ liệu đã chọn.",

    steps: [

      "Chọn ô hoặc vùng ô cần sao chép.",

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím C."

    ],

    result: "Dữ liệu được lưu vào Clipboard, dữ liệu gốc vẫn được giữ nguyên.",

    tip: "Sau khi Copy, dùng Ctrl + V để dán, hoặc dùng Paste Special để chỉ dán giá trị/định dạng."

  },

  "Ctrl + X": {

    description: "Cắt (Cut) vùng ô để di chuyển sang vị trí khác.",

    steps: [

      "Chọn ô hoặc vùng ô cần di chuyển.",

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím X."

    ],

    result: "Vùng ô được đánh dấu để di chuyển; dữ liệu sẽ bị xoá khỏi vị trí cũ khi dán vào vị trí mới.",

    tip: "Không giống Copy, Cut sẽ xoá dữ liệu gốc ngay khi thao tác Paste hoàn tất."

  },

  "Ctrl + V": {

    description: "Dán (Paste) dữ liệu đã Copy hoặc Cut vào vị trí hiện tại.",

    steps: [

      "Chọn ô muốn dán dữ liệu vào.",

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím V."

    ],

    result: "Dữ liệu từ Clipboard được dán vào vùng ô đang chọn.",

    tip: "Dùng Ctrl + Alt + V để mở Paste Special (chỉ dán giá trị, công thức, định dạng...)."

  },

  "Ctrl + Z": {

    description: "Hoàn tác (Undo) thao tác vừa thực hiện.",

    steps: [

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím Z."

    ],

    result: "Thao tác gần nhất bị huỷ, dữ liệu trở về trạng thái trước đó.",

    tip: "Có thể nhấn Ctrl + Z nhiều lần để hoàn tác nhiều bước liên tiếp."

  },

  "Ctrl + Y": {

    description: "Làm lại (Redo) thao tác vừa Undo.",

    steps: [

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím Y."

    ],

    result: "Thao tác vừa bị Undo được thực hiện lại.",

    tip: "Chỉ hoạt động ngay sau khi vừa Undo."

  },

  "Ctrl + A": {

    description: "Chọn toàn bộ vùng dữ liệu hoặc toàn bộ bảng tính.",

    steps: [

      "Đặt con trỏ vào vùng dữ liệu hoặc bảng tính.",

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím A."

    ],

    result: "Toàn bộ vùng dữ liệu liên tục (hoặc toàn bộ Worksheet nếu đang ở ô trống) được chọn.",

    tip: "Nếu con trỏ đang trong một bảng dữ liệu, Ctrl + A sẽ chọn đúng vùng bảng đó thay vì cả trang tính."

  },

  "Ctrl + F": {

    description: "Tìm kiếm (Find) nội dung trong Workbook.",

    steps: [

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím F.",

      "Nhập từ khoá cần tìm và nhấn Enter."

    ],

    result: "Excel di chuyển đến ô đầu tiên chứa nội dung khớp với từ khoá tìm kiếm.",

    tip: "Dùng Find All để xem toàn bộ danh sách ô chứa kết quả khớp."

  },

  "Ctrl + H": {

    description: "Tìm và thay thế (Find & Replace) nội dung trong Workbook.",

    steps: [

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím H.",

      "Nhập nội dung cần tìm và nội dung thay thế.",

      "Chọn Replace hoặc Replace All."

    ],

    result: "Nội dung khớp được thay thế bằng nội dung mới trong toàn bộ vùng chọn hoặc toàn bộ Sheet.",

    tip: "Kiểm tra kỹ trước khi bấm Replace All để tránh thay nhầm dữ liệu."

  },

  "F2": {

    description: "Chỉnh sửa trực tiếp nội dung hoặc công thức của ô đang chọn.",

    steps: [

      "Chọn ô cần chỉnh sửa.",

      "Nhấn phím F2."

    ],

    result: "Con trỏ nhập liệu xuất hiện ngay trong ô, cho phép sửa nội dung mà không cần Double Click.",

    tip: "F2 rất hữu ích khi cần kiểm tra hoặc sửa nhanh một công thức phức tạp."

  },

  "Delete": {

    description: "Xoá nội dung của ô hoặc vùng ô đang chọn.",

    steps: [

      "Chọn ô hoặc vùng ô cần xoá nội dung.",

      "Nhấn phím Delete."

    ],

    result: "Nội dung trong ô bị xoá, nhưng định dạng (màu nền, font, border...) vẫn được giữ nguyên.",

    tip: "Muốn xoá cả định dạng, dùng Home → Editing → Clear → Clear All."

  },

  "Ctrl + W": {

    description: "Đóng Workbook đang mở.",

    steps: [

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím W."

    ],

    result: "Workbook hiện tại được đóng lại (Excel sẽ nhắc lưu nếu có thay đổi chưa lưu).",

    tip: "Khác với đóng cả ứng dụng Excel, Ctrl + W chỉ đóng Workbook đang active."

  },

  "Ctrl + B": {

    description: "Bật hoặc tắt định dạng chữ đậm (Bold) cho vùng đang chọn.",

    steps: [

      "Chọn ô hoặc vùng dữ liệu cần in đậm.",

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím B."

    ],

    result: "Nội dung trong vùng chọn được in đậm (hoặc bỏ đậm nếu đang đậm sẵn).",

    tip: "Thường dùng để làm nổi bật hàng tiêu đề (Header) của bảng dữ liệu."

  },

  "Ctrl + I": {

    description: "Bật hoặc tắt định dạng chữ nghiêng (Italic) cho vùng đang chọn.",

    steps: [

      "Chọn ô hoặc vùng dữ liệu cần in nghiêng.",

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím I."

    ],

    result: "Nội dung trong vùng chọn được in nghiêng.",

    tip: "Thường dùng cho ghi chú, chú thích phụ bên dưới bảng dữ liệu chính."

  },

  "Ctrl + U": {

    description: "Bật hoặc tắt gạch chân (Underline) cho vùng đang chọn.",

    steps: [

      "Chọn ô hoặc vùng dữ liệu cần gạch chân.",

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím U."

    ],

    result: "Nội dung trong vùng chọn được gạch chân.",

    tip: "Có thể kết hợp Bold + Italic + Underline cùng lúc cho tiêu đề quan trọng."

  },

  "Ctrl + 1": {

    description: "Mở cửa sổ Format Cells để định dạng ô đang chọn.",

    steps: [

      "Chọn ô hoặc vùng ô cần định dạng.",

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím 1."

    ],

    result: "Cửa sổ Format Cells hiện ra với các tab Number, Alignment, Font, Border, Fill, Protection.",

    tip: "Đây là một trong những phím tắt quan trọng nhất khi định dạng dữ liệu trong Excel."

  },

  "Alt + =": {

    description: "Chèn nhanh công thức AutoSum (SUM) cho vùng dữ liệu đang chọn.",

    steps: [

      "Chọn ô trống ngay dưới hoặc bên phải vùng số liệu cần tính tổng.",

      "Nhấn giữ phím Alt.",

      "Nhấn phím =."

    ],

    result: "Excel tự động chèn công thức =SUM(...) với vùng dữ liệu được nhận diện sẵn.",

    tip: "Có thể bôi đen nhiều cột cùng lúc rồi nhấn Alt + = để AutoSum tất cả các cột trong một lần."

  },

  "F4": {

    description: "Chuyển đổi qua lại giữa các loại tham chiếu ô (tương đối, tuyệt đối, hỗn hợp) khi đang sửa công thức.",

    steps: [

      "Đặt con trỏ ngay trong hoặc ngay sau địa chỉ ô trong công thức (ví dụ H1).",

      "Nhấn phím F4.",

      "Nhấn F4 thêm để chuyển tiếp qua các kiểu tham chiếu: $H$1 → H$1 → $H1 → H1."

    ],

    result: "Địa chỉ ô trong công thức được thêm hoặc bớt dấu $ theo từng kiểu tham chiếu.",

    tip: "F4 giúp khoá tham chiếu tuyệt đối nhanh mà không cần gõ tay dấu $."

  },

  "Ctrl + T": {

    description: "Chuyển vùng dữ liệu đang chọn thành một Excel Table có cấu trúc.",

    steps: [

      "Chọn vùng dữ liệu (bao gồm hàng tiêu đề).",

      "Nhấn giữ phím Ctrl.",

      "Nhấn phím T.",

      "Xác nhận vùng dữ liệu và tuỳ chọn My table has headers, sau đó bấm OK."

    ],

    result: "Vùng dữ liệu trở thành Excel Table với định dạng xen kẽ, bộ lọc tự động trên header và khả năng tự mở rộng khi thêm dòng mới.",

    tip: "Table giúp công thức, Sort, Filter và biểu đồ luôn cập nhật đúng khi dữ liệu thay đổi."

  },

  "Ctrl + Shift + L": {

    description: "Bật hoặc tắt bộ lọc (Filter) cho vùng dữ liệu đang chọn.",

    steps: [

      "Đặt con trỏ vào vùng dữ liệu có hàng tiêu đề.",

      "Nhấn giữ Ctrl + Shift.",

      "Nhấn phím L."

    ],

    result: "Các nút lọc (Filter dropdown) xuất hiện trên từng cột của hàng tiêu đề.",

    tip: "Nhấn lại Ctrl + Shift + L để tắt bộ lọc và xoá các nút dropdown."

  },

  "Shift + F11": {

    description: "Chèn nhanh một Worksheet (Sheet) mới vào Workbook.",

    steps: [

      "Nhấn giữ phím Shift.",

      "Nhấn phím F11."

    ],

    result: "Một Sheet trống mới được thêm vào ngay trước Sheet đang active.",

    tip: "Có thể đổi tên Sheet mới bằng cách Double Click vào tên Sheet ở Sheet Tabs."

  }

};