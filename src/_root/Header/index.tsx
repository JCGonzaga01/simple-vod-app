import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDeviceType } from "helpers/customHooks";
import { headerLinks } from "constants/global";
import styles from "./Header.scss";

const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const deviceType = useDeviceType();
  const [isSPView, setIsSPView] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("home");

  useEffect(() => {
    if (!window.matchMedia) return;
    const mediaQuerySP = window.matchMedia("(max-width: 729px)");
    const updateMediaQuery = () => setIsSPView(mediaQuerySP.matches);
    updateMediaQuery();

    mediaQuerySP.addListener(updateMediaQuery);
    return () => mediaQuerySP.removeListener(updateMediaQuery);
  }, []);

  useEffect(() => {
    const newLocation = location.pathname.replace("/", "");
    const newSelectedItem = newLocation === "" ? "home" : newLocation;
    setSelectedMenuItem(newSelectedItem);
  }, [location]);

  const handleOnClickMenu = () => setIsOpenMenu(!isOpenMenu);

  const handleOnClickMenuItem = (e) => {
    const routeName = e.target.title.toLowerCase().replace(/ /g, "");
    history.push(`/${routeName !== "home" ? routeName : ""}`);
    if (deviceType === "sp") {
      setIsOpenMenu(!isOpenMenu);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {isSPView ? (
          <div className={styles.burgerMenu} onClick={handleOnClickMenu}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </div>
        ) : (
          <div className={styles.menu}>
            {/* <div>
              <svg className={styles.search} viewBox="0 0 20 20">
                <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
              </svg>
            </div> */}
            {headerLinks.map((text, idx) => (
              <div
                key={idx}
                className={
                  selectedMenuItem === text.toLowerCase().replace(/ /g, "")
                    ? styles.menuItemClick
                    : ""
                }
                title={text}
                onClick={handleOnClickMenuItem}
              >
                {text}
              </div>
            ))}
          </div>
        )}
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src={
              "https://firebasestorage.googleapis.com/v0/b/jc-general.appspot.com/o/simple-vod-app%2FjcTV-header.png?alt=media&token=a07dbc38-bca4-46bc-8de0-e643463ff0df"
            }
            alt={"logo"}
          />
        </div>
      </div>
      {isOpenMenu && (
        <div className={styles.menuWrapper}>
          <div className={styles.menuContainer}>
            <div className={styles.closeMenu} onClick={handleOnClickMenu}>
              <svg viewBox={"0 0 40 40"}>
                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
              </svg>
            </div>
            <div>
              <svg className={styles.search} viewBox="0 0 20 20">
                <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
              </svg>
            </div>
            {headerLinks.map((text, idx) => (
              <span
                key={idx}
                className={
                  selectedMenuItem === text.toLowerCase().replace(/ /g, "")
                    ? styles.selectedMenuItemSP
                    : ""
                }
                title={text}
                onClick={handleOnClickMenuItem}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
