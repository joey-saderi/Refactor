import React from "react";
import { NextSeo } from "next-seo";
import Layout from "../src/Layout";

const evaluation = () => {
  return (
    <Layout showToTop={true}>
      <NextSeo
        title="اعتبار سنجی مشتریان | اتولی"
        description="اتولی با سیستم اعتبارسنجی مورد تایید بانک مرکزی، مشتریان (مهمان) را از نظر سوابق و رفتار مالی در هشت سال گذشته را بررسی می‌کند "
        openGraph={{
          title: "اعتبار سنجی مشتریان | اتولی",
          description:
            "اتولی با سیستم اعتبارسنجی مورد تایید بانک مرکزی، مشتریان (مهمان) را از نظر سوابق و رفتار مالی در هشت سال گذشته را بررسی می‌کند ",
        }}
        twitter={{
          handle: "@otoli_net",
          site: "@otoli_net",
          cardType: "summary_large_image",
        }}
      />
      {/* Most of the static pages have a same class named 'static_pages' which set some common style for the main wrapper box*/}
      <article className="responsive static_pages minHeight">
        <h1>اعتبارسنجی مشتریان</h1>
        <p>
          اتولی با سیستم اعتبارسنجی مورد تایید بانک مرکزی، مشتریان
          (مهمان) را از نظر سوابق و رفتار مالی در هشت سال گذشته را
          بررسی می‌کند و گزارشی از جزییات این بررسی را در اختیار میزبان
          می‌گذارد که تصمیم‌گیری مناسب‌تری در قبول یا رد درخواست مشتری برای
          اجاره خودرو داشته باشد.
        </p>
        <p>در این گزارش موارد زیر از رفتار مالی مشتری مشخص می‌شود:</p>
        <ul>
          <li>
            اطلاعات کامل هویتی مشتری از شبکه بانکی، براساس تاریخ آخرین به
            روزرسانی اطلاعات هر بانک
          </li>
          <li>
            وضعیت بازپرداخت تمام تسهیلات و وام‌های دریافتی از بانک‌ها و موسسات
            اعتباری- مالی
          </li>
          <li>چک‌های برگشتی</li>
          <li>گزارش کامل از وضعیت ضامن بودن مشتری</li>
          <li>بدهی‌های مالیاتی</li>
          <li>ارائه رتبه اعتباری مشتری توسط تمامی بانک‌ها</li>
        </ul>
        <p>
          و در نهایت یک رتبه اعتباری که یک عدد بین ۰ تا ۹۰۰ است برای هر شخص
          تعیین می‌شود، هر چه این عدد بیشتر باشد، وضعیت اعتباری فرد وضعیت بهتری
          دارد و ریسک اجاره ماشین به این شخص کمتر است. با توجه به فعالیت‌های
          مالی هر شخص گزارش اعتباری متفاوتی می‌تواند ارائه شود که این گزارش‌ها
          شامل موارد زیر است:
        </p>
        <ul>
          <li>گزارش اعتباری کامل</li>
          <li>
            گزارش اعتباری دارای اطلاعات هویتی، سابقه رفتار مالی، بدون نمره منفی
          </li>
          <li>
            گزارش اعتباری دارای اطلاعات هویتی، بدون هیچگونه سابقه رفتار مالی
          </li>
        </ul>
        <p>
          رفتار و سوابق مالی مشتریان با سیستم اعتبارسنجی موردتایید بانک مرکزی
          بررسی می‌شود و میزان بدهی‌های مالی، چک‌های برگشتی، وضعیت بازپرداخت
          تسهیلات و وام‌ها و همین‌طور وضعیت ضمانت مشتری در سیستم بانکی مشخص
          می‌شود.
        </p>
      </article>
    </Layout>
  );
};

export default evaluation;