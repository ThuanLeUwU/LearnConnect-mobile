import { Fonts, SF, SH, SW } from '../../Utiles';
import { StyleSheet, Platform } from 'react-native';

export default CongratulationStyle = (Colors) => StyleSheet.create({

  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  minviewsigninscreen: {
    width: '100%',
    paddingHorizontal: SH(10),
    paddingRight: SH(15),
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minflexview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  inputUnderLine: {
    backgroundColor: Colors.white_text_color,
    color: Colors.black_text_color,
    width: '100%',
    height: SH(50),
    flexDirection: 'row',
    borderRadius: SH(7),
    shadowColor: Colors.black_text_color,
    paddingLeft: SH(12),
    paddingRight: SH(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  inputspaceset: {
    marginTop: '8%'
  },
  eyeiconset: {
    color: Colors.gray_text_color,
  },
  signuptextview: {
    textAlign: 'center',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: SH(17),
    paddingHorizontal: SH(5),
  },
  signintextset: {
    fontSize: SF(30),
    paddingBottom: SH(15),
    paddingLeft: SH(5),
    fontFamily: Fonts.DMSans_Medium,
    textAlign: 'center'
  },
  minviewallsetus: {
    marginTop: '10%',
  },
  accountbutton: {
    width: '100%',
    marginBottom: SH(15),
  },
  buttonset: {
    borderWidth: SH(1),
    borderColor: Colors.theme_backgound,
    backgroundColor: Colors.theme_backgound,
    width: '100%',
    borderRadius: SH(7),
    height: SH(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  loginwithfacbookminview: {
    marginTop: '5%',
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  accountbuttontwo: {
    width: '91%',
    marginBottom: SH(25),
    marginRight: SH(15),
  },
  fackbbokbutton: {
    borderWidth: SH(1),
    borderColor: Colors.theme_backgound,
    backgroundColor: Colors.theme_backgound,
    width: '92%',
    borderRadius: SH(7),
    height: SH(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginwithgooglesettextview: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextStyleSignWithNumbericon: {
    backgroundColor: Colors.white_text_color,
    color: Colors.theme_backgound,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(35),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTextStyleSignWithNumber2icon: {
    color: Colors.white_text_color,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(35),
  },
  buttonTextStyleSignWithNumber: {
    backgroundColor: Colors.white_text_color,
    color: Colors.theme_backgound,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(18),
  },
  buttonTextStyleSignWithNumbericon: {
    color: Colors.theme_backgound,
  },
  buttonTextStyleSignWithNumber2: {
    color: Colors.white_text_color,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(18),
  },
  loginwithgooglewhiteshadow: {
    backgroundColor: Colors.white_text_color,
    width: '92%',
    textAlign: 'center',
    height: SH(50),
    borderRadius: SH(7),
    justifyContent: 'center',
    shadowColor: Colors.black_text_color,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  buttonTextStylegoogle: {
    backgroundColor: Colors.white_text_color,
    color: Colors.theme_backgound,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(18),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTextStyleSgoogle2: {
    color: Colors.black_text_color,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(18),
  },
  imagstyle: {
    width: SW(50),
    height: SH(40),
    marginRight: SH(10),
  },
  signuptext: {
    color: Colors.gray_text_color,
    textAlign: 'center',
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(18),
  },
  signupbold: {
    color: Colors.black_text_color,
    fontFamily: Fonts.DMSans_Medium,
  },
  inputviewset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textpassworedsert: {
    color: "black",
    fontFamily: 'DMSans-Medium',
    width: '80%',
  },
  spaceview: {
    marginTop: SH(20),
  },

  googlebuttonmstyleset: {
    borderWidth: SH(0),
    backgroundColor: Colors.white_text_color,
    width: '100%',
    textAlign: 'center',
    height: SH(50),
    borderRadius: 7,
    justifyContent: 'center',
    shadowColor: Colors.black_text_color,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 1,
  },
  settwobuttonwidth: {
    width: '47%',
  },
  signintextstyle: {
    color: Colors.theme_backgound,
    fontFamily: Fonts.Poppins_Bold,
    fontSize: SF(28),
    fontWeight: '600',
    paddingLeft: SH(15)
  },
  allsidepadding: {
    paddingHorizontal: SH(15)
  },
  succefullyimg: {
    height: SW(260),
    width: SW(260)
  },
  succefullimgviewtwo: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  accounttext: {
    color: Colors.theme_backgound,
    textAlign: 'center',
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(28),
  },
  accounttextsuccessfully: {
    color: Colors.gray_text_color,
    textAlign: 'center',
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(19),
  }
});
