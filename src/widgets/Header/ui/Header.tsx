import React, { useEffect } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import Logo from "shared/assets/icons/stat-performance.svg";
import CartLogo from "shared/assets/icons/cart_logo.svg";
import SearchLogo from "shared/assets/icons/search_logo.svg";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      data-testid="header"
      className={classNames(styles.bg_color, {}, [, styles[theme]])}
    >
      <div className="container">
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className={styles.nav_list}>
            <ul>
              <li>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/shop">
                  Магазин
                </AppLink>
              </li>
              <li>
                <AppLink
                  data-testid="header_link"
                  theme={AppLinkTheme.PRIMARY}
                  to="/about"
                >
                  Услуги
                </AppLink>
              </li>
              <li>
                <AppLink theme={AppLinkTheme.PRIMARY} to="delivery">
                  Доставка
                </AppLink>
              </li>
              <li>
                <AppLink theme={AppLinkTheme.PRIMARY} to="partnership">
                  Сотрудничество
                </AppLink>
              </li>
              <li>
                <AppLink theme={AppLinkTheme.PRIMARY} to="news">
                  Новости
                </AppLink>
              </li>
              <li>
                <AppLink theme={AppLinkTheme.PRIMARY} to="contacts">
                  Контакты
                </AppLink>
              </li>
            </ul>
          </div>

          <div className={styles.nav_btn}>
            <div>
              <AppLink to="/cart">
                <CartLogo />
              </AppLink>
            </div>
            <div>
              <SearchLogo />
            </div>
            <div>
              <button onClick={toggleTheme}>Toogle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
