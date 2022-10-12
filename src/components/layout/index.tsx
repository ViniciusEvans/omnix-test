import { Outlet } from "react-router-dom";
import DesktopLogo from "../../assets/omnix-desktop.svg";
import MobileLogo from "../../assets/omnix-mobile.svg";
import "./style.scss";

export function Layout() {
  const largura = window.screen.width;

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="logo">
          <img
            src={largura <= 1023 ? MobileLogo : DesktopLogo}
            alt={largura <= 1023 ? "mobile logo" : "desktop logo"}
          />
        </div>
      </header>
      <Outlet />
    </div>
  );
}
