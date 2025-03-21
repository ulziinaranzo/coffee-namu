"use client";
import { useState, useEffect } from "react";
import { MenuIcon } from "../../../assets/MenuIcon";
import { BonusIcon } from "../../../assets/IconBonus";
import { ShoppingIcon } from "../../../assets/ShoppingIcon";
import { HeartIcon } from "../../../assets/HeartIcon";
import { StarIcon } from "../../../assets/StarIcon";
import { RefreshIcon } from "../../../assets/RefreshIcon";
import { LineIcon } from "../../../assets/LineIcon";
import { HeartClickIcon } from "../../../assets/HeartClickIcon";
import { FilledHeartIcon } from "../../../assets/FilledHeartIcon";
import Link from "next/link";
import { MenuIconBrown } from "../../../assets/MenuIconBrown";

const Menu = () => {
  const [favorites, setFavorites] = useState({});

  const switchFavorite = (itemName) => {
    setFavorites((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };
  const items = [
    { name: "iced americano", img: "/Images/iced-americano.png" },
    { name: "iced latte", img: "/Images/iced-latte.png" },
    { name: "iced machhiato", img: "/Images/machhiato.png" },
    { name: "iced mocha", img: "/Images/mocha.png" },
    { name: "espresso", img: "/Images/esspresso.png" },
    { name: "affogato", img: "/Images/affogato.png" },
  ];

  const toggleHeart = (item) => {
    setHeart((prevState) => ({ ...prevState }));
  };
  return (
    <div className="flex h-fit w-[1440px] m-auto flex-col">
      <div className="flex pl-[80px] pr-[80px] justify-between">
        <Link href={"/"}>
          <div className="flex gap-[8px] pt-[24px] pb-[24px]">
            <img src="/Images/image 20.png" className="h-[62px] w-[62px]" />
            <div className="flex flex-col text-[20px]">
              <div className="font-[700]">coffee namu </div>
              <div>mongolia</div>
            </div>
          </div>
        </Link>

        <div className="flex gap-[50px]">
          <div className="flex pt-[46.5px] gap-[24px]">
            <div className="flex text-[#AA714A] font-bold gap-[4px] border-b-3">
              <MenuIconBrown />
              <div className="text-[16px]">Меню</div>
            </div>
            <div className="flex gap-[4px]">
              <BonusIcon />
              <div className="text-[16px]">Бонус</div>
            </div>
            <div className="flex gap-[4px]">
              <ShoppingIcon />
              <div className="text-[16px]">Захиалга</div>
            </div>
          </div>
          <div className="flex gap-[24px] pt-[32px] pb-[32px]">
            <button className="border items-center justify-center border-[#AA714A] pt-[14.5px] pb-[14.5px] pl-[14.5px] pr-[14.5px] text-[#AA714A] text-[16px] rounded-[15px]">
              Нэвтрэх
            </button>
            <button className="border items-center justify-center border-[#AA714A] pt-[14.5px] bg-[#AA714A] pb-[14.5px] pl-[14.5px] pr-[14.5px] text-[white] text-[16px] rounded-[15px]">
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-[79px] pl-[80px] pt-[29px] pb-[31px] bg-[#F2F2F3] gap-[24px] font-[600]">
        <div className="flex  text-[#AA714A] gap-[2px] border-b-3">
          <MenuIconBrown />
          <div className="text-[16px] ">Меню</div>
        </div>
        <div className="flex text-[black] text-[16px] gap-[2px]">
          <StarIcon /> <div className="text-[16px]">Онцлох</div>
        </div>
        <div className="flex text-[black] text-[16px] gap-[2px]">
          <RefreshIcon /> <div className="text-[16px]">Өмнөх захиалгууд</div>
        </div>
        <div className="flex text-[black] text-[16px] gap-[2px]">
          <HeartIcon /> <div className="text-[16px]">Хадгалсан</div>
        </div>
      </div>
      <div className="flex bg-[white] gap-[76px] pl-[81px] pt-[65px] pr-[83px] pb-[83px]">
        <div className="flex flex-col gap-[29.5px] ">
          <div className="text-[#AA714A] text-[24px] font-[600]">Coffee</div>
          <div className="text-[#7F7F85] text-[20px] font-[500]">Cake</div>
          <div className="text-[#7F7F85] text-[20px] font-[500]">Tea</div>
          <div className="text-[#7F7F85] text-[20px] font-[500]">Smoothie</div>
        </div>
        <div className="flex">
          <LineIcon />
        </div>

        <div className="flex flex-wrap w-fit gap-[20px] font-[600]">
          {items.map((item) => (
            <div
              className="flex relative flex-col justify-center items-center gap-[8px]"
              key={item.name}
            >
              <img
                className="w-[305px] h-[295px] rounded-[15px]"
                src={item.img}
              />
              <div
                className="absolute right-[21px] top-[16px] z-10"
                onClick={() => switchFavorite(item.name)}
              >
                {favorites[item.name] ? (
                  <FilledHeartIcon />
                ) : (
                  <HeartClickIcon />
                )}
              </div>
              <div className="text-[20px] font-[600px] text-[#28282A]">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
