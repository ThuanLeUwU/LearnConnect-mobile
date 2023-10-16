import { SF, SH, SW, Fonts, Colors } from '../../Utiles';
import { StyleSheet, Platform } from 'react-native';

export default InstructorsDetaileStyle = (Colors) => StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    width: '100%',
    paddingHorizontal: SH(10),
    paddingBottom: SH(20),
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bgcolorwhiteset: {
    backgroundColor: Colors.white_text_color,
    color: Colors.black_text_color,
    height: SW(70),
    width: SW(70),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SH(200),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  imagsetstyle: {
    width: SW(90),
    height: SW(90),
    borderRadius: SH(100),
  },
  justicenterview: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  minflexviewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SH(30),
    marginVertical: SH(20)
  },
  setimagestyle: {
    width: SW(140),
    height: SW(120),
    marginRight: SH(15),
    borderRadius: SH(7),
  },
  margintopsetimage: {
    marginTop: SH(40),
  },
  bgwgitestart: {
    backgroundColor: Colors.white_text_color,
    width: SW(65),
    height: SW(30),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SH(17),
    justifyContent: 'center',
    position: 'absolute',
    top: SH(10),
    left: SH(10),
  },
  whiteboxwhishlist: {
    backgroundColor: Colors.white_text_color,
    borderRadius: SH(7),
    marginTop: SH(6),
    paddingVertical: SH(10),
    shadowColor: Colors.black_text_color,
    marginBottom: SH(7),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 5 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  flexDirectiwhilist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: SH(10),
    paddingTop: SH(3),
    paddingBottom: SH(3),
    paddingRight: SH(20),
  },
  textviewsetwhishlist: {
    width: '65%',
    paddingRight: SH(20),
  },
  designfonttext: {
    fontSize: SF(19),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
    fontWeight: '700',
    width: '100%'
  },
  paregraphtext: {
    fontSize: SF(16),
    fontFamily: Fonts.DMSans_Medium,
    width: '100%',
    marginTop: '3%',
    color: Colors.gray_text_color,
  },
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  ratingviewstyle: {
    flexDirection: 'row',
    width: '100%'
  },
  flexrowsetusericon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SH(10),
  },
  usertextstyle: {
    fontSize: SF(17),
    fontFamily: Fonts.DMSans_Medium,
    fontWeight: '600',
    width: '100%',
    marginLeft: SH(10),
  },
  twobuttoncenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: SH(10)
  },
  wisthsetbutton: {
    width: '48%',
  },
  flexrowsettext: {
    flexDirection: 'row',
    height: SH(50),
    alignItems: 'center',
    width: '40%',
    marginLeft: SH(35),
    justifyContent: 'center'
  },
  dolardtextsetprice: {
    color: Colors.gray_text_color,
    fontSize: SF(19),
    marginRight: SH(10),
    textDecorationLine: 'line-through',
  },
  simplatextstyle: {
    fontSize: SF(18),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.theme_backgound,
    fontWeight: '700',
    width: '90%'
  },
  texctstyles: {
    color: Colors.theme_backgound,
    fontSize: SF(19),
    textAlign: 'center',
    marginTop: SH(10),
    fontWeight: '700'
  },
  corsestextstyle: {
    fontSize: SF(17),
    textAlign: 'center',
    color: Colors.theme_backgound,
    paddingTop: 10,
  },
  flexrowtextandbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
