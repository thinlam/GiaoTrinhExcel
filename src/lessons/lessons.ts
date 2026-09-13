import type { Lesson } from "../types/lesson.types";

import {
  shortcut,
  shortcutGroup
} from "../ui/shortcut-ui";

// =========================================================
// HELPER: HIỂN THỊ TÊN LỆNH SONG NGỮ (English (Tiếng Việt))
// =========================================================

const excelCommand = (
  english: string,
  vietnamese: string
): string => `
  <span class="excel-command">
    <strong>${english}</strong>
    <span class="excel-command-vi">(${vietnamese})</span>
  </span>
`;

type ExcelPathItem = readonly [
  english: string,
  vietnamese: string
];

const excelPath = (
  ...items: ExcelPathItem[]
): string => `
  <div class="excel-path">
    <div class="lesson-block-title">Vị trí trên Excel</div>
    <div class="excel-path-items">
      ${items
        .map(([english, vietnamese]) =>
          excelCommand(english, vietnamese)
        )
        .join('<span class="excel-path-arrow"> → </span>')}
    </div>
  </div>
`;

const lessonSteps = (
  steps: string[]
): string => `
  <div class="lesson-steps">
    <div class="lesson-block-title">Cách thực hiện</div>
    <ol>
      ${steps
        .map(
          (step, index) => `
            <li>
              <strong>Bước ${index + 1}:</strong>
              ${step}
            </li>
          `
        )
        .join("")}
    </ol>
  </div>
`;

interface ExcelGuideOptions {
  purpose?: string;
  path?: ExcelPathItem[];
  steps?: string[];
  result?: string;
  example?: string;
  tip?: string;
  warning?: string;
  note?: string;
}

const excelGuide = ({
  purpose,
  path,
  steps,
  result,
  example,
  tip,
  warning,
  note
}: ExcelGuideOptions): string => `
  ${
    purpose
      ? `
        <div class="lesson-purpose">
          <div class="lesson-block-title">Dùng để làm gì?</div>
          <p>${purpose}</p>
        </div>
      `
      : ""
  }

  ${
    path?.length
      ? excelPath(...path)
      : ""
  }

  ${
    steps?.length
      ? lessonSteps(steps)
      : ""
  }

  ${
    result
      ? `
        <div class="lesson-result">
          <div class="lesson-block-title">Kết quả</div>
          <p>${result}</p>
        </div>
      `
      : ""
  }

  ${
    example
      ? `
        <div class="lesson-example">
          <div class="lesson-block-title">Ví dụ</div>
          <div>${example}</div>
        </div>
      `
      : ""
  }

  ${
    note
      ? `
        <div class="note">
          <strong>Ghi chú:</strong>
          ${note}
        </div>
      `
      : ""
  }

  ${
    tip
      ? `
        <div class="note">
          <strong>Mẹo:</strong>
          ${tip}
        </div>
      `
      : ""
  }

  ${
    warning
      ? `
        <div class="warning">
          <strong>Lưu ý:</strong>
          ${warning}
        </div>
      `
      : ""
  }
`;

const terminologyTable = (
  rows: Array<[string, string, string]>
): string => `
  <div class="table-scroll">
    <table>
      <thead>
        <tr>
          <th>Thuật ngữ</th>
          <th>Tiếng Việt</th>
          <th>Ý nghĩa</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            ([english, vietnamese, meaning]) => `
              <tr>
                <td><strong>${english}</strong></td>
                <td>${vietnamese}</td>
                <td>${meaning}</td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  </div>
`;

const formulaBox = (
  formula: string,
  resultLabel?: string
): string => `
  <div class="formula-box">
    <code>${formula}</code>
    ${
      resultLabel
        ? `<span class="formula-result">→ ${resultLabel}</span>`
        : ""
    }
  </div>
