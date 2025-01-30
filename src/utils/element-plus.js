export function processTableRowMerge(tableData, row, rowIndex, fieldName) {
  const curVal = row[fieldName];
  const preRow = tableData[rowIndex - 1];
  const preVal = preRow ? preRow[fieldName] : null;
  // 当前单元格内容与上一行相同，因此当前单元格应该与上一行合并，不需要单独渲染
  if (curVal === preVal) {
    return { rowspan: 0, colspan: 0 };
  }

  // 当前单元格内容与上一行不同，从当前行开始合并，并统计后续需要合并的行数
  let rowSpan = 1;
  for (let i = rowIndex + 1; i !== tableData.length; i++) {
    const nextRow = tableData[i];
    const nextVal = nextRow[fieldName];
    if (nextVal === curVal) {
      rowSpan++;
    } else {
      break;
    }
  }
  return { rowspan: rowSpan, colspan: 1 };
}
