import React from "react";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { i18n } = useTranslation();
  const changeLan = (lan) => {
    i18n.changeLanguage(lan);
  };

  const { t } = useTranslation();

  return (
    <div className="h-[15rem] w-[100%] bg-black text-slate-300 p-12">
      <h3 className="pb-8">{t("ques")}</h3>
      <div className="flex justify-between items-start">
        <ul className="">
          <li className="mb-4 border-b-2 border-slate-300 inline-block">{t("faq")}</li>
          <li className="mb-4 border-b-2 border-slate-300">{t("cookie")}</li>
        </ul>
        <ul>
          <li className="mb-4  border-b-2 border-slate-300 inline-block">
            {t("help")}
          </li>
          <li className="mb-4  border-b-2 border-slate-300">
            {t("corporate")}
          </li>
        </ul>
        <ul>
          <li className="mb-4  border-b-2 border-slate-300">
            {t("terms")}
          </li>
        </ul>
        <ul>
          <li className="mb-4  border-b-2 border-slate-300">{t("privacy")}</li>
        </ul>
      </div>
      <div>
        <select
          value={i18n.language}
          className="text-slate-300 bg-black border-2 border-slate-300 cursor-pointer"
          onChange={(e) => changeLan(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
