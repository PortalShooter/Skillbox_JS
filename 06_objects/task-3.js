'use strict'
let arr = [
  {
     value: "Russia",
     label: 'Russia',
  },
  {
      value:"Germany",
      label:"Germany",
  },
  {
      value:"France",
      label:"France",
  }
]


function createSelect(arr, value) {
  let result = document.createElement('select');
  let valueExists = false;
  arr.forEach(item => {
   let option = document.createElement('option');
   option.value = item.value;
   if (option.value === value) {
    valueExists = true;
    option.selected = true;
   }
   option.text = item.label;
   result.appendChild(option);
  });
  if (!valueExists) result.firstChild.selected = true;
 return result;
}

samplePage.appendChild(createSelect(arr, "Germany"));

samplePage.appendChild(createSelect(arr, "Uzbekistan"));
