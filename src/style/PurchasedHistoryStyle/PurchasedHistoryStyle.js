
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SH, SW, SF, Fonts } from '../../Utiles';

export default PurchasedHistoryStyle = (Colors) => StyleSheet.create({

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
    marginTop: SH(20),
    marginBottom: SH(20),
  },
  setimagestyle: {
    width: SW(100),
    height: SW(100),
    marginRight: SH(15),
    borderRadius: SH(7),
  },
  margintopsetimage: {
    marginTop: SH(40),
  },
  bgwgitestart: {
    backgroundColor: Colors.white_text_color,
    width: SW(65),
    height: SH(30),
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
    // width: '100%',
    borderRadius: SH(7),
    paddingTop: SH(10),
    marginTop: SH(6),
    paddingBottom: SH(10),
    shadowColor: Colors.black_text_color,
    marginBottom: SH(5),
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
    alignItems: 'center',
    width: '100%',
    paddingLeft: SH(10),
    paddingVertical: SH(3),
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
    fontSize: SF(14),
    fontFamily: Fonts.DMSans_Medium,
    width: '100%',
    marginTop: '3%',
    color: Colors.gray_text_color
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
    justifyContent: 'center'
  },
  dolardtextsetprice: {
    color: 'gray',
    fontSize: SF(17),
    marginRight: SH(10),
    textDecorationLine: 'line-through',
  },
  settextusert: {
    fontSize: SF(15),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.gray_text_color,
    fontWeight: '700',
    marginLeft: SH(10),
  },
  minviewsetpaymenttype: {
    flexDirection: 'row', justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: SH(15),
    borderTopColor: Colors.light_gray_text_color,
    borderStyle: 'dashed',
    borderTopWidth: SH(1),
    paddingTop: SH(10),
    marginTop: SH(10),
  },
  flexrowsetrpayment: {
    flexDirection: 'row'
  },
  serftbuttonwidth: {
    width: '30%',
  },
  buttonheight: {
    height: SH(38),
    padding:SH(0),
  },
  buttontextset: {
    position: 'relative',
    top: SH(-2),
  },
  historytextstyle: {
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_backgound,
    fontWeight: '700',
    width: '100%'
  },
  timetexststyle: {
    fontSize: SF(16),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.theme_backgound,
    fontWeight: '700',
  },
  totaltextprice: {
    fontSize: SF(15),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.theme_backgound,
    fontWeight: '700',
  },
  paymenttypetext: {
    fontSize: SF(15),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.theme_backgound,
    fontWeight: '700',
  }
});
