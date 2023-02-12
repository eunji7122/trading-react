import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleInputUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickSignup = () => {
    axios
      .post("/members", {
        email: email,
        password: password,
        username: username,
      })
      .then((response) => {
        router.push("/auth/login");
      });
  };

  return (
    <div className="bg-gray-200">
      <NavigationBar />
      <section className="h-screen">
        <div className="flex justify-center items-center flex-wrap g-6 text-gray-800 ">
          <div className="py-40 w-101">
            <header className="py-8 text-center">
              <p className="font-bold text-3xl">회원가입</p>
            </header>
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="이메일"
                value={email}
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

            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="이름"
                value={username}
                onChange={handleInputUsername}
              />
            </div>

            <button
              type="button"
              className="inline-block px-7 py-3 bg-gray-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg transition duration-150 ease-in-out w-full"
              onClick={onClickSignup}
            >
              회원가입
            </button>

            <div className="flex items-center mt-10 mb-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">또는</p>
            </div>

            <div>
              <ul className="flex flex-wrap items-center pl-36">
                <li>
                  <a href="#!">
                    <img className="w-14 mr-3" src="/img/icon-google.png" />
                  </a>
                </li>
                <li>
                  <a href="#!">
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
