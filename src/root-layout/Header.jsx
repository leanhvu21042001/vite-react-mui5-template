import React from "react";
import { Badge, Divider, Stack, Tooltip } from "@mui/material";
import { useWindowScroll } from "@uidotdev/usehooks";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import DropdownMenuItem from "src/components/DropdownMenuItem";
import HeaderBoxInfo from "src/components/HeaderBoxInfo";

const menus = [
  {
    text: "Nhà đất bán",
    submenu: [
      "Bán căn hộ chung cư",
      "Bán nhà riêng",
      "Bán nhà biệt thự, liền kề",
      "Bán nhà mặt phố",
      "Bán shophouse, nhà phố thương mại",
      "Bán đất nền dự án",
      "Bán đất",
      "Bán trang trại, khu nghỉ dưỡng",
      "Bán condotel",
      "Bán kho, nhà xưởng",
      "Bán loại bất động sản khác",
    ],
  },
  {
    text: "Nhà đất cho thuê",
    submenu: [
      "Cho thuê căn hộ chung cư",
      "Cho thuê nhà riêng",
      "Cho thuê nhà biệt thự, liền kề",
      "Cho thuê nhà mặt phố",
      "Cho thuê shophouse, nhà phố thương mại",
      "Cho thuê nhà trọ, phòng trọ",
      "Cho thuê văn phòng",
      "Cho thuê, sang nhượng cửa hàng, ki ốt",
      "Cho thuê kho, nhà xưởng, đất",
      "Cho thuê loại bất động sản khác",
    ],
  },
  {
    text: "Dự án",
    submenu: [
      "Căn hộ chung cư",
      "Cao ốc văn phòng",
      "Trung tâm thương mại",
      "Khu đô thị mới",
      "Khu phức hợp",
      "Nhà ở xã hội",
      "Khu nghỉ dưỡng, Sinh thái",
      "Khu công nghiệp",
      "Biệt thự, liền kề",
      "Shophouse",
      "Nhà mặt phố",
      "Dự án khác",
    ],
  },
];

const Header = () => {
  const [{ y }] = useWindowScroll();
  const headerRef = React.useRef(null);
  const [heightImg, setHeightImg] = React.useState(48);

  React.useEffect(() => {
    const { clientHeight = 0 } = headerRef.current;
    if (y > clientHeight) {
      setHeightImg(40);
    } else {
      setHeightImg(48);
    }
  }, [y]);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        padding={
          y > headerRef?.current?.clientHeight
            ? "10px 15px 6px"
            : "17px 15px 17px"
        }
        ref={headerRef}
        position="fixed"
        zIndex={100}
        backgroundColor="#fff"
        width="100%"
      >
        <Stack
          id="header-nav-left"
          direction="row"
          spacing={2}
          alignItems="center"
          gap="5px"
        >
          <h2>
            <a href="https://batdongsan.com.vn">
              <img
                height={heightImg}
                src="https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"
                alt="Kênh thông tin mua bán, cho thuê nhà đất số 1"
                title="Batdongsan.com.vn"
              />
            </a>
          </h2>
          {menus.map((item) => (
            <DropdownMenuItem
              key={item.text}
              text={item.text}
              items={item.submenu}
            />
          ))}
        </Stack>

        <Stack
          id="header-nav-right"
          direction="row"
          spacing={2}
          alignItems="center"
          gap="5px"
        >
          <Badge badgeContent={1} color="error">
            <Tooltip title="Danh sách tin đã lưu">
              <FavoriteBorderIcon
                style={{
                  cursor: "pointer",
                  transform:
                    y > headerRef?.current?.clientHeight
                      ? "scale(0.8)"
                      : "scale(1)",
                }}
              />
            </Tooltip>
          </Badge>
          <NotificationsNoneIcon
            style={{
              cursor: "pointer",
              transform:
                y > headerRef?.current?.clientHeight
                  ? "scale(0.85)"
                  : "scale(1.05)",
            }}
          />
          <HeaderBoxInfo />
        </Stack>
      </Stack>
      <Divider
        style={{
          border: "unset",
          paddingTop: headerRef?.current?.clientHeight,
        }}
      />
    </>
  );
};

export default Header;
