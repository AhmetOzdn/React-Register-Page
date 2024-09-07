import "../css/register.css";
import { useFormik } from 'formik';
import { registerSchemas } from "../schemas/RegisterSchemas";


function Register() {

  const submit = (values,action) => {
    console.log(values); //formda yakaladigimiz degerleri gosterir
    console.log(action); //formdaki aksiyon fonksiyonlarini gosterir

    setTimeout(() => {
      action.resetForm(); //formu temizler 
    }, 2000);
  }


  const {values,errors,handleChange,handleSubmit} = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      term: '',
    },
    validationSchema:registerSchemas, // forma ekledigimiz validasyonalri burada tanimliyoruz
    onSubmit:submit //handle submit ten donen bilgileri => on submit olunca kenmdi yazdigimiz submit buonu ile gelen verioleri ve aksiyon fonksiyonlarini burada yakaliyruz
  });


  console.log(errors);

  return (
    <div className="formContainer">
      <h2 className="header">Kayıt Ol</h2>
      <form className="form" action="" onSubmit={handleSubmit}>
        <div className="formItemContainer">
          <label htmlFor="">Email</label>
          <input type="text" className="formInput" id="email" value={values.email} onChange={handleChange} />
          {errors.email && <p className="errorText">{errors.email}</p>}
        </div>

        <div className="formItemContainer">
          <label htmlFor="">Yaş</label>
          <input type="number" className="formInput" id="age" value={values.age} onChange={handleChange} />
          {errors.age && <p className="errorText">{errors.age}</p>}
        </div>

        <div className="formItemContainer">
          <label htmlFor="">Şifre</label>
          <input type="password" className="formInput" id="password"value={values.password} onChange={handleChange} />
          {errors.password && <p className="errorText">{errors.password}</p>}
        </div>

        <div className="formItemContainer">
          <label htmlFor="">Şifre Tekrarı</label>
          <input type="password" className="formInput" id="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <p className="errorText">{errors.confirmPassword}</p>}
        </div>

        <div className="formItemContainer">
          <div className="formItemChildContainer">
          <input type="checkbox" className="formInput" id="term" value={values.term} onChange={handleChange} />
          <label htmlFor="">Kullanıcı sözleşmesiniz kabul ediyorum</label>
          </div>
          {errors.term && <p className="errorText">{errors.term}</p>}
        </div>

        <div className="formItemContainer">
          <button type="submit" className="registerFormButton">Kayıt Ol!</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