`;

// =========================================================
// LESSON DATA
// =========================================================

export const lessons: Lesson[] = [

  // =========================================================
  // PHẦN 1 — LÀM QUEN VỚI MICROSOFT EXCEL
  // =========================================================

  {
    id: "lam-quen-excel",
    part: 1,
    title: "Làm quen với Microsoft Excel",
    level: "CƠ BẢN",
    description: "Excel là gì, Workbook và Worksheet, các thành phần giao diện, thao tác với ô và lưu file Excel.",
    keywords: [
      "excel",
      "workbook",
      "worksheet",
      "cell",
      "giao dien excel",
      "ribbon",
      "name box",
      "formula bar",
      "sheet tabs",
      "status bar",
      "luu file",
      "ctrl s",
      "ctrl n",
      "ctrl o",
      "f2"
    ],
    sections: [

      {
        title: "1.1. Excel là gì?",
        content: `
          <p>
            <strong>Microsoft Excel</strong> là phần mềm bảng tính thuộc bộ
            Microsoft Office/Microsoft 365, dùng để:
          </p>
          <ul>
            <li>Nhập và lưu trữ dữ liệu.</li>
            <li>Thực hiện phép tính.</li>
            <li>Quản lý danh sách.</li>
            <li>Thống kê, phân tích dữ liệu.</li>
            <li>Lập báo cáo và tạo biểu đồ.</li>
            <li>Quản lý thu chi, theo dõi công việc.</li>
            <li>Quản lý nhân sự, quản lý kho.</li>
            <li>Phân tích doanh thu và xây dựng Dashboard.</li>
          </ul>
          <div class="note">
            Excel không đơn thuần là một phần mềm dùng để "kẻ bảng". Khi sử dụng
            thành thạo, Excel có thể trở thành một công cụ xử lý và phân tích
            dữ liệu rất mạnh.
          </div>
          <div class="lesson-example">
            <div class="lesson-block-title">Ví dụ thực tế</div>
            <div class="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Mã SP</th>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>SP01</td><td>Bàn phím</td><td>2</td><td>350.000</td><td>700.000</td></tr>
                  <tr><td>SP02</td><td>Chuột</td><td>3</td><td>200.000</td><td>600.000</td></tr>
                  <tr><td>SP03</td><td>Tai nghe</td><td>1</td><td>750.000</td><td>750.000</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Thay vì tính <strong>Thành tiền</strong> bằng máy tính, Excel cho phép
              nhập công thức nhân <strong>Số lượng × Đơn giá</strong> rồi sao chép
              công thức xuống các hàng còn lại.
            </p>
          </div>
        `
      },

      {
        title: "1.2. Workbook và Worksheet",
        content: `
          <p><strong>Workbook (Sổ làm việc)</strong> là một file Excel. Ví dụ:</p>
          <ul>
            <li><code>BaoCaoDoanhThu.xlsx</code></li>
            <li><code>DanhSachNhanVien.xlsx</code></li>
            <li><code>QuanLyKho.xlsx</code></li>
            <li><code>BangLuong.xlsx</code></li>
          </ul>
          <p><strong>Worksheet (Trang tính)</strong> là từng trang tính nằm bên trong Workbook. Ví dụ:</p>
          <pre class="tree-block">BaoCaoDoanhThu.xlsx
