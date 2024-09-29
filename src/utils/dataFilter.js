function formatSet(min, max, metric, tips, label) {
  if (
    (min === null || min === undefined) &&
    (max === null || max === undefined) &&
    (metric === null || metric === undefined) &&
    (tips === null || tips === undefined)
  ) {
    // console.log("break");
    return "";
  }
  // console.log("metric", metric);

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

  if ((min === null || min === undefined) && (max === null || max === undefined) && (tips === null || tips === undefined) && metric) {
    result += `  ${metric}\n`;
  }

  // if (min === null && max === null && tips && metric) {
  //   result += `  Tips: ${tips}\n`;
  // }
  result += "\n";
  return result;
}

function getValidStorage(min, max, metric) {
  if (
    (min === null || min === undefined) &&
    (max === null || max === undefined) &&
    (metric === null || metric === undefined)
  ) {
    return "";
  }

  let valid = false;

  if ((min !== null && min !== undefined) || (max !== null && max !== undefined) || (metric !== null && metric !== undefined)) {
    valid = true
  }
  return valid;
}


function getFormattedData(item) {
  let result = "";
  const storageOptions = [];
  result += `Name: ${item.Name}\n`;
  if (item.Name_subtitle) result += `Descriptor: ${item.Name_subtitle}\n\n`;

  if (getValidStorage(item.Pantry_Min, item.Pantry_Max, item.Pantry_Metric)) {
    storageOptions.push({"label": "Pantry", "min": item.Pantry_Min, "max": item.Pantry_Max, "metric": item.Pantry_Metric});
  }
  result += formatSet(
    item.Pantry_Min,
    item.Pantry_Max,
    item.Pantry_Metric,
    item.Pantry_tips,
    "Pantry"
  );

  if (getValidStorage(item.DOP_Pantry_Min, item.DOP_Pantry_Max, item.DOP_Pantry_Metric)) {
    storageOptions.push({"label": "Pantry", "min": item.DOP_Pantry_Min, "max": item.DOP_Pantry_Max, "metric": item.DOP_Pantry_Metric});
  }

  result += formatSet(
    item.DOP_Pantry_Min,
    item.DOP_Pantry_Max,
    item.DOP_Pantry_Metric,
    item.DOP_Pantry_tips,
    "Date of Purchaes (Pantry)"
  );

  if (getValidStorage(item.Pantry_After_Opening_Min, item.Pantry_After_Opening_Max, item.Pantry_After_Opening_Metric)) {
    storageOptions.push({"label": "Pantry", "min": item.Pantry_After_Opening_Min, "max": item.Pantry_After_Opening_Max, "metric": item.Pantry_After_Opening_Metric});
  }

  result += formatSet(
    item.Pantry_After_Opening_Min,
    item.Pantry_After_Opening_Max,
    item.Pantry_After_Opening_Metric,
    item.Pantry_After_Opening_tips,
    "Pantry After Opening"
  );

  if (getValidStorage(item.Refrigerate_Min, item.Refrigerate_Max, item.Refrigerate_Metric)) {
    storageOptions.push({"label": "Fridge", "min": item.Refrigerate_Min, "max": item.Refrigerate_Max, "metric": item.Refrigerate_Metric});
  }

  result += formatSet(
    item.Refrigerate_Min,
    item.Refrigerate_Max,
    item.Refrigerate_Metric,
    item.Refrigerate_tips,
    "Refrigerator"
  );

  if (getValidStorage(item.DOP_Refrigerate_Min, item.DOP_Refrigerate_Max, item.DOP_Refrigerate_Metric)) {
    storageOptions.push({"label": "Fridge", "min": item.DOP_Refrigerate_Min, "max": item.DOP_Refrigerate_Max, "metric": item.DOP_Refrigerate_Metric});
  }

  result += formatSet(
    item.DOP_Refrigerate_Min,
    item.DOP_Refrigerate_Max,
    item.DOP_Refrigerate_Metric,
    item.DOP_Refrigerate_tips,
    "Date of Purchase (Refrigerator)"
  );

  if (getValidStorage(item.Refrigerate_After_Opening_Min, item.Refrigerate_After_Opening_Max, item.Refrigerate_After_Opening_Metric)) {
    storageOptions.push({"label": "Fridge", "min": item.Refrigerate_After_Opening_Min, "max": item.Refrigerate_After_Opening_Max, "metric": item.Refrigerate_After_Opening_Metric});
  }

  result += formatSet(
    item.Refrigerate_After_Opening_Min,
    item.Refrigerate_After_Opening_Max,
    item.Refrigerate_After_Opening_Metric,
    null,
    "Refrigerator After Opening"
  );

  if (getValidStorage(item.Refrigerate_After_Thawing_Min, item.Refrigerate_After_Thawing_Max, item.Refrigerate_After_Thawing_Metric)) {
    storageOptions.push({"label": "Fridge", "min": item.Refrigerate_After_Thawing_Min, "max": item.Refrigerate_After_Thawing_Max, "metric": item.Refrigerate_After_Thawing_Metric});
  }

  result += formatSet(
    item.Refrigerate_After_Thawing_Min,
    item.Refrigerate_After_Thawing_Max,
    item.Refrigerate_After_Thawing_Metric,
    null,
    "Refrigerator After Thawing"
  );

  if (getValidStorage(item.Freeze_Min, item.Freeze_Max, item.Freeze_Metric)) {
    storageOptions.push({"label": "Freezer", "min": item.Freeze_Min, "max": item.Freeze_Max, "metric": item.Freeze_Metric});
  }

  result += formatSet(
    item.Freeze_Min,
    item.Freeze_Max,
    item.Freeze_Metric,
    item.Freeze_tips,
    "Freezer"
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
  console.log("data", storageOptions);
  return { formattedData: result.trim(), storageOptions }
}
export default getFormattedData;
