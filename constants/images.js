const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);
const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

export default {
  logoIcon: 'images/logo_new.png',
  newVersion: 'images/ic_new.png',
  store: 'images/ic_store.png',
  upload: 'images/ic_upload.png',
  bct: 'images/t_bo_cong_thuong.png',
  dmca: 'images/t_dmca.png',
  logoCompany: 'images/t_logo_company.png',
  blurDataURL: rgbDataURL(2, 129, 210),
};
