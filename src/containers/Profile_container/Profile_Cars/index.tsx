import React, { useEffect, useState } from "react";
import { REQUEST_GET_USER_CARS } from "../../../API";
import Router from "next/router";
import Car from "./car";
// import "./profile_car.scss";
import CarLoading from "../../../components/cartPlaceholder/CarLoading";
import Radio from "../../../components/form/Radio";
import Button from "../../../components/form/Button";

let useFilter = false;
const Profile_Cars = (props: IProfile_Cars) => {
  const [result, setResult] = useState(null);
  const [active, setActive] = useState(1);
  useEffect(() => {
    fetchApi();
    return () => {
      useFilter = false;
    };
  }, []);
  const fetchApi = async (is_out_of_service?) => {
    let data: any = {};
    setResult(null);
    if (useFilter) {
      data = { id: `${Router.router.query.id}`, is_out_of_service };
    } else {
      data = { id: `${Router.router.query.id}` };
    }
    const user_cars_res: any = await REQUEST_GET_USER_CARS(data);
    setResult(user_cars_res);
    props;
    console.log(user_cars_res);
  };

  const activeFilter = (i) => {
    if (i === 1) {
      useFilter = false;
      fetchApi();
    } else if (i === 2) {
      useFilter = true;
      fetchApi(1);
    } else if (i === 3) {
      useFilter = true;
      fetchApi(3);
    }
  };

  return (
    <article className="Profile_car_container">
      <div className="service_filer">
        <Radio
          name="show_car_Radio"
          error_status={false}
          SelectHandler={(i) => {
            setActive(+i);
            activeFilter(i);
          }}
          defaultCheck={active}
          data={[
            {
              label: "همه",
              value: 1,
            },
            {
              label: "غیر فعال",
              value: 2,
            },
            {
              label: "فعال",
              value: 3,
            },
          ]}
        />
      </div>
      {result ? (
        result.length > 0 ? (
          result.map((item, i) => {
            return (
              <Car
                key={i}
                data={item}
                is_mine={props.is_mine}
                getListAgain={fetchApi}
              />
            );
          })
        ) : (
          <div className="noCar_added">
            <p>تا کنون خودرویی ثبت نکرده اید.</p>
            <Button
              value="+ افزودن خودرو"
              class="Blue_BTN"
              click={() => {
                Router.push("/add-car");
              }}
              loading={false}
            />
          </div>
        )
      ) : (
        <>
          <CarLoading />
          <CarLoading />
          <CarLoading />
          <CarLoading />
        </>
      )}
      {result ? (
        result.length !== 0 ? (
          <div className="Load_more_car_container">
            <span className="Load_more_car" onClick={() => {}}>
              نمایش ماشین‌های بیشتر
            </span>
          </div>
        ) : null
      ) : null}
    </article>
  );
};

interface IProfile_Cars {
  is_mine: boolean;
}

export default Profile_Cars;
