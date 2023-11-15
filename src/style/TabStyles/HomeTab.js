import { SF, SW, SH, wp, hp, widthPercent, Fonts } from '../../Utiles';
import { StyleSheet, Dimensions } from 'react-native';

export default HomeStyles = (Colors) => StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexGrow: 1,
  },
  titleStyle: {
    color: Colors.white_text_color,
    fontWeight: "bold",
    fontSize: SF(19)
  },
  flexDirectionrowskipnext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  homeheadertext: {
    color: Colors.white_text_color,
    fontWeight: '700',
    fontSize: SF(25),
  },
  popularcourcetext: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    paddingLeft: SH(15),
    fontSize: SF(22),
    paddingBottom: SH(12),
  },
  popularcourcetexttwo: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    paddingLeft: SH(15),
    fontSize: SF(22),
  },
  popularview: {
    marginTop: SH(-50),
    marginBottom: 25,
  },
  newcoursestext: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    paddingLeft: SH(13),
    fontSize: SF(21),
    marginTop: SH(20)
  },
  instructertextsetview: {
    marginTop: SH(-15),
  },
  instructertextset: {
    color: Colors.black_text_color,
    fontWeight: '700',
    paddingLeft: SH(13),
    fontSize: SF(21),
  },
  textContainer: {
    textAlign: 'center',
    fontSize: SF(25),
    fontFamily: Fonts.Poppins_Medium,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: SH(15),
    paddingBottom: SH(60),
    color: Colors.white_text_color,
  },
  textContainertwo: {
    textAlign: 'center',
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: SH(15),
    paddingTop: SH(50),
    color: Colors.white_text_color,
  },
  roundimagtitletextset: {
    textAlign: 'center',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Bold,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: SH(15),
    color: Colors.white_text_color,
  },
  rounftextview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rounftextviewsmall: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SH(15)
  },
  ImageSmallView: {
    width: SW(130),
    height: SW(60),
    borderRadius: SH(50)
  },
  subtitleEven: {
    color: Colors.black_text_color
  },
  subtitle: {
    marginTop: SH(8),
    color: Colors.gray_text_color,
    fontSize: SF(13),
    fontStyle: 'italic'
  },
  whiteshadowimgbottom: {
    backgroundColor: Colors.white_text_color,
    width: SW(227),
    marginRight: SH(20),
    borderRadius: SH(7),
    flex: 1,
    paddingBottom: SH(35)
  },
  whitebodyimagetextstyle: {
    fontSize: SF(15),
    paddingRight: SH(15),
    paddingTop: SH(12),
    borderTopWidth: SH(1),
    marginRight: SH(15),
    borderStyle: 'dashed',
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
  },
  whitebodyimagetextstyles: {
    fontSize: SF(14),
    paddingRight: SH(15),
    paddingTop: SH(10),
    marginRight: SH(15),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
  },
  whitebodyimagetextstyletwo: {
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Bold,
    color: Colors.black_text_color,
  },
  whitebodyimagetextstyletwo2: {
    fontSize: SF(17),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
    paddingTop: SH(6),
    paddingBottom: SH(7),
    height: SH(65),
    paddingRight: SH(15),
  },
  whitebodyimagetextstylethree: {
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    position: 'relative',
    left: SH(5),
  },
  blacktitleunderlineset: {
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Bold,
    color: Colors.black_text_color,
    paddingTop: SH(5),
    borderBottomWidth: SH(0.3),
    borderBottomColor: Colors.black_text_color,
    borderStyle: 'dashed',
    marginRight: SH(15),
    marginBottom: SH(10),
    height: SH(60),
  },
  whiteshadowimgbottomtwo: {
    backgroundColor: Colors.white_text_color,
    width: SW(185),
    marginRight: SH(20),
    borderRadius: SH(7),
    flex: 1,
    paddingBottom: SH(35)
  },
  usernametext: {
    color: Colors.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.DMSans_Medium,
    textAlign: 'center',
    paddingTop: SH(15),
  },
  flexiconviewsetIntructer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: SH(10),
  },
  usernamejobtext: {
    textAlign: 'center',
    paddingTop: SH(5),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
  },
  usernamerenkintext: {
    color: Colors.black_text_color,
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Bold,
    textAlign: 'center',
  },
  usernamerenkintexttwo: {
    color: Colors.black_text_color,
    fontSize: SF(15),
    fontFamily: Fonts.DMSans_Medium,
    textAlign: 'center',
    marginLeft: SH(5),
  },
  rendervontantstyleset: {
    position: 'absolute',
    bottom: SH(0),
    height: '100%',
    width: '100%',
  },
  bodytwo: {
    paddingHorizontal: SH(50),
  },
  flexrowsettext: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: SH(5),
    paddingBottom: SH(5),
  },
  alltextleftset: {
    paddingLeft: SH(15),
  },
  stariconimagestyle: {
    width: SW(50),
    height: SW(50),
  },
  flexrowstyleset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: SH(15),
  },
  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
  },
  minviewsigninscreen: {
    width: '100%',
    marginTop: '3%',
  },
  leftrightpadding: {
    paddingHorizontal: SH(15),

  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  notificationivonandimhflexview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: SH(15),
  },
  imagstylesetprofile: {
    height: SH(27),
    width: SH(27),
    borderRadius: SH(1000),
    marginHorizontal: SH(15)
  },
  navbarheaderminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: SH(5),
    paddingRight: SH(20),
  },
  flexsettileimgview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: SH(15),
    paddingTop: SH(10),
    width: '100%'
  },
  colorblseticon: {
    color: Colors.home_color_set,
  },
  imagsetstyle: {
    width: '100%',
    height: SH(200),
    borderRadius: SH(7),
  },
  imagsetstylesetthreeslider: {
    width: SW(228),
    height: SH(150),
    borderBottomLeftRadius: SH(0),
    borderBottomRightRadius: SH(0),
    borderRadius: SH(7)
  },
  instructorimage: {
    width: SW(120),
    height: SW(120),
    borderRadius: SH(300)
  },
  iosstyleset: {
    marginTop: SH(25),
    backgroundColor: Colors.white_text_color,
  },

  flexiconviewset: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dravermarginright: {
    marginLeft: SH(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  hometoggleflexsetview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginrighthome: {
    marginRight: SH(10),
    position: 'relative',
    top: SH(1.5),
  },
  mycoursetextstyle: {
    fontSize: SF(23),
    fontWeight: '700',
  },
  marginleftandrightsettext: {
    marginHorizontal: SH(10)
  },

  checkoutimage: {
    flexDirection: 'row',
  },
  margincolorroght: {
    marginRight: SH(6),
  },
  flexset: {
    flexDirection: 'row',
    marginRight: SH(15),
  },
  Imageviewstyle: {
    width: SW(150),
    borderRadius: SH(9),
    height: SW(150)
  },
  lastmarginview: {
    marginRight: SH(23)
  }
});
