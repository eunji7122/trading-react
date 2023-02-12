import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { useAppDispatch } from "../../app/store";
import { setToken } from "../../features/authSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("이메일을 입력하세요"),
    password: Yup.string().required("패스워드를 입력하세요"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const dispatch = useAppDispatch();

  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = (data: any) => {
    console.log("1234");
    router.push("/trading");
  };

  const onClickLogin = async () => {
    try {
      console.log("aaa");
      const response = await axios.post("/auth/token", {
        email: email,
        password: password,
      });
      console.log("로그인 성공");
      dispatch(
        setToken({
          token: response.data.accessToken,
        })
      );
      router.push("/trading");
      // axios
      //     .post("http://localhost:8080/auth/login", {
      //       email: email,
      //       password: password,
      //     })
      //     .then((response) => {
      //       console.log("로그인 성공");
      //       dispatch(
      //           setToken({
      //             token: response.data.accessToken,
      //           })
      //       );
      //       router.push("/trading");
      //     });
    } catch (e: any) {
      alert("로그인을 실패하였습니다.");
    }
  };

  return (
    <div className="bg-gray-200">
      <NavigationBar />
      <section className="h-screen">
        <div className="flex justify-center items-center flex-wrap g-6 text-gray-800">
          <div className="py-40">
            <header className="py-8 text-center">
              <p className="font-bold text-3xl">로그인</p>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="이메일"
                  value={email}
                  {...register("email")}
                  name="email"
                  onChange={handleInputEmail}
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="비밀번호"
                  value={password}
                  onChange={handleInputPassword}
                />
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-gray-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg transition duration-150 ease-in-out w-full"
                onClick={onClickLogin}
              >
                로그인
              </button>
            </form>

            <div className="py-7 px-16 flex justify-between items-center">
              <ul className="flex flex-wrap items-center text-gray-600 text-sm">
                <li>
                  <Link href="/#">아이디 찾기</Link>
                </li>
                <p className="text-xs text-gray-400 px-5">|</p>
                <li>
                  <Link href="/#">비밀번호 찾기</Link>
                </li>
                <p className="text-xs text-gray-400 px-5">|</p>
                <li>
                  <Link href="/auth/register">회원가입</Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">또는</p>
            </div>

            <div>
              <ul className="flex flex-wrap items-center pl-36">
                <li>
                  <a href="http://localhost:8080/oauth2/authorization/google">
                    <img className="w-14 mr-3" src="/img/icon-google.png" />
                  </a>
                </li>
                <li>
                  <a href="http://localhost:8080/oauth2/authorization/naver">
                    <img className="w-12 mr-1" src="/img/icon-naver.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
