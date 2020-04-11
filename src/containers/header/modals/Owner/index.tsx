import React, { useState, useContext, useEffect } from "react";
import "./Owner.scss";
import Button from "../../../../components/form/Button";
import modal_context from "../../../../context/Modal_context";
import StarRatings from "react-star-ratings";
import jsCookie from "js-cookie";
import { REQUEST_REQUEST_ACTION } from "../../../../API";

const token = jsCookie.get("token");

const Owner = (props: IRenter) => {
  const [renter, setRenter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const [ownerRate, setOwnerRate] = useState(0);
  const Modal_context = useContext(modal_context);

  useEffect(() => {
    setRenter(props.data.renter);
  }, []);

    console.log(props.data);

  const setForRequest = async (e, data: any) => {
    e.preventDefault();
    setLoading(true);
    Promise.all([
      REQUEST_REQUEST_ACTION({
        token,
        id: data.id,
        action: data.action,
        payload: {
          toRate: "renter",
          type: "user",
          user_profile_id: renter.id,
          rate: ownerRate
        }
      })
    ])
      .then(response => {
        console.log(response);
        setLoading(false);
        //   Modal_context.modalHandler("SET");
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  };

  return (
    <>
      {renter && (
        <div className="modal_box_div">
          <form
            className="rate_to_owner_car"
            onSubmit={e => {
              setForRequest(e, {
                id: props.data.id,
                action: "rate"
              });
            }}
          >
            <img src={renter.thumbnail_url} alt={renter.name} />
            <h3>{renter.name}</h3>
            <p>امتیاز شما به اجاره‌گیرنده</p>
            <StarRatings
              rating={ownerRate}
              starRatedColor="rgb(255, 204, 0)"
              starHoverColor="rgb(255, 204, 0)"
              starDimension="20px"
              starSpacing="5px"
              changeRating={e => setOwnerRate(e)}
              numberOfStars={5}
              name="ownerRate"
            />
            <label>توضیح:</label>
            <textarea
              value={textareaValue}
              onChange={e => {
                setTextareaValue(e.target.value);
              }}
              placeholder="(با به اشتراک‌گذاری تجربه‌تان، به کاربران دیگر در انتخاب کمک می‌کنید.)"
            />
            <div className="rate_buttons">
              <Button
                class="Blue_BTN submit_submit"
                value="ثبت امتیاز"
                loading={loading}
                click={() => {}}
              />
              <Button
                class="Blue_BTN cancel_submit"
                value="لغو"
                loading={loading}
                click={() => {
                  Modal_context.modalHandler("SET");
                }}
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

interface IRenter {
  data: any;
}

export default Owner;