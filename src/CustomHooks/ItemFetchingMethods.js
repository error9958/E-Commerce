import {
  ACCESSORIES_FETCH_URL,
  CLOTHES_FETCH_URL,
  ELECTRONICS_FETCH_URL,
  H_F_FETCH_URL,
  OTHERS_FETCH_URL,
  SHOES_FETCH_URL,
} from "../FetchUrls";

export const fetchElectronicData = async () => {
  let data = (await (await fetch(ELECTRONICS_FETCH_URL.laptops)).json())
    .products;
  data = [
    ...data,
    ...(await (await fetch(ELECTRONICS_FETCH_URL.smartphones)).json()).products,
  ];
  return data;
};
export const fetchClothesData = async () => {
  let data = (await (await fetch(CLOTHES_FETCH_URL.tops)).json()).products;

  data = [
    ...data,
    ...(await (await fetch(CLOTHES_FETCH_URL.menShirts)).json()).products,
  ];
  data = [
    ...data,
    ...(await (await fetch(CLOTHES_FETCH_URL.womenDresses)).json()).products,
  ];

  return data;
};
export const fetchAccessoriesData = async () => {
  let data = (await (await fetch(ACCESSORIES_FETCH_URL.womenJewellery)).json())
    .products;

  data = [
    ...data,
    ...(await (await fetch(ACCESSORIES_FETCH_URL.sunGlasses)).json()).products,
  ];
  data = [
    ...data,
    ...(await (await fetch(ACCESSORIES_FETCH_URL.menWatches)).json()).products,
  ];
  data = [
    ...data,
    ...(await (await fetch(ACCESSORIES_FETCH_URL.womenWatches)).json())
      .products,
  ];
  data = [
    ...data,
    ...(await (await fetch(ACCESSORIES_FETCH_URL.womenBags)).json()).products,
  ];

  return data;
};
export const fetchHandFData = async () => {
  let data = (await (await fetch(H_F_FETCH_URL.furniture)).json()).products;

  data = [
    ...data,
    ...(await (await fetch(H_F_FETCH_URL.homeDecoration)).json()).products,
  ];
  data = [
    ...data,
    ...(await (await fetch(H_F_FETCH_URL.lighting)).json()).products,
  ];

  return data;
};
export const fetchShoesData = async () => {
  let data = (await (await fetch(SHOES_FETCH_URL.menshoes)).json()).products;

  data = [
    ...data,
    ...(await (await fetch(SHOES_FETCH_URL.womenshoes)).json()).products,
  ];

  return data;
};
export const fetchOthersData = async () => {
  let data = (await (await fetch(OTHERS_FETCH_URL.groceries)).json()).products;

  data = [
    ...data,
    ...(await (await fetch(OTHERS_FETCH_URL.skincare)).json()).products,
  ];
  data = [
    ...data,
    ...(await (await fetch(OTHERS_FETCH_URL.skincare)).json()).products,
  ];

  return data;
};
