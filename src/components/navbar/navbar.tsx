import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeLogo,
  BurgerLogo,
  ExitLogo,
  ProfLogo,
  FinansLogo,
  PolyLogo,
  FindLogo,
  VideoLogo,
  TablesLogo,
  CalendarLogo,
  MapLogo,
  OptionsLogo,
} from "../../data/svg";
import "./navbar.scss";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <BurgerLogo
        onClick={() => {
          setShow(true);
        }}
        className="burger"
      />
      <div className={show ? "navbar" : "navbar hidden"}>
        <h2 className={"navbar-menu"}>Меню</h2>
        <ul className={"navbar-list"}>
          <li className={"navbar-item"}>
            <HomeLogo className="menu-logo" />
            <NavLink
              onClick={() => {
                setShow(false);
              }}
              className={(isActive) => {
                return "navbar-link" + (!isActive.isActive ? "" : " active");
              }}
              to="/home"
            >
              Главная
            </NavLink>
          </li>
          <li className={"navbar-item"}>
            <FindLogo className="menu-logo" />
            <NavLink
              onClick={() => {
                setShow(false);
              }}
              className={(isActive) =>
                "navbar-link" + (!isActive.isActive ? " unselected" : " active")
              }
              to="/address"
            >
              Поиск адресов
            </NavLink>
          </li>
          <li className={"navbar-item"}>
            <TablesLogo className="menu-logo" />
            <NavLink
              onClick={() => {
                setShow(false);
              }}
              className={(isActive) =>
                "navbar-link" + (!isActive.isActive ? " unselected" : " active")
              }
              to="/table"
            >
              Таблицы
            </NavLink>
          </li>
          <li className={"navbar-item"}>
            <CalendarLogo className="menu-logo" />
            <NavLink
              onClick={() => {
                setShow(false);
              }}
              className={(isActive) =>
                "navbar-link" + (!isActive.isActive ? " unselected" : " active")
              }
              to="/calendar"
            >
              Календарь
            </NavLink>
          </li>
          <li className={"navbar-item"}>
            <MapLogo className="menu-logo" />
            <NavLink
              onClick={() => {
                setShow(false);
              }}
              className={(isActive) =>
                "navbar-link" + (!isActive.isActive ? " unselected" : " active")
              }
              to="/maps"
            >
              Карты
            </NavLink>
          </li>
          <li className={"navbar-item"}>
            <VideoLogo className="menu-logo" />
            <NavLink
              onClick={() => {
                setShow(false);
              }}
              className={(isActive) =>
                "navbar-link" + (!isActive.isActive ? " unselected" : " active")
              }
              to="/widgets"
            >
              Виджеты
            </NavLink>
          </li>
          <div>
            <li className={"navbar-item"}>
              <OptionsLogo className="menu-logo" />
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                type={"button"}
                className={"navbar-button"}
              >
                <span className={"option-wrap"}>
                  Настройки{" "}
                  <PolyLogo className={isOpen ? "poly open" : "poly"} />
                </span>
              </button>
            </li>

            {isOpen && (
              <>
                <li className={"navbar-item  sub-menu"}>
                  <ProfLogo className="menu-logo" />
                  <NavLink
                    onClick={() => {
                      setShow(false);
                    }}
                    className={(isActive) =>
                      "navbar-link" +
                      (!isActive.isActive ? " unselected" : " active")
                    }
                    to="/user-options"
                  >
                    Настройки профиля
                  </NavLink>
                </li>
                <li className={"navbar-item sub-menu"}>
                  <FinansLogo className="menu-logo" />
                  <NavLink
                    onClick={() => {
                      setShow(false);
                    }}
                    className={(isActive) =>
                      "navbar-link" +
                      (!isActive.isActive ? " unselected" : " active")
                    }
                    to="/finans"
                  >
                    Управление финансами
                  </NavLink>
                </li>
              </>
            )}
          </div>
          <li className={"navbar-item"}>
            <ExitLogo className="menu-logo" />
            <NavLink
              onClick={() => {
                setShow(false);
              }}
              className={(isActive) =>
                "navbar-link" + (!isActive.isActive ? " unselected" : " active")
              }
              to="/exit"
            >
              Выход
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
