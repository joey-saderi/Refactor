import React from "react";
import Menu from "./menu";
import Modal from "./modals";
import * as logo from "../../../public/logo_sticky.svg";
import "./header.module.scss";

const Header = (props: IHeader) => {
  return (
    <header className="header">
      <article className="responsive">
        <section className="Logo">
          <a>
            <img src={logo} alt="اتولی لوگو" />
          </a>
        </section>
        <section className="Nav">
          <Menu />
        </section>
      </article>
      {props.Show_Modal && <Modal modal_type={props.modalType} />}
    </header>
  );
};

interface IHeader {
  Show_Modal: boolean;
  modalType: string;
}

export default Header;