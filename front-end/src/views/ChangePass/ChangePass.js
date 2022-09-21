// import React from 'react';
// import axios from '../../api/axios';
// import './ChangePass.css';
// class ChangePass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       oldPassword: '',
//       newPassword: '',
//       confirmPassword: '',
//       collector: {},
//       //confirmPassWord: '',
//       //typePassword: 'password',
//       errors: {},
//       message: '',
//     };
//   }

//   //
//   handleInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   //

//   validateForm = () => {
//     const { oldPassword, newPassword, confirmPassword } = this.state;

//     let isValid = true;
//     const errors = {};

//     if (oldPassword === '') {
//       errors.oldPassword = 'Mật khẩu không đúng ';
//       isValid = false;
//     }

//     if (newPassword === '' || newPassword.length < 8) {
//       errors.newPassword = 'Mật khẩu mới phải chứa ít nhất 8 kí tự';
//       isValid = false;
//     }
//     if (confirmPassword === '' || newPassword !== confirmPassword) {
//       errors.confirmPassword = 'Mật khẩu không khớp';
//       isValid = false;
//     }
//     this.setState({
//       errors,
//     });

//     return isValid;
//   };
//   //
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState({
//       message: '',
//     });
//     const { oldPassword, newPassword } = this.state;

//     const isValid = this.validateForm();
//     if (!isValid) {
//       return;
//     }
//     axios
//       .put(
//         'auth/collector/modify',
//         JSON.stringify({
//           oldPassword: oldPassword,
//           newPassword: newPassword,
//         }),
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         },

//         {
//           data: {
//             message: '',
//           },
//         }
//       )
//       .then((res) => {
//         //Neu co loi, khong thi in ra data
//         if (res.response?.data.message) {
//           console.log('check', res);

//           //alert(res.response.data.message);
//         } else {
//           alert(res.data.message);
//           console.log('check', res.data);
//         }
//         this.setState({ message: res.response?.data.message });
//         //this.setState({ message: res.data.message });

//         console.log(this.setState);
//       })
//       .catch((err) => {
//         //setMessage(err.message);
//         console.log(err);
//         // this.setState({ message: err.message });
//       });
//   };
//   //
//   render() {
//     const {
//       errors,
//       message,
//       oldPassword,
//       newPassword,
//       confirmPassword,
//     } = this.state;
//     return (
//       <div className='container' style={{ marginTop: 80 }}>
//         <div className='information_admin'>
//           <form>
//             <div className='row'>
//               <div className='col-12' style={{ marginLeft: 200 }}>
//                 <div className='form-input'>
//                   <div className='form-group form-change '>
//                     <label htmlFor='password' style={{ fontWeight: 700 }}>
//                       Mật khẩu <span style={{ color: 'red' }}>*</span>
//                     </label>
//                     <input
//                       value={oldPassword}
//                       type='password'
//                       className='form-control'
//                       id='password'
//                       name='oldPassword'
//                       autoComplete='on'
//                       onChange={this.handleInput}
//                       style={{ width: '30%' }}
//                     />
//                     {message && (
//                       <span
//                         style={{
//                           fontSize: 13,
//                           color: 'red',
//                           fontWeight: 500,
//                         }}
//                         className='error'
//                       >
//                         {' '}
//                         {message}{' '}
//                       </span>
//                     )}
//                     <span
//                       style={{
//                         fontSize: 13,
//                         color: 'red',
//                         fontWeight: 500,
//                       }}
//                     >
//                       {errors.oldPassword}
//                     </span>
//                   </div>
//                   <div className='form-group'>
//                     <label htmlFor='newPassword' style={{ fontWeight: 700 }}>
//                       Mật Khẩu mới
//                     </label>
//                     <input
//                       value={newPassword}
//                       type='password'
//                       className='form-control'
//                       id='newPassword'
//                       name='newPassword'
//                       autoComplete='on'
//                       onChange={this.handleInput}
//                       style={{ width: '30%' }}
//                     />
//                     <span
//                       style={{ fontSize: 13, color: 'red', fontWeight: 500 }}
//                     >
//                       {errors.newPassword}
//                     </span>
//                   </div>
//                   <div className='form-group'>
//                     <label
//                       htmlFor='confirmPassword'
//                       style={{ fontWeight: 700 }}
//                     >
//                       Xác nhận
//                     </label>
//                     <input
//                       value={confirmPassword}
//                       type='password'
//                       className='form-control'
//                       id='confirmPassword'
//                       name='confirmPassword'
//                       autoComplete='on'
//                       onChange={this.handleInput}
//                       style={{ width: '30%' }}
//                     />
//                     <span
//                       style={{ fontSize: 13, color: 'red', fontWeight: 500 }}
//                     >
//                       {errors.confirmPassword}
//                     </span>
//                   </div>

//                   <button
//                     type='submit'
//                     className='btn btn-primary'
//                     onClick={(e) => this.handleSubmit(e)}
//                   >
//                     Xác nhận
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default ChangePass;
//
import axios from 'axios';

import React, { useState } from 'react';
import './ChangePass.css';

function ChangePass() {
  const [input, setInput] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  //
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  //

  //
  const [err, setErr] = useState({});

  //

  //
  const [message, setMsg] = useState('');
  //

  //

  const Validate = (values) => {
    const err = {};

    if (values.newPassword.length < 8) {
      err.oldPassword = 'Mật khẩu phải chứa ít nhất 8 kí tự';
    }
    //

    if (values.newPassword.length < 8) {
      err.newPassword = 'Mật khẩu mới phải chứa ít nhất 8 kí tự';
    }

    if (
      !values.confirmPassword ||
      values.newPassword !== values.confirmPassword
    ) {
      err.confirmPassword = 'Mật khẩu không khớp';
    }

    return err;
  };

  //

  //

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('input', input);

    //setErr(Validate(input));
    console.log('check', typeof Validate(input));
    console.log(err);
    if (Object.keys(Validate(input)).length !== 0) {
      setErr(Validate(input));
      return;
    } else {
      setErr({});
    }
    // let resultValidate = {};
    // resultValidate = Validate(input);
    // console.log('resultValidate', resultValidate);

    // if (resultValidate && resultValidate !== null) return;

    axios
      .put(
        'auth/collector/modify',
        JSON.stringify({
          oldPassword: input.oldPassword,
          newPassword: input.newPassword,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        if (res.response?.data.message) {
          if (res.response.data.message === 'Not Authenticated ') {
            alert('Vui lòng thử lại');
            setMsg('');
          } else {
            console.log('check', res);
            setMsg(res.response?.data.message);
          }

          //alert(res.response.data.message);
        } else {
          alert(res.data.message);
        }
        //
      });
  };
  //

  return (
    <div className='container' style={{ marginTop: 80 }}>
      <div className='information_admin'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='row'>
            <div className='col-12' style={{ marginLeft: 200 }}>
              <div className='form-input'>
                <div className='form-group form-change '>
                  <label htmlFor='password' style={{ fontWeight: 700 }}>
                    Mật khẩu <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    value={input.oldPassword}
                    type='password'
                    className='form-control'
                    id='password'
                    name='oldPassword'
                    autoComplete='on'
                    onChange={handleChange}
                    style={{ width: '30%' }}
                  />
                  {message && (
                    <span
                      style={{
                        fontSize: 13,
                        color: 'red',
                        fontWeight: 500,
                      }}
                    >
                      {message}
                    </span>
                  )}

                  {err.oldPassword && (
                    <span
                      style={{
                        fontSize: 13,
                        color: 'red',
                        fontWeight: 500,
                      }}
                    >
                      {err.oldPassword}
                    </span>
                  )}
                </div>
                <div className='form-group'>
                  <label htmlFor='newPassword' style={{ fontWeight: 700 }}>
                    Mật Khẩu mới
                  </label>
                  <input
                    value={input.newPassword}
                    type='password'
                    className='form-control'
                    id='newPassword'
                    name='newPassword'
                    autoComplete='on'
                    onChange={handleChange}
                    style={{ width: '30%' }}
                  />
                  {err.newPassword && (
                    <span
                      style={{ fontSize: 13, color: 'red', fontWeight: 500 }}
                    >
                      {err.newPassword}
                    </span>
                  )}
                </div>
                <div className='form-group'>
                  <label htmlFor='confirmPassword' style={{ fontWeight: 700 }}>
                    Xác nhận
                  </label>
                  <input
                    value={input.confirmPassword}
                    type='password'
                    className='form-control'
                    id='confirmPassword'
                    name='confirmPassword'
                    autoComplete='on'
                    onChange={handleChange}
                    style={{ width: '30%' }}
                  />
                  {err.confirmPassword && (
                    <span
                      style={{ fontSize: 13, color: 'red', fontWeight: 500 }}
                    >
                      {err.confirmPassword}
                    </span>
                  )}
                </div>

                <button className='btn btn-primary'>Xác nhận</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePass;



// import React from 'react';
// import validator from 'validator';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './Login.css';
// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: 'teve.holt@reqres.in',
//       password: 'tcityslicka',
//       typePassword: 'password',
//       errors: {},
//     };
//   }

//   //
//   handleChangePassword = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };
//   //
//   handleChangeEmail = (e) => {
//     this.setState({
//       email: e.target.value,
//     });
//   };
//   //
//   validateForm() {
//     const { email, password } = this.state;
//     const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     let isValid = true;
//     const errors = {};
//     if (email.match(mailFormat)) {
//       //errors.email = 'Your email is correct';
//       isValid = true;
//     }
//     if (!validator.isEmail(email)) {
//       errors.email = 'Your email is not correct';
//       isValid = false;
//     }
//     if (password.trim().length < 8) {
//       errors.password = 'Your password is not correct';
//       isValid = false;
//     }
//     this.setState({ errors });
//     return isValid;
//   }
//   //
//   showHide(e) {
//     e.preventDefault();
//     const typePassword =
//       this.state.typePassword === 'password' ? 'text' : 'password';
//     this.setState({ typePassword });
//   }
//   //
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = this.state;
//     const isValid = this.validateForm();
//     if (!isValid) {
//       return;
//     }
//     axios
//       .post('https://reqres.in/api/login', {
//         email: email,
//         password: password,
//       })

//       .then((res) => {
//         console.log(res);
//         localStorage.setItem('token', res.data.token);
//         this.props.history.push('/');
//         // return <Redirect to="/home" />;
//       })

//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   //
//   render() {
//     const { email, errors, password, typePassword } = this.state;
//     return (
//       <div id='login'>
//         <div className='container'>
//           <div
//             id='login-row'
//             className='row justify-content-center align-items-center'
//           >
//             <div id='login-column' className='col-md-6'>
//               <div id='login-box' className='col-md-12'>
//                 <form id='login-form' className='form' action='' method='post'>
//                   <h3 className='text-center text-info text-white'>Login</h3>
//                   <div className='form-group'>
//                     <input
//                       type='text'
//                       value={email}
//                       className='form-control'
//                       placeholder='Email'
//                       onChange={(e) => this.handleChangeEmail(e)}
//                     />
//                     <p style={{ color: 'red' }}>{errors.email}</p>
//                   </div>
//                   <div className='form-group password-box'>
//                     {this.state.password && (
//                       <button
//                         className='btn btn-outline-primary btn-eye'
//                         type='button'
//                         onClick={(e) => this.showHide(e)}
//                       >
//                         <i
//                           className={`fa-solid fa-eye${
//                             typePassword !== 'password' ? '-slash' : ''
//                           }`}
//                         />
//                       </button>
//                     )}

//                     {/* 
//                     {
//                       <button
//                         className='btn btn-outline-primary btn-eye'
//                         type='button'
//                         onClick={(e) => this.showHide(e)}
//                       >
//                         {this.state.password && typePassword === 'password' && (
//                           <i className={`fa-solid fa-eye`} />
//                         )}
//                         {this.state.password && typePassword !== 'password' && (
//                           <i className={`fa-solid fa-eye-slash`} />
//                         )}
//                       </button>
//                     } */}

//                     {}

//                     <input
//                       type={typePassword}
//                       value={password}
//                       onChange={(e) => this.handleChangePassword(e)}
//                       name='password'
//                       className='form-control'
//                       placeholder='Password'
//                       autoComplete='on'
//                     />
//                     <p style={{ color: 'red' }}>{errors.password}</p>
//                   </div>

//                   <div className='form-group'>
//                     <br />
//                     <button
//                       type='button'
//                       className='btn btn-light'
//                       onClick={(e) => this.handleSubmit(e)}
//                     >
//                       Login
//                     </button>
//                   </div>
//                   <span>
//                     <Link to='/register' className='register'>
//                       Register ?
//                     </Link>
//                   </span>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