│
├── Sheet DoanhThu
├── Sheet ChiPhi
├── Sheet SanPham
└── Sheet TongHop</pre>
          <p><strong>Cell (Ô tính)</strong> là một ô trong Excel. Ví dụ: <code>A1</code>, <code>B2</code>, <code>C10</code>, <code>D15</code>.</p>
          <p>Tên ô được xác định bằng: <strong>Tên cột + Số hàng</strong>. Ví dụ ô <code>B5</code> nghĩa là cột B, hàng 5.</p>
        `
      },

      {
        title: "1.3. Các thành phần giao diện Excel",
        content: `
          <p>Khi mở Excel sẽ thấy các thành phần chính sau:</p>
          ${terminologyTable([
            ["Quick Access Toolbar", "Thanh công cụ truy cập nhanh", "Thường chứa Save, Undo, Redo."],
            ["Ribbon", "Dải lệnh", "Chứa các tab Home, Insert, Page Layout, Formulas, Data, Review, View, Help."],
            ["Name Box", "Hộp tên ô", "Hiển thị địa chỉ ô hiện tại, ví dụ C10."],
            ["Formula Bar", "Thanh công thức", "Hiển thị nội dung hoặc công thức của ô đang chọn."],
            ["Worksheet", "Vùng bảng tính", "Khu vực làm việc chính, nơi nhập và xử lý dữ liệu."],
            ["Sheet Tabs", "Thẻ Sheet", "Dùng để chuyển đổi giữa các Sheet trong Workbook."],
            ["Status Bar", "Thanh trạng thái", "Hiển thị nhanh Average, Count, Sum của vùng đang chọn, và Zoom."]
          ])}
        `
      },

      {
        title: "1.4. Thao tác với ô",
        content: `
          <p><strong>Chọn một ô:</strong> Click chuột trái vào ô. Ví dụ: <code>A1</code>.</p>
          <p><strong>Chọn nhiều ô:</strong> Kéo chuột qua vùng cần chọn. Ví dụ: <code>A1:D10</code> nghĩa là vùng từ A1 đến D10.</p>
          <p><strong>Chọn toàn bộ cột:</strong> Click vào tên cột (A, B, C...).</p>
          <p><strong>Chọn toàn bộ hàng:</strong> Click vào số hàng.</p>
          <p><strong>Chọn toàn bộ bảng tính:</strong> dùng phím tắt bên dưới.</p>
          ${shortcut("Ctrl + A", "Chọn toàn bộ vùng dữ liệu / bảng tính")}
        `
      },

      {
        title: "1.5. Nhập và chỉnh sửa dữ liệu",
        content: `
          ${excelGuide({
            purpose: "Nhập dữ liệu mới vào một ô trong Worksheet.",
            steps: [
              "Chọn ô cần nhập.",
              "Nhập nội dung, ví dụ: Nguyễn Văn A.",
              "Nhấn Enter để xuống ô bên dưới, hoặc Tab để sang ô bên phải."
            ],
            result: "Nội dung được ghi vào ô đang chọn, con trỏ chuyển sang ô kế tiếp."
          })}
          <p><strong>Chỉnh sửa nội dung ô:</strong> Double Click vào ô, hoặc dùng phím tắt bên dưới.</p>
          ${shortcut("F2", "Sửa nội dung ô", { tip: "F2 cho phép chỉnh sửa trực tiếp nội dung hoặc công thức của ô mà không cần Double Click." })}
        `
      },

      {
        title: "1.6. Lưu file Excel",
        content: `
          ${excelGuide({
            purpose: "Lưu toàn bộ dữ liệu và định dạng hiện tại vào file để tránh mất dữ liệu.",
            steps: [
              "Nhấn Ctrl + S.",
              "Nếu là lần lưu đầu tiên, chọn vị trí lưu.",
              "Đặt tên file rõ ràng, ví dụ: BaoCaoDoanhThu.xlsx.",
              "Bấm Save."
            ],
            result: "Workbook được lưu vào vị trí đã chọn."
          })}
          ${shortcut("Ctrl + S", "Lưu Workbook")}
          <p><strong>Một số định dạng file Excel thường gặp:</strong></p>
          ${terminologyTable([
            [".xlsx", "File Excel thông thường", "Định dạng mặc định cho Workbook hiện đại."],
            [".xls", "Excel phiên bản cũ", "Dùng cho Excel 97-2003."],
            [".xlsm", "Excel có Macro", "Workbook có chứa mã VBA/Macro."],
            [".csv", "Dữ liệu dạng văn bản phân cách", "Chỉ lưu dữ liệu thô, không giữ định dạng."],
            [".pdf", "Xuất để đọc/in", "Dùng khi cần chia sẻ bản chỉ đọc."]
          ])}
        `
      },

      {
        title: "1.7. Phím tắt Excel cơ bản",
        content: `
          <p>Đây là nhóm phím tắt nền tảng, sử dụng hằng ngày khi làm việc với Excel:</p>
          ${shortcutGroup(
            "Phím tắt cơ bản",
            [
              shortcut("Ctrl + N", "Tạo Workbook mới"),
              shortcut("Ctrl + O", "Mở file"),
              shortcut("Ctrl + S", "Lưu tệp"),
              shortcut("Ctrl + P", "In tài liệu"),
              shortcut("Ctrl + C", "Sao chép (Copy)"),
              shortcut("Ctrl + X", "Cắt (Cut)"),
              shortcut("Ctrl + V", "Dán (Paste)"),
              shortcut("Ctrl + Z", "Hoàn tác (Undo)"),
              shortcut("Ctrl + Y", "Làm lại (Redo)"),
              shortcut("Ctrl + A", "Chọn tất cả"),
              shortcut("Ctrl + F", "Tìm kiếm (Find)"),
              shortcut("Ctrl + H", "Tìm và thay thế (Find & Replace)"),
              shortcut("F2", "Sửa nội dung ô"),
              shortcut("Delete", "Xoá nội dung ô"),
              shortcut("Ctrl + W", "Đóng Workbook")
            ].join("")
          )}
        `
      },

      {
        title: "Bài thực hành Phần 1",
        content: `
          <div class="lesson-purpose">
            <div class="lesson-block-title">Bài 1</div>
            <p>Tạo file <strong>DanhSachSinhVien.xlsx</strong> và nhập bảng dữ liệu sau:</p>
          </div>
          <div class="table-scroll">
            <table>
              <thead>
                <tr><th>STT</th><th>Họ tên</th><th>Lớp</th><th>Điểm</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Nguyễn Văn An</td><td>12A1</td><td>8</td></tr>
                <tr><td>2</td><td>Trần Minh Bình</td><td>12A2</td><td>7</td></tr>
                <tr><td>3</td><td>Lê Hoàng Nam</td><td>12A1</td><td>9</td></tr>
                <tr><td>4</td><td>Phạm Thu Hà</td><td>12A3</td><td>8.5</td></tr>
              </tbody>
            </table>
          </div>
          <div class="lesson-steps">
            <div class="lesson-block-title">Yêu cầu</div>
            <ol>
              <li>Lưu file.</li>
              <li>Đổi tên Sheet thành <strong>SinhVien</strong>.</li>
              <li>Thử Copy một dòng.</li>
              <li>Thử Cut một dòng.</li>
              <li>Undo bằng <strong>Ctrl + Z</strong>.</li>
              <li>Tìm "Lê Hoàng Nam" bằng <strong>Ctrl + F</strong>.</li>
            </ol>
          </div>
        `
      }

    ]
  },

  // =========================================================
  // PHẦN 2 — NHẬP LIỆU VÀ ĐỊNH DẠNG
  // =========================================================

  {
    id: "nhap-lieu-dinh-dang",
    part: 2,
    title: "Nhập liệu và định dạng",
    level: "CƠ BẢN",
    description: "Các kiểu dữ liệu trong Excel, định dạng Font, căn chỉnh, Wrap Text, Merge & Center, Number Format và Format Cells.",
    keywords: [
      "kieu du lieu",
      "text",
      "number",
      "date",
      "percentage",
      "font",
      "bold",
      "italic",
      "underline",
      "wrap text",
      "merge center",
      "number format",
      "format cells",
      "ctrl 1",
      "ctrl b",
      "autofit"
    ],
    sections: [

      {
        title: "2.1. Các kiểu dữ liệu trong Excel",
        content: `
          <p>Excel thường làm việc với các kiểu dữ liệu: <strong>Text, Number, Date, Time, Percentage, Currency, Formula</strong>.</p>
          ${terminologyTable([
            ["Nguyễn Văn A", "Text", "Dữ liệu dạng chữ."],
            ["1500000", "Number", "Dữ liệu dạng số."],
            ["10/08/2026", "Date", "Dữ liệu ngày tháng."],
            ["08:30", "Time", "Dữ liệu giờ."],
            ["15%", "Percentage", "Dữ liệu phần trăm."],
            ["=A1+B1", "Formula", "Công thức tính toán."]
          ])}
        `
      },

      {
        title: "2.2. Định dạng Font",
        content: `
          ${excelPath(["Home", "Trang đầu"], ["Font", "Phông chữ"])}
          <p>Có thể chỉnh: Font, Font Size, Bold, Italic, Underline, Font Color, Fill Color.</p>
          ${shortcutGroup(
            "Phím tắt định dạng chữ",
            [
              shortcut("Ctrl + B", "In đậm (Bold)"),
              shortcut("Ctrl + I", "In nghiêng (Italic)"),
              shortcut("Ctrl + U", "Gạch chân (Underline)")
            ].join("")
          )}
        `
      },

      {
        title: "2.3. Căn chỉnh dữ liệu",
        content: `
          <p>Các kiểu căn chỉnh phổ biến: <strong>Align Left, Center, Align Right, Top Align, Middle Align, Bottom Align</strong>.</p>
          <div class="note">
            Tiêu đề bảng thường được định dạng <strong>Bold + Center + Middle Align</strong> để dễ đọc và chuyên nghiệp.
          </div>
        `
      },

      {
        title: "2.4. Wrap Text",
        content: `
          ${excelGuide({
            purpose: "Khi nội dung trong ô quá dài so với chiều rộng cột, Wrap Text giúp nội dung tự xuống dòng thay vì bị cắt hoặc tràn sang ô bên cạnh.",
            example: `<code>Công ty Cổ phần Công nghệ ABC Việt Nam</code>`,
            path: [["Home", "Trang đầu"], ["Alignment", "Căn chỉnh"], ["Wrap Text", "Ngắt dòng tự động"]]
          })}
        `
      },

      {
        title: "2.5. Merge & Center",
        content: `
          ${excelGuide({
            purpose: "Gộp nhiều ô liền kề thành một ô lớn và căn giữa nội dung, thường dùng cho tiêu đề bảng.",
            example: `Vùng <code>A1:E1</code> → Merge &amp; Center → hiển thị tiêu đề <strong>BẢNG THỐNG KÊ DOANH THU</strong>`,
            path: [["Home", "Trang đầu"], ["Merge & Center", "Trộn & Căn giữa"]],
            warning: "Không nên lạm dụng Merge trong vùng dữ liệu cần Sort, Filter hoặc PivotTable, vì Merge có thể phá vỡ cấu trúc bảng."
          })}
        `
      },

      {
        title: "2.6. Number Format",
        content: `
          <p>Đây là kỹ năng Excel rất quan trọng. Một số kiểu Number Format phổ biến:</p>
          <p><code>General, Number, Currency, Accounting, Short Date, Long Date, Time, Percentage, Text</code></p>
          <div class="lesson-example">
            <div class="lesson-block-title">Ví dụ</div>
            <p>Giá trị gốc: <code>1500000</code></p>
            <p>Format Number: <code>1,500,000</code></p>
            <p>Format Currency: <code>1,500,000 ₫</code></p>
          </div>
        `
      },

      {
        title: "2.7. Format Cells",
        content: `
          ${excelGuide({
            purpose: "Mở cửa sổ định dạng đầy đủ nhất của Excel, cho phép chỉnh Number, Alignment, Font, Border, Fill, Protection trong cùng một nơi.",
            steps: [
              "Chọn ô hoặc vùng ô cần định dạng.",
              "Nhấn Ctrl + 1.",
              "Chọn tab tương ứng: Number / Alignment / Font / Border / Fill / Protection.",
              "Bấm OK để áp dụng."
            ],
            result: "Vùng chọn được định dạng theo thiết lập vừa chọn."
          })}
          ${shortcut("Ctrl + 1", "Mở Format Cells")}
        `
      },

      {
        title: "2.8. Điều chỉnh kích thước cột",
        content: `
          <p>Có thể kéo cạnh cột để chỉnh độ rộng, hoặc Double Click vào cạnh tên cột để <strong>AutoFit Column Width</strong> — Excel tự động căn chiều rộng vừa với nội dung dài nhất trong cột.</p>
        `
      },

      {
        title: "Bài thực hành Phần 2",
        content: `
          <div class="lesson-purpose">
            <div class="lesson-block-title">Bảng quản lý sản phẩm</div>
          </div>
          <div class="table-scroll">
            <table>
              <thead>
                <tr><th>STT</th><th>Mã SP</th><th>Tên sản phẩm</th><th>Số lượng</th><th>Đơn giá</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>SP001</td><td>Bàn phím</td><td>10</td><td>350000</td></tr>
                <tr><td>2</td><td>SP002</td><td>Chuột</td><td>15</td><td>200000</td></tr>
                <tr><td>3</td><td>SP003</td><td>Tai nghe</td><td>7</td><td>750000</td></tr>
                <tr><td>4</td><td>SP004</td><td>Màn hình</td><td>5</td><td>3500000</td></tr>
              </tbody>
            </table>
          </div>
          <div class="lesson-steps">
            <div class="lesson-block-title">Yêu cầu</div>
            <ol>
              <li>Tiêu đề Merge & Center.</li>
              <li>Header Bold.</li>
              <li>Căn giữa STT, Mã SP.</li>
              <li>Đơn giá format có dấu phân cách hàng nghìn.</li>
              <li>Tô màu header.</li>
              <li>Kẻ Border toàn bảng.</li>
              <li>AutoFit tất cả cột.</li>
            </ol>
          </div>
        `
      }

    ]
  },

  // =========================================================
  // PHẦN 3 — QUẢN LÝ WORKSHEET
  // =========================================================

  {
    id: "quan-ly-worksheet",
    part: 3,
    title: "Quản lý Worksheet",
    level: "CƠ BẢN",
    description: "Thêm, đổi tên, xoá, sao chép, di chuyển Sheet và sử dụng Freeze Panes để cố định tiêu đề khi cuộn dữ liệu dài.",
    keywords: [
      "worksheet",
      "sheet",
      "shift f11",
      "doi ten sheet",
      "xoa sheet",
      "copy sheet",
      "freeze panes",
      "freeze top row",
      "freeze first column"
    ],
    sections: [

      {
        title: "3.1. Thêm Sheet",
        content: `
          ${excelGuide({
            purpose: "Thêm một Worksheet mới vào Workbook đang mở.",
            steps: [
              "Nhấn Shift + F11, hoặc bấm dấu + bên cạnh Sheet Tabs."
            ],
            result: "Một Sheet trống mới xuất hiện ngay trước Sheet đang active."
          })}
          ${shortcut("Shift + F11", "Chèn Sheet mới")}
        `
      },

      {
        title: "3.2. Đổi tên Sheet",
        content: `
          ${excelGuide({
            purpose: "Đặt tên Sheet dễ hiểu thay vì Sheet1, Sheet2 mặc định.",
            steps: [
              "Double Click vào tên Sheet ở Sheet Tabs.",
              "Nhập tên mới, ví dụ: DoanhThu.",
              "Nhấn Enter."
            ],
            result: "Tên Sheet được cập nhật trên Sheet Tabs."
          })}
        `
      },

      {
        title: "3.3. Xoá, Copy và di chuyển Sheet",
        content: `
          <p><strong>Xoá Sheet:</strong> Click chuột phải vào tên Sheet → Delete.</p>
          <p><strong>Copy Sheet:</strong> Click chuột phải vào tên Sheet → Move or Copy → tick Create a copy.</p>
          <p><strong>Di chuyển Sheet:</strong> Giữ chuột và kéo Sheet sang vị trí mới trên Sheet Tabs.</p>
        `
      },

      {
        title: "3.4. Freeze Panes",
        content: `
          ${excelGuide({
            purpose: "Khi bảng dữ liệu có hàng nghìn dòng, tiêu đề cột có thể biến mất khi cuộn xuống. Freeze Panes giữ cố định hàng/cột tiêu đề trong khi cuộn phần còn lại.",
            path: [["View", "Xem"], ["Freeze Panes", "Cố định khung"]],
            example: `
              <p>Bảng: <code>STT | Mã NV | Họ tên | Phòng ban | Lương</code> với 5.000 nhân viên.</p>
              <p>Dùng <strong>Freeze Top Row</strong> để khi kéo xuống vẫn luôn nhìn thấy hàng tiêu đề.</p>
            `
          })}
          <p>Excel cung cấp 3 tuỳ chọn: <strong>Freeze Panes, Freeze Top Row, Freeze First Column</strong>.</p>
        `
      }

    ]
  },

  // =========================================================
  // PHẦN 4 — CÔNG THỨC EXCEL
  // =========================================================

  {
    id: "cong-thuc-excel",
    part: 4,
    title: "Công thức Excel",
    level: "TRUNG CẤP",
    description: "Cấu trúc công thức, các toán tử, AutoFill, tham chiếu tương đối/tuyệt đối/hỗn hợp và các lỗi Excel thường gặp.",
    keywords: [
      "cong thuc",
      "formula",
      "toan tu",
      "autofill",
      "tham chieu tuong doi",
      "tham chieu tuyet doi",
      "tham chieu hon hop",
      "f4",
      "loi excel",
      "div/0",
      "value",
      "name",
      "ref",
      "n/a"
    ],
    sections: [

      {
        title: "4.1. Cấu trúc công thức",
        content: `
          <p>Mọi công thức trong Excel đều bắt đầu bằng dấu bằng <code>=</code>.</p>
          ${formulaBox("=10+20", "30")}
        `
      },

      {
        title: "4.2. Các toán tử",
        content: `
          ${terminologyTable([
            ["+", "Cộng", "Phép cộng hai giá trị."],
            ["-", "Trừ", "Phép trừ hai giá trị."],
            ["*", "Nhân", "Phép nhân hai giá trị."],
            ["/", "Chia", "Phép chia hai giá trị."],
            ["^", "Lũy thừa", "Nâng lên luỹ thừa."],
            ["%", "Phần trăm", "Chuyển giá trị sang dạng phần trăm."],
            ["=", "Bằng", "So sánh bằng."],
            [">", "Lớn hơn", "So sánh lớn hơn."],
            ["<", "Nhỏ hơn", "So sánh nhỏ hơn."],
            [">=", "Lớn hơn hoặc bằng", "So sánh lớn hơn hoặc bằng."],
            ["<=", "Nhỏ hơn hoặc bằng", "So sánh nhỏ hơn hoặc bằng."],
            ["<>", "Khác", "So sánh khác nhau."]
          ])}
        `
      },

      {
        title: "4.3. Ví dụ tính Thành tiền",
        content: `
          <div class="table-scroll">
            <table>
              <thead><tr><th>Sản phẩm</th><th>SL</th><th>Đơn giá</th><th>Thành tiền</th></tr></thead>
              <tbody><tr><td>Chuột</td><td>2</td><td>200000</td><td>?</td></tr></tbody>
            </table>
          </div>
          <p>Công thức tại ô Thành tiền (ví dụ D2):</p>
          ${formulaBox("=B2*C2", "400000")}
        `
      },

      {
        title: "4.4. AutoFill",
        content: `
          ${excelGuide({
            purpose: "Tự động sao chép công thức hoặc dữ liệu theo mẫu xuống các ô liền kề, tránh phải nhập lại công thức thủ công cho từng dòng.",
            steps: [
              "Nhập công thức ở ô đầu tiên (ví dụ D2).",
              "Đưa chuột vào góc phải dưới của ô cho tới khi xuất hiện dấu cộng (Fill Handle).",
              "Kéo xuống các ô còn lại."
            ],
            result: "Excel tự động sao chép công thức xuống, tự điều chỉnh tham chiếu theo từng dòng.",
            tip: "Có thể Double Click vào Fill Handle để Excel tự điền hết theo chiều dài của cột dữ liệu liền kề."
          })}
        `
      },

      {
        title: "4.5. Tham chiếu tương đối (Relative Reference)",
        content: `
          <p>Công thức nhập ở dòng 2:</p>
          ${formulaBox("=B2*C2")}
          <p>Khi copy công thức xuống dòng 3, Excel tự dịch chuyển tham chiếu theo dòng:</p>
          ${formulaBox("=B3*C3")}
          <div class="note">
            Đây gọi là <strong>Relative Reference (tham chiếu tương đối)</strong> — mặc định của Excel khi không dùng dấu $.
          </div>
        `
      },

      {
        title: "4.6. Tham chiếu tuyệt đối (Absolute Reference)",
        content: `
          <p>Ví dụ thuế VAT được đặt cố định tại ô <code>F1 = 10%</code>. Nếu viết công thức chưa khoá:</p>
          ${formulaBox("=H1*F1")}
          <div class="warning">
            Nếu sao chép công thức này sang dòng khác, tham chiếu <code>F1</code> sẽ bị dịch chuyển theo và trỏ sai ô thuế VAT.
          </div>
          <p>Khoá tuyệt đối ô chứa thuế VAT bằng dấu $:</p>
          ${formulaBox("=H1*$F$1")}
          <p><code>$F$1</code> sẽ không thay đổi khi sao chép công thức sang bất kỳ ô nào khác.</p>
          ${shortcut("F4", "Khoá/mở khoá tham chiếu tuyệt đối", { tip: "Chọn địa chỉ ô trong công thức rồi nhấn F4 để chuyển nhanh giữa các kiểu tham chiếu." })}
        `
      },

      {
        title: "4.7. Tham chiếu hỗn hợp (Mixed Reference)",
        content: `
          <p>Có hai dạng tham chiếu hỗn hợp: <code>$A1</code> và <code>A$1</code>.</p>
          ${terminologyTable([
            ["$A1", "Khoá cột A", "Cột A không đổi khi copy ngang, hàng vẫn thay đổi khi copy dọc."],
            ["A$1", "Khoá hàng 1", "Hàng 1 không đổi khi copy dọc, cột vẫn thay đổi khi copy ngang."]
          ])}
        `
      },

      {
        title: "4.8. Các lỗi Excel thường gặp",
        content: `
          ${terminologyTable([
            ["#DIV/0!", "Chia cho 0", "Công thức chia cho một ô có giá trị 0 hoặc ô trống."],
            ["#VALUE!", "Sai kiểu dữ liệu", "Công thức nhận vào kiểu dữ liệu không phù hợp (ví dụ cộng chữ với số)."],
            ["#NAME?", "Sai tên hàm", "Gõ sai tên hàm hoặc thiếu dấu ngoặc kép cho văn bản."],
            ["#REF!", "Tham chiếu bị lỗi", "Ô đang được tham chiếu đã bị xoá."],
            ["#N/A", "Không tìm thấy dữ liệu", "Hàm tìm kiếm (VLOOKUP, MATCH...) không tìm thấy giá trị khớp."],
            ["#NUM!", "Giá trị số không hợp lệ", "Công thức cho ra kết quả số vượt phạm vi cho phép."],
            ["#####", "Cột quá nhỏ / lỗi định dạng", "Độ rộng cột không đủ để hiển thị giá trị, cần mở rộng cột."]
          ])}
        `
      }

    ]
  },

  // =========================================================
  // PHẦN 5 — CÁC HÀM CƠ BẢN
  // =========================================================

  {
    id: "cac-ham-co-ban",
    part: 5,
    title: "Các hàm cơ bản",
    level: "TRUNG CẤP",
    description: "SUM, AVERAGE, MAX, MIN, COUNT, COUNTA và ROUND — nhóm hàm nền tảng dùng thường xuyên nhất trong Excel.",
    keywords: [
      "sum",
      "average",
      "max",
      "min",
      "count",
      "counta",
      "round",
      "autosum",
      "alt =",
      "ham co ban"
    ],
    sections: [

      {
        title: "5.1. SUM — Tính tổng",
        content: `
          ${excelGuide({
            purpose: "Tính tổng giá trị của một vùng số liệu.",
            example: "Vùng B2:B10 gồm 9 ô, ví dụ 10, 20, 30 → Kết quả: 60."
          })}
          ${formulaBox("=SUM(B2:B10)")}
          <p><strong>AutoSum</strong> — chèn nhanh công thức SUM:</p>
          ${shortcut("Alt + =", "AutoSum — chèn nhanh công thức SUM")}
        `
      },

      {
        title: "5.2. AVERAGE — Tính trung bình",
        content: `
          ${excelGuide({
            purpose: "Tính giá trị trung bình cộng của một vùng số liệu.",
            example: "Vùng C2:C10, ví dụ 8, 7, 9 → Trung bình: 8."
          })}
          ${formulaBox("=AVERAGE(C2:C10)")}
        `
      },

      {
        title: "5.3. MAX — Tìm giá trị lớn nhất",
        content: `
          <p>Trả về giá trị lớn nhất trong một vùng dữ liệu.</p>
          ${formulaBox("=MAX(B2:B10)")}
        `
      },

      {
        title: "5.4. MIN — Tìm giá trị nhỏ nhất",
        content: `
          <p>Trả về giá trị nhỏ nhất trong một vùng dữ liệu.</p>
          ${formulaBox("=MIN(B2:B10)")}
        `
      },

      {
        title: "5.5. COUNT — Đếm ô chứa số",
        content: `
          ${excelGuide({
            purpose: "Đếm số lượng ô chứa dữ liệu dạng số trong một vùng, bỏ qua ô chữ và ô trống.",
            example: "COUNT chỉ đếm các ô chứa SỐ, bỏ qua ô tiêu đề dạng chữ (ví dụ 'STT'). Kết quả: 9 ô số."
          })}
          ${formulaBox("=COUNT(A2:A10)")}
        `
      },

      {
        title: "5.6. COUNTA — Đếm ô không rỗng",
        content: `
          ${excelGuide({
            purpose: "Đếm số lượng ô không rỗng trong một vùng, bao gồm cả ô chứa chữ.",
            example: "COUNTA đếm mọi ô KHÔNG rỗng, kể cả chữ — nên tính luôn ô tiêu đề 'STT'. Kết quả: 10 ô."
          })}
          ${formulaBox("=COUNTA(A1:A10)")}
        `
      },

      {
        title: "5.7. ROUND — Làm tròn số",
        content: `
          <p>Làm tròn một giá trị số đến số chữ số thập phân chỉ định.</p>
          ${formulaBox("=ROUND(10.4567, 2)", "10.46")}
        `
      },

      {
        title: "Bài thực hành Phần 5",
        content: `
          <div class="lesson-purpose">
            <div class="lesson-block-title">Bảng điểm học sinh</div>
          </div>
          <div class="table-scroll">
            <table>
              <thead><tr><th>Họ tên</th><th>Toán</th><th>Văn</th><th>Anh</th><th>Trung bình</th></tr></thead>
              <tbody>
                <tr><td>An</td><td>8</td><td>7</td><td>9</td><td></td></tr>
                <tr><td>Bình</td><td>6</td><td>8</td><td>7</td><td></td></tr>
                <tr><td>Hà</td><td>9</td><td>9</td><td>8</td><td></td></tr>
                <tr><td>Nam</td><td>5</td><td>7</td><td>6</td><td></td></tr>
              </tbody>
            </table>
          </div>
          <div class="lesson-steps">
            <div class="lesson-block-title">Yêu cầu</div>
            <ol>
              <li>Tính điểm trung bình từng học sinh bằng AVERAGE.</li>
              <li>Tìm điểm Toán cao nhất bằng MAX.</li>
              <li>Tìm điểm Văn thấp nhất bằng MIN.</li>
              <li>Tính trung bình môn Anh của cả lớp.</li>
              <li>Đếm số học sinh bằng COUNTA.</li>
            </ol>
          </div>
        `
      }

    ]
  }

];