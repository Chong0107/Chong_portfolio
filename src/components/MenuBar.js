import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Icon,
  Popover,
  PopoverTrigger,
  useDisclosure,
  Image,
  Collapse,
  Spacer,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import logo from "../assets/icon.png";
import "../components/style.css";

const scrollToSection = (href) => {
    if (href && href.startsWith("#")) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

const MenuBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box className="menu-bar" position="fixed" zIndex="2" w="100%" bg="transparent">
      <Flex
        color="gray.600"
        minH={"60px"}
        py={2}
        px={4}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor="transparent"
        align={"center"}
        bg="transparent" // Ensures background is transparent
      >
        {/* Hamburger for mobile */}
        <Flex flex={1} display={{ base: "flex", lg: "none" }}>
          <Image src={logo} alt="Logo" h={50} />
          <Spacer />
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color={"yellow"} />
              ) : (
                <HamburgerIcon w={5} h={5} color={"yellow"} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        {/* Logo */}
        <Flex
          flex={1}
          justify={{ lg: "start" }}
          display={{ base: "none", lg: "flex" }}
        >
          <Image src={logo} alt="Logo" h={50} ml={5} mt={3} />

          {/* Desktop Nav */}
          <Flex display={{ base: "none", lg: "flex" }} ml={10} mt={5}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      {/* Mobile Nav */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = "white";
  const linkHoverColor = "white";
  const activeLinkColor = "yellow";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={navItem.label === "Home" ? activeLinkColor : linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                onClick={() => scrollToSection(navItem.href)}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Box>
      <Stack p={4} display={{ lg: "none" }} bg="black">
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </Box>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
          color: label === "Home" ? "yellow" : "white",
        }}
        bg="black"
        onClick={() => scrollToSection(href)}
      >
        <Text fontWeight={600} color={label === "Home" ? "yellow" : "white"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"transparent"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} onClick={() => scrollToSection(href)}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About Me",
    href: "#aboutMe",
  },
  {
    label: "Work Experiences",
    href: "#workExperiences",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact Me",
    href: "#contactMe",
  },
];

export default MenuBar;
