const generatePass = (length: number = 8) => {
  const wishlist =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  return Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map(a => wishlist[a % wishlist.length])
    .join('');
};

export default generatePass;
