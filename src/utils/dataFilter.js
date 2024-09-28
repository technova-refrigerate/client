function formatSet(min, max, metric, tips, label) {
  if ((min === null || min === undefined) && (max === null || max === undefined) && (metric === null || metric === undefined) && (tips === null || tips === undefined)) {
    return "";
  }

  let result = `${label}:\n`;

  if (min !== null && min !== undefined) {
    result += `  Best Before: ${min} ${metric}\n`;
  }

  if (max !== null && max !== undefined) {
    result += `  Eat by: ${max} ${metric}\n`;
  }

  if (tips !== null && tips !== undefined) {
    result += `  Tips: ${tips}\n`;
  }

  if (min === null && max === null && tips === null && metric) {
    result += `  ${metric}\n`;
  }

  result += "\n"; // Empty line for readability
  return result;
}

// Function to return formatted data
function getFormattedData(item) {
  let result = "";
  result += `Name: ${item.Name}\n`;
  if (item.Name_subtitle) result += `Descriptor: ${item.Name_subtitle}\n\n`;

  // Only include sections with relevant data

  result += formatSet(
    item.Pantry_Min,
    item.Pantry_Max,
    item.Pantry_Metric,
    item.Pantry_Tips,
    "Pantry"
  );

  result += formatSet(
    item.DOP_Pantry_Min,
    item.DOP_Pantry_Max,
    item.DOP_Pantry_Metric,
    item.DOP_Pantry_Tips,
    "Date of Purchaes (Pantry)"
  );

  result += formatSet(
    item.Pantry_After_Opening_Min,
    item.Pantry_After_Opening_Min,
    item.Pantry_After_Opening_Min,
    item.Pantry_After_Opening_Min,
    "Pantry After Opening"
  );

  result += formatSet(
    item.Refrigerate_Min,
    item.Refrigerate_Max,
    item.Refrigerate_Metric,
    item.Refrigerate_tips,
    "Refrigerator"
  );

  result += formatSet(
    item.DOP_Refrigerate_Min,
    item.DOP_Refrigerate_Max,
    item.DOP_Refrigerate_Metric,
    item.DOP_Refrigerate_tips,
    "Date of Purchase (Refrigerator)"
  );

  result += formatSet(
    item.Refrigerate_After_Opening_Min,
    item.Refrigerate_After_Opening_Max,
    item.Refrigerate_After_Opening_Metric,
    null,
    "Refrigerator After Opening"
  );

  result += formatSet(
    item.Refrigerate_After_Thawing_Min,
    item.Refrigerate_After_Thawing_Max,
    item.Refrigerate_After_Thawing_Metric,
    null,
    "Refrigerator After Thawing"
  );

  result += formatSet(
    item.Freeze_Min,
    item.Freeze_Max,
    item.Freeze_Metric,
    item.Freeze_Tips,
    "Freeze"
  );

  // // DOP_Freeze
  // if (item.DOP_Freeze_Min !== null || item.DOP_Freeze_Max !== null) {
  //   result += formatSet(
  //     item.DOP_Freeze_Min,
  //     item.DOP_Freeze_Max,
  //     item.DOP_Freeze_Metric,
  //     item.DOP_Freeze_Tips,
  //     'Date of Purchase (Freeze)'
  //   );
  // }

  return result.trim(); // Remove any trailing whitespace or newlines
}
export default getFormattedData;
