import { Stack, Box, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { colors } from "@/styles/global-info";
import CustomButton from "./CustomButton";
import Image from "next/image";
import more from "@/public/icons/more.png";

interface Props {
  img: ReactNode;
  courseName: string;
}
const ResourcesCard: React.FC<Props> = ({ img, courseName }) => {
  const { mainColor } = colors;
  return (
    <>
      <Stack
        gap="7"
        direction="column"
        wrap="wrap"
        height={{ base: "297px", '2xl': "450px", xl: "433px", sm: "297px" }}
        width={{ base: "204px", '2xl': "300px", xl: "270px", sm: "204px" }}
        alignItems="center"
        justifyContent="center"
        bgColor="#fff"
      >
        <Box
          width={{ base: "120px", '2xl': "130px", xl: "173px", sm: "120px" }}
          height={{ base: "111px", '2xl': "130px", xl: "173px", sm: "111px" }}
          bgColor={mainColor}
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          shadow="0px 11px 10px 0px rgba(0, 0, 0, 0.2)"
        >
          {img}
        </Box>
        <Box
          width={{ base: "139px", '2xl': "226px", xl: "200px", sm: "139px" }}
          height={{ base: "36px", '2xl': "56px", xl: "52px", sm: "36px" }}
        >
          <Text
            color={mainColor}
            textAlign="center"
            fontWeight="700"
            fontSize={{ base: "18px", '2xl': "23px", xl: "25px", sm: "18px" }}
            
          >
            
            {" " + courseName}
          </Text>
        </Box>
        <CustomButton
          sizeType="secondary"
          text="  المزيد...  "
          icon={<Image width={25} height={25} src={more} alt="icon" />}
          ButtonColor="green"
        />
      </Stack>
    </>
  );
};
export default ResourcesCard;
