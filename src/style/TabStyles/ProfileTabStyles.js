import { StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH } from '../../Utiles';

export default ProfileTabStyles = (Colors) => StyleSheet.create({
  whilistminbody: {
    width: '100%',
    marginTop: '5%',
    height: '100%'
  },
  ImagCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  ImageStyles: {
    width: SW(100),
    height: SH(105),
    borderRadius: SH(200)
  },
  UserName: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontSize: SF(18),
    paddingTop: SH(10)
  },
  ProfileDetailesMinview: {
    width: '90%',
    marginHorizontal: '5%',
  },
  PhoneNumberAndIcon: {
    marginTop: '0%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: SH(13),
  },
  BgWhiteShadow: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    textAlign: 'center',
    height: SH(60),
    borderRadius: 7,
    paddingHorizontal: SH(10),
    justifyContent: 'center',
    shadowColor: "#000",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      width: SW(0),
      height: SH(25),
    },
    shadowOpacity: 0.58,
    shadowRadius: SH(25),
    elevation: 2,
  },
  BgWhiteShadowInputModal: {
    width: '100%',
    height: SH(50),
    borderRadius: SH(7),
    paddingLeft: SH(10),
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    paddingRight: SH(10),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white_text_color,
    shadowColor: Colors.gray_text_color,
    shadowOffset: {
      width: SW(0),
      height: SH(25),
    },
    shadowOpacity: 0.58,
    shadowRadius: SH(25),
    elevation: 2,
    overflow: 'hidden',
    borderRadius: SH(7),
    textAlignVertical: 'bottom'
  },
  EditProFile: {
    marginTop: '8%',
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontSize: SF(19),
    paddingBottom: SH(13),
  },
  PhoneNumberText: {
    color: Colors.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
  },
  DigitNumberText: {
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
  },
  LogOutView: {
    textAlign: 'center',
    color: Colors.black_text_color,
    borderBottomColor: Colors.black_text_color,
    fontSize: SF(20),
    fontFamily: Fonts.Poppins_Medium,
    paddingBottom: SH(15),
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gray_text_color,
  },
  IconClose: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: SH(-15),
  },
  ModalView: {
    backgroundColor: Colors.white_text_color,
    borderRadius: SH(10),
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ShadowStyleModalTwo: {
    padding: SH(2),
    width: '100%',
  },
  AllPaddingModal: {
    paddingTop: SH(30),
    paddingBottom: SH(15),
    paddingHorizontal: SH(15),
    borderRadius: SH(100),
  },
  ModalText: {
    textAlign: 'center',
    color: Colors.black_text_color,
    fontSize: SF(22),
    fontFamily: Fonts.Poppins_Medium,
  },
  MarginRightView: {
    width: '48%'
  },
  Marginright: {
    width: '48%'
  },
  input: {
    fontFamily: Fonts.Poppins_Medium,
    // height: 40,
    width: '100%',
    fontSize: SF(17),
  },
  ButtonsetModleTwoButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: SH(20)
  },
  spaceview: {
    paddingTop: SH(12),
  },
  InputUnderLine: {
    backgroundColor: Colors.white_text_color,
    width: Platform.OS === 'ios' ? '100%' : '100%',
    height: SH(50),
    paddingRight: SH(20),
    borderRadius: SH(7),
    flexDirection: 'row',
    fontFamily: Fonts.Poppins_Medium,
    width: '100%',
    backgroundColor: Colors.white_text_color,
    shadowColor: Colors.gray_text_color,
    shadowOffset: {
      width: SW(0),
      height: SH(5),
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    overflow: 'hidden',
    borderRadius: SH(7),
  },
  InputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  TextPasswored: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    width: '100%',
    fontSize: SF(16),
  },
  SingleButtonStyles: {
    borderColor: Colors.black_text_color,
    backgroundColor: Colors.white_text_color,
    borderWidth: SH(1),
  },
  IconAndTextFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  SingleButtonText: {
    color: Colors.black_text_color
  }
});