export const carDetails = {
    nameOnPolicy: "JEWEL OSAFO APPIAH",
    make: "Toyota",
    model: "Corolla",
    cost: "100000",
    manufactureYear: "2018",
    dvlaRegistration: "2023",
    color: "Red",
    engineCapacity: "1800",
    bodyType: "Sedan",
    purpose: "hiring", 
};

export const formData = {};

export const fields = [
  { placeholder: "Abigail Awuni", key: "nameOnPolicy" },
  { placeholder: "Buggati", key: "make" },
  { placeholder: "Aventoader LP 750-", key: "model" },
  { label: "Username", key: "cost" },
  { placeholder: "E.g Sedan", key: "bodyType" },
  { placeholder: "Type a colour", key: "color" },
  { locator: "//select[@name='car_purpose']", key: "purpose" },
  { locator: "(//input[@placeholder='Year (eg. 2020)'])[1]", key: "manufactureYear" },
  { locator: "(//input[@placeholder='Year (eg. 2020)'])[2]", key: "dvlaYear" },
  { locator: "//input[@class='form-control bg-white border-end-0']", key: "capacity" },
];



