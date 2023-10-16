import { SW, SH, SF, Fonts } from '../../Utiles'
import { StyleSheet, Platform } from 'react-native';

export default DownloadCertificateStyle = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minstyleviewphotograpgytwo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  inputUnderLine: {
    backgroundColor: 'white',
    width: '100%',
    color: 'black',
    borderRadius: SH(7),
    shadowColor: Colors.black_text_color,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: SH(12),
    height: 50,
    marginBottom: SH(12),
    paddingRight: SH(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  inputUnderLinereviews: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    color: Colors.black_text_color,
    borderRadius: SH(7),
    shadowColor: Colors.black_text_color,
    fontFamily: Fonts.DMSans_Medium,
    paddingLeft: SH(12),
    marginBottom: SH(12),
    paddingVertical: SH(20),
    paddingRight: SH(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  textpassworedsert: {
    color: Colors.black_text_color,
    fontFamily: 'DMSans-Medium',
    width: '80%',
  },
  inputspaceset: {
    marginTop: '8%'
  },
  signuptextview: {
    textAlign: 'center',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: SH(12),
    paddingHorizontal: SH(5)
  },
  signintextset: {
    fontSize: SF(30),
    paddingBottom: SH(15),
    paddingLeft: SH(5),
    color: Colors.theme_backgound,
    fontFamily: Fonts.DMSans_Medium,
    textAlign: 'center'
  },

  accountbutton: {
    width: '100%',
    marginTop: SH(10),
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
  buttonTextStyleSignWithNumber: {
    backgroundColor: Colors.white_text_color,
    color: Colors.theme_backgound,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(18),
  },
  buttonTextStyleSignWithNumber2: {
    color: Colors.white_text_color,
    fontFamily: Fonts.DMSans_Medium,
    fontSize: SF(18),
  },
  inputviewset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  eyeiconset: {
    color: Colors.gray_text_color
  },
  accounttext: {
    color: Colors.black_text_color,
    fontSize: SF(25),
    fontFamily: Fonts.DMSans_Medium,
    textAlign: 'center'
  },
  accounttexttwo: {
    color: Colors.black_text_color,
    fontSize: SF(23),
    fontFamily: Fonts.DMSans_Medium,
    textAlign: 'center'
  },
  succefullimgviewsethre: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  accounttextsuccessfully: {
    fontSize: SF(17),
    textAlign: 'center',
    fontFamily: 'DMSans-Medium',
    paddingVertical: SH(20),
    color: Colors.gray_text_color
  },
  accounttextsuccessfullytwo: {
    fontSize: SF(17),
    textAlign: 'center',
    fontFamily: Fonts.DMSans_Medium,
    paddingBottom: SH(20),
    color: Colors.gray_text_color
  },
  succefullyimg: {
    width: SW(330),
    height: SH(230),
  },
  succefullimgview: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: SH(25),
    marginTop: SH(-40),
  },
  succefullimgviewtwo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: SH(25),
  },
  flexrowsetstarsignup: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: SH(15)
  },
  positionsetstyleinput: {
    position: 'relative',
    top: SH(-25),
  },
  starimagestyle: {
    width: SW(80),
    height: SH(170),
    tintColor: Colors.red_color_set
  },
  succefullimgviewsrtwo: {
    marginBottom: SH(40),
  }
});
