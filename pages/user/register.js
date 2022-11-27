import React, { useEffect } from "react";
import { BsLockFill, BsTelephoneFill, BsPersonFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Loader from "../../components/Loader";

const Register = () => {
  useEffect(() => {
    const setUser = async (url) => {
      try {
        const res = await fetch("/api/v1/auth/login", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: email.value,
            password: password.value,
          }),
        });

        console.log(res.ok, res.status);

        if (!res.ok) {
          throw new Error("Error recibir información de la API");
        }
        const { token } = await res.json();
        console.log(token);
      } catch (err) {
        console.log(err);
      }
    };

    setUser(`https://pokeapi.co/api/v2/pokemon?limit=3&offset=100`);
  }, []);

  return (
    <div className="container-register">
      <div className="div-header-register">
        <h2>CREAR CUENTA</h2>
        <Image
          src="/register_img.svg"
          alt="me"
          className="img-register"
          width="120"
          height="120"
        />
      </div>
      <div className="div-main-register">
        <div style={{ height: "65px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-0.18,112.01 C259.97,193.92 208.61,4.46 500.94,117.94 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#FFD523" }}
            ></path>
          </svg>
        </div>
        <div className="background-register">
          <div className="div-register">
            <div className="logo-register">
              <BsPersonFill />
            </div>
            <div className="container-input">
              <input placeholder="Nombre(s)" />
            </div>

            <div className="container-input">
              <input placeholder="Apellidos" />
            </div>

            <div className="container-input">
              <input placeholder="Dirección" />
            </div>

            <div className="container-input">
              <input placeholder="Número de teléfono" />
            </div>

            <div className="container-input">
              <input placeholder="Contraseña" />
            </div>

            <button className="button-login">CREAR CUENTA</button>

            <p className="link-register">
              ¿Ya tienes cuenta? <Link href="/user/login">Inicia sesión</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
