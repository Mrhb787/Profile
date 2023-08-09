import {useState, useEffect, Fragment} from "react";
import {Stack} from "@mui/material";
import {NavLinkNames} from "../../assets/constants";
import {currentSection} from "../../assets/utils";

const NavLink = ({name, active = false, setActive}) => {
  return (
    <a href={"#" + name} onClick={() => setActive(name)}>
      <div className={active ? "navlink navlink-active" : "navlink"}>
        {name}
      </div>
    </a>
  );
};

const NavLinkProvider = () => {
  // states
  const [active, setActive] = useState(currentSection(window.location.hash));
  const [, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    const activeSection = Math.round(position / window.innerHeight);
    setActive(NavLinkNames[activeSection]);
  };

  useEffect(() => {
    window.scrollTo(
      0,
      window.innerHeight *
        NavLinkNames.findIndex(
          (link) => link === currentSection(window.location.hash)
        )
    );
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Stack direction="row" spacing={2}>
      {NavLinkNames.map((link) => {
        return (
          <Fragment key={link}>
            <NavLink
              name={link}
              active={active === link}
              setActive={setActive}
            />
          </Fragment>
        );
      })}
    </Stack>
  );
};

export default NavLinkProvider;
