import React from "react";
import { HomeButton } from "../HomeButton/HomeButton";
import { useScreenSize } from "../../hooks/useScreenSize";

export function HomeContainer({
  containerClassName,
  title,
  subtitle,
  buttonText,
  buttonSize,
  children,
}) {
  const screenSize = useScreenSize();

  return (
    <div className={`flex ${containerClassName}`}>
      <section className="flex flex-col items-center justify-center gap-2 text-center leading-tight text-black70 xl:gap-6">
        <h1 className="text-[0.75rem] font-bold text-theme xl:text-4xl">
          {title}
        </h1>
        <p className="text-[0.5rem] xl:text-2xl">{subtitle}</p>
        {buttonText && (
          <HomeButton
            sizeClass={
              screenSize < 768 ? `mobile_${buttonSize}` : `${buttonSize}`
            }
            text={buttonText}
          />
        )}
      </section>
      {children}
    </div>
  );
}
