import React, { useState, useEffect, useContext } from "react";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayRange, utils } from "react-modern-calendar-datepicker";

import DropdownSearch from "../../components/form/Dropdown";
import { REQUEST_GET_LOCATION } from "../../API/index";

import Router from "next/router";

import "./search.module.scss";
import Button from "../../components/form/Button";

import modal_context from "../../context/Modal_context";

const Search = () => {
  const [LocationId, setLocationId] = useState(1);
  const [dayRange, setDayRange] = React.useState<DayRange>({
    from: null,
    to: null
  });
  const [locationsList, setLocationsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const MODAL_CONTEXT = useContext(modal_context);

  const get_car_location = async () => {
    const res: any = await REQUEST_GET_LOCATION();
    setLocationsList(res.citiesFarsi);
  };

  useEffect(() => {
    get_car_location();
  }, []);

  const GotoSearchResult = e => {
    e.preventDefault();
    setLoading(true);
    Router.push({
      pathname: "/search-result",
      query: {
        location_id: LocationId,
        start_date: `${dayRange.from.year}/${dayRange.from.month}/${dayRange.from.day}`,
        end_date: `${dayRange.to.year}/${dayRange.to.month}/${dayRange.to.day}`
      }
    });
  };

  return (
    <section className="search_box">
      <form onSubmit={e => GotoSearchResult(e)}>
        <div className="search_box_div">
          <p>خودرو خود را کجا تحویل میگیرید؟</p>
          <DropdownSearch
            data={locationsList}
            InputDisable={true}
            // defaultVal="تهران"
            hardValue = "تهران"
            Select={i => {
              // setLocationId(i.key);
              localStorage["User_Location"] = JSON.stringify(i);
              MODAL_CONTEXT.modalHandler("TellMe");
            }}
            clearField={() => setLocationId(1)}
          />
        </div>
        <div className="search_box_div">
          <p>انتخاب تاریخ تحویل و بازگشت خودرو</p>
          <DatePicker
            inputPlaceholder="از تاریخ تا تاریخ"
            value={dayRange}
            onChange={setDayRange}
            shouldHighlightWeekends
            minimumDate={utils("fa").getToday()}
            locale="fa"
            colorPrimary="#4ba3ce"
            disabledDays={[utils("fa").getToday()]}
          />
        </div>
        <div className="search_box_div">
          <p className="Search_Text_transparent">search</p>
          <Button value="جستجو" class="Blue_BTN search_Btn" loading={loading} />
        </div>
      </form>
    </section>
  );
};

export default Search;
