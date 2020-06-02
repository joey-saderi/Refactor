import React, { useEffect, useState } from "react";
import moment from "moment-jalaali";
import {
  IoIosCheckboxOutline,
  IoIosCard,
  IoIosRemoveCircle,
  IoIosEyeOff,
  IoLogoModelS,
  IoIosHand,
  IoMdFlag,
  IoIosDownload,
  IoMdArrowRoundBack,
  IoMdPerson,
} from "react-icons/io";
import PelakView from "../../../components/pelak";

// import "./request_cart.scss";
import Link from "next/link";
import Button from "../../../components/form/Button";
import { REQUEST_REQUEST_ACTION } from "../../../API";
import jsCookie from "js-cookie";

moment.loadPersian({ dialect: "persian-modern" });


const Request_cart = (props: IRequest_cart) => {
  const [rentStatus, setRentStatus] = useState(null);
  const [status_id, setStatus_id] = useState(null);
  const [car, setCar] = useState(null);
  const [start_date, setStart_date] = useState(null);
  const [end_date, setEnd_date] = useState(null);
  const [no_of_days, setNo_of_days] = useState(null);
  const [media_set, setMedia_set] = useState(null);
  const [discounted_total_price, setDiscounted_total_price] = useState(null);
  // "renter" ? true: false
  const [role, setRole] = useState(true);
  const [owner_Info, setOwner_Info] = useState(null);
  const [renter_info, setRenter_info] = useState(null);
  const [pelak, setPelak] = useState(null);
  const [button_code, setButton_code] = useState([]);
  const [ButtonLoader, setButtonLoader] = useState(false);
  const [rejectButtonLoader, setRejectButtonLoader] = useState(false);

  const token = jsCookie.get("token");

  const setForRequest = async (data: any) => {
    if (data.action === "reject") {
      setRejectButtonLoader(true);
    } else {
      setButtonLoader(true);
    }
    try {
      const request_res: any = await REQUEST_REQUEST_ACTION({
        token,
        id: data.id,
        action: data.action,
      });
      setButtonLoader(false);
      setRejectButtonLoader(false);
      if (data.action === "pay") {
        window.location.href = `${request_res.redirect_to}`;
      } else {
        props.getDataAgain();
      }
    } catch (error) {
      setButtonLoader(false);
      setRejectButtonLoader(false);
      console.log("!Error", error);
    }
  };

  useEffect(() => {
    if (props.data) {
      /**
       * @renter
       * اجاره گیرنده
       *
       * @owner
       * اجاره دهنده
       */
      let renter = props.data.role === "renter" ? true : false;

      // small portion at the top right on the request cart
      let RentStatus = null;
      setStatus_id(props.data.status.id);
      switch (props.data.status.id) {
        case "new":
          RentStatus = (
            <div className="rent_status">
              <IoIosDownload size="1.4rem" color="#656565" />
              <span>{props.data.status.name}</span>
            </div>
          );
          // set the button attribute base on the role and action
          setButton_code(
            !renter
              ? [
                {
                  value: "قبول",
                  class:
                    "Blue_BTN request_car_accept ACCEPTED_INCOMING_REQUEST",
                  click: () =>
                    setForRequest({ action: "approve", id: props.data.id }),
                },
                {
                  value: "رد",
                  class:
                    "Blue_BTN request_car_reject REJECT_INCOMING_REQUEST",
                  loading: ButtonLoader,
                  click: () =>
                    setForRequest({ action: "reject", id: props.data.id }),
                },
              ]
              : []
          );
          break;
        case "approved":
          RentStatus = (
            <div className="rent_status">
              <IoIosCard size="1.4rem" color="#656565" />
              <span>{props.data.status.name}</span>
            </div>
          );
          setButton_code(
            renter
              ? [
                {
                  value: "پرداخت",
                  class: "Blue_BTN request_car_pay GO_TO_BANK",
                  click: () =>
                    setForRequest({ action: "pay", id: props.data.id }),
                },
              ]
              : []
          );
          break;
        case "rejected":
          RentStatus = (
            <div className="rent_status">
              <IoIosRemoveCircle size="1.4rem" color="#656565" />
              <span>{props.data.status.name}</span>
            </div>
          );
          break;
        case "cancelled":
          RentStatus = (
            <div className="rent_status">
              <IoIosEyeOff size="1.4rem" color="#656565" />
              <span>{props.data.status.name}</span>
            </div>
          );
          break;
        case "paid":
          RentStatus = (
            <div className="rent_status">
              <IoIosCheckboxOutline size="1.4rem" color="#656565" />
              <span>{props.data.status.name}</span>
            </div>
          );
          setButton_code(
            renter
              ? [
                {
                  value: "خودرو را تحویل گرفتم",
                  class: "Blue_BTN request_car_pay CAR_DELIVERED",
                  click: () =>
                    setForRequest({ action: "deliver", id: props.data.id }),
                },
              ]
              : []
          );
          break;
        case "not_delivered":
          RentStatus = (
            <div className="rent_status">
              <IoIosHand size="1.4rem" color="#656565" />
              <span>{props.data.status.name}</span>
            </div>
          );
          break;
        case "delivered":
          RentStatus = (
            <div className="rent_status">
              <IoLogoModelS size="1.4rem" color="#656565" />
              <span>{props.data.status.name}</span>
            </div>
          );
          setButton_code(
            renter
              ? [
                {
                  value: "خودرو را تحویل گرفتم",
                  class: "Blue_BTN request_car_pay",
                  click: () => { },
                },
              ]
              : []
          );
          break;
        case "returned":
          RentStatus = (
            <div className="rent_status">
              <IoMdFlag size="1.4rem" color="#656565" />
              <span>{props.data.status.name}</span>
            </div>
          );
          setButton_code(
            renter
              ? [
                {
                  value: "ثبت نظر",
                  class: "Blue_BTN request_car_pay",
                  click: () => { },
                },
              ]
              : [
                {
                  value: "ثبت نظر",
                  class: "Blue_BTN request_car_pay",
                  click: () => { },
                },
              ]
          );
          break;
        default:
          RentStatus = (
            <div className="rent_status">
              <IoIosDownload size="1.4rem" color="#656565" />
              <span>{props.data.status.name}</span>
            </div>
          );
          break;
      }
      // set initials value
      setRentStatus(RentStatus);
      setCar(props.data.rent_search_dump.car);
      setStart_date(props.data.rent_search_dump.start_date);
      setEnd_date(props.data.rent_search_dump.end_date);
      setNo_of_days(props.data.rent_search_dump.no_of_days);
      setMedia_set(props.data.rent_search_dump.media_set[0]);
      setDiscounted_total_price(
        props.data.rent_search_dump.discounted_total_price
      );
      setRole(renter);
      setOwner_Info(props.data.rent_search_dump.owner);
      setRenter_info(props.data.renter);
      setPelak({
        registration_plate_first_part:
          props.data.rent_search_dump.registration_plate_first_part,
        registration_plate_second_part:
          props.data.rent_search_dump.registration_plate_second_part,
        registration_plate_third_part:
          props.data.rent_search_dump.registration_plate_third_part,
        registration_plate_forth_part:
          props.data.rent_search_dump.registration_plate_forth_part,
      });
    }
  }, [props.data]);

  return (
    media_set && (
      <>
        {rentStatus}
        <div className="cart" onClick={setForRequest}>
          <div className="rent_info">
            <h2>
              {car.brand.name.fa} {car.name.fa}
            </h2>
            <hr />
            <h3>مدت اجاره {no_of_days} روز</h3>
            <div className="rent_duration">
              <p>
                {/* day's name of week  */}
                {moment(start_date, "jYYYY/jMM/jDD").format("dddd")} <br />
                {/* e.g, 99 01 23 */}
                {moment(start_date, "jYYYY/jMM/jDD").format("jDD jMMMM jYY")}
              </p>
              <IoMdArrowRoundBack size="2rem" color="#202020" />
              <p>
                {moment(end_date, "jYYYY/jMM/jDD").format("dddd")} <br />
                {moment(end_date, "jYYYY/jMM/jDD").format("jDD jMMMM jYY")}
              </p>
            </div>
            <hr />
            <h3>هزینه اجاره</h3>
            <p>{discounted_total_price.toLocaleString()} تومان</p>
          </div>
          <div className="image_pelak">
            <figure>
              <img
                src={media_set.thumbnail_url}
                alt={`${car.brand.name.fa} ${car.name.fa}`}
              />
            </figure>
            {/* if the status is not one of these status, show the PELAK */}
            {!role ||
              status_id === "paid" ||
              status_id === "delivered" ||
              status_id === "returned" ? (
                <PelakView
                  registration_plate_first_part={
                    pelak.registration_plate_first_part
                  }
                  registration_plate_second_part={
                    pelak.registration_plate_second_part
                  }
                  registration_plate_third_part={
                    pelak.registration_plate_third_part
                  }
                  registration_plate_forth_part={
                    pelak.registration_plate_forth_part
                  }
                />
              ) : null}
          </div>
        </div>
        <div className="Role_container">
          {role ? (
            <>
              <Link href="/">
                <a>
                  <IoMdPerson size="2rem" />
                  {owner_Info.name}
                </a>
              </Link>
            </>
          ) : (
              <>
                <Link href="/">
                  <a>
                    <IoMdPerson size="2rem" />
                    {renter_info.name}
                  </a>
                </Link>
                {/* show the renter's cellphone to the owner if the status is "approved" */}
                {status_id === "approved" && (
                  <a href={`tel:0${renter_info.cell}`}>
                    0{renter_info.cell}
                    <span className="extra_Text"> :تماس با اجاره گیرنده</span>
                  </a>
                )}
              </>
            )}
        </div>
        <div className="Button_container">
          {/* {button_code} */}
          {button_code.length > 0 &&
            button_code.map((item, i) => (
              <Button
                key={i}
                // the button props adjust in useEffect on data
                value={item.value}
                class={item.class}
                loading={i === 1 ? rejectButtonLoader : ButtonLoader}
                click={item.click}
              />
            ))}
        </div>
      </>
    )
  );
};

interface IRequest_cart {
  data: any;
  // update the list
  getDataAgain?: any;
}

export default Request_cart;
