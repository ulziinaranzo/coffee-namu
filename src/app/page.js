"use client";
import { useState, useEffect } from "react";
import { MenuIcon } from "../../assets/MenuIcon";
import { BonusIcon } from "../../assets/IconBonus";
import { ShoppingIcon } from "../../assets/ShoppingIcon";
import { NextIcon } from "../../assets/NextIcon";
import { RightIcon } from "../../assets/RightIcon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-fit w-[1440px] m-auto flex-col">
      <div className="flex pl-[80px] pr-[80px] justify-between">
        <div className="flex gap-[8px] pt-[24px] pb-[24px]">
          <img src="/Images/image 20.png" className="h-[62px] w-[62px]" />
          <div className="flex flex-col text-[20px]">
            <div className="font-[700]">coffee namu </div>
            <div>mongolia</div>
          </div>
        </div>
        <div className="flex gap-[50px]">
          <div className="flex pt-[46.5px] pb-[29.5px] gap-[24px]">
            <div className="flex gap-[4px]">
              <MenuIcon />
              <Link href={"/menu"}>
                <div className="text-[16px]">Меню</div>
              </Link>
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
      <div className="flex relative">
        <img src="/Images/image 10.png" className="w-full h-531px" />
        <div className="flex absolute z-1 right-[162px] top-[167.62px] flex-col w-[203.62px] text-[31.5px] text-[white] font-[700] ">
          Яг одоо захиалаад авах.
        </div>
        <button className="flex absolute z-2 right-[225.12px] bottom-[152.12px] border items-center justify-center border-[#AA714A] bg-[white] p-[14.5px] text-[#AA714A] text-[18px] rounded-[5.6px] gap-[4.5px]">
          Захиалах <NextIcon />
        </button>
      </div>
      <div className="flex justify-center items-center pt-[50px] pb-[50px] w-full ">
        <div className="flex relative rounded-[15px] bg-[#F8F1E7] w-[1280px] h-[472px]">
          <img
            src="/Images/iced_mocha-removebg-preview 1.png"
            className="absolute top-[36px] w-[446px] h-[442px] z-3"
          />
          <img
            src="/Images/10-removebg-preview 1.png"
            className="absolute left-[277px] top-[107px] w-[389px] h-[389px] z-3"
          />
          <img
            src="/Images/Homescreen-portrait 1.png"
            className="absolute z-10 top-[36px] left-[217px]"
          />
          <div className="flex items-start flex-col absolute right-[140px] top-[68px] w-[419px]">
            <div className="flex flex-col font-[700] text-[32px] text-[#AA714A] w-[329px] mr-[90px]">
              Үнэгүй кофе авахад илүү амар боллоо.
            </div>
            <div className="flex flex-col w-[419px] mt-[27px]">
              <b>Coffee namu app</b> -Урамшууллын апп татаж аваад, дуртай зүйлээ
              хаанаас ч, хэзээ ч хамаагүй захиалаарай.
            </div>
            <button className="flex border items-center justify-center border-[#AA714A] bg-[white] pt-[14.5px] pb-[14.5px] pl-[14.5px] pr-[14.5px] text-[#AA714A] text-[20px] rounded-[5.6px] gap-[4.5px] 2-[173px] mt-[60px]">
              Апп татах
              <NextIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-[40px] pl-[80px] gap-[19px]">
        <div className="font-[600] text-[32px]">Онцлох бүтээгдэхүүн</div>
        <div className="font-[500] text-[16px]">
          Энэ сарын онцлох, дуусахаас өмнө захиалаарай!
        </div>
        <div className="flex gap-[20px] mt-[35px] mb-[92px]">
          <div className="flex flex-col items-center gap-[8px]">
            <img
              src="/Images/image.png"
              className="w-[305px] h-[295px] rounded-[15px]"
            />
            <div className="font-[16px] text-[16px] font-[600]">
              affogato 7.9
            </div>
          </div>
          <div className="flex flex-col items-center gap-[8px]">
            <img
              src="/Images/image (1).png"
              className="w-[305px] h-[295px] rounded-[15px]"
            />
            <div className="font-[16px] text-[16px] font-[600]">
              green tea smoothie
            </div>
          </div>
          <div className="flex flex-col items-center gap-[8px]">
            <img
              src="/Images/image (2).png"
              className="w-[305px] h-[295px] rounded-[15px]"
            />
            <div className="font-[16px] text-[16px] font-[600]">
              iced grapefruit tea
            </div>
          </div>
          <div className="flex flex-col items-center gap-[8px]">
            <img
              src="/Images/image(3).png"
              className="w-[305px] h-[295px] rounded-[15px]"
            />
            <div className="font-[16px] text-[16px] font-[600]">iced mocha</div>
          </div>
        </div>
      </div>
      <div className="flex items-start h-[361px] justify-center items-center pt-[27px] pb-[100px] bg-[#F8F1E7]">
        <img src="/Images/image 20.png" className="h-62px w-62px" />
        <div className="flex flex-col gap-[19px] mb-[53px] mt-[32px]">
          <div className="text-[24px] font-[700] text-[#28282A]">
            coffee namu mongolia
          </div>
          <div className="flex text-[18px] font-[400px] text-[#28282A] w-[400px]">
            Утас: (976)7772-4422 coffeenamumongolia@gmail.com
          </div>
          <div className="mt-[53px]">
            <img src="/Images/social icons.png" />
          </div>
        </div>
        <div className="flex flex-col gap-[25px] font-[700] ml-[287px]">
          <div className="flex text-[20px]">Бидний тухай</div>
          <div className="flex gap-[5px]">
            <RightIcon />
            Байгууллага
          </div>
          <div className="flex gap-[5px]">
            <RightIcon />
            Бүтээгдхүүн
          </div>
        </div>
        <div className="flex flex-col gap-[25px] font-[700] ml-[186px]">
          <div className="flex text-[20px]">Захиалга</div>
          <div className="flex gap-[5px]">
            <RightIcon />
            Аппликэйшн
          </div>
          <div className="flex gap-[5px]">
            <RightIcon />
            Урамшуулал
          </div>
          <div className="flex gap-[5px]">
            <RightIcon />
            Салбарууд
          </div>
        </div>
      </div>
    </div>
  );
}
