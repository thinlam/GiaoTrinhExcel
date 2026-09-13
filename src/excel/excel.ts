/* global Excel, Office, console */

// =========================================================
// EXCEL API HELPERS
// Toàn bộ logic tương tác trực tiếp với Excel (Excel.run)
// được tách riêng tại đây, không trộn vào lesson data hay UI.
// =========================================================

/**
 * Kiểm tra Add-in có đang chạy trong Excel hay không.
 * Dùng trước khi gọi bất kỳ Excel.run(...) nào để tránh lỗi
 * khi host không phải Excel.
 */
export function isExcelHost(): boolean {
  return (
    typeof Office !== "undefined" &&
    Office.context?.host === Office.HostType.Excel
  );
}

/**
 * Lấy địa chỉ (address) của vùng đang được chọn trong Worksheet hiện tại.
 * Trả về null nếu có lỗi hoặc không đọc được.
 */
export async function getSelectedRangeAddress(): Promise<string | null> {
  if (!isExcelHost()) {
    return null;
  }

  try {
    let address: string | null = null;

    await Excel.run(async (context: Excel.RequestContext) => {
      const range = context.workbook.getSelectedRange();

      range.load("address");

      await context.sync();

      address = range.address;
    });

    return address;
  } catch (error) {
    console.error("❌ getSelectedRangeAddress error:", error);
    return null;
  }
}

/**
 * Tô màu nền cho vùng đang được chọn.
 * Dùng cho các tool minh hoạ nhanh (ví dụ: highlight vùng vừa học).
 */
export async function highlightSelectedRange(
  color: string
): Promise<boolean> {
  if (!isExcelHost()) {
    return false;
  }

  try {
    await Excel.run(async (context: Excel.RequestContext) => {
      const range = context.workbook.getSelectedRange();

      range.format.fill.color = color;

      await context.sync();
    });

    return true;
  } catch (error) {
    console.error("❌ highlightSelectedRange error:", error);
    return false;
  }
}

/**
 * Xoá định dạng (không xoá nội dung) của vùng đang được chọn.
 */
export async function clearSelectedRangeFormat(): Promise<boolean> {
  if (!isExcelHost()) {
    return false;
  }

  try {
    await Excel.run(async (context: Excel.RequestContext) => {
      const range = context.workbook.getSelectedRange();

      range.format.fill.clear();

      await context.sync();
    });

    return true;
  } catch (error) {
    console.error("❌ clearSelectedRangeFormat error:", error);
    return false;
  }
}

/**
 * Chèn nhanh một Worksheet mới, tương đương thao tác Shift + F11.
 */
export async function insertNewWorksheet(
  name?: string
): Promise<boolean> {
  if (!isExcelHost()) {
    return false;
  }

  try {
    await Excel.run(async (context: Excel.RequestContext) => {
      const sheets = context.workbook.worksheets;

      const sheet = name
        ? sheets.add(name)
        : sheets.add();

      sheet.activate();

      await context.sync();
    });

    return true;
  } catch (error) {
    console.error("❌ insertNewWorksheet error:", error);
    return false;
  }
}