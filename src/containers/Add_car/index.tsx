import React, { useEffect, useContext, useState } from "react";
import jsCookie from "js-cookie";
import Modal_context from "../../../src/context/Modal_context";
import Auth_context from "../../../src/context/Auth_context";
import PleaseLogin from "../../../src/components/PleaseLogin";
import Add_Car_Step_1 from "./step_1";

const Add_car = () => {
  const [Authorize, setAuthorize] = useState(false);
  const [show, setShow] = useState(false);
  const MODAL_CONTEXT = useContext(Modal_context);
  const AUTH_CONTEXT = useContext(Auth_context);

  useEffect(() => {
    if (jsCookie.get("complete_register") === "true") {
      setAuthorize(true);
    } else {
      MODAL_CONTEXT.modalHandler("Login");
    }
    setShow(true);
  }, []);

  return show ? (
    Authorize || AUTH_CONTEXT.Auth ? (
      <Add_Car_Step_1 />
    ) : (
      <PleaseLogin />
    )
  ) : (
    <article className="minHeight"></article>
  );
};

export default Add_car;
