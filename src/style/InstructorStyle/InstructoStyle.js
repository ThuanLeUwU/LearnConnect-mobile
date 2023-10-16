import { StyleSheet } from 'react-native';
import { Colors, SF, SH, SW, Fonts } from '../../Utiles';

export default InstructoStyle = (Colors) => StyleSheet.create({
  
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flex: 1
  },
  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',
  },
  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '0%',
  },
  whiteboxwhishlist: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SH(7),
    paddingVertical: SH(10),
    shadowColor: Colors.black_text_color,
    marginBottom: SH(12),
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
    paddingRight: SH(20),
    alignItems: 'center',
  },
  textviewsetwhishlist: {
    width: '65%',
    paddingRight: SH(20),
  },
  designfonttext: {
    fontSize: SF(18),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
    width: '100%'
  },
  dolardigittext: {
    fontSize: SF(17),
    fontWeight: '700',
    color: Colors.black_text_color,
    width: '100%',
    marginTop: '3%',
  },
  paregraphtext: {
    fontSize: SF(16),
    fontFamily: Fonts.DMSans_Medium,
    width: '100%',
    marginTop: '3%',
    color: Colors.gray_text_color,
  },

  onlydigittexttwo3: {
    fontSize: SF(18),
    fontWeight: '700',
    color: Colors.black_text_color,
    marginTop: '3%',
    marginRight: '3%'
  },
  stariconstyle: {
    color: 'black',
    flexDirection: 'row',
    marginTop: '2%',
  },
  stariconview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  imagcenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  imagestylesdonhurt: {
    height: SW(100),
    width: SW(100),
    borderRadius: SH(100)
  },
  allisonperry: {
    color: Colors.black_text_color,
    fontFamily: Fonts.DMSans_Medium,
    textAlign: 'center',
    fontSize: SF(19),
    marginTop: SH(10),
  },
  userdetailesview: {
    width: '100%',
  },
  bornandbirtdateview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    width: '100%',
  },
  bornandbirtdateviewtwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '7%',
    width: '100%',
    borderBottomColor: Colors.light_gray_text_color,
    borderBottomWidth: SH(1),
    paddingBottom: SH(15),
  },
  borntext: {
    fontSize: SF(19),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
    textAlign: 'left'
  },
  birthdatetext: {
    fontSize: SF(17),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
    paddingRight: 35,
  },
  widthsetalldetailes: {
    width: '40%',
  },
  bordersetbottom: {
    borderBottomColor: Colors.black_text_color,
    width: '100%',
  },
  widthtwosetsevanty: {
    width: '70%',
  },
  paregraphsettextview: {
    width: '100%',
    marginTop: '10%',
  },
  paregraphtextset: {
    color: 'black',
    fontFamily: 'DMSans-Medium',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: SF(15),
    width: '100%',
  },
  coursestitle: {
    fontSize: SF(20),
    fontFamily: Fonts.DMSans_Medium,
    color: Colors.black_text_color,
    width: '100%',
    marginTop: '5%',
    marginBottom: '5%'
  },
  Videtext: {
    fontSize: SF(16),
    fontWeight: '700',
    color: Colors.theme_backgound,
    marginTop: '3%',
    marginRight: '3%'
  },
  coursesimagestyle: {
    width: SW(110),
    height: SW(110),
    marginRight: SH(10),
    borderRadius: SH(7),
  },
});