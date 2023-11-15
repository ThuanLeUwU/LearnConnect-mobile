import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../Utiles';

export default Checkoutscreenstyle = (Colors) => StyleSheet.create({
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
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  totaltextset: {
    color: Colors.gray_text_color,
    fontSize: SF(18),
    marginRight: SH(5),
    fontFamily: Fonts.DMSans_Medium
  },
  dolardtextstyle: {
    color: Colors.black_text_color,
    fontSize: SF(25),
    fontFamily: Fonts.DMSans_Medium
  },
  flerxrowsettitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  promotiontextset: {
    color: Colors.black_text_color,
    fontSize: SF(20),
    paddingTop: SH(20),
    fontWeight: '600',
    fontFamily: Fonts.DMSans_Medium,
  },
  keeptextflexset: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  minviewflexset: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: SH(20),
    paddingLeft: SH(20),
  },
  keeplearningtextsety: {
    color: Colors.gray_text_color,
    fontSize: SF(20),
    fontWeight: '700',
    marginHorizontal: SH(20),
    fontFamily: Fonts.DMSans_Medium,
  },
  textinputstyle: {
    borderColor: Colors.black_text_color,
    borderTopWidth: SH(1),
    borderLeftWidth: SH(1),
    borderBottomWidth: SH(1),
    padding:SH(6),
    fontFamily:Fonts.DMSans_Medium,
    fontSize: SF(15),
    paddingLeft: SH(20),
  },
  flexbuttonset: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: SH(20),
  },
  setbuttonwidth: {
    width: '40%'
  },
  setbuttonstyle: {
    borderTopLeftRadius: SH(0),
    borderBottomLeftRadius: SH(0),
  },
  settextinputwidth: {
    width: '60%'
  },
  imagesetios: {
    marginRight: SH(13),
    width: SW(100),
    height: SW(100),
    borderRadius: SH(7),
  },
  flexDirectiwhilist: {
    flexDirection: 'row',
    paddingTop: SH(20),
  },
  textviewsetwhishlist: {
    width: '70%',
  },
  textstylebeginners: {
    color: Colors.black_text_color,
    fontSize: SF(22),
    paddingBottom: SH(5),
    fontFamily: Fonts.DMSans_Medium,
    width: '90%'
  },
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    top: SH(10),
  },
  boxdolardtextstyleset: {
    color: Colors.black_text_color,
    fontSize: SF(18),
    marginRight: SH(15),
  },
  setreviewstext: {
    color: Colors.gray_text_color,
    fontSize: SF(19),
    fontFamily: Fonts.DMSans_Medium
  },
  setbuttontwowidth: {
    width: '40%',
    paddingTop: SH(10),
  },
  setstartanddolardtext: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: SH(3)
  },
  setflextextrow: {
    flexDirection: 'row',
    paddingTop: SH(20),
    alignItems: 'center'
  },
  fourpointtext: {
    marginRight: SH(5),
    color: Colors.start_rating_color,
    fontSize: SF(18),
    fontWeight: '700'
  },
  flexrowiconset: {
    flexDirection: 'row',
    marginRight: SH(5),
  },
  stariconstyle: {
    color: 'hsl(27.7, 73.8%, 62.5%)',
    flexDirection: 'row',
    marginTop: '2%',
  },
  ratingstextstyle: {
    color: Colors.gray_text_color,
    fontSize: SF(15),
  },
  simpletxtset: {
    color: Colors.gray_text_color,
    fontSize: SF(17),
    paddingTop: SH(10),
  },
  flexbuttonsetstyle: {
    flexDirection: 'row',
    paddingVertical: SH(20),
  },
  whiteboxwhishlist: {
    borderBottomWidth: SH(1),
    padding: SH(5),
    borderBottomColor: Colors.light_gray_text_color
  },
  whitecolorsetbgcolor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: SH(0),
    width: '100%',
    backgroundColor: Colors.white_text_color,
    paddingVertical: SH(10),
    paddingHorizontal: SH(20),
  },
  Textdigit: {
    color: Colors.theme_backgound,
    fontSize: SF(18),
    marginRight: SH(15),
    fontWeight: '700'
  },
  RemoveTextStyle: {
    color: Colors.theme_backgound,
    fontSize: SF(16),
    marginRight: SH(15),
    fontWeight: '700',
    marginRight: SH(30),
  },
  movetowishilist: {
    color: Colors.theme_backgound,
    fontSize: SF(16),
    marginRight: SH(15),
    fontWeight: '700'
  }
});