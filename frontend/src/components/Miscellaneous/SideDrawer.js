import { Box, Button, Tooltip, Text, Menu, MenuButton } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip
          label="Search User From Chat Pool"
          placement="bottom-end"
          hasArrow
        >
          <Button variant="ghost">
            <i class="fas fa-search"></i>
            <Text fontSize="sm" d={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontWeight={"extrabold"} fontFamily="Work sans">
          Chat Pool
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2xl" m={1}/>
            </MenuButton>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;
