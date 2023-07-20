import CryptoJS from "crypto-js";
const iv = CryptoJS.enc.Utf8.parse(1234567891011121);
const key = CryptoJS.enc.Utf8.parse('Kukusan01\0\0\0\0\0\0\0');
  let encrypt = (message)=>{
    return CryptoJS.AES.encrypt(message, key, {
        iv: iv,
        mode: CryptoJS.mode.CTR,
        padding: CryptoJS.pad.NoPadding,
      }).toString()
  };
  let decrypt = (message)=>{
    return CryptoJS.AES.decrypt(
        { ciphertext: CryptoJS.enc.Base64.parse(message) },
        key,
        { iv: iv, mode: CryptoJS.mode.CTR, padding: CryptoJS.pad.NoPadding }
      ).toString(CryptoJS.enc.Utf8)
  };
  export {encrypt, decrypt}