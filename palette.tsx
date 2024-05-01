import colors from './colors';
import {
  ImageStyle,
  ViewStyle,
  TextStyle,
  FlexStyle,
  Platform,
} from 'react-native';
import fonts from './fonts';
import { Colors } from 'react-native-elements';
export enum FontSizes {
  Header = 30,
  UserName = 24,
  Title = 20,
  Large = 18,
  Medium = 16,
  Small = 14,
  SubTitle = 12,
  SubTitleS = 11,
  SubSmallTitle = 10,
  verySmall = 8,
}
export enum ButtonSizes {
  small = 34,
  normal = 44,
  large = 60,
}
export type StyleType = ViewStyle | TextStyle | ImageStyle | FlexStyle | any;

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export enum FontFamily {
  RalewayBold = 'Roboto-Bold',
  RalewayMedium = 'Roboto-Medium',
  RalewayRegular = 'Roboto-Regular',
}

export const centerHorizontal = { alignItems: 'center' };
export const centerVertical = { justifyContent: 'center' };
export const fillParent = { flex: 1 };
export const fillParentAlignItem = { ...fillParent, ...centerHorizontal };
export const flexDirRow = { flexDirection: 'row' };
export const flexHorizontalBetween = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  ...centerHorizontal,
};
export const flexHorizontal = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  ...centerHorizontal,
};
export const flexRowBtn = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  ...centerHorizontal,
};
export const flexRow = { flexDirection: 'row', ...centerHorizontal };
export const centerInPatentFlex = {
  ...centerHorizontal,
  ...centerVertical,
  ...fillParent,
};
export const centerInPatent = { ...centerHorizontal, ...centerVertical };
export const fillWidth = { width: '100%' };
export const fillHeight = { height: '100%' };

export const SetImageHW = (val1: number, val2: number, val3: string) => {
  return { height: val1, width: val2, resizeMode: val3 };
};

export const holder = {
  ...centerHorizontal,
  // backgroundColor: '#6ad1df',
  ...centerVertical,
  // height: 5,
  marginTop: 10,
  marginBottom: 15,
  marginHorizontal: 165,
};

export const setHeight = (value: number) => {
  return { height: value };
};


export const setBGColor = (value: string) => {
  return { backgroundColor: value };
};

export const setBorderRadius = (value: number) => {
  return { borderRadius: value };
};

export const setBorderWidth = (value: number) => {
  return { borderWidth: value };
};

export const setBorderColor = (value: string) => {
  return { borderColor: value };
};

export const setAlignSelf = (value: string) => {
  return { alignSelf: value };
};

export const setColor = (value: string) => {
  return { color: value };
};
export const setFontSize = (value: FontSizes) => {
  return { fontSize: value };
};
export const setFontWeight = (value: FontWeight) => {
  return { fontWeight: value };
};

export const setFontFamily = (value: FontFamily) => {
  return { fontFamily: value };
};

export const StyleContainer = (bgColor: string = colors.white): StyleType => {
  return {
    ...fillParent,
    ...setBGColor(bgColor),
  };
};

export const StyleText = (
  textColor: string = colors.white,
  fontSize: FontSizes = FontSizes.Medium,
  weight: FontWeight = 'bold',
  fontFamily: FontFamily = FontFamily.RalewayRegular,
): StyleType => {
  return {
    ...setFontSize(fontSize),
    ...setColor(textColor),
    ...setFontWeight(weight),
    ...setFontFamily(fontFamily),
  };
};



export const TextField = (containerStyle: StyleType, style: StyleType) => {
  let selectionColor =
    Platform.OS == 'ios' ? (style && style.color) ?? colors.white : undefined;
  return {
    enableErrors: true,
    useTopErrors: true,
    validateOnChange: true,
    title: ' ',
    placeholderTextColor: colors.black,
    autoCapitalize: 'none',
    autoCorrect: false,
    clearButtonMode: 'while-editing',
    hideUnderline: true,
    containerStyle: containerStyle,
    selectionColor: selectionColor,
    style: {
      height: 44,
      ...setColor(colors.white),
      color: colors.white,
      borderWidth: 1,
      borderColor: colors.white,
      borderRadius: 3,
      paddingLeft: 10,
      textAlignVertical: 'center',
      ...fillWidth,
      ...style,
    },
  };
};

//new design
export const StyleBtnLabelPrimary = (
  textColor: string = colors.themeColor.white,
  fontSize: FontSizes = FontSizes.Medium,
  weight: FontWeight = 'bold',
  fontFamily: FontFamily = FontFamily.RalewayRegular,
  // backgroundColor: string = colors.themeColor.primaryColor,
): StyleType => {
  return {
    ...setColor(textColor),
    ...setFontSize(fontSize),
    ...setFontWeight(weight),
    ...setFontFamily(fontFamily),
    // ...setBGColor(backgroundColor)
  };
};


// borderRadius: 5, marginTop: 10, alignSelf: 'center'
export const StyleBtnPrimary = (
  // textColor: string = colors.themeColor.white,
  // fontSize: FontSizes = FontSizes.Medium,
  // weight: FontWeight = 'bold',
  // fontFamily: FontFamily = FontFamily.RalewayRegular,
  height: number = 50,
  backgroundColor: string = colors.themeColor.primaryColor,
  borderRadius: number = 30,
  borderWidth: number = 1,
  borderColor: string = colors.themeColor.primaryColor,
  alignSelf:  string = 'center'
): StyleType => {
  return {
    ...setHeight(height),
    ...setBGColor(backgroundColor),
    ...setBorderRadius(borderRadius),
    ...setBorderWidth(borderWidth),
    ...setBorderColor(borderColor),
    ...setAlignSelf(alignSelf),
    
  };
};


export const StyleTitle = (
  fontSize: FontSizes = FontSizes.Large,
  textColor: string = colors.themeColor.secondaryColor,
  fontFamily: FontFamily = FontFamily.RalewayBold,
): StyleType => {
  return {
    ...setFontSize(fontSize),
    ...setColor(textColor),
    ...setFontFamily(fontFamily),
  };
};


export const StyleSubTitle = (
  fontSize: FontSizes = FontSizes.Small,
  textColor: string = colors.themeColor.secondaryColor,
  fontFamily: FontFamily = FontFamily.RalewayRegular,
): StyleType => {
  return {
    ...setFontSize(fontSize),
    ...setColor(textColor),
    ...setFontFamily(fontFamily),
  };
};

export const StyleBoldLable = (
  fontSize: FontSizes = FontSizes.Medium,
  textColor: string = colors.themeColor.secondaryColor,
  fontFamily: FontFamily = FontFamily.RalewayBold,
  // weight: FontWeight = 'bold',
): StyleType => {
  return {
    ...setFontSize(fontSize),
    ...setColor(textColor),
    ...setFontFamily(fontFamily),
    // ...setFontWeight(weight),
  };
};

export const StyleRegularLable = (
  fontSize: FontSizes = FontSizes.Medium,
  textColor: string = colors.themeColor.secondaryColor,
  fontFamily: FontFamily = FontFamily.RalewayRegular,
): StyleType => {
  return {
    ...setFontSize(fontSize),
    ...setColor(textColor),
    ...setFontFamily(fontFamily),
  };
};

