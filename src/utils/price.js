const formatPrice = (price) => {
  return new Intl.NumberFormat("en-UK").format(price);
};

export { formatPrice };
