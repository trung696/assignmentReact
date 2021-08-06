import instance from "./instance";

export const getAll = () => {
  const url = "/products?_expand=category";
  return instance.get(url);
};
export const getAllCateId = (id) => {
  const url = `/products?_expand=category&categoryId=${id}`;
  return instance.get(url);
};
export const get = (id) => {
  const url = `/products/${id}`;
  return instance.get(url);
};

export const remove = (id) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
export const edit = (item) => {
  const url = `/products/${item.id}`;
  return instance.put(url, item);
};
export const add = (item) => {
  const url = "/products";
  return instance.post(url, item);
};
