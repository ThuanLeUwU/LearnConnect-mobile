
import { StyleSheet } from 'react-native';
import { SF, SW, SH, Fonts } from '../../Utiles';

export default ExamScreenStyle = (Colors) => StyleSheet.create({

  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minviewsigninscreen: {
    width: '92%',
    marginHorizontal: '5%',
    height: '100%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',

  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',

  },
  examtitle: {
    color: Colors.black_text_color,
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium
  },
  colorback: {
    color: Colors.black_text_color,
  },
  inputUnderLine: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    height: SH(50),
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: SH(7),
    shadowColor: Colors.black_text_color,
    paddingHorizontal: SH(15),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  inputviewset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    fontFamily: Fonts.Poppins_Medium,
  },
  searchbgcolorset: {
    marginTop: SH(8),
  },
  whiteboxwhishlist: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    height: SH(110),
    marginRight: SH(20),
    borderRadius: SH(7),
    marginBottom: SH(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexexamboxview: {
    flexDirection: 'row',
    width: '47.5%',
    marginTop: SF(12),

  },
  flexDirectiwhilist: {
    textAlign: 'center'
  },
  boxintitle: {
    color: Colors.black_text_color,
    textAlign: 'center',
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    paddingBottom: SH(5),
    paddingTop: SH(7),
  },
  iconstylebox: {
    textAlign: 'center',
    paddingBottom: SH(5),
    color: 'hsl(214.3, 83.2%, 51%)',
  },
  bankinuranceundertext: {
    textAlign: 'center',
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
  },
  marginbottomspace: {
    marginBottom: SH(0),
    paddingBottom: SH(50),
  },
  setexamimage: {
    height: SW(50),
    width: SW(50),
    borderRadius: SH(100),
  },
  examimagview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navbarheaderminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SH(10),
    paddingHorizontal: SH(10),
    paddingTop: Platform.OS === 'ios' ? SH(18) : SH(0),
  },
  hometextheadercolor: {
    color: 'hsl(214.3, 83.2%, 51%)',
    fontSize: SF(23),
    fontWeight: '700',
    paddingTop: SH(5),
  },
  setalliconsamestyle: {
    color: Colors.theme_backgound,
    fontSize: SF(30),
  }
});
