import * as yup from 'yup';

export const registerSchemas = yup.object().shape({
    email: yup.string().email("Geçerli Email Adrasi Giriniz.").required("Email Adresi Alanı Zorunludur."),
    age: yup.number().positive("Pozitif Değer Giriniz").integer("Yaş Alanı Tam Sayı Olmalıdır").required("Yaş Alanı Zorunludur."),
    password:yup.string().required("Şifre Alani Zorunludur."),
    confirmPassword: yup.string().required("Şifre Tekrarı Zorunludur").oneOf([yup.ref('password',yup.password)],'Şifreler Eşleşmiyor'),
    term:yup.boolean().required("Sözleşme Alanı Zorunludur")
})