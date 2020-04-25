import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
// import "./footer.scss";
import {
  IoIosArrowDropup,
  IoLogoTwitter,
  IoLogoInstagram,
  IoIosSend,
} from "react-icons/io";

const Footer = (props: IFooter) => {
  const [hide, setHide] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    if (props.hide) setHide(true);
  }, [props.hide]);

  useEffect(() => {
    document.addEventListener("scroll", scrollCheck);
    return () => {
      document.removeEventListener("scroll", scrollCheck);
    };
  }, []);

  const scrollCheck = () => {
    if (window.scrollY > 400) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  };

  const toTop = () => {
    scrollTo(0, 0);
  };

  return (
    <footer data-test-id="footer" className={hide ? "hide_footer" : null}>
      <div
        className={["toTop", showTop ? "showTop" : null].join(" ")}
        onClick={toTop}
      >
        <IoIosArrowDropup size="4rem" color="#4ba3ce" />
      </div>
      <div className=" responsive plus_border">
        <ul className="links">
          <li>
            <Link href="/about-us">
              <a>درباره ما</a>
            </Link>
          </li>
          <li>
            <Link href="/otoli">
              <a>اتولی چگونه کار می‌کند؟</a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a>سوالات متداول</a>
            </Link>
          </li>
          <li>
            <Link href="/our-policies">
              <a>شرایط و قوانین استفاده</a>
            </Link>
          </li>
          <li>
            <Link href="/insurance-policies">
              <a>شرایط و پوشش‌های بیمه</a>
            </Link>
          </li>
          <li>
            <Link href="/rent">
              <a>اجاره ماشین</a>
            </Link>
          </li>
          <li>
            <Link href="/site-map">
              <a>نقشه سایت</a>
            </Link>
          </li>
        </ul>

        <div className="social_container">
          <h3>ما را در شبکه‌های اجتماعی دنبال کنید:</h3>
          <div>
            <a target="_black" href="https://www.instagram.com/otoli_net/">
              <IoLogoInstagram size="3rem" color="#4ba3ce" />
            </a>
            <a target="_black" href="https://twitter.com/otoli_net">
              <IoLogoTwitter size="3rem" color="#4ba3ce" />
            </a>
            <a target="_black" href="https://t.me/otoli_net">
              <IoIosSend size="3rem" color="#4ba3ce" />
            </a>
          </div>
          <p>
            شماره تماس: <a href="tel:02188567759">۰۲۱۸۸۵۶۷۷۵۹</a>
          </p>
        </div>
      </div>
      <div className="signature">
        <span className="ver">2.0.0</span>
        <p>تمامی حقوق برای وب‌سایت اتولی محفوظ است.</p>
      </div>
    </footer>
  );
};
interface IFooter {
  hide?: boolean;
}
export default Footer;
