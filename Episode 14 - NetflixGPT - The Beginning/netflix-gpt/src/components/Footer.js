import React from "react";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { i18n } = useTranslation();
  const changeLan = (lan) => {
    i18n.changeLanguage(lan);
  };

  return (
    <div className="h-[15rem] w-[100%] bg-black text-slate-300 p-12">
      <h3 className="pb-8">Questions? Call 000-800-919-1694</h3>
      <div className="flex justify-between items-start">
        <ul className="">
          <li className="mb-4 border-b-2 border-slate-300 inline-block">FAQ</li>
          <li className="mb-4 border-b-2 border-slate-300">
            Cookie Preferences
          </li>
        </ul>
        <ul>
          <li className="mb-4  border-b-2 border-slate-300 inline-block">
            Help Centre
          </li>
          <li className="mb-4  border-b-2 border-slate-300">
            Corporate Information
          </li>
        </ul>
        <ul>
          <li className="mb-4  border-b-2 border-slate-300">Terms of Use</li>
        </ul>
        <ul>
          <li className="mb-4  border-b-2 border-slate-300">Privacy</li>
        </ul>
      </div>
      <div>
        <select
          className="text-slate-300 bg-black"
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
