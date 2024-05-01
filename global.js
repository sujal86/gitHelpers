import EventEmitter from 'events';
import {R} from '.';
import fonts from './fonts';
import React from 'react';
import {View, Text} from 'react-native';
export const Emitter = new EventEmitter();

export const events = {
  isFingerprint: 'isFingerprint',
};
export const dateFormate = {
  weekDay: 'ddd, DD MMM YYYY',
  date: 'DD/MM/YYYY',
  hourMin: 'HH:MM',
  LastEditedDate: 'DD MMM YYYY  hh:mm A',
  ServerDate: 'YYYY/MM/DD',
  ServerDateDashed: 'YYYY-MM-DD',
  ServerTime: 'HH:mm',
  MonthYear: 'MM/YYYY',
  MDY: 'MM/DD/YYYY',
  hhMM: 'hh:mm',
  a: 'A',
  DayDate: 'dddd,DD',
  currentDateTime: 'YYYY-MM-DD hh:mm:ss',
};

export const keys = {
  KEY_USER_DATA: 'user_data',
  KEY_DEVICE_TOKEN: 'deviceToken',
  KEY_FINGERPRINT: 'fingerprint',
  KEY_RATE_US_NOT_NOW: 'NOT_NOW',
  KEY_RATED: 'RATED',
  KEY_RATED_DATE: 'GOOGLE_REVIEW_DATE',
  KEY_APP_OPEN_COUNT: 'App_Open_Count',
  KEY_BRANCH_DATA: 'branch_data',
  KEY_APP_SETTING_METADATA: 'app_setting_metadata',
  KEY_BUSINESS_REVIEW_DISCOUNT_ENABLED: 'business_review_discount_enabled',
  KEY_GOOGLE_REVIEW_ENABLED: 'google_review_enabled',
  KEY_MYINFO_ENABLED: 'is_myinfo_enabled',
  KEY_USER_VERIFY: 'is_user_verified',
};

export const URLs = {
  FAQ: 'FAQ',
  ABOUT_US: 'ABOUT',
  PRIVACY_POLICY: 'PP',
  TERMS_AND_CONDITIONS: 'TNC',
  DECLARATION: 'CND',
  GOOGLE_REVIEW_LINK: 'GRL',
};

export const renderEmptyCompoenent = (message, isWhite = false) => {
  return (
    <View
      style={{
        marginTop: 30,
        alignItems: 'center',
        flex: 1,
      }}>
      <Text
        numberOfLines={1}
        style={[
          {
            ...R.palette.StyleText(R.colors.white, R.palette.FontSizes.Small),
          },
        ]}>
        {message}
      </Text>
    </View>
  );
};

export const screenTagging = {
  Home: 'Home',
  Support: 'Support',
  Account: 'Account',
  Profile: 'Profile',
  Splash: 'Splash',
  Introduction: 'Introduction',
  Auth: 'Login_Screen',
  SignUp: 'SignUp',
  Login: 'Login',
  ForgotPin: 'ForgotPin',
  OtpVerification: 'Otp_Verification_Screen',
  PinFingerPrint: 'Pin_or_FingerPrint_Screen',
  OTPVerify: 'FingerprintPin',
  Welcome: 'Welcome_Screen',

  GetLoan: 'GetLoan',
  MyInfo: 'MyInfo',
  ApplicationForm: 'ApplicationForm',
  ApplyLoan: 'ApplyLoan',
  ApplyLoanStepOne: 'ApplyLoanStepOne',
  MyLoan: 'MyLoan',
  Chat: 'Chat',
  BlogSpotCardsList: 'BlogSpotCardsList',
  TransactionHistory: 'TransactionHistory',
  Payment: 'Payment',
  PaymentDetails: 'PaymentDetails',
  LoanStatus: 'LoanStatus',
  PersonalInfo: 'PersonalInfo',
  BusinessLoanForm: 'BusinessLoanForm',
  PurposeLoan: 'PurposeLoan',
  Financial: 'Financial',
  EmployeeInfo: 'EmployeeInfo',
  Requirements: 'Requirements',
  Declaration: 'Declaration',
  Notification: 'Notification',
  SupportScreen: 'SupportScreen',
  FAQ: 'FAQ',
  Contact: 'Contact',
  About: 'About',
  EditAccount: 'EditAccount',
  Settings: 'Settings',
  WebBrowser: 'WebBrowser',
  ResetPin: 'ResetPin',
  ResetPassword: 'ResetPassword',
  ConfirmResetPassword: 'ConfirmResetPassword',
  ConfirmResetPin: 'ConfirmResetPin',
  ChangeMobileNo: 'ChangeMobileNo',
  SupportThanks: 'SupportThanks',
  SupportMain: 'SupportScreen',
  BlogSpot: 'BlogSpot',
  StaticNullScreen: 'StaticNullScreen',
  PersonalMyinfo: 'PersonalMyinfo',
  ContactDetails: 'ContactDetails',
  EducationProperty: 'EducationProperty',
  NoticeAssessment: 'NoticeAssessment',
  CPFDetails: 'CPFDetails',
  EmployeeScreen: 'EmployeeScreen',
  FinancialScreen: 'FinancialScreen',
  RequirementScreen: 'RequirementScreen',
  ViewmoreScreen: 'ViewmoreScreen',
  SingPassAuth: 'SingPassAuth',
  SuccessPage: 'SuccessPage',
  EmptyNotification: 'EmptyNotification',
  DeclarationScreen: 'DeclarationScreen',
  CompanyRepresentativeInfo: 'CompanyRepresentativeInfo',
};
