import { SW, SH, SF, Fonts } from '../../Utiles';
import { StyleSheet, Dimensions } from 'react-native';

export default SelectExamScreenStyle = (Colors) => StyleSheet.create({

  minstyleviewphotograpgy: {
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
    width: '92%',
    marginHorizontal: '5%',
    marginTop: SH(0),
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: SH(10)
  },
  examtitle: {
    color: Colors.black_text_color,
    fontSize: SF(18),
    fontFamily: Fonts.DMSans_Medium,
    marginBottom: 25,
  },
  inputUnderLine: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    borderRadius: SH(220),
    shadowColor: Colors.black_text_color,
    paddingHorizontal: SH(15),
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 25.00,
    elevation: 5,
  },
  inputviewset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchbgcolorset: {
    marginTop: SH(20),
  },
  flexexamboxview: {
    flexDirection: 'row',
    width: '100%',
  },
  boxintitle: {
    color: Colors.black_text_color,
    textAlign: 'center',
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Bold,
    paddingBottom: SH(5),
    paddingTop: SH(3),
  },
  iconstylebox: {
    textAlign: 'center',
    paddingBottom: SH(5),
    color: Colors.white_text_color,
  },
  bankinuranceundertext: {
    textAlign: 'center',
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
  },
  marginbottomspace: {
    marginBottom: SH(25),
  },
  Buttonstyles: {
    paddingHorizontal: SH(20),
    bottom: SH(10)
  },
  whiteboxwhishlist: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SH(5),
    shadowColor: Colors.black_text_color,
    marginBottom: SH(10),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  flexDirectiwhilist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: SH(15),
    paddingVertical: SH(10),
    alignItems: 'center',
  },
  selecticvonview: {
    backgroundColor: Colors.theme_backgound,
    width: SW(60),
    height: SW(60),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SH(100),
    marginRight: SH(10),
  },
  textviewsetwhishlist: {
    width: '100%',
  },
  designfonttext: {
    fontSize: SF(16),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
    width: '100%'
  },
  dolardigittext: {
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    width: '100%',
    marginTop: '1%',
    color: Colors.black_text_color,
  },
  onlydigittext: {
    fontSize: SF(16),
    fontWeight: '700',
    color: Colors.gray_text_color,
    marginTop: '3%',
    marginRight: '3%'
  },
  stariconstyle: {
    color: Colors.black_text_color,
    flexDirection: 'row',
    marginTop: '2%',
  },
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  textandiconflexview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '74%'
  },
  iconview: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '20%',
  },
  textviewwidthset: {
    width: '80%',
  },
  accountbutton: {
    width: '100%',
    marginTop: SH(10),
  },
  ButtonSelectExamScreenStyle: {
    paddingHorizontal:SH(20),
  }
});
