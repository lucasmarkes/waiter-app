import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background-color: #fafafa;
  flex: 1;
`;

export const CategoriesContainer = styled.View`
  height: 72px;
  margin-top: 32px;
`;

export const MenuContainer = styled.View`
  flex: 1
`;

export const Footer = styled.View`
  min-height: 112px;
  background-color: #fff;
`;

export const FooterContainer = styled.SafeAreaView``;
