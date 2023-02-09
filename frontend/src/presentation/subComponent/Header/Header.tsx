import styles from "./Header.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import { TLanguage } from "../../../type";
import { initLanguage, languageList } from "../../../initData";
const Header = () => {
  const navigate = useNavigate();
  const goTo = (path: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(path);
  };
  const [chosenLanguage, setChosenLanguage] = useState<TLanguage>(initLanguage);
  const [openLang, setOpenLang] = useState(false);
  const onChooseLanguage =
    (lang: TLanguage) => (_: React.MouseEvent<HTMLButtonElement>) => {
      setChosenLanguage(lang);
    };
  const handleClickLang = () => {
    setOpenLang(!openLang);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topHeaderContainer}>
        <div className={styles.topHeader}>
          <div className={styles.shipInfo}>
            <i className="fa-solid fa-truck-fast" />
            <span>free shipping for orders over $50</span>
          </div>
          <div className={styles.FAQs}>
            <span>Help and FAQs</span>
            <div className={styles.language} onClick={handleClickLang}>
              <img src={`${chosenLanguage.img}`} alt="flags" />
              <span>{chosenLanguage.name}</span>
              <i className="fa-solid fa-chevron-down" />
              {openLang ? (
                <div className={styles.langOption}>
                  <ul>
                    {languageList.map((l) => {
                      return (
                        <li key={l.id}>
                          <button
                            onClick={onChooseLanguage({
                              id: l.id,
                              img: l.img,
                              name: l.name,
                            })}>
                            <img src={l.img} alt="" />
                            <span>{l.name}</span>
                            <span className={styles.checkLang}>
                              {chosenLanguage.id === l.id ? (
                                <i className="fa-solid fa-check"></i>
                              ) : (
                                ""
                              )}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <i className="fa-solid fa-heart"></i>
          <h2 className={styles.brandName}>
            Tech
            <br />
            Foundation
          </h2>
        </div>
        <div className={styles.search}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <Input type="text" />
        </div>
        <div className={styles.btnSet}>
          <div className={styles.loginBtn}>
            <i className="fa-regular fa-user"></i>
            <button onClick={goTo(`/login`)}>Log in</button>
          </div>
          <div className={styles.wishlist}>
            <button>
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
          <div className={styles.cart}>
            <button>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
